import assert from 'node:assert/strict';
import { buildPackingPlan } from '../src/data/packing-plan.ts';
const base = { days: 7, laundry: true, cold: false, route: 'city', month: 'december' };
const item = (options, id) => buildPackingPlan({ ...base, ...options }).items.find(row => row.id === id);
assert.equal(item({}, 'underwear').qty, 5, '7 days with a halfway wash: 4-day cycle + spare');
assert.equal(item({ laundry: false }, 'underwear').qty, 8);
assert.equal(item({ days: 14, laundry: true }, 'socks').qty, 8);
assert.equal(item({ days: 14, laundry: false }, 'socks').qty, 15);
assert.equal(item({ days: 14, laundry: false }, 'tops').qty, 8);
assert.equal(item({ days: 14, laundry: true }, 'tops').qty, 5);
assert.equal(item({ month: 'november' }, 'outerwear').label, 'Removable jacket');
assert.equal(item({ month: 'november', cold: true }, 'outerwear').label, 'Warm outer coat');
assert.ok(item({ route: 'north' }, 'gloves'));
assert.equal(item({ route: 'south', cold: true }, 'hat'), undefined, 'Running cold should not automatically add a snow-country kit to Okinawa');
assert.match(buildPackingPlan(base).decisions.find(row => row.item === 'Snow boots').decision, /Skip/);
assert.match(buildPackingPlan({ ...base, route: 'north' }).decisions.find(row => row.item === 'Snow boots').decision, /Check/, 'Hokkaido must not imply live snow or ice');
for (const days of [7, 14]) for (const laundry of [true, false]) for (const cold of [true, false]) for (const route of ['city', 'north', 'south']) for (const month of ['november', 'december']) {
  const plan = buildPackingPlan({ days, laundry, cold, route, month });
  assert.equal(plan.items.filter(row => row.id === 'outerwear').length, 1);
  assert.equal(new Set(plan.items.map(row => row.id)).size, plan.items.length);
  assert.ok(plan.items.every(row => Number.isInteger(row.qty) && row.qty > 0));
}
console.log('Packing checks passed: quantities, laundry, warmth, route conditions and 48 trip combinations.');
