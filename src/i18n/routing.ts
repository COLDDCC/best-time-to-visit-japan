import { japanesePath } from './ja';
export const locales = [
 {code:'en',label:'English',prefix:''},
 {code:'ja',label:'日本語',prefix:'/ja'},
 {code:'zh-CN',label:'简体中文',prefix:'/zh-cn'},
] as const;
export function routeLocale(path:string){
 const locale=path.match(/^\/(ja|zh-cn)(?:\/|$)/)?.[1] || '';
 const englishPath=(locale ? path.slice(locale.length+1) : path).replace(/\/$/,'') || '/';
 return {lang:locale==='zh-cn'?'zh-CN':locale==='ja'?'ja':'en',prefix:locale?'/'+locale:'',englishPath};
}
export function localeLinks(path:string){
 const {englishPath}=routeLocale(path);
 if(!japanesePath(englishPath))return [];
 return locales.map(l=>({...l,href:l.prefix+(englishPath==='/'?'':englishPath)||'/'}));
}
