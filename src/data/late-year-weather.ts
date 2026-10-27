// JMA climatological normals, 1991–2020. Precipitation includes melted snow.
export const climateSource = "https://www.data.jma.go.jp/stats/en/normal/normal.html";
export const lateYearCities = [
  { name: "Tokyo", november: [16.7, 8.8, 96.3], december: [12.0, 3.8, 57.9] },
  { name: "Osaka", november: [17.8, 10.2, 72.5], december: [12.3, 5.3, 55.5] },
  { name: "Sapporo", november: [8.7, 1.6, 113.8], december: [2.0, -4.0, 114.5] },
  { name: "Fukuoka", november: [18.2, 10.6, 91.4], december: [12.6, 5.8, 67.5] },
  { name: "Niigata", november: [14.7, 6.9, 203.5], december: [8.7, 2.4, 225.9] },
  { name: "Naha (Okinawa)", november: [25.0, 20.4, 119.1], december: [21.5, 16.8, 110.0] },
];
export const lateYearGuides = {
  november: {
    answer: "November is cool in Tokyo and Osaka and relatively dry compared with September and October. Tokyo averages a daily high of 16.7°C and low of 8.8°C, with 96.3 mm of precipitation. It is not the main rainy season, but rain remains possible. Hokkaido is much colder, while Japan’s Sea of Japan coast can be considerably wetter.",
    timing: ["Early November: prepare for cool city mornings and warmer afternoons; northern and mountain destinations need warmer layers.", "Mid-November: allow for changing temperatures between cities and higher elevations. Check local foliage reports rather than assuming every destination peaks together.", "Late November: pack warmer evening layers, especially if your trip continues into December. Northern and mountain routes may have wintry conditions."],
    links: [["is-japan-rainy-in-november", "Is Japan rainy in November?"], ["what-to-wear-in-japan-in-november", "What to wear in November"], ["tokyo-in-november-weather", "Tokyo in November: rain & outfits"]],
    packing: "For Tokyo and Osaka, bring long sleeves, a removable warm layer, a jacket and a compact umbrella. Add a winter coat and suitable footwear for Hokkaido or mountain routes; Okinawa needs lighter clothing.",
  },
  december: {
    answer: "December is colder, with relatively low precipitation in Tokyo and Osaka. Tokyo averages a daily high of 12.0°C and low of 3.8°C (57.9 mm of precipitation), Osaka 12.3°C and 5.3°C, and Sapporo 2.0°C and −4.0°C. Snow is possible in northern and mountainous Japan, but a snowy trip to Tokyo or Osaka is not something to count on. Okinawa remains much milder.",
    timing: ["Early December: city sightseeing and mountain trips need different packing; do not assume reliable snow at every ski resort.", "Mid-December: check resort opening and snow reports before planning skiing. Plan outdoor visits around shorter daylight hours.", "Late December: combine winter-weather checks with checks of year-end opening hours and transport availability. Snow and ice can affect mountain journeys."],
    links: [["does-it-snow-in-japan-in-december", "Does it snow in December?"], ["what-to-wear-in-japan-in-december", "What to wear in December"], ["tokyo-in-december-weather", "Tokyo in December: temperatures & outfits"], ["christmas-new-year-japan", "Christmas & New Year planning"]],
    packing: "For Tokyo and Osaka, start with a warm coat, sweater, long trousers and a scarf. For snow country, add insulated waterproof footwear, gloves and a hat. Choose removable layers for heated trains and buildings.",
  },
};
