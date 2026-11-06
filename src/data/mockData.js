/**
 * Dilliwasi Culinary & Restaurant Data
 * Fine Dine Restaurant & Rooftop Cafe — Relish the Tradition with Pure Desi Ghee Delights
 * Est. 2001 • 100% Pure Vegetarian
 */

export const restaurantInfo = {
  name: "Dilliwasi",
  subtitle: "Fine Dine Restaurant & Rooftop Cafe",
  tagline: "Relish the Tradition with Pure Desi Ghee Delights",
  heritageLine: "Serving 100% pure vegetarian culinary mastery in Haridwar since 2001.",
  address: "Outlet 2: 3rd - 4th Floor, A3 Amar Complex (Opp. ICICI Bank), Shivalik Nagar, Haridwar",
  phone: "+91 90588 82691",
  phones: ["+91 90588 82691", "+91 90588 82692", "+91 90588 82693"],
  email: "dilliwasiunit2@gmail.com",
  gstNumber: "05AAWFD8973H1ZP",
  establishedYear: 2001,
  hours: {
    lunch: "11:00 AM – 4:00 PM",
    dinner: "6:30 PM – 11:00 PM",
    days: "Open 7 Days a Week",
  },
  pureVeg: true,
  pureGhee: true,
};

export const menuCategories = [
  { id: "all", label: "All Items" },
  { id: "combos", label: "Combos & Royal Thali" },
  { id: "tandoor", label: "Tandoori Starters" },
  { id: "curries", label: "Paneer & Sabzi" },
  { id: "dals", label: "Dals & Desi Ghee" },
  { id: "breads", label: "Breads & Naans" },
  { id: "rice", label: "Rice & Biryani" },
  { id: "chinese", label: "Chinese & Noodles" },
  { id: "momos", label: "Momos" },
  { id: "sizzlers", label: "Sizzlers & Burgers" },
  { id: "pizzas", label: "Pizzas (9\")" },
  { id: "pastas", label: "Pastas" },
  { id: "western", label: "Fries & Finger Food" },
  { id: "soups", label: "Soups & Shorba" },
  { id: "salads", label: "Salads & Chaat" },
  { id: "beverages", label: "Mocktails & Coolers" },
  { id: "shakes", label: "Shakes & Cold Coffee" },
  { id: "desserts", label: "Raitas & Desserts" },
];

export const menuDishes = [
  // --- COMBOS & ROYAL THALI ---
  {
    id: "dw-thali-royal",
    name: "Dilliwasi Royal Thali",
    category: "combos",
    price: 299,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "The grand vegetarian feast: Dal Makhani, Paneer Butter Masala, Seasonal Sabzi, Saffron Jeera Rice, 2 Butter Naan or Rotis, Raita, Salad, Papad & Gulab Jamun.",
    accompaniment: "Prepared fresh with pure desi ghee."
  },
  {
    id: "dw-combo-paneer",
    name: "Paneer + Stuffed Naan + Buttermilk + Rasmalai",
    category: "combos",
    price: 249,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Rich shahi paneer curry served with piping hot stuffed naan, cool spiced buttermilk, and 1pc artisanal rasmalai.",
    accompaniment: "A complete satisfying meal."
  },
  {
    id: "dw-combo-rajma",
    name: "Rajma Chawal + Sweet Lassi Combo",
    category: "combos",
    price: 199,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Classic slow-simmered Punjabi Rajma Raseela with fragrant steamed basmati rice, accompanied by a thick creamy sweet lassi.",
    accompaniment: "Comfort food at its best."
  },
  {
    id: "dw-combo-chole",
    name: "Chole Chawal + Sweet Lassi Combo",
    category: "combos",
    price: 199,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Traditional spicy chana masala served with basmati rice and a refreshing chilled sweet lassi.",
    accompaniment: "Pickled onions and green chillies."
  },
  {
    id: "dw-combo-chana-kulcha",
    name: "Chana Masala + Stuffed Kulcha Combo",
    category: "combos",
    price: 229,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Tangy Amritsari style chana masala paired with crispy butter-layered stuffed tandoori kulcha.",
    accompaniment: "Served with spiced onions & mint dip."
  },
  {
    id: "dw-combo-chilli-paneer",
    name: "Chilli Paneer Combo",
    category: "combos",
    price: 249,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Wok-tossed Indo-Chinese chilli paneer in savoury gravy served with choice of Hakka Noodles or Veg Fried Rice.",
    accompaniment: "Sweet chilli dip."
  },
  {
    id: "dw-combo-manchurian",
    name: "Veg Manchurian Combo",
    category: "combos",
    price: 229,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crispy vegetable dumplings in rich ginger-garlic soya gravy paired with Hakka Noodles or Fried Rice.",
    accompaniment: "Crispy wonton strips."
  },
  {
    id: "dw-combo-western",
    name: "Western Snacks Combo",
    category: "combos",
    price: 199,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crisp potato wedges, salted French fries, and cheese garlic bread toasts with garlic mayo & salsa.",
    accompaniment: "House dip."
  },

  // --- TANDOORI STARTERS ---
  {
    id: "dw-platter-special",
    name: "Dilliwasi Special Tandoori Platter",
    category: "tandoor",
    price: 449,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Grand tandoori assortment: Paneer Malai Tikka, Tandoori Soya Chaap, Dahi Ke Kebab, Hara Bhara Kebab & Tandoori Khumb.",
    accompaniment: "Mint chutney, pickled onions & lime wedges."
  },
  {
    id: "dw-paneer-malai",
    name: "Paneer Malai Tikka",
    category: "tandoor",
    price: 299,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Velvety soft cottage cheese cubes marinated in rich cashew cream, hung curd, and crushed green cardamom, gently charred in clay tandoor.",
    accompaniment: "Lachha onion & pudina dip."
  },
  {
    id: "dw-paneer-achari",
    name: "Achari Paneer Tikka",
    category: "tandoor",
    price: 289,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Fresh paneer steeped in pickled mustard, fennel, kalonji, and Kashmiri red chillies, charred over glowing embers.",
    accompaniment: "Tangy mint dip."
  },
  {
    id: "dw-paneer-shole",
    name: "Rajasthani Paneer Ke Shole",
    category: "tandoor",
    price: 289,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Crispy bread rolls stuffed with spiced cottage cheese, green chillies, and fresh herbs, fried to golden perfection.",
    accompaniment: "Sweet date chutney and mint raita."
  },
  {
    id: "dw-paneer-afghani",
    name: "Afghani Paneer Tikka",
    category: "tandoor",
    price: 299,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Mild and fragrant cottage cheese marinated with cashew paste, cheese, white pepper, and saffron butter.",
    accompaniment: "Creamy dipping sauce."
  },
  {
    id: "dw-paneer-lahsuni",
    name: "Lahsuni Paneer Tikka",
    category: "tandoor",
    price: 289,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Smoked paneer cubes infused with roasted golden garlic, yellow chilli powder, and mustard oil.",
    accompaniment: "Pudina chutney."
  },
  {
    id: "dw-paneer-haryali",
    name: "Haryali Paneer Tikka",
    category: "tandoor",
    price: 279,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Fresh mint, coriander, and spinach marinated cottage cheese grilled to tender smokiness.",
    accompaniment: "Lemon wedges."
  },
  {
    id: "dw-chaap-tandoori",
    name: "Tandoori Soya Chaap",
    category: "tandoor",
    price: 249,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Layered soya chaap steeped in spicy tandoori masala and basted over clay tandoor embers.",
    accompaniment: "Onion rings & mint chutney."
  },
  {
    id: "dw-chaap-malai",
    name: "Tandoori Malai Chaap",
    category: "tandoor",
    price: 259,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Juicy soya chaap enveloped in fresh cream, cashew butter, and aromatic ground spices.",
    accompaniment: "Fresh lemon & lachha onions."
  },
  {
    id: "dw-chaap-afghani",
    name: "Afghani Soya Chaap",
    category: "tandoor",
    price: 269,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Rich and creamy Afghani spiced soya chaap charred gently with butter glaze.",
    accompaniment: "Spiced coriander dip."
  },
  {
    id: "dw-dahi-kebab",
    name: "Dahi Ke Kebab",
    category: "tandoor",
    price: 269,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Melt-in-mouth golden patties made from hung curd, roasted gram flour, finely chopped ginger, and roasted cumin.",
    accompaniment: "Sweet pomegranate reduction."
  },
  {
    id: "dw-hara-bhara",
    name: "Hara Bhara Kebab",
    category: "tandoor",
    price: 279,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Wholesome patties of baby spinach, green peas, mashed potatoes, and cashew halves.",
    accompaniment: "Mint chutney."
  },
  {
    id: "dw-tandoori-khumb",
    name: "Tandoori Khumb (Stuffed Mushrooms)",
    category: "tandoor",
    price: 279,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Plump button mushrooms stuffed with spiced cottage cheese and herbs, roasted in clay oven.",
    accompaniment: "Chatpata onion rings."
  },
  {
    id: "dw-makkai-seekh",
    name: "Makkai Ki Seekh",
    category: "tandoor",
    price: 259,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Golden sweet corn and vegetable mince skewered and roasted with royal garam masala.",
    accompaniment: "Mint yoghurt sauce."
  },
  {
    id: "dw-patiala-seekh",
    name: "Patiala Shahi Seekh Kebab",
    category: "tandoor",
    price: 269,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Royal vegetable seekh kebabs spiced with mace, cardamom, and toasted nuts.",
    accompaniment: "Pudina dip."
  },

  // --- MAIN COURSE - PANEER & VEGETABLES ---
  {
    id: "dw-paneer-labaabdaar",
    name: "Paneer Labaabdaar",
    category: "curries",
    price: 319,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Succulent paneer cubes simmered in a velvety tomato and onion gravy enriched with grated cottage cheese and pure desi ghee.",
    accompaniment: "Best paired with Butter Naan."
  },
  {
    id: "dw-kadai-paneer",
    name: "Kadai Paneer",
    category: "curries",
    price: 309,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Cottage cheese tossed with crunchy bell peppers, onions, and freshly pounded coriander and dry red chilli kadai masala.",
    accompaniment: "Best with Laccha Paratha."
  },
  {
    id: "dw-paneer-tikka-masala",
    name: "Paneer Tikka Masala",
    category: "curries",
    price: 329,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Clay oven roasted paneer tikka folded into a smoky, spiced onion-tomato gravy with kasoori methi.",
    accompaniment: "Garnished with ginger juliennes."
  },
  {
    id: "dw-dum-ka-dhania-paneer",
    name: "Dum Ka Dhania Paneer",
    category: "curries",
    price: 329,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Dilliwasi signature paneer cooked under sealed dum with aromatic roasted fresh coriander and green peppercorns.",
    accompaniment: "Rich aromatic gravy."
  },
  {
    id: "dw-paneer-butter-masala",
    name: "Paneer Butter Masala",
    category: "curries",
    price: 299,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Classic mild and creamy tomato gravy with tender paneer cubes finished with fresh cream and butter.",
    accompaniment: "Best with Garlic Naan."
  },
  {
    id: "dw-palak-paneer",
    name: "Palak Paneer",
    category: "curries",
    price: 289,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Freshly blanched pureed farm spinach tempered with garlic, cumin, and soft paneer cubes in desi ghee.",
    accompaniment: "Nutritious & flavorful."
  },
  {
    id: "dw-matar-paneer",
    name: "Matar Paneer",
    category: "curries",
    price: 289,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Tender green peas and cottage cheese cooked in homestyle spiced onion tomato curry.",
    accompaniment: "Best with Tandoori Roti."
  },
  {
    id: "dw-paneer-khurchan",
    name: "Paneer Khurchan",
    category: "curries",
    price: 319,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Tawa-scraped shredded paneer tossed with capsicum, tomatoes, and robust spices in high heat.",
    accompaniment: "Distinctive rustic flavor."
  },
  {
    id: "dw-shahi-paneer",
    name: "Shahi Paneer",
    category: "curries",
    price: 309,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Mughlai style sweet and creamy cashew nut gravy infused with cardamom and saffron.",
    accompaniment: "Melt-in-mouth indulgence."
  },
  {
    id: "dw-malai-kofta",
    name: "Malai Kofta",
    category: "curries",
    price: 309,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Delicate dumplings of paneer, mawa, and dry fruits served in a velvety golden cashew-cream gravy.",
    accompaniment: "Royal feast delicacy."
  },
  {
    id: "dw-mushroom-masala",
    name: "Mushroom Masala",
    category: "curries",
    price: 289,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Fresh button mushrooms simmered in a spiced Punjabi onion-tomato bhuna masala.",
    accompaniment: "Garnished with cilantro."
  },
  {
    id: "dw-mushroom-do-pyaza",
    name: "Mushroom Do Pyaza",
    category: "curries",
    price: 279,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Button mushrooms and caramelized shallots cooked with whole crushed spices.",
    accompaniment: "Best with Missi Roti."
  },
  {
    id: "dw-sabz-diwani-handi",
    name: "Sabz Diwani Handi",
    category: "curries",
    price: 289,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Assorted farm vegetables, baby spinach, and paneer simmered in an earthenware clay handi with royal spices.",
    accompaniment: "Rich earthy flavors."
  },
  {
    id: "dw-mix-veg",
    name: "Mix Veg",
    category: "curries",
    price: 249,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Carrots, beans, peas, cauliflower, and paneer cooked in balanced North Indian gravy.",
    accompaniment: "Homestyle comfort."
  },
  {
    id: "dw-masala-chaap",
    name: "Masala Chaap Gravy",
    category: "curries",
    price: 269,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Tender soya chaap chunks cooked in aromatic spiced thick onion-tomato gravy.",
    accompaniment: "Rich and hearty."
  },
  {
    id: "dw-achari-chaap",
    name: "Achari Chaap Gravy",
    category: "curries",
    price: 279,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Tangy pickled spiced soya chaap simmered in zesty gravy.",
    accompaniment: "Spicy & flavorful."
  },
  {
    id: "dw-kashmiri-dum-aloo",
    name: "Kashmiri Dum Aloo",
    category: "curries",
    price: 259,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Baby potatoes slow-cooked on dum in fennel, dry ginger, and Kashmiri red chilli yoghurt gravy.",
    accompaniment: "Authentic Kashmiri style."
  },
  {
    id: "dw-aloo-gobhi",
    name: "Aloo Gobhi Adraki",
    category: "curries",
    price: 239,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Florets of cauliflower and potatoes tossed with fresh ginger juliennes and whole cumin in desi ghee.",
    accompaniment: "Dry sabzi."
  },
  {
    id: "dw-jeera-aloo",
    name: "Hing Jeera Ke Chatpate Aloo",
    category: "curries",
    price: 209,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Crispy baby potatoes tempered with pungent asafoetida, roasted cumin seeds, and amchur.",
    accompaniment: "Chatpata accompaniment."
  },

  // --- DALS & DESI GHEE CURRIES ---
  {
    id: "dw-dal-black-dairy",
    name: "Black Dairy Dal (Dal Makhani)",
    category: "dals",
    price: 289,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "The crown jewel: Whole black urad lentils slow-simmered for 16 hours over low charcoal embers with pure desi ghee, fresh cream, and vine-ripened tomatoes.",
    accompaniment: "Topped with churned white butter."
  },
  {
    id: "dw-dal-bukhara",
    name: "Dal Bukhara",
    category: "dals",
    price: 259,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Velvety smooth black lentils cooked with tomatoes, garlic, and pure desi ghee, without kidney beans, in authentic Bukhara tradition.",
    accompaniment: "Melt-in-mouth richness."
  },
  {
    id: "dw-dal-tadka",
    name: "Dal Tadka (Double Desi Ghee)",
    category: "dals",
    price: 259,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Yellow arhar lentils tempered twice with sizzling pure desi ghee, cumin seeds, garlic cloves, and Kashmiri whole chillies.",
    accompaniment: "Aromatic & comforting."
  },
  {
    id: "dw-dal-mughalai",
    name: "Dal Mughalai",
    category: "dals",
    price: 269,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Rich blended yellow lentils enriched with cashew paste, saffron hints, and fragrant whole spices.",
    accompaniment: "Smooth creamy finish."
  },
  {
    id: "dw-dal-panchmel",
    name: "Dal Panchmel",
    category: "dals",
    price: 269,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Five traditional lentils cooked together with Rajasthani spices, tempered with pure ghee and hing.",
    accompaniment: "Nutrient-dense heritage recipe."
  },
  {
    id: "dw-chana-masala",
    name: "Pindi Chana Masala",
    category: "dals",
    price: 239,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Dark chickpea curry cooked with roasted tea leaves, dried pomegranate seeds (anardana), and caraway.",
    accompaniment: "Best paired with Stuffed Kulcha."
  },
  {
    id: "dw-rajma-raseela",
    name: "Rajma Raseela",
    category: "dals",
    price: 239,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Tender red kidney beans cooked in aromatic onion-tomato masala with fresh coriander and desi ghee.",
    accompaniment: "The ultimate pairing for Steamed Rice."
  },

  // --- BREADS & NAANS ---
  {
    id: "dw-bread-basket",
    name: "Assorted Bread Basket",
    category: "breads",
    price: 149,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "A royal bread basket containing 1 Butter Naan, 1 Laccha Paratha, 1 Missi Roti, and 1 Tandoori Roti.",
    accompaniment: "Served hot in traditional cane basket."
  },
  {
    id: "dw-cheese-garlic-naan",
    name: "Cheese Garlic Naan",
    category: "breads",
    price: 60,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Clay oven naan stuffed with molten mozzarella and topped with minced roasted garlic and fresh coriander.",
    accompaniment: "Crispy and stretchy."
  },
  {
    id: "dw-paneer-naan",
    name: "Paneer Stuffed Naan",
    category: "breads",
    price: 80,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Hand-stretched leavened bread stuffed with spiced crumbled paneer and brushed with pure desi ghee.",
    accompaniment: "Crispy outer crust."
  },
  {
    id: "dw-stuffed-kulcha",
    name: "Stuffed Kulcha (Aloo / Paneer / Mix)",
    category: "breads",
    price: 65,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Flaky tandoori kulcha stuffed with your choice of spiced potato, cottage cheese, or mixed fillings.",
    accompaniment: "Butter glazed."
  },
  {
    id: "dw-laccha-paratha",
    name: "Laccha Paratha",
    category: "breads",
    price: 40,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Multi-layered whole wheat bread crisped with pure desi ghee in the clay tandoor.",
    accompaniment: "Flaky and crispy layers."
  },
  {
    id: "dw-pudina-paratha",
    name: "Pudina Parantha",
    category: "breads",
    price: 50,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Layered whole wheat paratha dusted with sun-dried mint leaves and carom seeds.",
    accompaniment: "Refreshing mint aroma."
  },
  {
    id: "dw-garlic-naan",
    name: "Garlic Naan",
    category: "breads",
    price: 55,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Tandoori naan topped with roasted garlic and coriander, basted with butter.",
    accompaniment: "Fresh and aromatic."
  },
  {
    id: "dw-butter-naan",
    name: "Butter Naan",
    category: "breads",
    price: 50,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Classic soft and pillowy leavened bread brushed with generous butter.",
    accompaniment: "Piping hot."
  },
  {
    id: "dw-plain-naan",
    name: "Plain Naan",
    category: "breads",
    price: 45,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Traditional refined flour bread baked on the hot clay wall of the tandoor.",
    accompaniment: "Soft and blistered."
  },
  {
    id: "dw-missi-roti",
    name: "Missi Roti",
    category: "breads",
    price: 35,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Nutritious spiced gram flour and wheat flour bread tempered with onions, green chillies, and ajwain.",
    accompaniment: "Brushed with desi ghee."
  },
  {
    id: "dw-butter-roti",
    name: "Butter Tandoori Roti",
    category: "breads",
    price: 20,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Crispy whole wheat bread baked in clay tandoor and brushed with pure desi ghee.",
    accompaniment: "Wholesome staple."
  },
  {
    id: "dw-plain-roti",
    name: "Plain Tandoori Roti",
    category: "breads",
    price: 15,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Fresh whole wheat flatbread baked directly over embers.",
    accompaniment: "Light & healthy."
  },
  {
    id: "dw-masala-papad",
    name: "Masala Papad",
    category: "breads",
    price: 69,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crispy roasted papad topped with tangy diced onions, tomatoes, green chillies, and chaat masala.",
    accompaniment: "Crunchy starter."
  },
  {
    id: "dw-roasted-papad",
    name: "Roasted Papad (2pcs)",
    category: "breads",
    price: 40,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crisp roasted lentil papad.",
    accompaniment: "Accompaniment."
  },

  // --- RICE & BIRYANI ---
  {
    id: "dw-biryani-hyderabadi",
    name: "Veg Hyderabadi Dum Biryani",
    category: "rice",
    price: 269,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Long grain aged basmati rice layered with garden vegetables, paneer cubes, saffron strands, and kewra water, cooked in sealed deg on dum.",
    accompaniment: "Served with spiced vegetable raita & salan."
  },
  {
    id: "dw-brown-onion-pulao",
    name: "Brown Onion Pulao",
    category: "rice",
    price: 169,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Basmati rice cooked with golden caramelized crispy brown onions and whole spices.",
    accompaniment: "Fragrant & rich."
  },
  {
    id: "dw-veg-pulao",
    name: "Veg Pulao",
    category: "rice",
    price: 199,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Basmati rice tossed with fresh carrots, green beans, peas, and whole aromatics in desi ghee.",
    accompaniment: "Light and comforting."
  },
  {
    id: "dw-matar-pulao",
    name: "Matar Pulao",
    category: "rice",
    price: 189,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Fragrant rice tossed with tender sweet green peas and cumin seeds.",
    accompaniment: "Delicate flavor."
  },
  {
    id: "dw-jeera-rice",
    name: "Jeera Rice",
    category: "rice",
    price: 139,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Steamed basmati rice tempered with roasted cumin seeds and desi ghee.",
    accompaniment: "Perfect with dals."
  },
  {
    id: "dw-steamed-rice",
    name: "Steamed Basmati Rice",
    category: "rice",
    price: 129,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Fluffy aged basmati rice steamed to perfection.",
    accompaniment: "Pure staple."
  },

  // --- MOMOS ---
  {
    id: "dw-momo-platter",
    name: "Dilliwasi Momos Platter (10pcs)",
    category: "momos",
    price: 299,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Assorted platter of Steamed, Tandoori, Crispy, and Creamy Cheesy Momos served with fiery red chilli sauce & mayonnaise.",
    accompaniment: "Dilliwasi party favorite."
  },
  {
    id: "dw-momo-creamy-cheese",
    name: "Creamy Cheesy Momos (8pcs)",
    category: "momos",
    price: 249,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Fried vegetable momos tossed in a luscious molten cheese and garlic cream sauce.",
    accompaniment: "Rich & decadent."
  },
  {
    id: "dw-momo-tandoori",
    name: "Tandoori Momos (8pcs)",
    category: "momos",
    price: 229,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Dumplings coated in spicy tandoori marinade and charred over red-hot charcoal.",
    accompaniment: "Mint chutney & lemon."
  },
  {
    id: "dw-momo-butter-garlic",
    name: "Butter Garlic Momos (8pcs)",
    category: "momos",
    price: 219,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Momos tossed in a sizzling pan with minced garlic, cracked black pepper, and butter.",
    accompaniment: "Garlic aroma."
  },
  {
    id: "dw-momo-peri-peri",
    name: "Peri Peri Momos (8pcs)",
    category: "momos",
    price: 209,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crispy fried momos dusted with fiery African peri peri spice blend.",
    accompaniment: "Cool mayo dip."
  },
  {
    id: "dw-momo-crispy",
    name: "Crispy Fried Momos (8pcs)",
    category: "momos",
    price: 229,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crunchy golden fried vegetable dumplings with thin crispy crust.",
    accompaniment: "Spicy Schezwan chutney."
  },
  {
    id: "dw-momo-steamed",
    name: "Classic Steamed Momos (8pcs)",
    category: "momos",
    price: 199,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Delicate thin-skinned steamed dumplings filled with finely shredded cabbage, carrots, onions, and herbs.",
    accompaniment: "Authentic chilli garlic dip."
  },

  // --- SIZZLERS & BURGERS/SANDWICHES ---
  {
    id: "dw-sizzler-paneer",
    name: "Chilli Paneer Sizzler",
    category: "sizzlers",
    price: 449,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Smoking hot cast-iron platter with spiced paneer skewers, wok-tossed noodles or fried rice, buttered vegetables, and crispy french fries.",
    accompaniment: "Served with smoking sizzler sauce."
  },
  {
    id: "dw-sizzler-patty",
    name: "Veg Patty Sizzler",
    category: "sizzlers",
    price: 349,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Sizzling platter with crisp vegetable patties, herb rice, grilled tomato slices, sauteed vegetables, and pepper gravy.",
    accompaniment: "Table-side sizzle."
  },
  {
    id: "dw-sandwich-club",
    name: "Veg Club Sandwich",
    category: "sizzlers",
    price: 230,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Triple-layer toasted sandwich filled with sliced cucumber, tomatoes, cheese, coleslaw, and spicy mint spread.",
    accompaniment: "Served with French fries & ketchup."
  },
  {
    id: "dw-sandwich-cheese-grill",
    name: "Veg Cheese & Grill Sandwich",
    category: "sizzlers",
    price: 210,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Golden grilled sandwich oozing with melted cheese, bell peppers, and sweet corn.",
    accompaniment: "French fries."
  },
  {
    id: "dw-sandwich-bhujia",
    name: "Bombay Bhujia Sandwich",
    category: "sizzlers",
    price: 179,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crispy Mumbai street style sandwich layered with spiced potatoes, onions, chutneys, and crunchy Bikaneri bhujia.",
    accompaniment: "Mint chutney dip."
  },
  {
    id: "dw-burger-cottage-cheese",
    name: "Cottage Cheese Paneer Burger",
    category: "sizzlers",
    price: 179,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Grilled marinated paneer steak with crisp lettuce, onion rings, cheese slice, and chipotle mayo in a toasted bun.",
    accompaniment: "French fries."
  },
  {
    id: "dw-burger-aloo-patty",
    name: "Aloo Patty Burger",
    category: "sizzlers",
    price: 159,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crispy spiced potato patty topped with tomatoes, onions, lettuce, and herb mayonnaise.",
    accompaniment: "French fries."
  },

  // --- CHINESE SPECIALITIES ---
  {
    id: "dw-chilli-paneer",
    name: "Stuffed Chilli Paneer (Dry / Gravy)",
    category: "chinese",
    price: 290,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Crisp cottage cheese cubes stuffed with spicy seasoning, wok-tossed with capsicum, spring onions, and dark soya chilli glaze.",
    accompaniment: "Dilliwasi Chinese classic."
  },
  {
    id: "dw-crispy-baby-corn",
    name: "Crispy Baby Corn",
    category: "chinese",
    price: 279,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Golden batter-fried tender baby corn tossed with sweet chilli, scallions, and sesame seeds.",
    accompaniment: "Crunchy appetizer."
  },
  {
    id: "dw-drums-heaven-veg",
    name: "Drums of Heaven (Veg Special)",
    category: "chinese",
    price: 290,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Crispy vegetable & soya drumsticks tossed in fiery garlic and red chilli Sichuan sauce.",
    accompaniment: "Sweet chilli dip."
  },
  {
    id: "dw-honey-chilli-potato",
    name: "Honey Chilli Potato",
    category: "chinese",
    price: 240,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Crispy fried potato fingers coated in a sticky honey, chilli paste, and toasted white sesame glaze.",
    accompaniment: "Sweet and spicy."
  },
  {
    id: "dw-manchurian",
    name: "Veg Manchurian (Dry / Gravy)",
    category: "chinese",
    price: 230,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Minced vegetable balls tossed with minced garlic, ginger, green chillies, and soy broth.",
    accompaniment: "Classic Indo-Chinese."
  },
  {
    id: "dw-spring-roll",
    name: "Spring Roll",
    category: "chinese",
    price: 220,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Golden crispy pastry rolls packed with julienned vegetables and glass noodles.",
    accompaniment: "Sweet chilli dip."
  },
  {
    id: "dw-thai-spring-roll",
    name: "Thai Spring Roll",
    category: "chinese",
    price: 250,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crispy rolls infused with lemongrass, galangal, and sweet basil seasoning.",
    accompaniment: "Spiced plum dip."
  },
  {
    id: "dw-noodles-hakka",
    name: "Hakka Noodles",
    category: "chinese",
    price: 220,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Wok-tossed noodles with shredded cabbage, bell peppers, carrots, and light soya sauce.",
    accompaniment: "Hot & fresh."
  },
  {
    id: "dw-noodles-chilli-garlic",
    name: "Chilli Garlic Noodles",
    category: "chinese",
    price: 220,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Spicy noodles tossed with burnt garlic flakes, red chilli paste, and crunchy spring onions.",
    accompaniment: "Zesty & pungent."
  },
  {
    id: "dw-noodles-singapuri",
    name: "Singapuri Noodles",
    category: "chinese",
    price: 210,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Thin vermicelli noodles seasoned with yellow curry powder, turmeric, and mixed vegetables.",
    accompaniment: "Distinct aromatic spice."
  },
  {
    id: "dw-fried-rice",
    name: "Veg Fried Rice",
    category: "chinese",
    price: 180,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Fluffy basmati rice stir-fried in high flame wok with finely diced vegetables and white pepper.",
    accompaniment: "Classic wok flavor."
  },
  {
    id: "dw-fried-rice-mushroom-paneer",
    name: "Mushroom Paneer Fried Rice",
    category: "chinese",
    price: 220,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Aromatic wok rice tossed with sliced button mushrooms, tender paneer cubes, and scallions.",
    accompaniment: "Hearty wok dish."
  },
  {
    id: "dw-thai-curry",
    name: "Thai Curry (Red / Green) with Steamed Rice",
    category: "chinese",
    price: 350,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Fragrant coconut milk curry infused with lemongrass, kaffir lime leaves, and vegetables, served with jasmine/steamed rice.",
    accompaniment: "Exotic & aromatic."
  },

  // --- PIZZAS (9") ---
  {
    id: "dw-pizza-special",
    name: "Dilliwasi Special Pizza (9\")",
    category: "pizzas",
    price: 320,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Handcrafted 9-inch crust topped with signature herb tomato sauce, mozzarella, paneer tikka, mushrooms, olives, corn, and jalapeños.",
    accompaniment: "Oregano & chilli flakes."
  },
  {
    id: "dw-pizza-paneer-tikka",
    name: "Paneer Tikka Pizza (9\")",
    category: "pizzas",
    price: 279,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Clay oven roasted spiced paneer tikka, red onions, capsicum, and melted mozzarella cheese.",
    accompaniment: "Crispy thin crust."
  },
  {
    id: "dw-pizza-garden-fresh",
    name: "Garden Fresh Pizza (9\")",
    category: "pizzas",
    price: 269,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Loaded with bell peppers, crisp onions, ripe tomatoes, mushrooms, and golden sweet corn.",
    accompaniment: "Herbed cheese crust."
  },
  {
    id: "dw-pizza-margherita",
    name: "Margherita Pizza (9\")",
    category: "pizzas",
    price: 250,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Classic Italian style pizza with aromatic San Marzano style tomato sauce, extra mozzarella, and fresh basil.",
    accompaniment: "Pure cheese delight."
  },

  // --- PASTAS ---
  {
    id: "dw-pasta-pink-sauce",
    name: "Pink Sauce Pasta",
    category: "pastas",
    price: 299,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Al dente penne pasta tossed in a luxurious combination of tangy arrabbiata tomato sauce and creamy alfredo cheese sauce.",
    accompaniment: "Served with garlic bread."
  },
  {
    id: "dw-pasta-alfredo",
    name: "Alfredo White Sauce Pasta",
    category: "pastas",
    price: 299,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Penne pasta bathed in rich parmesan cheese, garlic butter, and fresh cream sauce with broccoli and mushrooms.",
    accompaniment: "Served with garlic bread."
  },
  {
    id: "dw-pasta-arrabbiata",
    name: "Arrabbiata Red Sauce Pasta",
    category: "pastas",
    price: 289,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Spicy Italian tomato sauce simmered with garlic, dried red chilli flakes, and fresh basil leaves.",
    accompaniment: "Served with garlic bread."
  },
  {
    id: "dw-pasta-mac-n-cheese",
    name: "Mac N Cheese Pasta",
    category: "pastas",
    price: 279,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Elbow macaroni enveloped in a rich, gooey melted cheddar and mozzarella cheese sauce.",
    accompaniment: "Golden baked crust."
  },

  // --- WESTERN STARTERS & FRIES ---
  {
    id: "dw-corn-cheese-balls",
    name: "Corn Cheese Balls (6pcs)",
    category: "western",
    price: 249,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Golden crispy fried spheres filled with sweet corn and melted gooey mozzarella cheese.",
    accompaniment: "Cocktail dip."
  },
  {
    id: "dw-cheese-garlic-bread",
    name: "Cheese Garlic Bread (4pcs)",
    category: "western",
    price: 190,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Toasted baguette slices brushed with garlic herb butter and covered in melted cheese.",
    accompaniment: "Oregano seasoning."
  },
  {
    id: "dw-fries-peri-peri",
    name: "Peri Peri Fries",
    category: "western",
    price: 139,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crisp golden French fries tossed in spicy peri peri seasoning.",
    accompaniment: "Garlic dip."
  },
  {
    id: "dw-fries-salted",
    name: "Salted French Fries",
    category: "western",
    price: 129,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Classic golden fried potato batons with sea salt.",
    accompaniment: "Tomato ketchup."
  },
  {
    id: "dw-potato-wedges",
    name: "Potato Wedges",
    category: "western",
    price: 139,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Skin-on seasoned rustic potato wedges fried to golden crunch.",
    accompaniment: "Herb mayo."
  },

  // --- SOUPS & SHORBA ---
  {
    id: "dw-soup-manchow",
    name: "Veg Manchow Soup",
    category: "soups",
    price: 110,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Dark, spicy Indo-Chinese soup with finely chopped vegetables, garlic, and coriander, topped with crispy fried noodles.",
    accompaniment: "Crispy fried noodles."
  },
  {
    id: "dw-soup-hot-sour",
    name: "Veg Hot n Sour Soup",
    category: "soups",
    price: 110,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Tangy and peppery broth loaded with shredded bamboo shoots, mushrooms, tofu, and carrots.",
    accompaniment: "Warming & comforting."
  },
  {
    id: "dw-soup-lemon-coriander",
    name: "Lemon Coriander Soup",
    category: "soups",
    price: 110,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Clear vegetable broth with fresh lemon juice, crushed black pepper, and generous green coriander leaves.",
    accompaniment: "Zesty & soothing."
  },
  {
    id: "dw-soup-sweet-corn",
    name: "Sweet Corn Soup",
    category: "soups",
    price: 120,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Creamy comforting soup packed with sweet corn kernels and tender diced vegetables.",
    accompaniment: "Mild & wholesome."
  },
  {
    id: "dw-soup-tomato",
    name: "Cream of Tomato Soup",
    category: "soups",
    price: 130,
    isVeg: true,
    isPureGhee: true,
    isSignature: false,
    available: true,
    description: "Classic rich soup of ripe vine tomatoes finished with fresh butter and served with golden herb croutons.",
    accompaniment: "Herb croutons."
  },

  // --- SALADS & CHAAT ---
  {
    id: "dw-salad-green",
    name: "Garden Fresh Green Salad",
    category: "salads",
    price: 109,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Slices of fresh cucumber, carrots, tomatoes, beetroots, and onions with green chillies and lemon.",
    accompaniment: "Chaat masala sprinkle."
  },
  {
    id: "dw-chaat-aloo-chana",
    name: "Aloo Chana Chaat",
    category: "salads",
    price: 99,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Boiled chickpeas and potatoes tossed with tamarind chutney, mint sauce, roasted cumin, and sev.",
    accompaniment: "Tangy street delicacy."
  },

  // --- BEVERAGES & MOCKTAILS ---
  {
    id: "dw-mocktail-special",
    name: "Dilliwasi Special Drink",
    category: "beverages",
    price: 159,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Signature rooftop cooler with tropical fruit juices, fresh mint, crushed ice, and sparkling fizz.",
    accompaniment: "Garnished with citrus wheels."
  },
  {
    id: "dw-drink-pink-lady",
    name: "Pink Lady Mocktail",
    category: "beverages",
    price: 149,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Vibrant ruby pink refresher matching the Dilliwasi crest, crafted with pomegranate, cranberry, and lime mist.",
    accompaniment: "Chilled in tall glass."
  },
  {
    id: "dw-drink-blue-lagoon",
    name: "Blue Lagoon",
    category: "beverages",
    price: 149,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Blue curacao syrup shaken with fresh lime juice, sugar syrup, and fizzy soda.",
    accompaniment: "Electric blue cooler."
  },
  {
    id: "dw-drink-virgin-mojito",
    name: "Virgin Mojito",
    category: "beverages",
    price: 119,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Muddled fresh garden mint leaves and lime wedges with brown sugar, crushed ice, and club soda.",
    accompaniment: "Crisp and refreshing."
  },
  {
    id: "dw-drink-lassi",
    name: "Dilliwasi Royal Lassi (Sweet / Salty)",
    category: "beverages",
    price: 89,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Thick hand-churned curd lassi topped with malai, cardamom essence, and crushed pistachios.",
    accompaniment: "Traditional clay kulhad style."
  },
  {
    id: "dw-drink-fresh-lime-soda",
    name: "Fresh Lime Soda (Sweet / Salty / Mix)",
    category: "beverages",
    price: 79,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Freshly squeezed lemon juice with chilled sparkling club soda.",
    accompaniment: "Classic thirst quencher."
  },

  // --- SHAKES & COLD COFFEE ---
  {
    id: "dw-shake-cold-coffee",
    name: "Cold Coffee with Ice Cream",
    category: "shakes",
    price: 129,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Rich espresso blended with chilled milk and topped with a scoop of vanilla ice cream and chocolate drizzle.",
    accompaniment: "Dilliwasi cafe favorite."
  },
  {
    id: "dw-shake-oreo",
    name: "Oreo Thick Shake",
    category: "shakes",
    price: 149,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Crushed Oreo cookies blended with creamy milk and vanilla ice cream, topped with cookie crumble.",
    accompaniment: "Rich and thick."
  },
  {
    id: "dw-shake-kitkat",
    name: "Kitkat Thick Shake",
    category: "shakes",
    price: 149,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Crispy Kitkat wafer fingers blended with chocolate syrup and rich dairy ice cream.",
    accompaniment: "Chocolate lover's dream."
  },
  {
    id: "dw-shake-strawberry",
    name: "Strawberry Milkshake",
    category: "shakes",
    price: 139,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Sweet strawberry crush blended with cold milk and strawberry ice cream.",
    accompaniment: "Berry pink delight."
  },

  // --- RAITAS & DESSERTS ---
  {
    id: "dw-dessert-gulab-jamun",
    name: "Warm Gulab Jamun (2pcs)",
    category: "desserts",
    price: 109,
    isVeg: true,
    isPureGhee: true,
    isSignature: true,
    available: true,
    description: "Golden fried mawa dumplings fried in pure desi ghee and soaked in warm cardamom and rose syrup.",
    accompaniment: "Garnished with slivered pistachios."
  },
  {
    id: "dw-dessert-rasmalai",
    name: "Artisanal Rasmalai (1pc)",
    category: "desserts",
    price: 59,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Spongy cottage cheese patties steeped in saffron-cardamom flavored thickened milk.",
    accompaniment: "Chilled & delicate."
  },
  {
    id: "dw-dessert-brownie",
    name: "Sizzling Brownie with Ice Cream",
    category: "desserts",
    price: 139,
    isVeg: true,
    isPureGhee: false,
    isSignature: true,
    available: true,
    description: "Warm fudgy walnut brownie served on a smoking sizzler plate with vanilla ice cream and hot chocolate fudge.",
    accompaniment: "Rooftop dessert spectacle."
  },
  {
    id: "dw-raita-boondi",
    name: "Boondi Raita",
    category: "desserts",
    price: 109,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Whipped curd with crispy gram flour boondi, roasted cumin, and black salt.",
    accompaniment: "Cooling North Indian classic."
  },
  {
    id: "dw-raita-pineapple",
    name: "Pineapple Raita",
    category: "desserts",
    price: 129,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Sweet and tangy diced pineapple folded into creamy sweetened yoghurt.",
    accompaniment: "Refreshing & fruity."
  },
  {
    id: "dw-raita-mix-veg",
    name: "Mix Veg Raita",
    category: "desserts",
    price: 119,
    isVeg: true,
    isPureGhee: false,
    isSignature: false,
    available: true,
    description: "Chilled curd with finely diced cucumbers, onions, and tomatoes, dusted with roasted jeera.",
    accompaniment: "Wholesome accompaniment."
  }
];

export const galleryItems = [
  {
    id: "gal-1",
    title: "Dilliwasi Royal Pure Veg Thali",
    category: "Feast",
    aspect: "16/9",
    image: "/assets/hero-veg-feast.jpg",
    description: "The signature 100% pure vegetarian royal feast: Dal Makhani, Paneer Butter Masala, Desi Ghee Rotis, and Gulab Jamun.",
    badge: "100% Pure Veg"
  },
  {
    id: "gal-2",
    title: "Paneer Malai Tikka & Clay Embers",
    category: "Tandoor",
    aspect: "4/5",
    image: "/assets/gallery/gal-2.jpg",
    description: "Fresh cottage cheese steeped in rich cream, cashew paste, and charred to perfection in traditional clay tandoors.",
    badge: "Pure Desi Ghee"
  },
  {
    id: "gal-3",
    title: "Rooftop Cafe & Open-Air Dining",
    category: "Ambiance",
    aspect: "16/9",
    image: "/assets/gallery/gal-3.jpg",
    description: "4th Floor open-air rooftop terrace overlooking Haridwar with ambient lighting and cool mountain breeze.",
    badge: "Rooftop Terrace"
  },
  {
    id: "gal-4",
    title: "Stone-Ground Whole Spices & Herbs",
    category: "Craft",
    aspect: "4/5",
    image: "/assets/gallery/gal-4.jpg",
    description: "Green cardamom, star anise, saffron, and cloves ground fresh daily for our signature curries.",
    badge: "Heritage Craft"
  },
  {
    id: "gal-5",
    title: "Handmade Tandoori Breads & Naans",
    category: "Cuisine",
    aspect: "16/9",
    image: "/assets/gallery/gal-5.jpg",
    description: "Stuffed cheese garlic naans, flaky laccha parathas, and hot missi rotis brushed with pure desi ghee.",
    badge: "Clay Oven Breads"
  },
  {
    id: "gal-6",
    title: "Fine Dine Ambiance & Family Suites",
    category: "Ambiance",
    aspect: "4/5",
    image: "/assets/gallery/gal-6.jpg",
    description: "Luxurious 3rd floor air-conditioned fine dining hall designed for family gatherings, celebrations, and corporate dinners.",
    badge: "Fine Dine Hall"
  }
];

export const ourSixCharms = [
  {
    number: "01",
    charm: "Welcome & Gratitude",
    hindi: "आतिथ्य एवं कृतज्ञता",
    desc: "Heartfelt Indian hospitality greeting every family with warmth and respect.",
  },
  {
    number: "02",
    charm: "Purity & Calmness",
    hindi: "शुद्धता एवं शांति",
    desc: "100% pure vegetarian kitchen cooking exclusively in pure desi ghee.",
  },
  {
    number: "03",
    charm: "Good Luck & Fortune",
    hindi: "सौभाग्य एवं समृद्धि",
    desc: "Wholesome culinary blessings rooted in authentic North Indian food culture.",
  },
  {
    number: "04",
    charm: "Innocence & Sincerity",
    hindi: "सरलता एवं सत्यनिष्ठा",
    desc: "Honest recipes with no artificial food colors, no MSG shortcuts, and pure farm ingredients.",
  },
  {
    number: "05",
    charm: "Love & Devotion",
    hindi: "प्रेम एवं साधना",
    desc: "Every dish crafted with culinary passion, patience, and time-honored techniques.",
  },
  {
    number: "06",
    charm: "Positive & Joyful",
    hindi: "उमंग एवं आनंद",
    desc: "A vibrant rooftop and fine dine atmosphere creating joyful memories with every meal.",
  }
];

export const initialReservations = [
  {
    id: "res-101",
    guestName: "Arun Mehra",
    phone: "+91 98112 34567",
    email: "arun.mehra@example.com",
    date: "Today",
    time: "19:30",
    partySize: 4,
    table: "Table 4 (Rooftop)",
    status: "confirmed",
    specialRequest: "Anniversary celebration, prefer outdoor rooftop seating"
  },
  {
    id: "res-102",
    guestName: "Sunita Agarwal",
    phone: "+91 94120 78901",
    email: "sunita.agarwal@example.com",
    date: "Today",
    time: "20:00",
    partySize: 6,
    table: "Table 12 (AC Fine Dine)",
    status: "seated",
    specialRequest: "Family dinner, Dilliwasi Royal Thali"
  },
  {
    id: "res-103",
    guestName: "Deepak Rawat",
    phone: "+91 99971 23456",
    email: "deepak.rawat@example.com",
    date: "Today",
    time: "20:30",
    partySize: 2,
    table: "Table 7 (Rooftop)",
    status: "confirmed",
    specialRequest: "Corner terrace table with view"
  }
];

export const initialOrders = [
  {
    id: "ord-201",
    table: "Table 12",
    time: "10 mins ago",
    status: "preparing",
    server: "Manish",
    items: [
      { name: "Dilliwasi Royal Thali", qty: 2, notes: "Extra pure desi ghee butter naan" },
      { name: "Paneer Malai Tikka", qty: 1, notes: "Medium spicy" },
      { name: "Dilliwasi Royal Lassi", qty: 2, notes: "Sweet with pistachios" }
    ]
  },
  {
    id: "ord-202",
    table: "Table 4",
    time: "4 mins ago",
    status: "new",
    server: "Vikas",
    items: [
      { name: "Chilli Paneer Sizzler", qty: 1, notes: "Smoking hot with noodles" },
      { name: "Dilliwasi Special Drink", qty: 2, notes: "Extra chilled" }
    ]
  },
  {
    id: "ord-203",
    table: "Table 7",
    time: "18 mins ago",
    status: "ready",
    server: "Rakesh",
    items: [
      { name: "Black Dairy Dal (Dal Makhani)", qty: 1, notes: "With churned butter" },
      { name: "Garlic Naan", qty: 3, notes: "Crisp from clay tandoor" }
    ]
  }
];

export const initialReviews = [
  {
    id: "rev-1",
    guestName: "Rajesh Sharma & Family",
    title: "Unmatched Pure Veg Experience in Haridwar",
    rating: 5,
    date: "November 2026",
    body: "The Dilliwasi Royal Thali and Paneer Malai Tikka are phenomenal! The aroma of pure desi ghee and freshly baked garlic naans on the rooftop terrace under the stars made our family evening unforgettable."
  },
  {
    id: "rev-2",
    guestName: "Dr. Ananya Verma",
    title: "Best Dal Makhani & Rooftop Ambience",
    rating: 5,
    date: "October 2026",
    body: "Truly authentic flavors. The Black Dairy Dal Makhani is rich, creamy, and slow-cooked to perfection. Outstanding hospitality from the staff at Amar Complex."
  },
  {
    id: "rev-3",
    guestName: "Vikram Singhania",
    title: "Pure Desi Ghee Perfection Since 2001",
    rating: 5,
    date: "October 2026",
    body: "We have been visiting Dilliwasi for over a decade. The consistency in taste, freshness of the cottage cheese, and wonderful open-air rooftop breeze make it the best fine dining restaurant in Haridwar."
  }
];

