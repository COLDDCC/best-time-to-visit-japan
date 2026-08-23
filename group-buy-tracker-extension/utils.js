// Shared helpers used by both popup.js and background.js (loaded via <script> in the
// popup and via importScripts() in the service worker).

// Parses a comma-separated "YYYY-MM-DD,YYYY-MM-DD" list from the options page into a
// Set of date strings, so isWeekendOrHoliday() can treat manually-listed public
// holidays the same as Sat/Sun.
function parseHolidayList(raw) {
  if (!raw) return new Set();
  return new Set(
    raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean)
  );
}

function toDateKey(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

// Weekend/holiday pricing at 菌核屋 is inferred from *when* the item was scraped, not
// read directly off the page (the page only ever shows one "current" price). Sat/Sun
// count automatically; extra public holidays can be added in the options page.
function isWeekendOrHoliday(date, holidaySet) {
  const day = date.getDay(); // 0 = Sunday, 6 = Saturday
  if (day === 0 || day === 6) return true;
  return holidaySet.has(toDateKey(date));
}

// Extracts a plain number from strings like "¥199.00" / "券后价 99" / "99.9元".
function extractPriceNumber(text) {
  if (text == null) return null;
  const match = String(text).match(/(\d+(?:\.\d{1,2})?)/);
  if (!match) return null;
  const n = parseFloat(match[1]);
  return Number.isFinite(n) ? n : null;
}

if (typeof module !== "undefined") {
  module.exports = { parseHolidayList, toDateKey, isWeekendOrHoliday, extractPriceNumber };
}
