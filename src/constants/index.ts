export const MAIN_CATEGORIES = [
  "Our Products",
  "Occasional Cakes",
  "Festival Special",
] as const;

export const SUB_CATEGORIES = {
  "Our Products": ["Regular Cakes", "Tea Time Cakes", "Desserts", "Gift Hampers", "Cookies"],
  "Occasional Cakes": ["Birthday Spl", "Anniversary Spl", "Wedding Cake", "Kids Cake"],
  "Festival Special": ["Diwali Spl", "Christmas Spl", "Holi Spl"],
} as const;

export const CATEGORIES = [
  "Regular Cakes",
  "Tea Time Cakes",
  "Desserts",
  "Gelato",
  "Gift Hampers",
  "Cookies",
  "Birthday Spl",
  "Anniversary Spl",
  "Wedding Cake",
  "Kids Cake",
  "Customised Cakes",
  "Diwali Spl",
  "Christmas Spl",
  "Holi Spl",
] as const;

export const WEIGHT_OPTIONS = [
  "500gm",
  "1kg",
  "1.5kg",
  "2kg",
] as const;

export const DELIVERY_SLOTS = [
  "10:00 AM - 01:00 PM",
  "03:00 PM - 05:00 PM",
  "07:00 PM - 09:00 PM",
] as const;

export const EGG_TYPES = [
  "Egg",
  "Eggless",
] as const;

export const DELIVERY_CHARGE = 100;
export const DELIVERY_CITY = "Nagpur";
export const DELIVERY_RADIUS_KM = 7;

// All prices are per 500gm (half kg)
export const REGULAR_CAKES = [
  { id: "rc-1", name: "Plain Chocolate Cake", price: 500, category: "Regular Cakes", image: "/plain-chocolate-cake.jpg" },
  { id: "rc-2", name: "Butter Scotch Cake", price: 525, category: "Regular Cakes", image: "/butter-scotch-cake.jpg" },
  { id: "rc-3", name: "Honey Almond Cake", price: 575, category: "Regular Cakes", image: "/honey-almond-cake.jpg" },
  { id: "rc-4", name: "Chocolate Walnut Cake", price: 600, category: "Regular Cakes", image: "/chocolate-walnut-cake.jpg" },
  { id: "rc-5", name: "Mix Fruit Cake", price: 600, category: "Regular Cakes", image: "/mix-fruit-cake.jpg" },
  { id: "rc-6", name: "Black Forest Cake", price: 575, category: "Regular Cakes", image: "/black-forest-cake.jpg" },
  { id: "rc-7", name: "Belgian Chocolate Cake", price: 575, category: "Regular Cakes", image: "/belgian-chocolate-cake.jpg" },
  { id: "rc-8", name: "Chocolate Truffle Cake", price: 575, category: "Regular Cakes", image: "/chocolate-truffle-cake.jpg" },
] as const;

export const TEA_TIME_CAKES = [
  { id: "tt-1", name: "Tutti Frutti Tea Cake", price: 320, category: "Tea Time Cakes", image: "/tutti-frutti-tea-cake.jpg" },
  { id: "tt-2", name: "Marble Tea Cake", price: 320, category: "Tea Time Cakes", image: "/marble-tea-cake.jpg" },
  { id: "tt-3", name: "Date & Walnut Tea Cake", price: 380, category: "Tea Time Cakes", image: "/date-walnut-tea-cake.jpg" },
  { id: "tt-4", name: "Chocolate Walnut Tea Cake", price: 380, category: "Tea Time Cakes", image: "/chocolate-walnut-tea-cake.jpg" },
] as const;

export const GELATOS = [
  { id: "gl-1", name: "French Vanilla Gelato", price: 525, category: "Gelato", image: "/french-vanilla-gelato.jpg" },
  { id: "gl-2", name: "Tutti Frutti Gelato", price: 525, category: "Gelato", image: "/tutti-frutti-gelato.jpg" },
  { id: "gl-3", name: "Tiramisu Gelato", price: 625, category: "Gelato", image: "/tiramisu-gelato.jpg" },
  { id: "gl-4", name: "Tauby's Special Gelato", price: 625, category: "Gelato", image: "/taubys-special-gelato.jpg" },
  { id: "gl-5", name: "Rum & Raisin Gelato", price: 625, category: "Gelato", image: "/rum-and-raisin-gelato.jpg" },
  { id: "gl-6", name: "Mango Gelato", price: 525, category: "Gelato", image: "/mango-gelato-new.jpg" },
  { id: "gl-7", name: "Whisky Cream Gelato", price: 625, category: "Gelato", image: "/whisky-cream-gelato.jpg" },
  { id: "gl-8", name: "Butter Scotch Gelato", price: 525, category: "Gelato", image: "/butterscotch-gelato.jpg" },
  { id: "gl-9", name: "Coconut Gelato", price: 525, category: "Gelato", image: "/coconut-gelato.jpg" },
];
