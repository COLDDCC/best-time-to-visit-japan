export type PackingRoute = 'city' | 'north' | 'south';
export type PackingOptions = { days: 7 | 14; laundry: boolean; cold: boolean; route: PackingRoute; month: 'november' | 'december'; rainDaysPerWeek?: number; seaOfJapan?: boolean; destination?: string };
export type PackingItem = { id: string; label: string; qty: number; why: string };
export function buildPackingPlan(options: PackingOptions) {
  const { days, laundry, cold, route, month } = options;
  const cycle = laundry ? Math.ceil(days / 2) : days;
  const winter = route === 'north';
  const wet = options.rainDaysPerWeek ?? 0;
  const waterproof = wet > 3 || options.seaOfJapan === true;
  const moderate = wet > 2;
  const rainWhy = options.rainDaysPerWeek === undefined ? 'Check your destination’s wet-day normal and local forecast.' : `Historical estimate: ${(wet * days / 7).toFixed(1)} wet days over ${days} days, not a forecast. Gear uses the weekly rate; a longer trip does not make the climate wetter.`;
  const items: PackingItem[] = [
    { id: 'tops', label: winter ? 'Tops / warm base layers' : 'Everyday tops / base layers', qty: Math.ceil(cycle / 2) + 1, why: 'Assumes two wears per top; wash or add extras if needed.' },
    { id: 'trousers', label: 'Long trousers', qty: cycle > 7 ? 3 : 2, why: 'Mix-and-match pairs; includes the pair you wear.' },
    { id: 'underwear', label: 'Underwear', qty: cycle + 1, why: 'One per day between washes, plus one spare.' },
    { id: 'socks', label: winter ? 'Warm socks (pairs)' : 'Socks (pairs)', qty: cycle + 1, why: 'One fresh pair per day between washes, plus a spare.' },
    { id: 'midlayer', label: route === 'south' ? 'Light removable layer' : 'Sweater / fleece', qty: winter || cold ? 2 : 1, why: 'Repeat outer layers; choose warmth for your forecast.' },
    { id: 'outerwear', label: winter ? 'Insulated winter coat' : route === 'south' ? 'Light jacket' : month === 'december' || cold ? 'Warm outer coat' : 'Removable jacket', qty: 1, why: 'Wear the bulky layer while travelling.' },
    { id: 'footwear', label: winter ? 'Waterproof walking shoes; winter boots if snow / ice (pair)' : waterproof ? 'Waterproof walking shoes (pair)' : moderate ? 'Water-resistant walking shoes (pair)' : 'Comfortable walking shoes with grip (pair)', qty: 1, why: winter ? 'Choose insulated, waterproof winter footwear if conditions require it.' : 'Start with broken-in shoes; adapt for rain.' },
    { id: 'sleepwear', label: 'Sleepwear set', qty: 1, why: 'Optional if your accommodation confirms it provides suitable sleepwear.' },
    { id: 'raincover', label: waterproof ? 'Waterproof jacket (can replace umbrella)' : moderate ? 'Compact umbrella + light waterproof shell' : 'Compact umbrella', qty: 1, why: rainWhy + (waterproof ? ' Your outer coat may already provide waterproof protection.' : '') },
  ];
  if (winter || cold && route !== 'south' || route === 'city' && month === 'december') {
    items.push({ id:'scarf',label:'Scarf',qty:1,why:'For outdoor evenings; adjust to your comfort.' });
  }
  if (winter || cold && route !== 'south') {
    items.push({ id:'hat',label:'Warm hat',qty:1,why:'For colder outdoor conditions.' }, {id:'gloves',label:'Gloves (pair)',qty:1,why:'Keep accessible for cold outdoor stops.'});
  }
  const decisions = [
    { item:'Down / insulated coat', decision:winter ? 'Bring for winter conditions' : route==='south' ? 'Usually skip' : month==='december'||cold ? 'Choose one warm coat' : 'Forecast-dependent', reason:winter?'Prioritize warmth for your actual route.':route==='south'?'Start with a light jacket; check island weather.':'A suitable wool-style or insulated coat can serve the same outer-layer role.' },
    { item:'Thermal underwear', decision:winter?'Useful starting option':cold&&route!=='south'?'Consider a removable set':'Optional', reason:'Choose for outdoor time and comfort; heated interiors may feel warm.' },
    { item:'Snow boots', decision:winter?'Check snow / ice first':'Skip unless adding a snowy route', reason:'A region name is not a live ground-conditions report. Match waterproofing, insulation and grip to your dates.' },
    { item:'Hat & gloves', decision:winter?'Include':cold&&route!=='south'?'Include for cold evenings':'Optional for the forecast', reason:'Long outdoor stops and wind can change what feels comfortable.' },
    { item:'Second bulky coat', decision:'Usually skip', reason:'Start with one versatile outer layer and removable inner layers.' },
  ];
  return { items, decisions, cycle, summary: `${days} days · ${laundry ? 'one wash halfway' : 'no laundry'} · ${options.destination ?? (route==='north'?'Hokkaido / colder routes':route==='south'?'Okinawa':'Tokyo / Osaka')} · ${month} · ${cold?'runs cold':'standard warmth'}` };
}
