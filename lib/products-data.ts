export interface Product {
  id: string
  slug: string
  title: string
  price: number
  rating: number
  reviews: number
  category: string
  material: string
  impact: string
  description: string
  features: string[]
  sustainabilityScore: number
  amazonUrl: string
  images: string[]
}

export const products: Product[] = [
  {
    id: "1",
    slug: "bamboo-toothbrush-set",
    title: "Bamboo Toothbrush Set",
    price: 12.99,
    rating: 4.8,
    reviews: 342,
    category: "Personal Care",
    material: "Bamboo",
    impact: "Plastic-free",
    description:
      "Sustainable bamboo toothbrush set with charcoal-infused bristles. Biodegradable handle reduces plastic waste while providing excellent dental care.",
    features: [
      "Pack of 4 toothbrushes",
      "Charcoal-infused bristles",
      "Biodegradable bamboo handle",
      "Recyclable packaging",
      "Ergonomic design",
    ],
    sustainabilityScore: 95,
    amazonUrl: "https://amazon.com",
    images: ["bamboo+toothbrush", "eco+toothbrush", "sustainable+dental+care"],
  },
  {
    id: "2",
    slug: "solar-phone-charger",
    title: "Solar Phone Charger",
    price: 45.99,
    rating: 4.9,
    reviews: 567,
    category: "Solar",
    material: "Recycled Plastic",
    impact: "Zero electricity",
    description:
      "Portable solar-powered phone charger with high-efficiency panels. Perfect for outdoor adventures and emergency backup.",
    features: [
      "20000mAh battery capacity",
      "Dual USB ports",
      "Waterproof design",
      "LED flashlight",
      "Fast charging technology",
    ],
    sustainabilityScore: 92,
    amazonUrl: "https://amazon.com",
    images: ["solar+charger", "portable+solar+power", "eco+phone+charger"],
  },
  {
    id: "3",
    slug: "organic-cotton-tote",
    title: "Organic Cotton Tote",
    price: 18.99,
    rating: 4.7,
    reviews: 289,
    category: "Reusable",
    material: "Organic Cotton",
    impact: "Replaces plastic bags",
    description:
      "Durable organic cotton tote bag with reinforced handles. Spacious design perfect for groceries, beach trips, or daily errands.",
    features: [
      "100% organic cotton",
      "Reinforced double stitching",
      "Large capacity (15L)",
      "Machine washable",
      "Natural dyes only",
    ],
    sustainabilityScore: 88,
    amazonUrl: "https://amazon.com",
    images: ["organic+cotton+tote", "reusable+shopping+bag", "eco+tote+bag"],
  },
  {
    id: "4",
    slug: "beeswax-food-wraps",
    title: "Beeswax Food Wraps",
    price: 22.99,
    rating: 4.6,
    reviews: 412,
    category: "Home",
    material: "Organic Cotton, Beeswax",
    impact: "Replaces plastic wrap",
    description:
      "Reusable beeswax wraps that replace single-use plastic wrap. Natural antibacterial properties keep food fresh longer.",
    features: [
      "Set of 5 assorted sizes",
      "Organic cotton base",
      "Natural beeswax coating",
      "Reusable up to 1 year",
      "Compostable at end of life",
    ],
    sustainabilityScore: 90,
    amazonUrl: "https://amazon.com",
    images: ["beeswax+wraps", "reusable+food+wrap", "eco+food+storage"],
  },
  {
    id: "5",
    slug: "natural-shampoo-bar",
    title: "Natural Shampoo Bar",
    price: 15.99,
    rating: 4.8,
    reviews: 521,
    category: "Organic",
    material: "Natural Ingredients",
    impact: "Plastic-free",
    description:
      "Concentrated shampoo bar with natural ingredients. Lasts 2-3x longer than liquid shampoo bottles and eliminates plastic packaging.",
    features: [
      "All natural ingredients",
      "Sulfate and paraben free",
      "Lasts 60-80 washes",
      "pH balanced formula",
      "Multiple scent options",
    ],
    sustainabilityScore: 94,
    amazonUrl: "https://amazon.com",
    images: ["shampoo+bar", "natural+hair+care", "eco+shampoo"],
  },
  {
    id: "6",
    slug: "stainless-steel-straws",
    title: "Stainless Steel Straws",
    price: 9.99,
    rating: 4.9,
    reviews: 678,
    category: "Reusable",
    material: "Stainless Steel",
    impact: "Eliminates plastic straws",
    description:
      "Premium stainless steel straws with cleaning brushes. Durable, reusable alternative to disposable plastic straws.",
    features: [
      "Set of 8 straws",
      "2 cleaning brushes included",
      "BPA-free",
      "Dishwasher safe",
      "Carrying pouch included",
    ],
    sustainabilityScore: 96,
    amazonUrl: "https://amazon.com",
    images: ["stainless+steel+straws", "reusable+straws", "eco+metal+straws"],
  },
  {
    id: "7",
    slug: "solar-garden-lights",
    title: "Solar Garden Lights",
    price: 34.99,
    rating: 4.7,
    reviews: 234,
    category: "Solar",
    material: "Recycled Materials",
    impact: "Solar powered",
    description:
      "Beautiful solar-powered garden lights that automatically illuminate at dusk. Weather-resistant design lasts for years.",
    features: ["Pack of 12 lights", "Auto on/off sensor", "Weather resistant", "8-hour runtime", "No wiring required"],
    sustainabilityScore: 89,
    amazonUrl: "https://amazon.com",
    images: ["solar+garden+lights", "outdoor+solar+lighting", "eco+garden+decor"],
  },
  {
    id: "8",
    slug: "organic-bath-towels",
    title: "Organic Bath Towels",
    price: 29.99,
    rating: 4.6,
    reviews: 345,
    category: "Home",
    material: "Organic Cotton",
    impact: "Sustainably sourced",
    description:
      "Luxuriously soft organic cotton bath towels. Highly absorbent and long-lasting without harmful chemicals.",
    features: [
      "Set of 2 large towels",
      "GOTS certified organic",
      "Highly absorbent",
      "Quick drying",
      "Oeko-Tex certified",
    ],
    sustainabilityScore: 87,
    amazonUrl: "https://amazon.com",
    images: ["organic+bath+towels", "eco+cotton+towels", "sustainable+bath+linens"],
  },
  {
    id: "9",
    slug: "zero-waste-starter-kit",
    title: "Zero Waste Starter Kit",
    price: 39.99,
    rating: 4.8,
    reviews: 456,
    category: "Personal Care",
    material: "Various Sustainable",
    impact: "Complete plastic-free kit",
    description:
      "Complete zero-waste starter kit with everything needed to begin your sustainable journey. Includes multiple eco-friendly essentials.",
    features: [
      "Bamboo cutlery set",
      "Reusable produce bags",
      "Stainless steel container",
      "Natural soap bars",
      "Beeswax wraps",
    ],
    sustainabilityScore: 93,
    amazonUrl: "https://amazon.com",
    images: ["zero+waste+kit", "eco+starter+pack", "sustainable+living+essentials"],
  },
]
