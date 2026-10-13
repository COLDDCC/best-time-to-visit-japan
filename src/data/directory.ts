import directory from './destinations.json';
import additions from './directory-additions.json';

export const regions: Record<string, string> = {
  hokkaido: 'Hokkaido', tohoku: 'Tohoku', 'hokuriku-shinetsu': 'Hokuriku Shinetsu',
  kanto: 'Kanto', tokai: 'Tokai', kansai: 'Kansai', chugoku: 'Chugoku', shikoku: 'Shikoku', kyushu: 'Kyushu', okinawa: 'Okinawa',
};
const localNames: Record<string,string> = Object.fromEntries(`hokkaido|北海道
aomori|青森
akita|秋田
iwate|岩手
yamagata|山形
miyagi|宮城 宫城
fukushima|福島 福岛
niigata|新潟
toyama|富山
ishikawa|石川
fukui|福井
nagano|長野 长野
tokyo|東京 东京
kanagawa|神奈川
chiba|千葉 千叶
saitama|埼玉
ibaraki|茨城
tochigi|栃木 枥木
gunma|群馬 群马
yamanashi|山梨
shizuoka|静岡 静冈
gifu|岐阜
aichi|愛知 爱知
mie|三重
kyoto|京都
osaka|大阪
shiga|滋賀 滋贺
hyogo|兵庫 兵库
nara|奈良
wakayama|和歌山
tottori|鳥取 鸟取
shimane|島根 岛根
okayama|岡山 冈山
hiroshima|広島 廣島 广岛
yamaguchi|山口
tokushima|徳島 德岛
kagawa|香川
ehime|愛媛 爱媛
kochi|高知
fukuoka|福岡 福冈
saga|佐賀 佐贺
nagasaki|長崎 长崎
oita|大分
kumamoto|熊本
miyazaki|宮崎 宫崎
kagoshima|鹿児島 鹿兒島 鹿儿岛
okinawa|沖縄 沖繩 冲绳`.split('\n').map(s=>s.split('|')));

export type DirectorySpot = { name: string; source: string; aliases?: string; guide?: string };
export type DirectoryArea = { name: string; source: string; spots: DirectorySpot[]; aliases?: string };
export type DirectoryPrefecture = { slug: string; name: string; region: string; source: string; areas: DirectoryArea[]; aliases?: string };
export const prefectures: DirectoryPrefecture[] = directory.prefectures.map(p => ({ ...p, aliases: localNames[p.slug] }));

// Verified names mentioned in area articles but absent from the nearby cards.
for (const p of prefectures) for (const a of p.areas) {
  const slug=a.source.replace(/\/$/,'').split('/').pop()!;
  const names=(additions as Record<string,string[]>)[slug] ?? [];
  for(const name of names) if(!a.spots.some(s=>s.name.toLowerCase()===name.toLowerCase()))
    a.spots.push({name,source:a.source});
}

// Editorial additions and guide connections live outside the generated import.
// Only attach a guide when it describes this exact place, not merely its region.
const kumamoto = prefectures.find(p=>p.slug==='kumamoto')!;
const aso = kumamoto.areas.find(a=>a.source.includes('/aso-and-around'))!;
aso.aliases = '阿蘇 阿苏';
const asoAdditions: DirectorySpot[] = [
  { name: 'Kusasenri', aliases: '草千里 草千里ヶ浜 草千里之滨 Kusa-Senrigahama Kusasenrigahama', source: 'https://www.aso-denku.jp/en/kusasenri/' },
  { name: 'Mount Aso', aliases: '阿蘇山 阿苏山', source: aso.source, guide: '/spots/mount-aso' },
  { name: 'Nakadake Crater', aliases: '中岳火口 中岳火山口', source: 'https://www.city.aso.kumamoto.jp/tourism/spot/peripheral/' },
  { name: 'Daikanbo', aliases: '大観峰 大观峰', source: 'https://www.aso-denku.jp/zw/sights/' },
  { name: 'Aso Shrine', aliases: '阿蘇神社 阿苏神社', source: 'https://www.aso-denku.jp/zw/sights/' },
];
for (const spot of asoAdditions) {
  const i=aso.spots.findIndex(s=>s.name.toLowerCase()===spot.name.toLowerCase());
  if(i>=0) aso.spots[i]=spot; else aso.spots.push(spot);
}
const oita = prefectures.find(p=>p.slug==='oita')!;
let hita=oita.areas.find(a=>/hita/i.test(a.name));
if(!hita) { hita={ name:'Hita', aliases:'日田', source:oita.source, spots:[] }; oita.areas.push(hita); }
hita.aliases='日田';
hita.spots.push({ name:'Kotonean', aliases:'琴音庵', source:'https://www.google.com/maps/search/?api=1&query=琴音庵+日田市', guide:'/spots/kotonean' });
for(const p of prefectures) for(const a of p.areas) for(const s of a.spots) {
  if(/^(Mt\.?|Mount) Fuji$/i.test(s.name)) { s.guide='/spots/mount-fuji'; s.aliases='富士山'; }
}
// The mountain spans both prefectures. Keep the two geographical entries and
// connect both to the same existing guide.
for(const slug of ['yamanashi','shizuoka']) {
  const p=prefectures.find(p=>p.slug===slug)!;
  if(!p.areas.some(a=>a.spots.some(s=>s.guide==='/spots/mount-fuji'))) {
    const a=p.areas.find(a=>/fuji/i.test(a.name)) ?? p.areas[0];
    a.spots.push({name:'Mount Fuji',aliases:'富士山',source:'https://www.japan.travel/en/fuji-guide/',guide:'/spots/mount-fuji'});
  }
}
export const areaCount = prefectures.reduce((n,p)=>n+p.areas.length,0);
export const placeCount = prefectures.reduce((n,p)=>n+p.areas.reduce((n,a)=>n+a.spots.length,0),0);
export const updated = directory.updated;
