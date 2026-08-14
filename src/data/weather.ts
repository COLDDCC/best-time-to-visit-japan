export interface MonthData {
  month: string;
  label: string;
  tempLow: number;
  tempHigh: number;
  rainDays: number;
  crowdLevel: 1 | 2 | 3 | 4 | 5;
  bestFor: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  downsides: string[];
  bestRegions: string[];
  bestRegionSlugs: string[];
  spotlight: { title: string; text: string };
  whySpecial: string;
  events: string[];
  baseCamp: { title: string; text: string };
  dayTrips: string[];
  budgetNote: string;
  localTip: string;
  packing: string;
}

export const monthlyData: MonthData[] = [
  {
    month: "january",
    label: "January",
    tempLow: 1,
    tempHigh: 10,
    rainDays: 6,
    crowdLevel: 3,
    bestFor: "onsen soaks, snow-country scenery and winter illuminations in Hokkaido",
    image: "/images/month-january.webp",
    imageAlt: "Illuminated snow sculptures at a winter festival in Hokkaido in January",
    highlights: [
      "Winter illuminations across Tokyo, Osaka & Sapporo",
      "Snow monkeys soaking at Jigokudani, Nagano",
      "Quiet New Year shrine visits before the crowds return",
    ],
    downsides: [
      "Cold and dark across most of Japan",
      "Many shops close Jan 1-3 for New Year",
      "Heavy snow can close some mountain roads",
    ],
    bestRegions: ["Hokkaido", "Tokyo & Kanto", "Kyushu"],
    bestRegionSlugs: ["hokkaido", "tokyo", "kyushu"],
    spotlight: {
      title: "The month the whole country slows down",
      text: "January opens with Shogatsu, Japan's most important holiday, when temples are hushed and families gather at home. After the first week the streets empty out and the season belongs to snow country: onsen towns dusted in white, monkeys warming in Nagano's hot springs, and Hokkaido slowly stacking up the powder that explodes into festival season in February.",
    },
    whySpecial: `<h3>Onsen season at its peak</h3>
<p>January is the true start of onsen season, and it transforms Japan's hot-spring towns into something out of a film. Ginzan Onsen in Yamagata is the postcard: a preserved Taisho-era village where steam rises off the river and guesthouses glow lantern-lit under fresh snow. Nearby Zao Onsen adds its famous "snow monsters" — trees encased in ice that catch the light at sunrise. The trick is timing: onsen towns are at their quietest midweek after January 4, when the New Year crowds go home.</p>
<h3>The skiing and the slow lane</h3>
<p>Powder season peaks this month. Niseko regularly sees 10-15 meters of annual snowfall, and runs are emptier than February's festival weeks; Hakuba and Shiga Kogen are the Honshu alternatives with better access from Tokyo. If you'd rather skip the snow, January is one of the quietest months at Tokyo's major sights — Senso-ji and Meiji Jingu have genuine breathing room except for the January 1-3 hatsumode rush, when temples like Meiji Jingu draw over three million visitors in a single day.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Snow-covered torii gates and shrines at first light.</li>
<li>Onsen steam against morning frost — best at 6-7 AM with a telephoto.</li>
<li>Lantern-lit snow streets in Ginzan and Otaru after dusk.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>New Year week (Dec 28-Jan 3) closes shops and restaurants nationwide — stock up before then.</li>
<li>Pack an extra layer: Japanese indoor heating is weak, and ryokan rooms can sit near 18°C.</li>
<li>Ski rentals are cheapest bought in Japan rather than abroad; Niseko gear runs about ¥5,000-8,000/day.</li>
</ul>`,
    events: [
      "Hatsumode shrine visits (Jan 1-3) for Japan's New Year tradition",
      "Coming-of-Age Day ceremonies in every city (2nd Monday of January)",
      "Winter illuminations still glowing in Tokyo, Osaka & Nagoya",
      "Ski season in full swing at Niseko, Hakuba & Shiga Kogen",
    ],
    baseCamp: {
      title: "Base yourself in Tokyo or Nagano",
      text: "Tokyo keeps the biggest choice of shops, food and illuminations, and day trips to snow country are easy. Nagano is the smarter pick if skiing, snow monkeys and onsen are the real goal — Hakuba, Nozawa Onsen and Jigokudani are all within an hour.",
    },
    dayTrips: [
      "Jigokudani Snow Monkey Park, Nagano — wild macaques bathing in steaming pools",
      "Ginzan Onsen, Yamagata — a preserved Taisho-era hot spring village under snow",
      "Kawagoe, Saitama — 'Little Edo' lantern-lit streets and cozy winter cafés",
    ],
    budgetNote: "January is a quiet-value month after the New Year rush clears: hotel prices drop sharply from Jan 4, and only New Year week itself is expensive. Flights booked before mid-December are the cheapest of the winter.",
    localTip: "Japan's indoor heating is weak by Western standards — pack an extra layer for evenings, and always carry warm socks. A portable hand warmer (kairopo) is a cheap game-changer in January.",
    packing: "Down jacket, thermal base layers, boots, gloves, scarf",
  },
  {
    month: "february",
    label: "February",
    tempLow: 0,
    tempHigh: 11,
    rainDays: 6,
    crowdLevel: 3,
    bestFor: "the Sapporo Snow Festival, ski season and early plum blossoms",
    image: "/images/month-february.webp",
    imageAlt: "Snow-covered shrine torii gate in winter in February",
    highlights: [
      "Sapporo Snow Festival's giant ice sculptures (early Feb)",
      "Ski resorts at their powder peak (Niseko, Hakuba)",
      "Plum blossoms in Tokyo & Kyoto",
    ],
    downsides: [
      "Bitterly cold in Hokkaido and Tohoku",
      "Short daylight hours",
      "Central heating is weaker than Western hotels",
    ],
    bestRegions: ["Hokkaido", "Tohoku", "Tokyo & Kanto"],
    bestRegionSlugs: ["hokkaido", "tohoku", "tokyo"],
    spotlight: {
      title: "Japan's coldest, most photogenic month",
      text: "February is winter's grand finale. The Sapporo Snow Festival turns Odori Park into a city-sized art gallery of ice, while Niseko and Hakuba serve up the lightest powder of the season. Down south, plum blossoms open weeks before sakura, and a quiet ryokan bath under falling snow is the definition of a perfect February evening.",
    },
    whySpecial: `<h3>Sapporo Snow Festival, without the tripwires</h3>
<p>The Sapporo Snow Festival is February's headline act — hundreds of ice and snow sculptures spread across Odori Park and Susukino, running roughly February 4-11 each year. The catch is crowds: festival week fills Sapporo's hotels weeks out, and weekend night sessions can mean 30-45 minute queues for the biggest displays. The smarter play is to base in Otaru, 30 minutes by train, and come in each day. Otaru's own Snow Light Path turns the canal into a corridor of drifting candles — quieter and just as beautiful.</p>
<h3>The clearest month for Mount Fuji</h3>
<p>February is statistically Japan's clearest month, and that makes it the best window of the year for Mount Fuji views. The mountain is visible from Tokyo's west side roughly 100+ days a year total, but February's cold, dry air maximizes the chance of that postcard silhouette at sunrise. Head to Kawaguchiko or Hakone on a forecast-clear day — Lake Kawaguchi's north shore gives the classic reflection shot.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Snow sculpture details backlit at dusk, when the festival lights switch on.</li>
<li>Mount Fuji's snow cap in crisp winter light — early morning, before haze.</li>
<li>Zao's "snow monster" trees at sunrise, before tour buses arrive.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Festival week hotels book out by late January — reserve before then or stay in Otaru.</li>
<li>Yukiguni (snow country) roads close at short notice; keep a flexible day for weather.</li>
<li>Mito's Kairakuen plum festival is mid-February to late March — a low-crowd, beautiful day trip from Tokyo.</li>
</ul>`,
    events: [
      "Sapporo Snow Festival (early Feb) — hundreds of ice & snow sculptures",
      "Yokote Kamakura Festival, Akita — snow igloos glowing with candles",
      "Plum blossom (ume) festivals in Tokyo & Mito",
      "Otaru Snow Light Path, Hokkaido — lantern-lit canal evenings",
    ],
    baseCamp: {
      title: "Split your time: Hokkaido for snow, Tokyo for warmth",
      text: "Sapporo is the obvious base for the Snow Festival and Otaru day trips, with Niseko a direct bus away. If you prefer milder weather, base in Tokyo: plum blossoms, illuminations and day trips to Hakone or Nikko, all without freezing wind.",
    },
    dayTrips: [
      "Otaru — snow-dusted canal town, 30 minutes from Sapporo",
      "Noboribetsu — Hokkaido's biggest onsen resort with 'hell valley' geology",
      "Zao Onsen, Yamagata — the famous 'snow monster' ice trees",
    ],
    budgetNote: "February is cheaper than December or March: the Snow Festival crowds are local rather than international, and flights and hotels outside festival dates are among winter's lowest.",
    localTip: "Sapporo in festival week needs reservations weeks ahead. Consider staying in Otaru and riding the 30-minute train in — you'll dodge the hotel surge and catch the canal at its prettiest in the evening.",
    packing: "Heavy winter coat, waterproof boots, layers for indoor/outdoor",
  },
  {
    month: "march",
    label: "March",
    tempLow: 5,
    tempHigh: 14,
    rainDays: 11,
    crowdLevel: 3,
    bestFor: "early sakura in the south, plum blossoms and shoulder-season deals",
    image: "/images/month-march.webp",
    imageAlt: "Cherry blossom buds beginning to open at a Tokyo park in March",
    highlights: [
      "Sakura starts in Okinawa & Kyushu (mid-late March)",
      "Plum blossom festivals near Tokyo",
      "Cheaper flights & hotels than April",
    ],
    downsides: [
      "Still chilly, especially in the north",
      "Rain days increase toward the end of the month",
      "Cherry blossoms not yet peak in Tokyo",
    ],
    bestRegions: ["Kyushu", "Tokyo & Kanto", "Kyoto & Osaka"],
    bestRegionSlugs: ["kyushu", "tokyo", "kyoto"],
    spotlight: {
      title: "The quiet runway before sakura season",
      text: "March is a slow handoff between winter and spring. Plum blossoms give way to the first cherry buds, and the sakura front starts its march north from Okinawa and Kyushu. It is also the last true bargain window of the season — flights and hotels are still priced for winter, weeks before April's surge.",
    },
    whySpecial: `<h3>Chasing the first blossoms</h3>
<p>The sakura front starts here, and its route is Japan's most reliable spring forecast: Okinawa blooms in late January, Kagoshima and Kumamoto follow in mid-March, and the front reaches Tokyo around the last week of March. If you want to see sakura before the masses, Kawazu on the Izu Peninsula is the masterstroke — its early-blooming Kawazu-zakura usually peak in late February to early March, weeks ahead of the main season and with a fraction of the crowds.</p>
<h3>The last bargain window</h3>
<p>March is genuinely the last month of the year where you'll pay winter prices for spring weather. International flights and city hotels run 20-40% below April rates, and the golden ticket is the two-week gap between mid-March plum season and late-March sakura reports — when Kyoto's temples and Tokyo's parks are quiet. Kairakuen in Mito, with its 3,000 plum trees, is the classic way to fill it.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Plum blossom close-ups against blue sky — Kairakuen's weeping plums at their peak.</li>
<li>First sakura buds at Meguro River in Tokyo, before the crowds arrive.</li>
<li>Kawazu's pink river corridor in late afternoon light, with Mount Kawazu in frame.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>The official sakura forecast drops in early March; book flexible dates and commit when it lands.</li>
<li>Kyoto hotels for late March fill 6 weeks ahead — reserve by early February.</li>
<li>Hinamatsuri (March 3) displays are free to view at shrines — a low-key cultural add-on.</li>
</ul>`,
    events: [
      "Plum blossom (ume) festivals — Yushima Tenjin in Tokyo, Kairakuen in Mito",
      "Early sakura in Okinawa & Kyushu from mid-March",
      "Hinamatsuri (Doll Festival) displays on March 3",
      "St. Patrick's Day & spring beer gardens once the evening air warms",
    ],
    baseCamp: {
      title: "Base in Tokyo, chase the first blossoms south",
      text: "Tokyo is the best launchpad: it has plenty of its own early bloom spots, plus shinkansen access to Kyushu and the Kii Peninsula if you want to be among the first to see sakura. Kyoto works too, and feels quieter than it will in April.",
    },
    dayTrips: [
      "Kawazu, Izu Peninsula — Japan's earliest reliable sakura, usually from mid-February",
      "Hakone — clear March days still show Mount Fuji's snow cap",
      "Nikko — winter-lit shrines without the autumn crowds",
    ],
    budgetNote: "March is a genuine shoulder season: international flights and city hotels run 20-40% below April rates. The only surge is a brief one around the end of March once the first sakura reports hit social media.",
    localTip: "The sakura forecast is published around early March — book the last week of March into early April flexibly, and decide your exact city only when the official bloom dates drop.",
    packing: "Light layers, warm jacket, compact umbrella",
  },
  {
    month: "april",
    label: "April",
    tempLow: 10,
    tempHigh: 20,
    rainDays: 11,
    crowdLevel: 5,
    bestFor: "cherry blossom season, hanami picnics and the peak spring window",
    image: "/images/month-april.webp",
    imageAlt: "Cherry blossoms framing the Five-Storied Pagoda at Chureito in April",
    highlights: [
      "Sakura peaks in Tokyo, Kyoto & Osaka (late March-early April)",
      "Hanami picnics under blossom trees",
      "Best overall spring weather",
    ],
    downsides: [
      "Absolute peak crowds at famous spots",
      "Hotel prices surge 40-80%",
      "Cherry blossoms are unpredictable by 1-2 weeks",
    ],
    bestRegions: ["Tokyo & Kanto", "Kyoto & Osaka", "Tohoku"],
    bestRegionSlugs: ["tokyo", "kyoto", "tohoku"],
    spotlight: {
      title: "The most beautiful two weeks of the year",
      text: "April is Japan at its most cinematic. The sakura front peaks in Tokyo and Kyoto, turning parks and riversides pink, and hanami picnics fill Ueno and the Philosopher's Path from dawn. It is breathtaking — and it is the busiest, priciest window of the year. Come for the blossoms, plan like it is peak season, because it is.",
    },
    whySpecial: `<h3>Sakura, timed to the day</h3>
<p>April is the month the sakura peak moves through Tokyo and Kyoto, usually full bloom the first week and falling by mid-month — a window that shifts by a few days every year. The classic mistake is booking peak weeks blind. Better: use the sakura forecast to aim for full bloom (mankai) at specific spots — Tokyo's Meguro River and Chidorigafuchi, Kyoto's Philosopher's Path and Maruyama Park. Hirosaki in Aomori holds Japan's most famous blossom moat and blooms a full month later than Tokyo, letting you catch the season twice.</p>
<h3>The Golden Week trap</h3>
<p>Golden Week (April 29-May 5) is the country's biggest domestic travel peak, and it lands right after sakura season. If your dates overlap it, expect highway jams of 2-3 hours outside cities, hour-long queues at temples, sold-out shinkansen, and hotel rates 50-100% above normal. The fix is brutal but simple: travel the last week of April, or arrive the first week of May after the peak clears. Alternatively, use Golden Week to visit Tohoku — Hirosaki's blossoms peak right through it.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Chureito Pagoda with Mount Fuji and full bloom behind — go before 7 AM, queues form by 8.</li>
<li>Night sakura (yozakura) at Meguro River and Chidorigafuchi's lantern-lit canal.</li>
<li>Philosopher's Path at 6 AM, before the first tour group.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Book hotels 4-6 months ahead for early April; they genuinely sell out.</li>
<li>Hanami picnics at Ueno and Yoyogi need to claim ground by 8 AM on weekends.</li>
<li>Solo travelers save on April's inflated ryokan prices by staying in capsule or business hotels.</li>
</ul>`,
    events: [
      "Hanami season peaks in Tokyo, Kyoto, Osaka & Hirosaki",
      "Takayama Spring Festival (mid-April) — ornate floats through old streets",
      "Fuji Shibazakura Festival, near Lake Kawaguchi — pink moss lawns with Fuji behind",
      "Kanda Matsuri in Tokyo (odd-numbered years) — one of the big three Edo festivals",
    ],
    baseCamp: {
      title: "Kyoto is the epicenter — arrive ready for crowds",
      text: "Kyoto is where hanami is at its most photogenic, but hotel prices double and famous temples queue from 8 AM. Tokyo is more manageable logistically and its blossom spots are just as beautiful. For the full postcard, base in Kyoto and do Osaka & Nara as day trips.",
    },
    dayTrips: [
      "Arashiyama — cherry blossoms over the river and the famous bamboo grove",
      "Hirosaki Castle, Aomori — Japan's most beautiful blossom moat (late April)",
      "Mount Fuji Five Lakes — moss pink fields and blossom-ringed lakes",
    ],
    budgetNote: "April is the year's most expensive month for hotels — expect 40-80% premiums and books-early policies. Flights from the US and Europe peak here too. Book 4-6 months ahead or travel the last week of April, when prices ease before Golden Week.",
    localTip: "Skip the big parks and hit local blossom spots like Meguro River in Tokyo or the Philosopher's Path in Kyoto before 7 AM. The most famous views are stunning but shoulder-to-shoulder by mid-morning.",
    packing: "Light jacket, comfortable walking shoes, hat, layers",
  },
  {
    month: "may",
    label: "May",
    tempLow: 15,
    tempHigh: 24,
    rainDays: 11,
    crowdLevel: 4,
    bestFor: "Golden Week (early May), gardens and mild weather before the rains",
    image: "/images/month-may.webp",
    imageAlt: "Lush green garden and tea house in Kyoto in May",
    highlights: [
      "Wisteria season at Ashikaga Flower Park",
      "Fresh green (shinryoku) gardens at their peak",
      "Comfortable sightseeing weather everywhere",
    ],
    downsides: [
      "Golden Week (Apr 29-May 5) is Japan's biggest domestic travel peak",
      "Trains and hotels book out far ahead",
      "Late May gets cloudier as rainy season approaches",
    ],
    bestRegions: ["Kyoto & Osaka", "Tokyo & Kanto", "Mount Fuji & Chubu"],
    bestRegionSlugs: ["kyoto", "tokyo", "fuji"],
    spotlight: {
      title: "Golden Week chaos, then the greenest month",
      text: "May opens with Golden Week, the country's biggest travel surge — avoid those first five days at all costs. What follows is the reward: shinryoku, the brilliant fresh green that fills Kyoto's gardens, wisteria cascading at Ashikaga, and the last comfortable, rain-free weather before June's tsuyu arrives.",
    },
    whySpecial: `<h3>Wisteria season — two weeks that sell out</h3>
<p>May's signature sight is wisteria (fuji), and Ashikaga Flower Park in Tochigi is the master of it — the great 160-year-old wisteria tunnel peaks for roughly ten days from early May, with night illuminations extending the season. Kameido Tenjin in Tokyo is the free urban alternative. The math is tight: wisteria blooms about May 1-15, the same window Golden Week hits, so plan for mid-May when crowds and prices both ease.</p>
<h3>Shinryoku — the greenest month</h3>
<p>After May 5, Japan settles into shinryoku, the luminous fresh green that appears the moment the rains and heat arrive. Kyoto's gardens — Shisendo, the Adashino Nenbutsu-ji bamboo path, the moss of Saiho-ji — are at their most vivid, and completely unlike the pink of April. It is the quiet month's best secret: famous temples half-empty, mild 15-24°C weather, and hiking at Mount Takao or Hakone with Fuji still snow-capped.</p>
<h3>Photo opportunities</h3>
<ul>
<li>The wisteria tunnel at Ashikaga, ideally before 9 AM or under its night lights.</li>
<li>Shinryoku reflections in Kyoto's temple ponds — Shisendo at opening hour.</li>
<li>Golden-prairie light at Mount Takao at late afternoon, with Fuji on the horizon.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Trains and hotels for May 1-5 genuinely sell out — never travel Golden Week unbooked.</li>
<li>Aoi Matsuri (May 15) in Kyoto is a Heian-era procession that's free and far less crowded than its fame suggests.</li>
<li>If fixed to Golden Week, trade Tokyo-Kyoto for Tohoku or Shikoku — 80% fewer international tourists.</li>
</ul>`,
    events: [
      "Golden Week (Apr 29-May 5) — Japan's biggest domestic travel peak",
      "Wisteria (fuji) season at Ashikaga Flower Park & Kameido Tenjin",
      "Kyoto's Aoi Matsuri (May 15) — Heian-era costume procession",
      "Kanda Matsuri & Sanja Matsuri in Tokyo (mid-May) — summer begins early",
    ],
    baseCamp: {
      title: "Tokyo or Kyoto both shine — skip the first week",
      text: "After May 5 either city is superb. Tokyo's wisteria and fresh-green gardens are walkable from the city; Kyoto's temples glow green and its famous streets empty out once Golden Week tourists leave. For wisteria, base in Tokyo for the Ashikaga day trip.",
    },
    dayTrips: [
      "Ashikaga Flower Park, Tochigi — the great wisteria tunnel",
      "Kamakura — hydrangeas still buds, beaches warming, temples in fresh green",
      "Mount Takao — early-season hiking with a clear Fuji view",
    ],
    budgetNote: "Prices triple for Golden Week itself, then fall back to shoulder-season levels from May 6. It's the sweetest value of spring if you time it right — weather is still perfect and rates drop 30-50% overnight.",
    localTip: "Never book trains or hotels for May 1-5 without reservations — they genuinely sell out. And if your dates are fixed to Golden Week, go to less-touristed areas like Tohoku or Shikoku instead of fighting the Tokyo-Kyoto corridor.",
    packing: "T-shirts, light layers, sunscreen, comfortable shoes",
  },
  {
    month: "june",
    label: "June",
    tempLow: 19,
    tempHigh: 27,
    rainDays: 17,
    crowdLevel: 2,
    bestFor: "hydrangea season, Okinawa beaches and low crowds before summer",
    image: "/images/month-june.webp",
    imageAlt: "Purple hydrangea flowers at Meigetsuin Temple in Kamakura in June",
    highlights: [
      "Hydrangea (ajisai) season in Kamakura & Hakone",
      "Okinawa beaches before peak crowds",
      "Lowest hotel prices of the year",
    ],
    downsides: [
      "Tsuyu rainy season across most of Honshu",
      "High humidity and overcast skies",
      "Not the best time for Mount Fuji views",
    ],
    bestRegions: ["Okinawa", "Tokyo & Kanto", "Hokkaido"],
    bestRegionSlugs: ["okinawa", "tokyo", "hokkaido"],
    spotlight: {
      title: "The rainy season, and the year's best deals",
      text: "June is the trade-off month. The tsuyu rains sweep across Honshu, but they bring two silver linings: hydrangeas blooming in temple gardens, and hotel prices at their lowest of the year. Smart travelers head south to Okinawa's calm seas, or up to Hokkaido where the rains barely reach.",
    },
    whySpecial: `<h3>Hydrangea season, in the rain that makes it</h3>
<p>June's rain is the point, not the problem. The tsuyu season (roughly June 5 to mid-July in most of Honshu) brings 12-14 rain days — the most of any month — and it's exactly what hydrangeas (ajisai) need. Meigetsuin in Kamakura is the classic: the temple's "hydrangea temple" garden is carpeted in blue, with the famous round window framing the view. Sanjusangendo's neighbor Mimuroto-ji in Kyoto and Hasedera in Kamakura are the quieter alternates. And photographers love this month — overcast skies mean soft, diffused light that flatters the flowers and the moss.</p>
<h3>Hokkaido or Okinawa beat the rain</h3>
<p>Two regions escape the tsuyu: Hokkaido, where June is cool, green and barely rained on (lavender starts budding in Furano), and Okinawa, whose beaches open pre-peak with calm seas and thin crowds. On Honshu, June is also the year's cheapest month — hotels sit 30-50% below spring rates and international flights bottom out, making it the best-value month on the calendar for flexible travelers.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Meigetsuin's blue hydrangea wall with rain still on the petals — best after a night rain.</li>
<li>Moss and hydrangea contrast at Mimuroto-ji, using overcast light.</li>
<li>Kamakura's Hokokuji bamboo grove in the misty morning.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Buy a cheap folding umbrella at a convenience store (¥105-500) and pack a fast-dry jacket.</li>
<li>June's rain is steady, not torrential — museums, sento baths and department stores are the backup plan.</li>
<li>Book Okinawa now: prices are 30% below July and the sea is calm before typhoon season.</li>
</ul>`,
    events: [
      "Hydrangea (ajisai) season — Meigetsuin in Kamakura, Hakone's shrines",
      "Hokkaido's June gardens — lavender buds, cool air, thin crowds",
      "Okinawa's beach season begins — calm seas & pre-peak prices",
      "Corn & cherry season in local markets as summer produce arrives",
    ],
    baseCamp: {
      title: "Hokkaido or Okinawa beat the rain",
      text: "If your dates are flexible, Hokkaido is the clear winner in June — cool, green and barely rained on. Okinawa's islands are perfect for beach travel and family trips. On Honshu, base in Tokyo: indoor culture is world-class for rainy days, and Kamakura's hydrangeas are the month's iconic sight.",
    },
    dayTrips: [
      "Kamakura — temple gardens carpeted with hydrangeas",
      "Hakone — lakeside shrines and hydrangea paths (pack a rain shell)",
      "Nikko — quieter than autumn, with the mountain air clearing",
    ],
    budgetNote: "June and September are the year's cheapest months. Hotels drop 30-50% below spring rates and international flights bottom out — a silver lining that makes the rain genuinely worth it for budget travelers.",
    localTip: "Buy a cheap folding umbrella (105-500 yen at convenience stores) and pack a fast-dry jacket. Rain in tsuyu is steady, not torrential — museums, sento baths and department stores all make great rainy-day plans.",
    packing: "Rain jacket, umbrella, breathable clothing, water shoes for Okinawa",
  },
  {
    month: "july",
    label: "July",
    tempLow: 23,
    tempHigh: 30,
    rainDays: 13,
    crowdLevel: 4,
    bestFor: "summer festivals, hanabi fireworks, and the Gion Matsuri in Kyoto",
    image: "/images/month-july.webp",
    imageAlt: "Summer festival fireworks (hanabi) bursting over a river in July",
    highlights: [
      "Gion Matsuri in Kyoto (the famous floats)",
      "Fireworks festivals across Japan",
      "Tanabata celebrations",
    ],
    downsides: [
      "Hot and humid in most cities (30°C+)",
      "Rainy season lingers in the north",
      "Peak school-holiday crowds begin",
    ],
    bestRegions: ["Tokyo & Kanto", "Kyoto & Osaka", "Hokkaido"],
    bestRegionSlugs: ["tokyo", "kyoto", "hokkaido"],
    spotlight: {
      title: "Festival season ignites",
      text: "July is when summer truly arrives — hot, humid, and electric. Kyoto's Gion Matsuri rolls out its towering yamaboko floats, hanabi fireworks light up rivers across the country, and yukata crowds fill the streets. It is sweaty and glorious. If the heat is too much, Hokkaido's cool green highlands are a short flight away.",
    },
    whySpecial: `<h3>Gion Matsuri — the month Kyoto boils over</h3>
<p>Kyoto's Gion Matsuri runs all month, but the two can't-miss moments are the yoiyama evenings (the three nights before each procession) and the yamaboko float processions on July 17 and 24. The floats — some 25 meters tall, weighing up to 12 tons — are pulled by hand through the old streets, and the evening before is the best time: lantern-lit, food stalls out, and the crowd friendly rather than crushing. Expect 35°C heat and evenings that stay above 28°C; the processions are free but streets pack 4-5 deep, so arrive early or watch from a hotel balcony.</p>
<h3>Fireworks everywhere</h3>
<p>July is hanabi season nationwide. The Sumida River Fireworks in Tokyo (late July) is the biggest, drawing roughly a million spectators along the riverbanks — arrive by mid-afternoon to claim a spot. Osaka's Tenjin Matsuri (July 24-25) pairs its fireworks with a boat procession on the river, and is arguably the more atmospheric pick. Both are free, and both reward the same tactic: stake a riverside spot early, pack snacks, and wear a yukata — it's the local uniform and cooler than western clothes in evening humidity.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Firework bursts over the river, from a long-exposure phone or compact camera.</li>
<li>Gion's floats silhouetted against lantern light on yoiyama evenings.</li>
<li>Shrine lanterns glowing at dusk during Tanabata.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>July is peak season from mid-month — book before the 15th for early-July shoulder prices.</li>
<li>Sunstroke is real: hydrate constantly, use umbrella shade, and plan indoor sights for midday.</li>
<li>Hokkaido sits at 25°C while Tokyo swelters — a cheap flight is the heat escape hatch.</li>
</ul>`,
    events: [
      "Gion Matsuri in Kyoto — the famous yamaboko float procession (July 17 & 24)",
      "Tenjin Matsuri in Osaka (July 24-25) — boat fireworks on the water",
      "Sumida River Fireworks in Tokyo (late July) — one of Japan's biggest hanabi",
      "Tanabata — star festival decorations in Sendai & across the country",
    ],
    baseCamp: {
      title: "Base in Tokyo or Osaka, festival-hop by train",
      text: "Tokyo gives easy access to Sumida's fireworks and coastal escapes; Kyoto and Osaka hub the month's biggest matsuri. Hokkaido is the cool escape — Sapporo stays around 25°C while Tokyo swelters. Families and nightlife-lovers will get the most from Osaka.",
    },
    dayTrips: [
      "Kamakura or Enoshima — sea breeze and beach cafés against Tokyo's heat",
      "Hakone — highland air, lake cruises and evening cooling",
      "Fuji Five Lakes — early-climb staging or lakeside escapes",
    ],
    budgetNote: "July is squarely peak season: school holidays push prices up from mid-month, though less violently than April. Early July still carries some June shoulder bargains if you can book before the 15th.",
    localTip: "Fireworks spots are free but fill hours early — claim a riverside spot by late afternoon and pack snacks. Wear a yukata to festivals: it's the local uniform and remarkably cooler than shirts in evening humidity.",
    packing: "Light clothing, hat, sunscreen, bug spray, cooling towel",
  },
  {
    month: "august",
    label: "August",
    tempLow: 24,
    tempHigh: 32,
    rainDays: 10,
    crowdLevel: 5,
    bestFor: "Obon festivals, Awa Odori, Mount Fuji climbing and matsuri season",
    image: "/images/month-august.webp",
    imageAlt: "Awa Odori dancers in traditional costume at Tokushima in August",
    highlights: [
      "Obon week & Awa Odori in Tokushima",
      "Mount Fuji climbing season",
      "Coastal escapes and island hopping",
    ],
    downsides: [
      "Hottest, most humid month in Japan",
      "Obon (mid-Aug) domestic travel peak",
      "Typhoon season ramps up in the south",
    ],
    bestRegions: ["Hokkaido", "Tohoku", "Okinawa"],
    bestRegionSlugs: ["hokkaido", "tohoku", "okinawa"],
    spotlight: {
      title: "Matsuri, fireworks and the summit of Fuji",
      text: "August is summer's loudest month. Aomori's Nebuta Matsuri and Tokushima's Awa Odori rank among Japan's most joyful festivals, Mount Fuji's climbing season is at its peak, and Obon mid-month sends the whole country traveling. Escape the humidity in Tohoku or Hokkaido, and watch the typhoon forecast if you head south.",
    },
    whySpecial: `<h3>Nebuta Matsuri — three nights of fire and light</h3>
<p>Aomori's Nebuta Matsuri (August 2-7) is Japan's most spectacular summer festival: enormous illuminated battle floats — some over 5 meters wide — carried through the streets on a wave of haneto dancers. The final night (August 7) is the grandest, and the floats are then loaded onto boats for the city's harbor festival. If you can't make Aomori, Tokushima's Awa Odori (August 12-15) is the country's biggest dance festival, with streets of choreographed dancers in coordinated costume. Both fill their cities' hotels months out — reserve by June, or base in nearby Sendai and take the shinkansen.</p>
<h3>Mount Fuji's climbing season</h3>
<p>August is the heart of Fuji's official climbing season (early July to mid-September), and the busiest — the Yoshida Trail queues near the summit with waits of 2-3 hours at popular points, and toilets at the eighth station routinely back up. The fix is to climb on a weekday and start so you reach the summit for sunrise, descending before the midday rush. Expect the mountain to be genuinely cold above the fifth station even in August — it hovers near freezing at the summit before dawn.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Nebuta floats glowing against the night — shoot with a steady hand, no flash.</li>
<li>Fuji summit sunrise — the reason everyone climbs; aim for a clear-forecast day.</li>
<li>Awa Odori dancers mid-step, using a fast shutter to freeze motion.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Obon (Aug 13-16) sends the whole country home — trains sell out; book two months ahead.</li>
<li>Fuji climbing gear (windbreaker, headlamp, oxygen) rents at the fifth station — no need to carry from home.</li>
<li>Typhoon season ramps up in the south — keep a weather-check habit if you head to Okinawa.</li>
</ul>`,
    events: [
      "Nebuta Matsuri in Aomori (Aug 2-7) — glowing painted battle floats",
      "Awa Odori in Tokushima (Aug 12-15) — Japan's biggest dance festival",
      "Obon (mid-Aug) — families travel, lantern ceremonies & bon odori",
      "Hanabi fireworks continue across the country all month",
    ],
    baseCamp: {
      title: "Escape the heat: Tohoku or Hokkaido",
      text: "Aomori and Sendai are the festival heartlands and stay 5-8°C cooler than Tokyo. Hokkaido is the coolest mainland option. If you're set on Tokyo or Kyoto, plan museums and indoor sights for midday and schedule outdoor time for early morning — the heat is intense.",
    },
    dayTrips: [
      "Hirosaki, Aomori — castle town with a summer festival of its own",
      "Matsushima Bay — pine islands cruise from Sendai",
      "Yamadera temple in Yamagata — 1,000 stone steps with mountain views",
    ],
    budgetNote: "August is a double peak: summer holidays plus Obon. Domestic travel surges Aug 13-16 when trains sell out, but international visitor numbers are lower than spring or autumn. Booking two months ahead is essential for the festival dates.",
    localTip: "Mount Fuji's climbing trail opens officially this month — if you climb, go for the summit sunrise, rent gear locally, and expect it to be crowded. For festival weeks, reserve Aomori hotels before June; they sell out fast.",
    packing: "Ultra-light clothing, hat, high-SPF sunscreen, electrolytes",
  },
  {
    month: "september",
    label: "September",
    tempLow: 19,
    tempHigh: 27,
    rainDays: 14,
    crowdLevel: 2,
    bestFor: "shoulder-season bargains, harvest food and early autumn color in Hokkaido",
    image: "/images/month-september.webp",
    imageAlt: "Golden rice fields and Mount Fuji on a September morning",
    highlights: [
      "Cheapest international flights of the year",
      "Hokkaido's Daisetsuzan shows first autumn color",
      "Crab & fruit harvest season begins",
    ],
    downsides: [
      "Typhoon risk peaks in September",
      "Still warm and humid in the south",
      "Some rain days as typhoons pass",
    ],
    bestRegions: ["Hokkaido", "Tokyo & Kanto", "Mount Fuji & Chubu"],
    bestRegionSlugs: ["hokkaido", "tokyo", "fuji"],
    spotlight: {
      title: "The value sweet spot before the colors peak",
      text: "September is Japan's quietest bargain month. International flights hit their lowest fares, crowds thin out, and Hokkaido's Daisetsuzan already glows with the country's first autumn color. The trade-off is typhoon season — watch forecasts and keep your itinerary flexible, and you'll have the country nearly to yourself.",
    },
    whySpecial: `<h3>The typhoon window — and the way through it</h3>
<p>September is Japan's busiest typhoon month, and the first two weeks carry the highest risk. The pattern is predictable: storms form south, track north, and pass within 24-48 hours. The window that clears is roughly September 15-30, when skies turn stable and sunny over 60% of days — and prices stay at the year's floor the whole month. The practical play is to book flexible travel and insurance with typhoon cancellation cover, check the JMA typhoon map each morning, and keep one itinerary day deliberately loose.</p>
<h3>Hokkaido's first autumn color</h3>
<p>Hokkaido runs on its own calendar: Daisetsuzan National Park — the country's first autumn color — starts turning from mid-September, a full month before Kyoto. The Kurodake and Asahidake gondolas take you straight into the color, and hiking weather is close to perfect. It's also harvest season: crab, matsutake, sanma and the first new rice (shinmai) arrive in markets, and Hokkaido's dairy towns hit their food-tourist peak before the snow.</p>
<h3>Photo opportunities</h3>
<ul>
<li>First reds and golds on Daisetsuzan's ridgelines in late September.</li>
<li>Post-typhoon skies — dramatic rainbows and fast-moving light.</li>
<li>Matsutake and market still-lifes for food-story photos.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Flights from the US and Europe hit their yearly low this month — often 30-40% under August.</li>
<li>Sports Day (3rd Monday) brings a long weekend — small domestic travel blip, avoid Saturday trains.</li>
<li>Keep one typhoon-day backup: a museum-heavy plan for the city you're in.</li>
</ul>`,
    events: [
      "Daisetsuzan's first autumn colors in Hokkaido (from mid-September)",
      "Crab season begins — matsutake and sanma arrive in markets",
      "Sports Day and long weekend (3rd Monday of September)",
      "Autumn beer gardens and harvest festivals across the country",
    ],
    baseCamp: {
      title: "Hokkaido for early koyo, Tokyo for value",
      text: "Hokkaido shows the year's first autumn color and has perfect hiking weather. Tokyo and Osaka offer September's famous flight-and-hotel bargains with plenty of dry, pleasant days in between typhoons. The south (Okinawa, Kyushu) carries the most typhoon risk in September.",
    },
    dayTrips: [
      "Daisetsuzan National Park, Hokkaido — first reds and golds of the season",
      "Nikko — autumn's earliest color just outside Tokyo",
      "Kamakura — sea air returns as the humidity breaks",
    ],
    budgetNote: "September is consistently the cheapest month for flights from the US and Europe, with hotel prices near June's lows. The value is real — just keep a flexible day in your plan for typhoon weather.",
    localTip: "Book a travel insurance plan with typhoon cancellation cover, and check the JMA typhoon map every morning — it's the one month where a rainy-day backup plan for your itinerary genuinely pays off.",
    packing: "Light layers, rain jacket (typhoon watch), comfortable shoes",
  },
  {
    month: "october",
    label: "October",
    tempLow: 13,
    tempHigh: 21,
    rainDays: 10,
    crowdLevel: 4,
    bestFor: "autumn leaves (koyo), crisp air and the consensus best month",
    image: "/images/month-october.webp",
    imageAlt: "Red maple leaves framing a Kyoto temple in October autumn",
    highlights: [
      "Koyo (autumn leaves) begins in Hokkaido & mountains",
      "Perfect hiking weather (Hakone, Nikko)",
      "Halloween events in Shibuya",
    ],
    downsides: [
      "Crowds build from mid-month for fall color",
      "Cooler evenings require a jacket",
      "Early October can still be warm",
    ],
    bestRegions: ["Hokkaido", "Tokyo & Kanto", "Kyoto & Osaka"],
    bestRegionSlugs: ["hokkaido", "tokyo", "kyoto"],
    spotlight: {
      title: "Crisp air, first colors, and the crowd's calm before November",
      text: "October is many people's favorite month in Japan. The humidity finally breaks, the air turns crisp, and the first maples ignite in Hokkaido and the highlands while the cities stay warm and uncrowded. It is ideal hiking weather around Hakone and Nikko — and the last calm window before November's koyo peak packs the famous temples.",
    },
    whySpecial: `<h3>The autumn front, region by region</h3>
<p>Autumn color (koyo) follows a north-to-south front just like sakura, but more slowly: Hokkaido turns from late September, the Japanese Alps and Nikko follow in early-to-mid October, and Kyoto reaches full color in the second half of November. For October, the Alps are the prize — the Tateyama Kurobe Alpine Route opens its full length with first snow at the top and color below, and the 2,300-meter ridgelines above Hakone are at their crispest. Fog and morning mist are common over the valleys — photographers' gold, and the reason early starts win.</p>
<h3>Perfect hiking, before the crowds</h3>
<p>October is the consensus best hiking month in Japan: 13-21°C in the lowlands, dry, and with 10-11 hours of daylight. Nikko, Hakone, Mount Takao and the Fuji Five Lakes all offer day hikes with proper autumn light, and the trails are empty compared to November's temple circuits. It's also Halloween month — Shibuya's street party on October 31 draws huge crowds, fun to witness, painful to be in the middle of if you're heading anywhere else that night.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Alpine ridgelines at first light, before valley fog lifts.</li>
<li>Fog rolling over Nikko's cedar-lined approach.</li>
<li>First maples backlit along Hakone's lake shore.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Koyo forecasts update weekly from September — trust them over months-fixed plans.</li>
<li>Tateyama Kurobe's top stations need a jacket even on sunny days; it's above 2,000m.</li>
<li>Halloween night in Shibuya: expect 40,000+ people and trains operating on holiday schedules.</li>
</ul>`,
    events: [
      "Autumn colors begin in Hokkaido & the Japanese Alps",
      "Halloween in Shibuya (Oct 31) — one of the world's biggest street parties",
      "Takayama Autumn Festival (Oct 9-10) — ornate festival floats",
      "Matsuri season winds down; harvest and chestnut festivals begin",
    ],
    baseCamp: {
      title: "Kyoto for first koyo, Tokyo for convenience",
      text: "Early October still favors Tokyo's mild days and easy day trips to Hakone and Nikko. Mid-to-late October is the window to base in Kyoto as its gardens and temples catch the first autumn color — and crowds are still manageable before November's peak.",
    },
    dayTrips: [
      "Hakone — crisp lake views and the first mountain maples",
      "Nikko — Japan's earliest reliable koyo among famous sights",
      "Kamakura — golden temple gardens in autumn light",
    ],
    budgetNote: "October splits the difference: still shoulder-season prices early in the month, rising from mid-October as koyo reports start. It's noticeably cheaper than April or November at the same level of weather quality.",
    localTip: "The autumn forecast (koyo zensen) updates weekly from September. Time your Kyoto visit to the second half of October for first full color — while it stays warm enough to explore comfortably all day.",
    packing: "Light jacket, long sleeves, comfortable walking shoes, camera",
  },
  {
    month: "november",
    label: "November",
    tempLow: 7,
    tempHigh: 15,
    rainDays: 8,
    crowdLevel: 4,
    bestFor: "peak autumn leaves in Kyoto & Tokyo, gardens and crisp clear days",
    image: "/images/month-november.webp",
    imageAlt: "Bright red maple leaves at Kiyomizu-dera in Kyoto in November",
    highlights: [
      "Peak koyo in Kyoto, Nara & Nikko",
      "Dry, crisp, brilliant weather",
      "Cultural festivals & illumination events",
    ],
    downsides: [
      "Autumn-color crowds at famous temples",
      "Cool-to-cold temperatures in the north",
      "Days get noticeably shorter",
    ],
    bestRegions: ["Kyoto & Osaka", "Tokyo & Kanto", "Nara"],
    bestRegionSlugs: ["kyoto", "tokyo", "nara"],
    spotlight: {
      title: "Kyoto's koyo peak, temple by temple",
      text: "November is autumn's climax. The maples peak at Kiyomizu-dera, Kinkaku-ji and the gardens of Kyoto, with Nikko and Nara not far behind, all under dry, brilliant blue skies. Expect company at every famous viewpoint — go at first light to earn the empty postcard shot.",
    },
    whySpecial: `<h3>Kyoto's koyo peak — and the queues that come with it</h3>
<p>November is Kyoto's second peak season, second only to April's sakura. Eikando, Tofuku-ji and the temple commonly anglicized as Reiun-in ("the maple temple") draw lines that reach 1-2 hours at weekend midday, and the peak color window — roughly November 10 to December 5 — packs every famous viewpoint. The workarounds are reliable: go on a Tuesday-Thursday (about 50% thinner than weekends), arrive at opening, and save the night illuminations — Kiyomizu-dera and Shofuku-ji — for weekday evenings when queues shrink after dark.</p>
<h3>Photography weather</h3>
<p>November has Japan's best photographic conditions of the year: 8 rain days on average, crisp 7-15°C air, and low, golden sun that rakes across temple gardens. The classic empty shot — a famous maple frame with no one in it — is genuinely achievable before 8 AM. Rurikoin's famous round window needs the 8 AM opening queue. For a quieter alternative to Kyoto's circuit, Nara's Todai-ji and deer park light up gold with a fraction of the footfall.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Maples at first light against still-dry stone — Kiyomizu-dera's hillside at 7 AM.</li>
<li>The round-window view at Rurikoin, in the 8 AM opening group.</li>
<li>Nara's deer and golden leaves in late-afternoon side light.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Tuesday-Thursday travel cuts temple queues by half — worth moving your itinerary.</li>
<li>Kinkaku-ji and Eikando shine in the afternoon light; Tofuku-ji in the morning.</li>
<li>Early November (before the 15th) is quieter and cheaper — still beautiful, less packed.</li>
</ul>`,
    events: [
      "Peak koyo in Kyoto, Nikko, Nara & the Fuji Five Lakes",
      "Autumn illuminations at Kiyomizu-dera & Shofuku-ji",
      "Nara's deer park in golden light — seasonal food stalls arrive",
      "Chrysanthemum (kiku) displays in Tokyo and across Japan",
    ],
    baseCamp: {
      title: "Kyoto for color, Tokyo for value",
      text: "Kyoto is the koyo capital — Kiyomizu-dera, Eikando and the Philosopher's Path glow for three weeks. Base there for the leaves, or in Osaka for cheaper hotels with the same temples 30 minutes away. Tokyo's gardens and Nikko day trips make a fine color itinerary too.",
    },
    dayTrips: [
      "Arashiyama & the bamboo grove — maples over the Katsura River",
      "Nara — Todai-ji and the deer park in peak autumn light",
      "Nikko — the final, most dramatic koyo of the main season",
    ],
    budgetNote: "November prices approach spring levels in Kyoto but stay moderate elsewhere. Early November (before the 15th) is cheaper than the peak color window — a smart trade for value travelers.",
    localTip: "Kiyomizu-dera's night illuminations are the season's highlight — go on a weekday evening when queues shrink. The best empty shot of the year is Rurikoin's maple window at 8 AM opening.",
    packing: "Warm layers, jacket, scarf, comfortable walking shoes",
  },
  {
    month: "december",
    label: "December",
    tempLow: 2,
    tempHigh: 10,
    rainDays: 6,
    crowdLevel: 3,
    bestFor: "winter illuminations, New Year decorations and quiet winter landscapes",
    image: "/images/month-december.webp",
    imageAlt: "Blue Pond in Biei, Hokkaido, frozen under fresh winter snow in December",
    highlights: [
      "Winter illumination displays (Tokyo, Osaka)",
      "Christmas markets in Tokyo & Osaka",
      "Onsen towns at their coziest",
    ],
    downsides: [
      "Cold and early-dark days",
      "Year-end crowds from Dec 28-Jan 3",
      "Many attractions close over New Year",
    ],
    bestRegions: ["Tokyo & Kanto", "Kyoto & Osaka", "Hokkaido"],
    bestRegionSlugs: ["tokyo", "kyoto", "hokkaido"],
    spotlight: {
      title: "Illuminations, Christmas lights and a countdown to Shogatsu",
      text: "December is Japan's most atmospheric month. Cities dress up in winter illuminations — Tokyo's Shibuya and Roppongi, Osaka's Midosuji — and Christmas markets bring mulled wine to the streets. It is also the calm before Shogatsu: book early for New Year, and expect many shops to close from December 28 through January 3.",
    },
    whySpecial: `<h3>Illuminations — the earlier the brighter</h3>
<p>December's signature is the winter illumination, and there's a pro trick: the displays are brightest in early December. From Christmas onward, many run on reduced power and switch off early — the Roppongi Hills and Shibuya Blue Cave displays are at full strength the first two weeks of the month. Osaka's Midosuji runs its grand avenue of lights through year-end, and the Christmas markets at Hibiya Park in Tokyo and Umeda in Osaka give the season its European-accented centerpiece.</p>
<h3>Ski season starts, before the crowds</h3>
<p>December is when Honshu's ski season opens — Niseko has been going since late November, but Hakuba, Nozawa Onsen and Shiga Kogen come online in mid-December with softer prices and thinner runs than February. It's also the best-value month of winter: hotel rates stay at annual lows until the December 24-25 spike, and onsen towns like Ginzan and Kusatsu are at their coziest under snow.</p>
<h3>Photo opportunities</h3>
<ul>
<li>Illumination light trails at night — use a small tripod for 1-2 second exposures.</li>
<li>Snow-dusted shrine roofs at first light, before melt.</li>
<li>Christmas market stalls with warm bokeh in late afternoon.</li>
</ul>
<h3>Local tips</h3>
<ul>
<li>Many shops and restaurants close Dec 28-Jan 3 — stock up and reserve before New Year.</li>
<li>Christmas (Dec 25) is a commercial, not religious, holiday — KFC and cake, not church.</li>
<li>New Year week is Japan's annual travel peak — book trains and hotels months out if you'll be there.</li>
</ul>`,
    events: [
      "Winter illuminations — Shibuya, Roppongi, Caretta Shiodome in Tokyo",
      "Christmas markets — Hibiya Park in Tokyo, Midosuji in Osaka",
      "New Year countdown & first sunrise (hatsu-hinode) preparations",
      "Onsen towns at their coziest — snow-viewing baths all month",
    ],
    baseCamp: {
      title: "Tokyo for lights, the alps for snow views",
      text: "Tokyo delivers the grandest illuminations and the easiest holiday logistics, with Nikko and Hakone as snowy day trips. For a quieter, cozier December, base in an onsen town like Ginzan, Nozawa or Kusatsu — snow-viewing baths are the month's defining pleasure.",
    },
    dayTrips: [
      "Hakone — winter onsen, clear Fuji views and lake calm",
      "Nikko — the grand shrine complex under first snow",
      "Kamakura — winter light festivals and empty temples",
    ],
    budgetNote: "December is a bargain month right up until Christmas — hotel rates sit at winter lows through the 24th. The exception is New Year (Dec 28-Jan 3), when prices spike and much of the country travels home.",
    localTip: "New Year week shuts down shops and restaurants from Dec 28 to Jan 3 — plan groceries and reservations before then. If you're in Japan for New Year, join a hatsumode shrine visit at midnight; it's the most special cultural moment of the year.",
    packing: "Winter coat, gloves, scarf, warm indoor layers",
  },
];
