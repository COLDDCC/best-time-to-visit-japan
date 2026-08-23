const FEISHU_HOST = "https://open.feishu.cn";

const DEFAULT_FIELDS = {
  fieldName: "商品名称",
  fieldImage: "商品图片链接",
  fieldLink: "商品链接",
  fieldNormalPrice: "平时价",
  fieldWeekendPrice: "周末价",
};

async function getSettings() {
  const stored = await chrome.storage.sync.get([
    "appId",
    "appSecret",
    "appToken",
    "tableId",
    "fieldName",
    "fieldImage",
    "fieldLink",
    "fieldNormalPrice",
    "fieldWeekendPrice",
  ]);
  return { ...DEFAULT_FIELDS, ...stored };
}

// tenant_access_token is valid for ~2h; cache it in memory (service worker can be
// evicted between uses, that's fine — a cache miss just re-fetches).
let tokenCache = { token: null, expiresAt: 0 };

async function getTenantAccessToken(appId, appSecret) {
  if (tokenCache.token && Date.now() < tokenCache.expiresAt) return tokenCache.token;

  const resp = await fetch(`${FEISHU_HOST}/open-apis/auth/v3/tenant_access_token/internal`, {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify({ app_id: appId, app_secret: appSecret }),
  });
  const data = await resp.json();
  if (data.code !== 0) {
    throw new Error(`获取飞书 token 失败：${data.msg || data.code}`);
  }
  tokenCache = { token: data.tenant_access_token, expiresAt: Date.now() + (data.expire - 60) * 1000 };
  return tokenCache.token;
}

function tableUrl(appToken, tableId, suffix = "") {
  return `${FEISHU_HOST}/open-apis/bitable/v1/apps/${appToken}/tables/${tableId}/records${suffix}`;
}

async function findRecordByLink(token, appToken, tableId, linkFieldName, link) {
  const resp = await fetch(tableUrl(appToken, tableId, "/search"), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      filter: {
        conjunction: "and",
        conditions: [{ field_name: linkFieldName, operator: "is", value: [link] }],
      },
      page_size: 1,
    }),
  });
  const data = await resp.json();
  if (data.code !== 0) throw new Error(`查询记录失败：${data.msg || data.code}`);
  const items = (data.data && data.data.items) || [];
  return items[0] || null;
}

async function createRecord(token, appToken, tableId, fields) {
  const resp = await fetch(tableUrl(appToken, tableId), {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ fields }),
  });
  const data = await resp.json();
  if (data.code !== 0) throw new Error(`新增记录失败：${data.msg || data.code}`);
  return data.data.record;
}

async function updateRecord(token, appToken, tableId, recordId, fields) {
  const resp = await fetch(tableUrl(appToken, tableId, `/${recordId}`), {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({ fields }),
  });
  const data = await resp.json();
  if (data.code !== 0) throw new Error(`更新记录失败：${data.msg || data.code}`);
  return data.data.record;
}

async function saveRecord(payload) {
  const settings = await getSettings();
  const { appId, appSecret, appToken, tableId } = settings;
  if (!appId || !appSecret || !appToken || !tableId) {
    throw new Error("请先在插件设置里填好飞书 App ID / App Secret / 表格信息");
  }

  const token = await getTenantAccessToken(appId, appSecret);

  const existing = await findRecordByLink(token, appToken, tableId, settings.fieldLink, payload.link);

  // Only send the fields we actually have values for, so re-scraping the same item on
  // a different day fills in the missing price column instead of blanking the other one.
  const fields = {};
  if (payload.name) fields[settings.fieldName] = payload.name;
  if (payload.image) fields[settings.fieldImage] = payload.image;
  if (payload.link) fields[settings.fieldLink] = payload.link;
  if (payload.normalPrice != null) fields[settings.fieldNormalPrice] = payload.normalPrice;
  if (payload.weekendPrice != null) fields[settings.fieldWeekendPrice] = payload.weekendPrice;

  if (existing) {
    await updateRecord(token, appToken, tableId, existing.record_id, fields);
    return { updated: true };
  }
  await createRecord(token, appToken, tableId, fields);
  return { updated: false };
}

async function testConnection() {
  const settings = await getSettings();
  const { appId, appSecret, appToken, tableId } = settings;
  if (!appId || !appSecret || !appToken || !tableId) {
    throw new Error("请先填完 App ID / App Secret / app_token / table_id");
  }
  const token = await getTenantAccessToken(appId, appSecret);
  const resp = await fetch(tableUrl(appToken, tableId) + "?page_size=1", {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = await resp.json();
  if (data.code !== 0) throw new Error(`连接失败：${data.msg || data.code}`);
  return true;
}

chrome.runtime.onMessage.addListener((message, _sender, sendResponse) => {
  if (message.type === "SAVE_RECORD") {
    saveRecord(message.payload)
      .then((result) => sendResponse({ ok: true, ...result }))
      .catch((err) => sendResponse({ ok: false, error: err.message }));
    return true; // keep the message channel open for the async response
  }
  if (message.type === "TEST_CONNECTION") {
    testConnection()
      .then(() => sendResponse({ ok: true }))
      .catch((err) => sendResponse({ ok: false, error: err.message }));
    return true;
  }
});
