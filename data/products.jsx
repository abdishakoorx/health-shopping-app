export const categories = [
  { id: 1, name: 'Personal Care', image: '/painrelief.jpg' },
  { id: 2, name: 'Medical Equipment', image: '/equipment.jpg' },
  { id: 3, name: 'Wellness Products', image: '/wellness.jpg' },
  { id: 4, name: 'First Aid & Safety', image: '/firstaid.jpg' },
  { id: 5, name: 'Skincare & Hygiene', image: '/skincare.jpg' },
];

export const products = [
  // Personal Care
  {
    id: 1,
    title: 'Antibacterial Hand Sanitizer (500ml)',
    price: 1300, 
    description: 'Kills 99.9% of germs, quick-drying formula with aloe vera.',
    category: 1,
    image: '/sanitizer.jpg',
  },
  {
    id: 2,
    title: 'Alcohol-Free Wet Wipes (80 count)',
    price: 1050, 
    description: 'Gentle and moisturizing, ideal for sensitive skin.',
    category: 1,
    image: '/wetwipes.jpg',
  },
  {
    id: 3,
    title: 'N95 Respirator Masks (Pack of 10)',
    price: 5300, 
    description: 'High-filtration masks for protection against airborne particles.',
    category: 1,
    image: '/masks.jpg',
  },

  // Medical Equipment
  {
    id: 4,
    title: 'Digital Blood Pressure Monitor',
    price: 6700, 
    description: 'Automatic arm cuff with LCD display, detects irregular heartbeat.',
    category: 2,
    image: '/blood.jpg',
  },
  {
    id: 5,
    title: 'Pulse Oximeter Fingertip',
    price: 4000, 
    description: 'Accurate blood oxygen and heart rate monitor, OLED display.',
    category: 2,
    image: '/finger.jpg',
  },
  {
    id: 6,
    title: 'Reusable Hot & Cold Gel Pack',
    price: 2000, 
    description: 'Therapeutic relief for muscle pain, swelling, and injuries.',
    category: 2,
    image: '/gelpack.jpg',
  },

  // Wellness Products
  {
    id: 7,
    title: 'Vitamin D3 Softgels (5000 IU, 120 count)',
    price: 2700, 
    description: 'Supports immune system and bone health.',
    category: 3,
    image: '/vitamind3.jpg',
  },
  {
    id: 8,
    title: 'Organic Ashwagandha Capsules (90 count)',
    price: 3400, 
    description: 'Stress relief and energy booster, made from pure extract.',
    category: 3,
    image: '/ashwaganda.jpg',
  },
  {
    id: 9,
    title: 'Probiotic Digestive Health (30 Capsules)',
    price: 3100, 
    description: 'Supports gut health and boosts immunity.',
    category: 3,
    image: '/probiotic.jpg',
  },

  // First Aid & Safety
  {
    id: 10,
    title: 'Emergency First Aid Kit (120 Pieces)',
    price: 5300, 
    description: 'Comprehensive kit with bandages, antiseptic wipes, and more.',
    category: 4,
    image: '/aid.jpg',
  },
  {
    id: 11,
    title: 'Burn Relief Gel (4 oz)',
    price: 1700, 
    description: 'Instant cooling relief for minor burns and sunburns.',
    category: 4,
    image: '/burn.jpg',
  },
  {
    id: 12,
    title: 'Medical Adhesive Tape (Pack of 3)',
    price: 1200, 
    description: 'Durable and flexible, perfect for securing bandages.',
    category: 4,
    image: '/adhesive.jpg',
  },

  // Skincare & Hygiene
  {
    id: 13,
    title: 'Moisturizing Hand Cream (250ml)',
    price: 2000, 
    description: 'Hydrating formula with vitamin E and shea butter.',
    category: 5,
    image: '/cream.jpg',
  },
  {
    id: 14,
    title: 'Antiseptic Mouthwash (500ml)',
    price: 1500, 
    description: 'Kills bacteria and freshens breath with long-lasting protection.',
    category: 5,
    image: '/mouthwash.jpg',
  },
  {
    id: 15,
    title: 'SPF 50+ Sunscreen Lotion (200ml)',
    price: 2500,
    description: 'Water-resistant and non-greasy, protects against UV rays.',
    category: 5,
    image: '/sunscreen.jpg',
  },
];
