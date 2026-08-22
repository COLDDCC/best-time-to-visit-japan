export interface SpotGuide {
  name: string;
  slug: string;
  region: string;
  city: string;
  tagline: string;
  meta: string;
  image: string;
  imageAlt: string;
  logo?: string;
  galleryImages?: { src: string; alt: string }[];
  bestTime: string;
  priceRange: string;
  intro: string[];
  highlights: { title: string; body: string }[];
  menu: { name: string; price: string; note: string }[];
  hours: string;
  address: string;
  phone: string;
  tips: string[];
  nearby: { name: string; distance: string; note: string }[];
  reviewLinks: { label: string; url: string; note: string }[];
  socialLinks?: { label: string; url: string }[];
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
    galleryImages: [
      { src: "/images/store/kotonean/exterior1.jpg", alt: "Kotonean's shop exterior in the Awakubo district of Hita" },
      { src: "/images/store/kotonean/exterior2.jpg", alt: "Kotonean's shop front with the OPEN sign lit" },
      { src: "/images/store/kotonean/exterior3.jpg", alt: "Welcome to Kotonean sidewalk sign with hours and menu" },
      { src: "/images/store/kotonean/interior2.jpg", alt: "Strawberry and chocolate kakigori at Kotonean" },
      { src: "/images/store/kotonean/interior3.jpg", alt: "Grape kakigori made with fruit from Okura Grape Farm" },
    ],
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
    hours: "Café 10:00-18:00 · Bar 18:00-23:00 · May be closed Mondays",
    address: "2-4-38 Awakubo, Hita, Oita 877-0008",
    phone: "0973-23-6577 (main) · 080-2715-1242 (reservations, call 1-7 days ahead)",
    tips: [
      "Kotonean runs on reservations, especially in summer and around holidays — call about a week ahead to confirm.",
      "Lines tend to be shorter between 2-4pm; the dinner window (5-6pm) is the busiest.",
      "The garden view is the whole point — ask for a window seat when you book.",
      "Once you're seated, take your time — the Kangien garden sits right in front of you the whole visit.",
    ],
    nearby: [
      { name: "Mameda-machi Historic Street", distance: "5-min walk", note: "A historic shopping street lined with small shops and local snacks." },
      { name: "Sapporo Beer Hita Factory", distance: "15-min drive", note: "Tour the brewing process and sample the local beer." },
      { name: "Tenryo Hita Miso Museum", distance: "10-min drive", note: "A hands-on look at Hita's miso-making tradition and craft." },
      { name: "Sakuradaki Falls", distance: "20-min drive", note: "A natural waterfall that changes with the seasons — best known for autumn foliage." },
    ],
    reviewLinks: [
      { label: "Tabelog", url: "https://tabelog.com/oita/A4404/A440403/44008673/dtlrvwlst/", note: "Japan's leading restaurant review platform" },
      { label: "Google Maps", url: "https://www.google.com/maps/search/?api=1&query=%E7%90%B4%E9%9F%B3%E5%BA%B5%20%E6%97%A5%E7%94%B0%E5%B8%82", note: "Current ratings and photos" },
      { label: "Official site", url: "https://kotonean.net/", note: "Hours, menu, and announcements" },
    ],
    socialLinks: [
      { label: "Instagram", url: "https://www.instagram.com/kotonean/" },
      { label: "Facebook", url: "https://www.facebook.com/cafe.bar.kotonean/" },
      { label: "X (Twitter)", url: "https://x.com/kotonean" },
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
];
