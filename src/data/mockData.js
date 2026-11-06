/**
 * Sanchi Culinary & Operations Data
 * Authentic North Indian heritage recipes, Awadhi slow-cooking, and tandoori craft.
 * Zero lorem ipsum. Sensory, honest, precise.
 */

export const restaurantInfo = {
  name: "Sanchi",
  tagline: "Authentic North Indian Cuisine",
  heritageLine: "Inspired by the architectural poise and meditative grace of the Sanchi Stupa (3rd Century BCE).",
  address: "42 Heritage Promenade, Civil Lines, Bhopal, MP 462001",
  phone: "+91 755 248 9100",
  email: "concierge@sanchi-dining.in",
  hours: {
    lunch: "12:00 PM – 3:30 PM",
    dinner: "7:00 PM – 11:30 PM",
    days: "Tuesday through Sunday (Closed Mondays for spice blending)",
  },
  tables: 24,
  seatingCapacity: 86,
};

export const menuCategories = [
  { id: "all", label: "Full Collection" },
  { id: "starters", label: "Small Plates & Chaat" },
  { id: "tandoor", label: "Clay Oven / Tandoor" },
  { id: "mains", label: "Royal Curries & Handis" },
  { id: "biryani", label: "Awadhi Dum & Breads" },
  { id: "desserts", label: "Artisanal Sweetcraft" },
  { id: "drinks", label: "Heritage Elixirs" },
];

export const menuDishes = [
  {
    id: "dish-1",
    name: "Kakori Galawat Kebab",
    category: "starters",
    price: 680,
    isVeg: false,
    spiceLevel: 2,
    isSignature: true,
    available: true,
    imageAspect: "4/3",
    description: "Finely minced kid goat aged with raw papaya and 21 toasted spices, seared over smoldering embers to melt on the palate.",
    accompaniment: "Served on miniature saffron sheermal with crushed mint chutney."
  },
  {
    id: "dish-2",
    name: "Subz Shikanja Paneer Tikka",
    category: "tandoor",
    price: 540,
    isVeg: true,
    spiceLevel: 1,
    isSignature: false,
    available: true,
    imageAspect: "4/3",
    description: "Farmstead malai paneer steeped in yellow mustard, hung curd, and stone-ground caraway, blistered in the clay tandoor.",
    accompaniment: "Charred bell peppers and pickled shallots."
  },
  {
    id: "dish-3",
    name: "Nalli Nihari Khaas",
    category: "mains",
    price: 890,
    isVeg: false,
    spiceLevel: 2,
    isSignature: true,
    available: true,
    imageAspect: "4/3",
    description: "Slow-simmered shank of spring lamb cooked for twelve hours in sealed copper deg with cracked marrow and vetiver bark.",
    accompaniment: "Garnished with julienned ginger, fresh lime, and crisp fried onions."
  },
  {
    id: "dish-4",
    name: "Dal Sanchi 1928",
    category: "mains",
    price: 520,
    isVeg: true,
    spiceLevel: 1,
    isSignature: true,
    available: true,
    imageAspect: "4/3",
    description: "Whole black urad lentils braised overnight over wood smoke, emulsified with cultured white butter and vine-ripened plum tomatoes.",
    accompaniment: "Slow-churned white butter pat and crushed fenugreek."
  },
  {
    id: "dish-5",
    name: "Dum Pukht Gosht Biryani",
    category: "biryani",
    price: 820,
    isVeg: false,
    spiceLevel: 2,
    isSignature: true,
    available: true,
    imageAspect: "4/3",
    description: "Aged long-grain Dehradun Basmati rice layered with tender mutton cuts, ittar of kewra, and Kashmir saffron under a flour dough seal.",
    accompaniment: "Accompanied by chilled burhani garlic raita."
  },
  {
    id: "dish-6",
    name: "Kashmiri Nadru Yakhni",
    category: "mains",
    price: 610,
    isVeg: true,
    spiceLevel: 1,
    isSignature: false,
    available: true,
    imageAspect: "4/3",
    description: "Crisp lotus root rounds simmered in velvet yogurt gravy tempered with dried mint, fennel powder, and wild asafoetida.",
    accompaniment: "Steamed grain rice or tandoori roti."
  },
  {
    id: "dish-7",
    name: "Bhatti Murgh Pishori",
    category: "tandoor",
    price: 640,
    isVeg: false,
    spiceLevel: 3,
    isSignature: false,
    available: true,
    imageAspect: "4/3",
    description: "Spring chicken steeped in degi mirch, pounded coriander root, and black salt, roasted twice on iron skewers over charcoal.",
    accompaniment: "Lachha onion salad and roomali roti."
  },
  {
    id: "dish-8",
    name: "Khamiri Roti & Bakarkhani",
    category: "biryani",
    price: 190,
    isVeg: true,
    spiceLevel: 0,
    isSignature: false,
    available: true,
    imageAspect: "4/3",
    description: "Naturally fermented sourdough bread dusted with toasted nigella seeds, baked against the inner clay wall of the bhatti.",
    accompaniment: "Brushed with melted A2 desi ghee."
  },
  {
    id: "dish-9",
    name: "Shahi Tukda Saffron Cloud",
    category: "desserts",
    price: 420,
    isVeg: true,
    spiceLevel: 0,
    isSignature: true,
    available: true,
    imageAspect: "4/3",
    description: "Ghee-crisped brioche steeped in cardamom syrup, crowned with slow-reduced malai rabdi, silver leaf, and roasted Iranian pistachios.",
    accompaniment: "Infused with organic rosewater."
  },
  {
    id: "dish-10",
    name: "Gulab Jamun Flambé",
    category: "desserts",
    price: 380,
    isVeg: true,
    spiceLevel: 0,
    isSignature: false,
    available: true,
    imageAspect: "4/3",
    description: "Fresh chenna dumplings stuffed with green pistachio and nutmeg, warmed in saffron honey glaze.",
    accompaniment: "Pair with house-churned cardamom ice cream."
  },
  {
    id: "dish-11",
    name: "Jamun & Kaala Namak Shrub",
    category: "drinks",
    price: 290,
    isVeg: true,
    spiceLevel: 0,
    isSignature: true,
    available: true,
    imageAspect: "4/3",
    description: "Wild Indian blackberry press infused with roasted cumin, rock salt, and crushed mint, charged with mountain spring soda.",
    accompaniment: "Served over hand-cut crystal ice."
  },
  {
    id: "dish-12",
    name: "Kesar Badam Thandai",
    category: "drinks",
    price: 340,
    isVeg: true,
    spiceLevel: 0,
    isSignature: false,
    available: true,
    imageAspect: "4/3",
    description: "Stone-ground almond milk infused with hand-pounded melon seeds, black pepper, fennel seeds, and royal saffron threads.",
    accompaniment: "Chilled in unglazed terracotta tumblers."
  }
];

export const initialReservations = [
  {
    id: "RES-701",
    guestName: "Vikramaditya Roy",
    phone: "+91 98260 41220",
    email: "v.roy@heritageventures.in",
    date: "2026-11-06",
    time: "20:00",
    partySize: 4,
    table: "Table 04 (Courtyard)",
    status: "confirmed", // pending | confirmed | seated | cancelled
    specialRequest: "Anniversary celebration. Quiet alcove requested.",
    dietary: "Non-Veg",
  },
  {
    id: "RES-702",
    guestName: "Ananya Deshmukh",
    phone: "+91 94251 88310",
    email: "ananya.d@studioarch.com",
    date: "2026-11-06",
    time: "20:30",
    partySize: 2,
    table: "Table 07 (Torana View)",
    status: "confirmed",
    specialRequest: "Strictly vegetarian tasting menu.",
    dietary: "Veg",
  },
  {
    id: "RES-703",
    guestName: "Col. Rajeshwar Singh",
    phone: "+91 98930 11942",
    email: "rajeshwar.singh@army.gov.in",
    date: "2026-11-06",
    time: "19:30",
    partySize: 6,
    table: "Private Dining Hall",
    status: "pending",
    specialRequest: "Needs wheelchair accessibility near the private entrance.",
    dietary: "Mixed",
  },
  {
    id: "RES-704",
    guestName: "Meera & Siddharth Joshi",
    phone: "+91 98112 55431",
    email: "siddharth.j@zenithtech.io",
    date: "2026-11-06",
    time: "21:00",
    partySize: 2,
    table: "Table 12 (Garden)",
    status: "seated",
    specialRequest: "Sommelier pairing recommendation.",
    dietary: "Non-Veg",
  },
  {
    id: "RES-705",
    guestName: "Dr. Farooq Qureshi",
    phone: "+91 97520 90114",
    email: "f.qureshi@aimsmed.org",
    date: "2026-11-06",
    time: "13:30",
    partySize: 5,
    table: "Table 09",
    status: "cancelled",
    specialRequest: "Flight delayed. Cancelled with notification.",
    dietary: "Non-Veg",
  }
];

export const initialOrders = [
  {
    id: "ORD-941",
    table: "Table 04",
    guest: "Vikramaditya Roy",
    status: "preparing", // new | preparing | ready | delivered
    items: [
      { name: "Kakori Galawat Kebab", quantity: 2, price: 680 },
      { name: "Nalli Nihari Khaas", quantity: 1, price: 890 },
      { name: "Khamiri Roti", quantity: 4, price: 190 }
    ],
    total: 3010,
    timestamp: "19:42",
    notes: "Mild spice on kebabs for young guest."
  },
  {
    id: "ORD-942",
    table: "Table 12",
    guest: "Meera Joshi",
    status: "delivered",
    items: [
      { name: "Subz Shikanja Paneer Tikka", quantity: 1, price: 540 },
      { name: "Dal Sanchi 1928", quantity: 1, price: 520 },
      { name: "Dum Pukht Gosht Biryani", quantity: 1, price: 820 },
      { name: "Jamun Shrub", quantity: 2, price: 290 }
    ],
    total: 2460,
    timestamp: "19:15",
    notes: "All accompaniments served."
  },
  {
    id: "ORD-943",
    table: "Table 02",
    guest: "Walk-in Guest",
    status: "ready",
    items: [
      { name: "Bhatti Murgh Pishori", quantity: 1, price: 640 },
      { name: "Bakarkhani", quantity: 2, price: 190 }
    ],
    total: 1020,
    timestamp: "19:55",
    notes: "Plated for runner."
  },
  {
    id: "ORD-944",
    table: "Table 08",
    guest: "Kavita Rao",
    status: "new",
    items: [
      { name: "Kashmiri Nadru Yakhni", quantity: 1, price: 610 },
      { name: "Dal Sanchi 1928", quantity: 1, price: 520 },
      { name: "Shahi Tukda Saffron Cloud", quantity: 2, price: 420 }
    ],
    total: 1970,
    timestamp: "20:04",
    notes: "Guest requested dessert fired immediately after mains."
  }
];

export const initialReviews = [
  {
    id: "REV-101",
    guestName: "Arjun Rampal Verma",
    date: "2 days ago",
    rating: 5,
    title: "A sanctum of ancient Awadhi culinary discipline.",
    body: "The Nalli Nihari at Sanchi is cooked with genuine reverence. The marrow dissolves effortlessly into the bone jus without excessive grease. The serenity of the courtyard and subtle Stupa architecture makes you speak in softer tones.",
    reply: "We are honored by your kind words, Arjun. It is our daily discipline to honor the 12-hour copper deg technique.",
    repliedAt: "Yesterday"
  },
  {
    id: "REV-102",
    guestName: "Sunita Gokhale",
    date: "4 days ago",
    rating: 5,
    title: "Finally, vegetarian food treated with regal distinction.",
    body: "Often high-end dining treats vegetarian options as an afterthought. Sanchi's Dal 1928 and Nadru Yakhni are revelationary. The smokiness in the urad dal tastes like old timber and slow clay.",
    reply: null,
    repliedAt: null
  },
  {
    id: "REV-103",
    guestName: "Marcus Sterling",
    date: "1 week ago",
    rating: 4,
    title: "Sublime flavours, highly attentive staff.",
    body: "Visited during our central India architectural tour. The Kakori kebabs literally vanished in the mouth. Table service was graceful, though we had to wait 15 minutes past our booking time due to the courtyard turnover.",
    reply: "Thank you for joining us from afar, Marcus. We have reinforced our reservation buffer intervals to guarantee immediate seating.",
    repliedAt: "5 days ago"
  }
];

export const dashboardOverviewStats = {
  todayRevenue: "₹ 1,48,650",
  revenueGrowth: "+18.4% vs last Thursday",
  todayGuests: 64,
  occupancyRate: "88%",
  openReservations: 18,
  activeKitchenTickets: 4,
  sevenDayRevenue: [
    { day: "Fri", amount: 185000, covers: 82 },
    { day: "Sat", amount: 242000, covers: 110 },
    { day: "Sun", amount: 268000, covers: 118 },
    { day: "Mon", amount: 0, covers: 0 }, // Closed
    { day: "Tue", amount: 132000, covers: 58 },
    { day: "Wed", amount: 144000, covers: 62 },
    { day: "Thu", amount: 148650, covers: 64 },
  ],
  topDishes: [
    { name: "Nalli Nihari Khaas", orders: 48, revenue: "₹ 42,720" },
    { name: "Dal Sanchi 1928", orders: 56, revenue: "₹ 29,120" },
    { name: "Kakori Galawat Kebab", orders: 41, revenue: "₹ 27,880" },
    { name: "Dum Pukht Biryani", orders: 32, revenue: "₹ 26,240" },
  ]
};

export const galleryItems = [
  {
    id: "gal-1",
    title: "Hand-Beaten Copper Degs",
    category: "Craft",
    aspect: "16/9",
    image: "/assets/gallery/gal-1.jpg",
    description: "Centuries-old Awadhi copper vessels simmering over aged charcoal embers.",
    badge: "Heritage Kitchen"
  },
  {
    id: "gal-2",
    title: "Kakori Embers & Smoked Ghee",
    category: "Cuisine",
    aspect: "4/5",
    image: "/assets/gallery/gal-2.jpg",
    description: "Skewers of Kakori Galawat basted in grass-fed churned ghee over the bhatti.",
    badge: "Signature Course"
  },
  {
    id: "gal-3",
    title: "The Sanchi Torana Archway",
    category: "Ambiance",
    aspect: "16/9",
    image: "/assets/gallery/gal-3.jpg",
    description: "Carved sandstone pavilion illuminated by warm evening lanterns and quiet reflections.",
    badge: "Courtyard Dining"
  },
  {
    id: "gal-4",
    title: "Stone-Ground Whole Spices",
    category: "Craft",
    aspect: "4/5",
    image: "/assets/gallery/gal-4.jpg",
    description: "Cardamom pods, black mace, vetiver, and Kashmir saffron pounded fresh every dawn.",
    badge: "Artisanal Spicework"
  },
  {
    id: "gal-5",
    title: "The Royal Dum Seal",
    category: "Cuisine",
    aspect: "16/9",
    image: "/assets/gallery/gal-5.jpg",
    description: "Dough seal broken at the tableside, releasing floral kewra and saffron aromatics.",
    badge: "Degustation Ritual"
  },
  {
    id: "gal-6",
    title: "Evening Lantern Sanctuary",
    category: "Ambiance",
    aspect: "4/5",
    image: "/assets/gallery/gal-6.jpg",
    description: "Private dining alcoves surrounded by natural water basins and fragrant jasmine.",
    badge: "Private Pavilions"
  }
];

