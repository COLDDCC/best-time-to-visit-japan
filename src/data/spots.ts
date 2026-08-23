export interface SpotGuide {
  /** "cafe" (default) drives the café/shop copy and schema; "attraction" swaps in
   * landmark-appropriate labels (visitor info instead of reservations, access & costs
   * instead of a menu, a TouristAttraction schema instead of CafeOrCoffeeShop). */
  kind?: "cafe" | "attraction";
  name: string;
  slug: string;
  region: string;
  city: string;
  tagline: string;
  meta: string;
  image?: string;
  imageAlt?: string;
  logo?: string;
  exteriorImages?: { src: string; alt: string }[];
  interiorImages?: { src: string; alt: string }[];
  rating?: { score: number; count: number; asOf: string; url: string };
  highlightTags?: string[];
  bestTime: string;
  priceRange: string;
  intro: string[];
  highlights: { title: string; body: string }[];
  menu: { name: string; price: string; note: string }[];
  hours: string;
  address: string;
  phone: string;
  gettingThere?: string;
  tips: string[];
  reviewLinks: { label: string; url: string; note: string }[];
  socialLinks?: { label: string; url: string; emoji: string }[];
  seasonalPicks?: { title: string; note: string; image?: string; imageAlt?: string }[];
  disclaimer?: string;
  faqs: { q: string; a: string }[];
}

export const spotGuides: SpotGuide[] = [
  {
    name: "Kotonean",
    slug: "kotonean",
    region: "kyushu",
    city: "Hita, Oita",
    tagline: "Dolce-style kakigori by day, a quiet bar by night",
    meta: "Kotonean is a café-and-bar in Hita, Oita, known for dolce-style kakigori (shaved ice) by day and a refined bar by night, overlooking the Japan Heritage garden Kangien. Best visited June-August.",
    image: "/images/store/kotonean/hero.webp",
    imageAlt: "Fruit Parlor Kotonean brand illustration — a fruit-piled car pulling up to the shop sign",
    logo: "/images/store/kotonean/logo.webp",
    exteriorImages: [
      { src: "/images/store/kotonean/exterior1.jpg", alt: "Kotonean's shop exterior in the Awakubo district of Hita" },
      { src: "/images/store/kotonean/exterior2.jpg", alt: "Kotonean's shop front with the OPEN sign lit" },
      { src: "/images/store/kotonean/exterior3.jpg", alt: "Welcome to Kotonean sidewalk sign with hours and menu" },
    ],
    interiorImages: [
      { src: "/images/store/kotonean/interior1.jpg", alt: "Mango and rare cheese kakigori at Kotonean" },
      { src: "/images/store/kotonean/interior2.jpg", alt: "Strawberry and chocolate kakigori at Kotonean" },
      { src: "/images/store/kotonean/interior3.jpg", alt: "Grape kakigori made with fruit from Okura Grape Farm" },
    ],
    rating: { score: 4.0, count: 200, asOf: "August 2026", url: "https://www.google.com/maps/search/?api=1&query=%E7%90%B4%E9%9F%B3%E5%BA%B5%20%E6%97%A5%E7%94%B0%E5%B8%82" },
    highlightTags: ["Handmade daily", "Traditional craft", "Seasonal only", "Local ingredients", "Garden view"],
    bestTime: "June-August — Kyushu's rainy-to-typhoon season for sightseeing, but peak season for kakigori, when the heat makes a bowl of finely shaved ice worth the detour",
    priceRange: "¥400-2,000 JPY",
    intro: [
      "Kotonean sits in the Awakubo district of Hita, a two-in-one space that runs as a café by day and a bar after dark. By day it's known for exceptional handmade kakigori (shaved ice) and a refined coffee culture; once the sun goes down, it turns into an elegant bar pouring curated sake, local beers, and original cocktails.",
      "Its standout feature is the location itself: the interior looks directly out over Kangien, a meticulously preserved Japan Heritage garden. If you're already routing through Kyushu for the volcanoes and onsen towns, this is the kind of stop that rewards a detour — a genuinely local room, not a tourist set piece.",
    ],
    highlights: [
      { title: "Artisan kakigori", body: "Traditional Japanese ice-shaving technique produces a texture that's silky rather than icy. Long-running favorites include mango, rare cheese, and salted caramel nut, and every bowl is shaved to order." },
      { title: "A heritage-garden view", body: "Kangien is a model of Japanese preservation. Its traditional architecture and garden design sit right outside the window while you eat — a rare pairing of dessert and setting." },
      { title: "Day to night", body: "Easygoing café by afternoon, understated bar by evening. The same room reads completely differently depending on when you show up." },
    ],
    menu: [
      { name: "Signature kakigori", price: "¥900-1,300", note: "Mango, rare cheese, salted caramel nut and seasonal specials, shaved to order." },
      { name: "Specialty coffee & Japanese tea", price: "¥400-800", note: "Local-roaster beans, hot or cold-brewed, plus green tea, oolong, and sencha." },
      { name: "Evening bar (after dark)", price: "¥600-2,000", note: "Oita sake, local beer, Japanese whisky, and house cocktails with small plates." },
    ],
    hours: "Café 10:00-18:00 · \nBar 18:00-23:00 · \nMay be closed Mondays",
    address: "2-4-38 Awakubo, Hita, Oita 877-0008",
    phone: "0973-23-6577 (main) · \n080-2715-1242 (reservations, call 1-7 days ahead)",
    gettingThere: "10-min walk from JR Hita Station, or 10-min drive from Hita IC",
    tips: [
      "Kotonean runs on reservations, especially in summer and around holidays — call about a week ahead to confirm.",
      "Lines tend to be shorter between 2-4pm; the dinner window (5-6pm) is the busiest.",
      "The garden view is the whole point — ask for a window seat when you book.",
      "Once you're seated, take your time — the Kangien garden sits right in front of you the whole visit.",
    ],
    reviewLinks: [
      { label: "Tabelog", url: "https://tabelog.com/oita/A4404/A440403/44008673/dtlrvwlst/", note: "Japan's leading restaurant review platform" },
      { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%E7%90%B4%E9%9F%B3%E5%BA%B5%20%E6%97%A5%E7%94%B0%E5%B8%82", note: "Current ratings and photos" },
      { label: "Official site", url: "https://kotonean.net/", note: "Hours, menu, and announcements" },
    ],
    socialLinks: [
      { label: "Instagram", url: "https://www.instagram.com/kotonean/", emoji: "📷" },
      { label: "Facebook", url: "https://www.facebook.com/cafe.bar.kotonean/", emoji: "📘" },
      { label: "X (Twitter)", url: "https://x.com/kotonean", emoji: "🐦" },
    ],
    seasonalPicks: [
      { title: "Mango & rare cheese", note: "A classic pairing of ripe Miyazaki mango and rare cheese.", image: "/images/store/kotonean/interior1.jpg", imageAlt: "Mango and rare cheese kakigori at Kotonean" },
      { title: "Hita watermelon", note: "A summer-only favorite made with local Hita watermelon.", image: "/images/store/kotonean/products3.jpg", imageAlt: "Hita watermelon kakigori served beside a whole watermelon" },
      { title: "Signature dolce kakigori", note: "An original dessert-style kakigori built on Hita's clean water.", image: "/images/store/kotonean/products2.jpg", imageAlt: "Signature dolce-style kakigori topped with cream and berry sauce" },
    ],
    disclaimer: "Hours, prices, and menu items are accurate as of August 2026 but can change without notice — confirm directly with Kotonean before visiting. Ratings and reviews live on the third-party platforms linked above, not on this page.",
    faqs: [
      { q: "Do I need a reservation for Kotonean?", a: "It's recommended, especially in summer (peak kakigori season) and around holidays. Call the reservation line 1-7 days ahead; same-day walk-ins are possible but you may wait." },
      { q: "Is Kotonean a café or a bar?", a: "Both — it runs as a café serving kakigori and coffee from 10:00-18:00, then transitions into a bar with sake, beer, and cocktails from 18:00-23:00." },
      { q: "What's the best time of year to visit?", a: "June-August, when Kyushu's heat and humidity peak — that's exactly when a bowl of finely shaved ice earns its keep, and it lines up with the region's rainy-to-typhoon stretch that this site otherwise tells you to avoid for sightseeing." },
    ],
  },
  {
    kind: "attraction",
    name: "Mount Aso",
    slug: "mount-aso",
    region: "kyushu",
    city: "Aso, Kumamoto",
    tagline: "One of the world's largest active calderas, with a crater you can (sometimes) drive right up to",
    meta: "Mount Aso is an active volcano in Kumamoto, Kyushu, ringed by one of the world's largest calderas. Best visited October-November for clear crater views and golden grasslands — crater access can close without notice.",
    highlightTags: ["Active volcano", "Aso-Kuju National Park", "UNESCO Global Geopark", "Grazing horses at Kusasenri", "Access depends on alert level"],
    bestTime: "Year-round for the caldera and Kusasenri grasslands — spring for fresh green after the controlled burns, October-November for the clearest crater views and golden grass, winter for frost-covered trees at Kusasenri. The Nakadake crater itself can close on short notice at any time of year when volcanic gas levels rise, so don't build a whole day around it alone.",
    priceRange: "Free (Kusasenri and most viewpoints) — roughly ¥1,700-2,400 JPY round-trip for the bus and crater shuttle when they're running",
    intro: [
      "Mount Aso is one of the largest active volcanoes in the world, its caldera stretching roughly 25km north-south and 18km east-west — big enough that towns, farmland, and a train line sit inside it. The still-active Nakadake crater sends up a steady plume of steam and sulfur, and on clear days you can walk right up to the rim... when the alert level allows it.",
      "That last part matters: Nakadake is one of Japan's most closely monitored volcanoes, and access to the crater rim closes on short notice whenever gas levels or seismic activity rise — sometimes for a few hours, sometimes for months. It's worth building slack into your itinerary rather than routing a whole day around the crater alone.",
      "The rest of the caldera doesn't share that unpredictability. Kusasenri, a grassy plain at around 1,100m with grazing horses and a direct view of the smoking crater, is open year-round and free. Around the rim you'll find Aso Shrine, hot-spring towns like Uchinomaki, and some of Kyushu's best rural driving roads.",
    ],
    highlights: [
      { title: "One of the world's largest calderas", body: "Formed by four catastrophic eruptions between roughly 270,000 and 90,000 years ago, the Aso caldera runs about 120km in circumference — large enough to hold the city of Aso, farmland, and a rail line inside its rim." },
      { title: "Nakadake's active crater", body: "A milky turquoise crater lake, constant steam, and the smell of sulfur — when it's open, this is about as close as most visitors will ever get to an active volcanic crater. Access is gated by the current alert level, so it isn't guaranteed on any given day." },
      { title: "Kusasenri grasslands", body: "A wide volcanic plain at 1,100m elevation where horses graze freely, with Nakadake smoking in the background. Open year-round, free to walk, and the safest bet if crater access is closed." },
      { title: "Aso Shrine & onsen towns", body: "One of Japan's oldest shrines sits near the caldera's edge, and nearby Uchinomaki is a quiet hot-spring town — a good base for exploring without the crowds of Beppu or Kurokawa." },
    ],
    menu: [
      { name: "JR Aso Station → Asosanjo Terminal bus", price: "¥1,000 one-way", note: "Stops at Kusasenri along the way — the main way in if you're not driving." },
      { name: "Crater shuttle bus (when running)", price: "¥700 one-way", note: "Asosanjo Terminal to the crater parking area. Suspended entirely whenever the alert level closes the crater." },
      { name: "Aso Park Road toll road (self-drive)", price: "≈¥1,200 by car", note: "Open roughly 8:30-18:00 in the Mar-Oct season, shorter hours in winter — gated shut the moment gas levels rise." },
      { name: "Aso Volcano Museum", price: "¥1,100 adults", note: "Exhibits on the caldera's formation plus a live crater camera — worth it even when the real crater is closed." },
    ],
    hours: "Kusasenri & viewpoints: dawn-dusk, always open · \nCrater road & shuttle: seasonal, roughly 8:30-18:00 Mar-Oct, shorter in winter — closes without notice when the volcanic alert level rises · \nAso Volcano Museum: 9:00-17:00 (last entry 16:30)",
    address: "1930-1 Akamizu, Aso, Kumamoto 869-2232 (Aso Volcano Museum, at the base of the crater road)",
    phone: "0967-34-2111 (Aso Volcano Museum) · \n0967-34-1600 (Aso Tourist Information)",
    gettingThere: "JR Aso Station is the gateway — from there it's a bus to Asosanjo Terminal (via Kusasenri), then the crater shuttle if it's running. Renting a car in Kumamoto or Fukuoka gives you the most flexibility, since bus frequency is limited and the crater road keeps its own schedule.",
    tips: [
      "Check the official alert status at aso-volcano.jp the morning of your visit — the crater closes without notice when gas levels or seismicity rise, sometimes for months at a time.",
      "Don't build your whole day around the crater. Pair it with Kusasenri, which is free, open year-round, and has its own view of the smoking crater from a safe distance.",
      "Rent a car if you can — the bus network inside the caldera is thin, and a car gets you to Aso Shrine, Uchinomaki onsen, and the scenic Milk Road without waiting on schedules.",
      "Bring layers. Kusasenri sits at roughly 1,100m and is noticeably colder and windier than Kumamoto city or Fukuoka, even in summer.",
      "If the crater is closed, the Aso Volcano Museum's live camera feed is the next best thing — and its exhibits explain why the caldera looks the way it does.",
    ],
    reviewLinks: [
      { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%E9%98%BF%E8%98%87%E5%B1%B1%20%E7%86%8A%E6%9C%AC%E7%9C%8C", note: "Directions to the caldera and crater road" },
      { label: "Official site", url: "https://www.aso-volcano.jp/", note: "Real-time crater access status and alert level (Japanese)" },
      { label: "Aso Volcano Museum", url: "https://asomuse.jp/", note: "Exhibits, live crater camera, hours and admission" },
      { label: "Crater Shuttle Bus", url: "https://www.sankobus.jp/site/aso/lang_en/", note: "Shuttle schedule and fares, in English" },
      { label: "Kusasenri Grasslands", url: "https://www.asocity-kanko.jp/spot/kusasenri/", note: "Aso City tourism association's page on Kusasenri" },
    ],
    seasonalPicks: [
      { title: "Spring (Mar-May)", note: "Fresh green returns to Kusasenri right after the annual controlled burns; sakura blooms in the lowlands around the caldera in late March-April." },
      { title: "Autumn (Oct-Nov)", note: "The clearest skies of the year and the best crater visibility, with Kusasenri's grass turning a deep gold." },
      { title: "Winter (Dec-Feb)", note: "Frost-covered trees at Kusasenri through mid-February, and the thinnest crowds — but also the shortest crater-road hours." },
    ],
    disclaimer: "Crater access, shuttle bus operation, and museum hours/prices are accurate as of August 2026 but change constantly — this is one of Japan's most closely monitored active volcanoes, and the alert level can shut the crater with no notice. Always confirm current conditions on the official site linked above before building a day around it.",
    faqs: [
      { q: "Can I always see the crater at Mount Aso?", a: "No — Nakadake is an active, closely monitored volcano, and the crater road and shuttle bus close whenever the alert level rises, sometimes for months. Check the official status site the morning of your visit, and have Kusasenri as a backup plan." },
      { q: "Do I need a car to visit Mount Aso?", a: "It helps a lot. Public transport runs from JR Aso Station via bus to Asosanjo Terminal (with a stop at Kusasenri), then a shuttle to the crater when it's open, but services are infrequent. A rental car gives you access to Aso Shrine, Uchinomaki onsen, and the scenic drives around the caldera on your own schedule." },
      { q: "What's the best time of year to visit?", a: "October-November for the clearest skies and best crater visibility, with Kusasenri's grass turning gold. Spring (March-May) brings fresh green after the annual controlled burns. Whatever the season, crater access depends on the volcano's alert level more than the calendar." },
      { q: "What can I do if the crater is closed?", a: "Kusasenri grasslands are free, open year-round, and give you a clear view of the smoking crater from a safe distance. The Aso Volcano Museum, at the base of the crater road, has a live camera feed and exhibits on the caldera's formation." },
    ],
  },
];
