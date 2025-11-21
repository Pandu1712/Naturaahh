import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'leaf-powder',
    name: 'Leaf Powder',
    image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pure natural leaf powders for health & wellness'
  },
  {
    id: 'vegetable-powder',
    name: 'Vegetable Powder',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Organic vegetable powders rich in nutrients'
  },
  {
    id: 'fruit-powder',
    name: 'Fruit Powder',
    image: 'https://images.pexels.com/photos/1002272/pexels-photo-1002272.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Natural fruit powders with authentic taste'
  },
  {
    id: 'herbs',
    name: 'Herbs',
    image: 'https://images.pexels.com/photos/4198919/pexels-photo-4198919.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Traditional herbs for natural healing'
  },
  {
    id: 'millet-mixes',
    name: 'Millet & Mixes',
    image: 'https://images.pexels.com/photos/5836947/pexels-photo-5836947.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Nutritious millet blends for healthy living'
  },
  {
    id: 'healthy-snacks',
    name: 'Healthy Snacks',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Guilt-free snacks for every craving'
  },
  {
    id: 'cold-pressed-oils',
    name: 'Cold Pressed Oils',
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=800',
    description: 'Pure cold pressed oils preserving natural goodness'
  }
];

export const products: Product[] = [
  {
    id: 'lp-001',
    name: 'Moringa Leaf Powder',
    category: 'leaf-powder',
    description: 'Premium quality moringa leaf powder packed with nutrients',
    image: 'https://images.pexels.com/photos/4198933/pexels-photo-4198933.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 199, inStock: true },
      { size: '250g', price: 299, inStock: true },
      { size: '500g', price: 549, inStock: true }
    ],
    benefits: ['Rich in antioxidants', 'Boosts immunity', 'Natural energy source', 'Supports healthy digestion'],
    specifications: ['100% Natural', 'No Preservatives', 'Organic Certified', 'Lab Tested'],
    howToUse: 'Mix 1-2 teaspoons with water, smoothies, or sprinkle over food. Best consumed in the morning.'
  },
  {
    id: 'lp-002',
    name: 'Curry Leaf Powder',
    category: 'leaf-powder',
    description: 'Fresh curry leaf powder for hair and health',
    image: 'https://images.pexels.com/photos/6544378/pexels-photo-6544378.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 179, inStock: true },
      { size: '250g', price: 269, inStock: true }
    ],
    benefits: ['Promotes hair growth', 'Rich in iron', 'Aids digestion', 'Controls blood sugar'],
    specifications: ['100% Natural', 'Premium Quality', 'Sun Dried', 'Chemical Free'],
    howToUse: 'Add to curries, chutneys, or mix with oil for hair application.'
  },
  {
    id: 'lp-003',
    name: 'Mint Leaf Powder',
    category: 'leaf-powder',
    description: 'Refreshing mint leaf powder for digestion',
    image: 'https://images.pexels.com/photos/5864245/pexels-photo-5864245.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 159, inStock: true },
      { size: '200g', price: 219, inStock: true }
    ],
    benefits: ['Improves digestion', 'Freshens breath', 'Cooling effect', 'Rich in antioxidants'],
    specifications: ['100% Pure', 'Farm Fresh', 'No Additives', 'Natural Aroma'],
    howToUse: 'Add to buttermilk, tea, or use in cooking for fresh mint flavor.'
  },
  {
    id: 'lp-004',
    name: 'Coriander Leaf Powder',
    category: 'leaf-powder',
    description: 'Aromatic coriander leaf powder',
    image: 'https://images.pexels.com/photos/4198925/pexels-photo-4198925.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 149, inStock: true },
      { size: '250g', price: 249, inStock: true }
    ],
    benefits: ['Detoxifies body', 'Rich in vitamins', 'Aids digestion', 'Natural coolant'],
    specifications: ['100% Organic', 'Fresh Quality', 'No Chemicals', 'Aromatic'],
    howToUse: 'Use in curries, soups, chutneys, or mix with water for detox drink.'
  },
  {
    id: 'lp-005',
    name: 'Spinach Leaf Powder',
    category: 'leaf-powder',
    description: 'Nutrient-rich spinach powder',
    image: 'https://images.pexels.com/photos/2325843/pexels-photo-2325843.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 189, inStock: true },
      { size: '250g', price: 289, inStock: true },
      { size: '500g', price: 529, inStock: true }
    ],
    benefits: ['High in iron', 'Strengthens bones', 'Improves eyesight', 'Boosts immunity'],
    specifications: ['100% Pure', 'Vitamin Rich', 'Iron Fortified', 'Premium Grade'],
    howToUse: 'Add to smoothies, juices, or mix in dough for healthy rotis.'
  },
  {
    id: 'vp-001',
    name: 'Beetroot Powder',
    category: 'vegetable-powder',
    description: 'Pure beetroot powder for blood health',
    image: 'https://images.pexels.com/photos/1435904/pexels-photo-1435904.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '200g', price: 229, inStock: true },
      { size: '250g', price: 279, inStock: true },
      { size: '500g', price: 499, inStock: true }
    ],
    benefits: ['Increases hemoglobin', 'Boosts stamina', 'Lowers blood pressure', 'Natural detoxifier'],
    specifications: ['100% Natural', 'No Colors Added', 'Rich in Iron', 'Lab Certified'],
    howToUse: 'Mix with milk, smoothies, or use in baking for natural color and nutrition.'
  },
  {
    id: 'vp-002',
    name: 'Carrot Powder',
    category: 'vegetable-powder',
    description: 'Vitamin A rich carrot powder',
    image: 'https://images.pexels.com/photos/3590401/pexels-photo-3590401.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 199, inStock: true },
      { size: '250g', price: 299, inStock: true }
    ],
    benefits: ['Improves vision', 'Glowing skin', 'Rich in beta-carotene', 'Boosts immunity'],
    specifications: ['100% Pure', 'Vitamin A Rich', 'Natural Color', 'Premium Quality'],
    howToUse: 'Add to milk, soups, or use in baking for natural orange color.'
  },
  {
    id: 'vp-003',
    name: 'Tomato Powder',
    category: 'vegetable-powder',
    description: 'Tangy tomato powder for cooking',
    image: 'https://images.pexels.com/photos/8844889/pexels-photo-8844889.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 169, inStock: true },
      { size: '200g', price: 219, inStock: true },
      { size: '500g', price: 489, inStock: true }
    ],
    benefits: ['Rich in lycopene', 'Good for skin', 'Antioxidant properties', 'Supports heart health'],
    specifications: ['100% Natural', 'No Preservatives', 'Tangy Taste', 'Easy to Use'],
    howToUse: 'Use in curries, soups, pizzas, or any dish requiring tomato flavor.'
  },
  {
    id: 'vp-004',
    name: 'Onion Powder',
    category: 'vegetable-powder',
    description: 'Aromatic onion powder for instant flavor',
    image: 'https://images.pexels.com/photos/7214190/pexels-photo-7214190.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 149, inStock: true },
      { size: '250g', price: 239, inStock: true }
    ],
    benefits: ['Boosts immunity', 'Anti-inflammatory', 'Rich in antioxidants', 'Adds instant flavor'],
    specifications: ['100% Pure', 'Strong Aroma', 'No Additives', 'Kitchen Essential'],
    howToUse: 'Add to any curry, soup, or seasoning for instant onion flavor.'
  },
  {
    id: 'vp-005',
    name: 'Garlic Powder',
    category: 'vegetable-powder',
    description: 'Pure garlic powder with medicinal properties',
    image: 'https://images.pexels.com/photos/5639854/pexels-photo-5639854.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 179, inStock: true },
      { size: '250g', price: 279, inStock: true }
    ],
    benefits: ['Boosts immunity', 'Heart healthy', 'Antibacterial properties', 'Reduces cholesterol'],
    specifications: ['100% Natural', 'Pungent Aroma', 'Medicinal Grade', 'Premium Quality'],
    howToUse: 'Add to dishes for flavor or consume with honey for health benefits.'
  },
  {
    id: 'fp-001',
    name: 'Amla Powder',
    category: 'fruit-powder',
    description: 'Vitamin C rich amla powder',
    image: 'https://images.pexels.com/photos/5617526/pexels-photo-5617526.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 189, inStock: true },
      { size: '250g', price: 289, inStock: true },
      { size: '500g', price: 529, inStock: true }
    ],
    benefits: ['Boosts immunity', 'Hair growth', 'Improves digestion', 'Rich in Vitamin C'],
    specifications: ['100% Natural', 'Sun Dried', 'No Sugar Added', 'Premium Grade'],
    howToUse: 'Mix with water or honey, consume on empty stomach for best results.'
  },
  {
    id: 'fp-002',
    name: 'Banana Powder',
    category: 'fruit-powder',
    description: 'Natural banana powder for energy',
    image: 'https://images.pexels.com/photos/5966630/pexels-photo-5966630.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '200g', price: 219, inStock: true },
      { size: '250g', price: 269, inStock: true }
    ],
    benefits: ['Instant energy', 'Rich in potassium', 'Aids digestion', 'Good for babies'],
    specifications: ['100% Pure', 'No Additives', 'Baby Safe', 'Natural Sweetness'],
    howToUse: 'Mix with milk, use in smoothies, or baby food preparations.'
  },
  {
    id: 'fp-003',
    name: 'Pomegranate Powder',
    category: 'fruit-powder',
    description: 'Antioxidant-rich pomegranate powder',
    image: 'https://images.pexels.com/photos/1002272/pexels-photo-1002272.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 249, inStock: true },
      { size: '250g', price: 399, inStock: true }
    ],
    benefits: ['Rich in antioxidants', 'Increases hemoglobin', 'Heart healthy', 'Anti-aging'],
    specifications: ['100% Natural', 'No Preservatives', 'Premium Quality', 'Tangy Taste'],
    howToUse: 'Mix with juice, smoothies, or sprinkle on salads for tangy flavor.'
  },
  {
    id: 'fp-004',
    name: 'Mango Powder (Amchur)',
    category: 'fruit-powder',
    description: 'Tangy raw mango powder',
    image: 'https://images.pexels.com/photos/2363347/pexels-photo-2363347.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 159, inStock: true },
      { size: '200g', price: 199, inStock: true },
      { size: '500g', price: 449, inStock: true }
    ],
    benefits: ['Aids digestion', 'Cooling effect', 'Rich in Vitamin C', 'Adds tangy flavor'],
    specifications: ['100% Pure', 'Sun Dried', 'No Additives', 'Authentic Taste'],
    howToUse: 'Use in curries, chutneys, chaats for authentic tangy flavor.'
  },
  {
    id: 'fp-005',
    name: 'Orange Peel Powder',
    category: 'fruit-powder',
    description: 'Vitamin C rich orange peel powder',
    image: 'https://images.pexels.com/photos/144248/potted-plant-oranges-citrus-fruit-144248.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 179, inStock: true },
      { size: '250g', price: 279, inStock: true }
    ],
    benefits: ['Glowing skin', 'Rich in Vitamin C', 'Natural face pack', 'Anti-aging'],
    specifications: ['100% Natural', 'Aromatic', 'Cosmetic Grade', 'No Chemicals'],
    howToUse: 'Mix with yogurt or honey for face pack, or add to smoothies.'
  },
  {
    id: 'hr-001',
    name: 'Tulsi Powder',
    category: 'herbs',
    description: 'Holy basil powder for immunity',
    image: 'https://images.pexels.com/photos/4198919/pexels-photo-4198919.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 169, inStock: true },
      { size: '250g', price: 259, inStock: true }
    ],
    benefits: ['Boosts immunity', 'Reduces stress', 'Respiratory health', 'Adaptogenic herb'],
    specifications: ['100% Pure', 'Sacred Herb', 'Organic', 'Medicinal Grade'],
    howToUse: 'Mix with warm water or tea, consume twice daily for immunity.'
  },
  {
    id: 'hr-002',
    name: 'Ashwagandha Powder',
    category: 'herbs',
    description: 'Premium ashwagandha root powder',
    image: 'https://images.pexels.com/photos/7988766/pexels-photo-7988766.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 299, inStock: true },
      { size: '250g', price: 449, inStock: true },
      { size: '500g', price: 799, inStock: true }
    ],
    benefits: ['Reduces stress', 'Increases strength', 'Improves sleep', 'Enhances vitality'],
    specifications: ['100% Pure Root', 'Premium Grade', 'Lab Tested', 'Traditional Quality'],
    howToUse: 'Mix with milk before bed or warm water twice daily for best results.'
  },
  {
    id: 'hr-003',
    name: 'Turmeric Powder',
    category: 'herbs',
    description: 'Pure turmeric powder with high curcumin',
    image: 'https://images.pexels.com/photos/4198943/pexels-photo-4198943.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '200g', price: 149, inStock: true },
      { size: '250g', price: 179, inStock: true },
      { size: '500g', price: 329, inStock: true },
      { size: '1kg', price: 599, inStock: true }
    ],
    benefits: ['Anti-inflammatory', 'Boosts immunity', 'Skin health', 'Joint health'],
    specifications: ['High Curcumin', '100% Pure', 'Lab Tested', 'Golden Color'],
    howToUse: 'Use in cooking, mix with milk, or apply on skin for glowing complexion.'
  },
  {
    id: 'hr-004',
    name: 'Ginger Powder',
    category: 'herbs',
    description: 'Aromatic dried ginger powder',
    image: 'https://images.pexels.com/photos/1886424/pexels-photo-1886424.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 139, inStock: true },
      { size: '250g', price: 219, inStock: true }
    ],
    benefits: ['Aids digestion', 'Relieves nausea', 'Anti-inflammatory', 'Warming spice'],
    specifications: ['100% Natural', 'Strong Aroma', 'Digestive Aid', 'Premium Quality'],
    howToUse: 'Add to tea, curries, or mix with honey for cough relief.'
  },
  {
    id: 'hr-005',
    name: 'Neem Powder',
    category: 'herbs',
    description: 'Pure neem leaf powder for wellness',
    image: 'https://images.pexels.com/photos/7298385/pexels-photo-7298385.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 159, inStock: true },
      { size: '250g', price: 249, inStock: true }
    ],
    benefits: ['Blood purifier', 'Skin health', 'Antibacterial', 'Boosts immunity'],
    specifications: ['100% Pure Leaf', 'Bitter Taste', 'Medicinal Grade', 'Natural Healer'],
    howToUse: 'Mix small amount with water or honey, or use for skin applications.'
  },
  {
    id: 'mm-001',
    name: 'Ragi Millet Flour',
    category: 'millet-mixes',
    description: 'Calcium-rich finger millet flour',
    image: 'https://images.pexels.com/photos/5836947/pexels-photo-5836947.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500g', price: 99, inStock: true },
      { size: '1kg', price: 179, inStock: true }
    ],
    benefits: ['High in calcium', 'Good for bones', 'Controls diabetes', 'Weight management'],
    specifications: ['100% Natural', 'Stone Ground', 'No Preservatives', 'Gluten Free'],
    howToUse: 'Make porridge, rotis, dosa, or use in baking for nutritious meals.'
  },
  {
    id: 'mm-002',
    name: 'Foxtail Millet',
    category: 'millet-mixes',
    description: 'Nutritious foxtail millet',
    image: 'https://images.pexels.com/photos/6489416/pexels-photo-6489416.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500g', price: 119, inStock: true },
      { size: '1kg', price: 219, inStock: true }
    ],
    benefits: ['Heart healthy', 'Controls blood sugar', 'Rich in iron', 'Easy to digest'],
    specifications: ['100% Natural', 'Unpolished', 'Chemical Free', 'Traditional Grain'],
    howToUse: 'Cook like rice or make nutritious porridge for healthy meals.'
  },
  {
    id: 'mm-003',
    name: 'Multi-Millet Health Mix',
    category: 'millet-mixes',
    description: 'Blend of 7 millets with nuts',
    image: 'https://images.pexels.com/photos/4022104/pexels-photo-4022104.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500g', price: 249, inStock: true },
      { size: '1kg', price: 459, inStock: true }
    ],
    benefits: ['Complete nutrition', 'High protein', 'Energy booster', 'Weight management'],
    specifications: ['7 Millets Blend', 'With Nuts & Seeds', 'Protein Rich', 'No Sugar'],
    howToUse: 'Mix with milk or water, cook for 5 minutes for healthy breakfast porridge.'
  },
  {
    id: 'mm-004',
    name: 'Bajra Flour',
    category: 'millet-mixes',
    description: 'Pearl millet flour for winters',
    image: 'https://images.pexels.com/photos/7129151/pexels-photo-7129151.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500g', price: 89, inStock: true },
      { size: '1kg', price: 159, inStock: true }
    ],
    benefits: ['Keeps body warm', 'Rich in iron', 'Good for heart', 'Energy food'],
    specifications: ['100% Pure', 'Stone Ground', 'Traditional', 'Winter Special'],
    howToUse: 'Make rotis, khichdi, or mix with wheat flour for nutritious breads.'
  },
  {
    id: 'mm-005',
    name: 'Jowar Flour',
    category: 'millet-mixes',
    description: 'Sorghum millet flour',
    image: 'https://images.pexels.com/photos/7456994/pexels-photo-7456994.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500g', price: 79, inStock: true },
      { size: '1kg', price: 149, inStock: true }
    ],
    benefits: ['Gluten free', 'Controls diabetes', 'High in fiber', 'Aids weight loss'],
    specifications: ['100% Natural', 'Gluten Free', 'Fiber Rich', 'Premium Quality'],
    howToUse: 'Make soft rotis, bhakri, or use in baking for healthy alternatives.'
  },
  {
    id: 'hs-001',
    name: 'Roasted Makhana',
    category: 'healthy-snacks',
    description: 'Crunchy roasted fox nuts',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '150g', price: 199, inStock: true },
      { size: '250g', price: 319, inStock: true }
    ],
    benefits: ['Low calorie snack', 'High in protein', 'Good for heart', 'Aids weight loss'],
    specifications: ['Lightly Salted', 'Crunchy', 'No Oil', 'Ready to Eat'],
    howToUse: 'Enjoy as guilt-free snack anytime, perfect for movie time.'
  },
  {
    id: 'hs-002',
    name: 'Trail Mix',
    category: 'healthy-snacks',
    description: 'Mixed nuts and dried fruits',
    image: 'https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '200g', price: 299, inStock: true },
      { size: '500g', price: 699, inStock: true }
    ],
    benefits: ['Energy booster', 'Protein rich', 'Healthy fats', 'On-the-go snack'],
    specifications: ['Premium Mix', 'No Sugar', 'Fresh Roasted', 'Nutritious'],
    howToUse: 'Perfect snack for work, travel, or post-workout energy boost.'
  },
  {
    id: 'hs-003',
    name: 'Baked Namkeen',
    category: 'healthy-snacks',
    description: 'Healthy baked Indian snack',
    image: 'https://images.pexels.com/photos/6941001/pexels-photo-6941001.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '200g', price: 149, inStock: true },
      { size: '500g', price: 349, inStock: true }
    ],
    benefits: ['Low fat', 'Baked not fried', 'Crunchy', 'Traditional taste'],
    specifications: ['Baked', 'Low Calorie', 'No Maida', 'Indian Style'],
    howToUse: 'Enjoy with tea or as evening snack, guilt-free munching.'
  },
  {
    id: 'hs-004',
    name: 'Protein Laddu',
    category: 'healthy-snacks',
    description: 'Nutritious protein balls',
    image: 'https://images.pexels.com/photos/3625372/pexels-photo-3625372.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '250g', price: 279, inStock: true },
      { size: '500g', price: 529, inStock: true }
    ],
    benefits: ['High protein', 'Energy booster', 'Natural sweetness', 'Post-workout snack'],
    specifications: ['No Sugar', 'Nuts & Seeds', 'Protein Rich', 'Homemade Style'],
    howToUse: 'Eat 1-2 balls for instant energy, perfect pre or post workout.'
  },
  {
    id: 'hs-005',
    name: 'Ragi Cookies',
    category: 'healthy-snacks',
    description: 'Healthy millet cookies',
    image: 'https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '200g', price: 159, inStock: true },
      { size: '500g', price: 379, inStock: true }
    ],
    benefits: ['High fiber', 'No maida', 'Less sugar', 'Digestive friendly'],
    specifications: ['Millet Based', 'Jaggery Sweetened', 'Crunchy', 'Kid Friendly'],
    howToUse: 'Perfect tea-time snack or healthy treat for kids tiffin box.'
  },
  {
    id: 'co-001',
    name: 'Coconut Oil',
    category: 'cold-pressed-oils',
    description: 'Pure cold pressed coconut oil',
    image: 'https://images.pexels.com/photos/33783/olive-oil-salad-dressing-cooking-olive.jpg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500ml', price: 349, inStock: true },
      { size: '1L', price: 649, inStock: true },
      { size: '5L', price: 2999, inStock: true }
    ],
    benefits: ['Hair growth', 'Skin care', 'Healthy cooking', 'Antibacterial'],
    specifications: ['Cold Pressed', 'Extra Virgin', 'No Chemicals', 'Traditional Method'],
    howToUse: 'Use for cooking, hair oil, or body massage for natural wellness.'
  },
  {
    id: 'co-002',
    name: 'Sesame Oil',
    category: 'cold-pressed-oils',
    description: 'Traditional gingelly oil',
    image: 'https://images.pexels.com/photos/4202481/pexels-photo-4202481.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500ml', price: 299, inStock: true },
      { size: '1L', price: 549, inStock: true },
      { size: '5L', price: 2599, inStock: true }
    ],
    benefits: ['Bone health', 'Rich in calcium', 'Heart healthy', 'Warming oil'],
    specifications: ['Cold Pressed', '100% Pure', 'Wood Pressed', 'Rich Aroma'],
    howToUse: 'Best for South Indian cooking, oil pulling, or body massage.'
  },
  {
    id: 'co-003',
    name: 'Groundnut Oil',
    category: 'cold-pressed-oils',
    description: 'Cold pressed peanut oil',
    image: 'https://images.pexels.com/photos/7262802/pexels-photo-7262802.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '1L', price: 399, inStock: true },
      { size: '5L', price: 1899, inStock: true }
    ],
    benefits: ['Heart healthy', 'High smoke point', 'Rich taste', 'Vitamin E'],
    specifications: ['Cold Pressed', 'Unrefined', 'Chemical Free', 'Natural'],
    howToUse: 'Ideal for deep frying, tadka, and all Indian cooking preparations.'
  },
  {
    id: 'co-004',
    name: 'Mustard Oil',
    category: 'cold-pressed-oils',
    description: 'Pure kachi ghani mustard oil',
    image: 'https://images.pexels.com/photos/4198930/pexels-photo-4198930.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '500ml', price: 249, inStock: true },
      { size: '1L', price: 459, inStock: true },
      { size: '5L', price: 2199, inStock: true }
    ],
    benefits: ['Antibacterial', 'Heart health', 'Skin & hair care', 'Traditional'],
    specifications: ['Kachi Ghani', 'Pungent Aroma', '100% Pure', 'Cold Pressed'],
    howToUse: 'Use for cooking pickles, hair oil, or body massage in winters.'
  },
  {
    id: 'co-005',
    name: 'Sunflower Oil',
    category: 'cold-pressed-oils',
    description: 'Cold pressed sunflower oil',
    image: 'https://images.pexels.com/photos/5966633/pexels-photo-5966633.jpeg?auto=compress&cs=tinysrgb&w=600',
    sizes: [
      { size: '1L', price: 349, inStock: true },
      { size: '5L', price: 1699, inStock: true }
    ],
    benefits: ['Light & healthy', 'High in Vitamin E', 'Skin friendly', 'Neutral taste'],
    specifications: ['Cold Pressed', 'Light Color', 'Mild Flavor', 'Natural'],
    howToUse: 'Perfect for all types of cooking, baking, and salad dressings.'
  }
];
