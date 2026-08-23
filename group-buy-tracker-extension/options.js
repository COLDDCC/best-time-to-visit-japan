const FIELD_IDS = [
  "appId",
  "appSecret",
  "appToken",
  "tableId",
  "fieldName",
  "fieldImage",
  "fieldLink",
  "fieldNormalPrice",
  "fieldWeekendPrice",
  "holidayDates",
];

const DEFAULTS = {
  fieldName: "商品名称",
  fieldImage: "商品图片链接",
  fieldLink: "商品链接",
  fieldNormalPrice: "平时价",
  fieldWeekendPrice: "周末价",
};

const statusEl = document.getElementById("status");

async function load() {
  const stored = await chrome.storage.sync.get(FIELD_IDS);
  for (const id of FIELD_IDS) {
    const value = stored[id] ?? DEFAULTS[id] ?? "";
    document.getElementById(id).value = value;
  }
}
load();

document.getElementById("save").addEventListener("click", async () => {
  const values = {};
  for (const id of FIELD_IDS) values[id] = document.getElementById(id).value.trim();
  await chrome.storage.sync.set(values);
  statusEl.textContent = "已保存 ✅";
  statusEl.className = "hint success";
});

document.getElementById("test").addEventListener("click", async () => {
  statusEl.textContent = "测试中…";
  statusEl.className = "hint";
  const values = {};
  for (const id of FIELD_IDS) values[id] = document.getElementById(id).value.trim();
  await chrome.storage.sync.set(values);

  try {
    const response = await chrome.runtime.sendMessage({ type: "TEST_CONNECTION" });
    if (response && response.ok) {
      statusEl.textContent = "连接成功 ✅ 已能访问该多维表格";
      statusEl.className = "hint success";
    } else {
      throw new Error((response && response.error) || "未知错误");
    }
  } catch (err) {
    statusEl.textContent = `连接失败：${err.message}`;
    statusEl.className = "hint error";
  }
});
