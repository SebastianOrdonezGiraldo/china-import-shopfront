export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  images: string[];
  videoUrl?: string;
  likes: number;
  dislikes: number;
}

export interface Review {
  id: number;
  productId: number;
  text: string;
  rating: number;
  city: string;
  date: string;
}

export const categories = [
  { id: 'all', name: 'All Products', image: 'https://images.unsplash.com/photo-1618160702438-9b02ab6515c9' },
  { id: 'electronics', name: 'Electronics', image: 'https://images.unsplash.com/photo-1550009158-9ebf69173e03' },
  { id: 'clothing', name: 'Clothing', image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b' },
  { id: 'home', name: 'Home & Garden', image: 'https://images.unsplash.com/photo-1618219740975-d78978b11329' },
  { id: 'toys', name: 'Toys', image: 'https://images.unsplash.com/photo-1535268647853-c62dc2d1f48d' },
  { id: 'beauty', name: 'Beauty', image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348' },
  { id: 'sports', name: 'Sports', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b' }
];

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Earbuds Pro",
    price: 39.99,
    description: "High-quality wireless earbuds with noise cancellation technology. Features include 20 hours of battery life, touch controls, and sweat resistance. Perfect for workouts or daily commuting.",
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
      "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb"
    ],
    videoUrl: "https://www.youtube.com/watch?v=ipvYYzSRRIY", // Earbuds review
    likes: 145,
    dislikes: 12
  },
  {
    id: 2,
    name: "Smart LED Strip Lights",
    price: 24.99,
    description: "16 million colors RGB LED strip lights with smartphone control. Create custom scenes, sync with music, and control via voice assistant. Easy installation with adhesive backing.",
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1557005756-8d00b6bf2fd6",
      "https://images.unsplash.com/photo-1555663823-21fc0e3f2206",
      "https://images.unsplash.com/photo-1592503913762-e4db31030bbd"
    ],
    videoUrl: "https://www.youtube.com/watch?v=Fu1LW3n65ZE", // LED strip lights demo
    likes: 87,
    dislikes: 5
  },
  {
    id: 3,
    name: "Silk Pajama Set",
    price: 42.50,
    description: "Luxurious silk pajama set made from 100% mulberry silk. Features include button-up top with pocket, elastic waist pants, and breathable fabric for comfortable sleep. Available in multiple colors.",
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1584627888899-55c980e7b573",
      "https://images.unsplash.com/photo-1620147461831-a97b99ade1d3",
      "https://images.unsplash.com/photo-1620736462395-656e61051072"
    ],
    videoUrl: "https://www.youtube.com/watch?v=qFGDFxkj-7w", // Silk pajamas
    likes: 210,
    dislikes: 8
  },
  {
    id: 4,
    name: "Minimalist Desk Lamp",
    price: 29.99,
    description: "Modern minimalist desk lamp with adjustable brightness and color temperature. Features include touch controls, flexible arm, and energy-efficient LED. Perfect for study or workspace.",
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1534189644425-716bea4a5ef0",
      "https://images.unsplash.com/photo-1534882406296-b13d421c2468",
      "https://images.unsplash.com/photo-1491933367339-d869a4dcc137"
    ],
    videoUrl: "https://www.youtube.com/watch?v=pbzVAQPXNYE", // Desk lamp review
    likes: 56,
    dislikes: 3
  },
  {
    id: 5,
    name: "Mini Drone with Camera",
    price: 59.99,
    description: "Compact foldable drone with HD camera for aerial photography and videos. Features include 20-minute flight time, altitude hold, and one-key return. Perfect for beginners and travel enthusiasts.",
    category: "toys",
    images: [
      "https://images.unsplash.com/photo-1507582020474-9a35b7d455d9",
      "https://images.unsplash.com/photo-1527977966376-1c8408f9f108",
      "https://images.unsplash.com/photo-1508614589041-895b88991e3e"
    ],
    videoUrl: "https://www.youtube.com/watch?v=RwO6K-lJYOI", // Mini drone footage
    likes: 98,
    dislikes: 12
  },
  {
    id: 6,
    name: "Korean Skincare Set",
    price: 48.75,
    description: "Complete 10-step Korean skincare routine set. Includes cleanser, toner, essence, serum, moisturizer, and masks. Made with natural ingredients and suitable for all skin types.",
    category: "beauty",
    images: [
      "https://images.unsplash.com/photo-1612532275214-e4ca76d0e4d1",
      "https://images.unsplash.com/photo-1556228841-a3c527e24560",
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881"
    ],
    videoUrl: "https://www.youtube.com/watch?v=GtNYjK8LNT8", // Korean skincare routine
    likes: 175,
    dislikes: 4
  },
  {
    id: 7,
    name: "Collapsible Water Bottle",
    price: 15.99,
    description: "Eco-friendly silicone water bottle that collapses when empty. Features include leakproof design, carabiner attachment, and BPA-free materials. Perfect for hiking, travel, or everyday use.",
    category: "sports",
    images: [
      "https://images.unsplash.com/photo-1523362628745-0c100150b504",
      "https://images.unsplash.com/photo-1581244277943-fe4a9c777189",
      "https://images.unsplash.com/photo-1602143407151-7111542de6e8"
    ],
    videoUrl: "https://www.youtube.com/watch?v=1MU1L06aAOg", // Collapsible bottle review
    likes: 62,
    dislikes: 7
  },
  {
    id: 8,
    name: "Smart Plant Monitor",
    price: 19.99,
    description: "Wireless plant monitor that measures soil moisture, light, and temperature. The companion app provides watering reminders and care tips for various plant species.",
    category: "home",
    images: [
      "https://images.unsplash.com/photo-1597308753577-5ea6e661e141",
      "https://images.unsplash.com/photo-1594409855476-29909f35c73c",
      "https://images.unsplash.com/photo-1592990774541-a5e0d49d1c66"
    ],
    videoUrl: "https://www.youtube.com/watch?v=bZrBHdoQiRE", // Plant monitor demo
    likes: 85,
    dislikes: 6
  },
  {
    id: 9,
    name: "Portable Bluetooth Speaker",
    price: 34.50,
    description: "Waterproof Bluetooth speaker with 24-hour battery life and exceptional sound quality. Features include built-in microphone for calls and compact design for easy transport.",
    category: "electronics",
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1",
      "https://images.unsplash.com/photo-1589003077984-894e133dabab",
      "https://images.unsplash.com/photo-1618623266812-f5c9c4434f63"
    ],
    videoUrl: "https://www.youtube.com/watch?v=W2lqQVEjzhs", // Bluetooth speaker review
    likes: 112,
    dislikes: 9
  },
  {
    id: 10,
    name: "Magnetic Building Blocks",
    price: 27.50,
    description: "Educational magnetic building blocks set with 64 pieces. Develops creativity, spatial thinking, and engineering skills. Safe for children with non-toxic materials and rounded edges.",
    category: "toys",
    images: [
      "https://images.unsplash.com/photo-1567822781105-a80d1c379705",
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b",
      "https://images.unsplash.com/photo-1560859251-17a0dfe5cba0"
    ],
    videoUrl: "https://www.youtube.com/watch?v=LZAx9F4qX0k", // Magnetic building blocks
    likes: 146,
    dislikes: 2
  },
  {
    id: 11,
    name: "Foldable Yoga Mat",
    price: 22.99,
    description: "Eco-friendly non-slip yoga mat that folds instead of rolls for easy transport. Features include alignment markings, extra cushioning, and antimicrobial surface.",
    category: "sports",
    images: [
      "https://images.unsplash.com/photo-1592432678016-e910b452f9a2",
      "https://images.unsplash.com/photo-1518611012118-696072aa579a",
      "https://images.unsplash.com/photo-1516526995003-435ccce2be97"
    ],
    videoUrl: "https://www.youtube.com/watch?v=PCoHQk_5izk", // Yoga mat review
    likes: 89,
    dislikes: 5
  },
  {
    id: 12,
    name: "Oversized Hoodie",
    price: 36.75,
    description: "Cozy oversized hoodie made from premium cotton blend. Features include kangaroo pocket, adjustable hood, and trendy baggy fit. Available in multiple colors and sizes.",
    category: "clothing",
    images: [
      "https://images.unsplash.com/photo-1572495641004-28421ae52e52",
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
      "https://images.unsplash.com/photo-1622445275463-afa2ab738c34"
    ],
    videoUrl: "https://www.youtube.com/watch?v=2YagsQB_R8E", // Oversized hoodie fashion
    likes: 203,
    dislikes: 15
  }
];

export const reviews: Review[] = [
  {
    id: 1,
    productId: 1,
    text: "These earbuds are amazing! Great sound quality and the battery lasts even longer than advertised.",
    rating: 5,
    city: "Shanghai",
    date: "2023-02-15"
  },
  {
    id: 2,
    productId: 1,
    text: "Good value for money, but the touch controls can be a bit finicky sometimes.",
    rating: 4,
    city: "Beijing",
    date: "2023-03-22"
  },
  {
    id: 3,
    productId: 1,
    text: "I love these! The noise cancellation is perfect for my commute on the subway.",
    rating: 5,
    city: "Guangzhou",
    date: "2023-04-03"
  },
  {
    id: 4,
    productId: 2,
    text: "These lights transformed my room! The app is easy to use and there are so many color options.",
    rating: 5,
    city: "Shenzhen",
    date: "2023-01-18"
  },
  {
    id: 5,
    productId: 3,
    text: "The silk feels luxurious but the stitching came undone after just two washes.",
    rating: 2,
    city: "Hangzhou",
    date: "2023-05-07"
  },
  {
    id: 6,
    productId: 4,
    text: "Perfect desk lamp for studying. I love that I can adjust the color temperature depending on the time of day.",
    rating: 5,
    city: "Chengdu",
    date: "2023-02-28"
  },
  {
    id: 7,
    productId: 5,
    text: "Fun little drone! The camera quality isn't professional grade but it's great for beginners.",
    rating: 4,
    city: "Wuhan",
    date: "2023-04-12"
  },
  {
    id: 8,
    productId: 6,
    text: "I've been using this set for a month and my skin has never looked better!",
    rating: 5,
    city: "Nanjing",
    date: "2023-03-05"
  },
  {
    id: 9,
    productId: 6,
    text: "Some products in the set didn't work well with my sensitive skin.",
    rating: 3,
    city: "Xi'an",
    date: "2023-05-19"
  }
];
