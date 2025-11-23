import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: 'leaf-powder',
    name: 'Leaf Powder',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/Leafpowder_czzycf.jpg',
    description: 'Pure natural leaf powders for health & wellness'
  },
  {
    id: 'vegetable-powder',
    name: 'Vegetable Powder',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/Vegetablepowder_w6yrzs.jpg',
    description: 'Organic vegetable powders rich in nutrients'
  },
  {
    id: 'fruit-powder',
    name: 'Fruit Powder',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/Fruitpowder_trbphd.webp',
    description: 'Natural fruit powders with authentic taste'
  },
  {
    id: 'herbs',
    name: 'Herbs',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/Herbes_pbykda.webp',
    description: 'Traditional herbs for natural healing'
  },
  {
    id: 'millet-mixes',
    name: 'Millet & Mixes',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890873/millites_hwipba.webp',
    description: 'Nutritious millet blends for healthy living'
  },
  {
    id: 'healthy-snacks',
    name: 'Healthy Snacks',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890872/healthy_u5g2bg.jpg',
    description: 'Guilt-free snacks for every craving'
  },
  {
    id: 'cold-pressed-oils',
    name: 'Cold Pressed Oils',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890872/cold_oil_ggu81b.webp',
    description: 'Pure cold pressed oils preserving natural goodness'
  }
];

export const products: Product[] = [
 {
  id: 'lp-001',
  name: 'Moringa Leaf Powder',
  category: 'leaf-powder',
  description: 'Premium quality moringa leaf powder packed with nutrients',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894427/Moringa_Leaf_Powder_mqxxev.webp',
  sizes: [
    { size: '150g', price: 229, inStock: true },
    { size: '500g', price: 723, inStock: true }
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
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894426/Curry_Leaf_Powder_yadndh.jpg',
  sizes: [
    { size: '150g', price: 128, inStock: true },
    { size: '500g', price: 383, inStock: true }
  ],
  benefits: ['Promotes hair growth', 'Rich in iron', 'Aids digestion', 'Controls blood sugar'],
  specifications: ['100% Natural', 'Premium Quality', 'Sun Dried', 'Chemical Free'],
  howToUse: 'Add to curries, chutneys, or mix with oil for hair application.'
},

{
  id: 'lp-003',
  name: 'Spinach Powder',
  category: 'leaf-powder',
  description: 'Nutrient-dense spinach leaf powder rich in iron and vitamins',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894425/Spinch_e9uxhi.jpg',
  sizes: [
    { size: '150g', price: 190, inStock: true },
    { size: '500g', price: 635, inStock: true }
  ],
  benefits: [
    'Rich in iron for energy',
    'Supports healthy blood levels',
    'Boosts immunity',
    'Good for eyesight and bones'
  ],
  specifications: [
    '100% Pure Spinach Leaves',
    'No Artificial Colors',
    'Naturally Processed',
    'Nutrient-Rich Fine Powder'
  ],
  howToUse: 'Add to smoothies, soups, dals, chapati dough, or health drinks for natural nutrition.'
},

{
  id: 'lp-004',
  name: 'Papaya Leaf Powder',
  category: 'leaf-powder',
  description: 'Natural papaya leaf powder known for immunity and platelet support',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894423/Papaya_Leaf_Powder_jx68e1.webp',
  sizes: [
    { size: '150g', price: 178, inStock: true },
    { size: '500g', price: 552, inStock: true }
  ],
  benefits: [
    'Supports platelet count',
    'Improves digestion',
    'Detoxifies the body',
    'Boosts immunity naturally'
  ],
  specifications: [
    '100% Natural Papaya Leaf',
    'No Added Chemicals',
    'Sun Dried & Hygienically Processed',
    'Herbal Grade Quality'
  ],
  howToUse: 'Mix with warm water as a herbal drink or add to smoothies and juices.'
},

{
  id: 'lp-005',
  name: 'Neem Leaf Powder',
  category: 'leaf-powder',
  description: 'Pure neem leaf powder for skin, hair, and detox benefits',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894421/Neem_Leaf_Powder_cxgqti.jpg',
  sizes: [
    { size: '150g', price: 204, inStock: true }
  ],
  benefits: [
    'Purifies blood',
    'Clears acne and skin issues',
    'Boosts immunity',
    'Supports liver detox'
  ],
  specifications: [
    '100% Natural Neem Leaves',
    'Fine Herbal Grade Powder',
    'No Preservatives',
    'Antibacterial & Anti-inflammatory'
  ],
  howToUse: 'Use with warm water for detox, mix in face packs for clear skin, or consume with honey to reduce bitterness.'
}
,
 {
  id: 'vp-001',
  name: 'Beetroot Powder',
  category: 'vegetable-powder',
  description: 'Pure beetroot powder for blood health',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894420/Beetroot_Powder_ibeiws.jpg',
  sizes: [
    { size: '150g', price: 240, inStock: true },
    { size: '500g', price: 800, inStock: true }
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
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894419/Carrot_Powder_mkh3ic.webp',
  sizes: [
    { size: '150g', price: 205, inStock: true },
    { size: '500g', price: 680, inStock: true }
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
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894417/Tomato_Powder_yumoyt.jpg',
  sizes: [
    { size: '150g', price: 213, inStock: true },
    { size: '500g', price: 680, inStock: true }
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
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894416/Onion_Powder_wipalr.jpg',
  sizes: [
    { size: '150g', price: 178, inStock: true },
    { size: '500g', price: 552, inStock: true }
  ],
  benefits: ['Boosts immunity', 'Anti-inflammatory', 'Rich in antioxidants', 'Adds instant flavor'],
  specifications: ['100% Pure', 'Strong Aroma', 'No Additives', 'Kitchen Essential'],
  howToUse: 'Add to any curry, soup, or seasoning for instant onion flavor.'
},
{
  id: 'vp-005',
  name: 'Bitter Gourd Powder',
  category: 'vegetable-powder',
  description: 'Healthy bitter gourd powder for diabetes control',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894414/Bitter_Gourd_Powder_hgah5r.jpg',
  sizes: [
    { size: '150g', price: 187, inStock: true },
    { size: '500g', price: 595, inStock: true }
  ],
  benefits: ['Controls blood sugar', 'Detoxifying', 'Rich in nutrients'],
  specifications: ['100% Natural', 'No Preservatives', 'Diabetic Friendly'],
  howToUse: 'Mix with warm water or add to vegetable juices.'
},
{
  id: 'vp-006',
  name: 'Sweet Potato Powder',
  category: 'vegetable-powder',
  description: 'Energy-rich sweet potato powder',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894413/Sweet_Potato_Powder_w8cfnn.webp',
  sizes: [
    { size: '150g', price: 254, inStock: true },
    { size: '500g', price: 847, inStock: true }
  ],
  benefits: ['Rich in fiber', 'Boosts energy', 'Good for digestion'],
  specifications: ['Natural Sweetness', 'No Additives', 'Nutrient Rich'],
  howToUse: 'Add to shakes, baby foods, or baking.'
},
{
  id: 'vp-007',
  name: 'Garlic Powder',
  category: 'vegetable-powder',
  description: 'Pure garlic powder with medicinal properties',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894412/Garlic_Powder_zzbwnf.webp',
  sizes: [
    { size: '150g', price: 187, inStock: true },
    { size: '500g', price: 595, inStock: true }
  ],
  benefits: ['Boosts immunity', 'Heart healthy', 'Antibacterial properties', 'Reduces cholesterol'],
  specifications: ['100% Natural', 'Pungent Aroma', 'Medicinal Grade', 'Premium Quality'],
  howToUse: 'Add to dishes for flavor or consume with honey for health benefits.'
},
{
  id: 'vp-008',
  name: 'Coconut Powder',
  category: 'vegetable-powder',
  description: 'Fine coconut powder for cooking & sweets',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894410/Coconut_Powder_f03uuf.jpg',
  sizes: [
    { size: '150g', price: 115, inStock: true },
    { size: '500g', price: 374, inStock: true }
  ],
  benefits: ['Boosts energy', 'Rich in healthy fats', 'Good for skin'],
  specifications: ['Naturally Dried', 'Fresh Aroma', 'Premium Quality'],
  howToUse: 'Use in curries, sweets, baking, or smoothies.'
},
{
  id: 'vp-009',
  name: 'Lemon Powder',
  category: 'vegetable-powder',
  description: 'Vitamin C rich lemon powder',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894409/Lemon_Powder_mylmfz.webp',
  sizes: [
    { size: '150g', price: 128, inStock: true },
    { size: '500g', price: 383, inStock: true }
  ],
  benefits: ['Boosts immunity', 'Detoxifying', 'Rich in Vitamin C'],
  specifications: ['Natural Citrus Flavor', 'No Preservatives', 'Instant Mix'],
  howToUse: 'Mix with warm water, teas, smoothies, or baking.'
},

{
  id: 'fp-001',
  name: 'Apple Powder',
  category: 'fruit-powder',
  description: 'Nutritious apple powder rich in fiber and antioxidants',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894407/Apple_Powder_mitdwg.jpg',
  sizes: [
    { size: '150g', price: 351, inStock: true },
    { size: '500g', price: 1172, inStock: true }
  ],
  benefits: [
    'Rich in dietary fiber',
    'Supports digestion',
    'Boosts immunity naturally',
    'Good for heart health'
  ],
  specifications: [
    '100% Fruit Powder',
    'No Added Sugar',
    'Preservative-Free',
    'Premium Quality'
  ],
  howToUse: 'Mix with smoothies, porridge, or use in baking for natural sweetness.'
},

{
  id: 'fp-002',
  name: 'Banana Powder (Raw G9)',
  category: 'fruit-powder',
  description: 'Natural raw banana powder for energy and nutrition',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894407/Banana_Powder_Raw_G9_ixggzh.jpg',
  sizes: [
    { size: '150g', price: 187, inStock: true },
    { size: '500g', price: 595, inStock: true }
  ],
  benefits: [
    'Instant energy booster',
    'Rich in potassium',
    'Improves digestion',
    'Ideal for babies and adults'
  ],
  specifications: [
    '100% Natural Banana',
    'No Chemicals',
    'Easy to Mix',
    'Naturally Sweet'
  ],
  howToUse: 'Mix with milk, porridge, smoothies, or baby food preparations.'
},

{
  id: 'fp-003',
  name: 'Papaya Powder',
  category: 'fruit-powder',
  description: 'Fiber-rich papaya powder for digestion and skin health',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894404/Papaya_Powder_duvfxc.webp',
  sizes: [
    { size: '150g', price: 254, inStock: true },
    { size: '500g', price: 847, inStock: true }
  ],
  benefits: [
    'Improves digestion',
    'Rich in antioxidants',
    'Supports glowing skin',
    'Strengthens immunity'
  ],
  specifications: [
    '100% Pure Papaya',
    'No Artificial Flavors',
    'Easy to Digest',
    'Fine Powder Texture'
  ],
  howToUse: 'Add to juices, smoothies, or use in face packs for skin nourishment.'
},

{
  id: 'fp-004',
  name: 'Guava Powder',
  category: 'fruit-powder',
  description: 'Vitamin C-rich guava powder for immunity and nutrition',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894403/Guava_Powder_hcwxun.webp',
  sizes: [
    { size: '150g', price: 191, inStock: true },
    { size: '500g', price: 637, inStock: true }
  ],
  benefits: [
    'High Vitamin C content',
    'Boosts immunity',
    'Good for digestion',
    'Natural antioxidant source'
  ],
  specifications: [
    '100% Natural Guava',
    'No Preservatives',
    'Fresh Aroma',
    'Nutrient-Dense'
  ],
  howToUse: 'Mix with water, smoothies, juices, or use in shakes and desserts.'
},

{
  id: 'fp-005',
  name: 'Orange Peel Powder',
  category: 'fruit-powder',
  description: 'Vitamin C rich orange peel powder for skin and health',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894402/Orange_Peel_Powder_emajno.webp',
  sizes: [
    { size: '150g', price: 351, inStock: true },
    { size: '500g', price: 1172, inStock: true }
  ],
  benefits: [
    'Brightens skin tone',
    'Reduces acne and oil',
    'Rich in antioxidants',
    'Enhances immunity'
  ],
  specifications: [
    'Cosmetic & Edible Grade',
    '100% Natural Orange Peel',
    'Aromatic Fine Powder',
    'No Chemicals Added'
  ],
  howToUse: 'Use for face packs, hair masks, herbal teas, or add to smoothies.'
},

 {
  id: 'hr-001',
  name: 'Ginger Powder',
  category: 'herbs',
  description: 'Pure sun-dried ginger powder for cooking and health benefits.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894401/Ginger_Powder_uwoxik.webp',
  sizes: [
    { size: '150g', price: 221, inStock: true },
    { size: '500g', price: 722, inStock: true }
  ],
  benefits: ['Boosts immunity', 'Improves digestion', 'Reduces inflammation', 'Relieves cold & cough'],
  specifications: ['100% Pure', 'No Additives', 'Strong Aroma', 'Fine Quality Powder'],
  howToUse: 'Use in tea, curries, soups, or mix with warm water for health benefits.'
},

{
  id: 'hr-002',
  name: 'Neem Powder',
  category: 'herbs',
  description: 'Pure neem leaf powder excellent for skin, hair, and detox.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894399/Neem_Powder_rgcxoe.webp',
  sizes: [
    { size: '150g', price: 204, inStock: true }
  ],
  benefits: ['Purifies blood', 'Clears skin', 'Boosts immunity', 'Anti-bacterial properties'],
  specifications: ['100% Natural Neem', 'No Chemicals', 'Herbal Grade', 'Fine Powder'],
  howToUse: 'Consume with warm water for detox or apply as a face pack for clear skin.'
},

{
  id: 'hr-003',
  name: 'Dry Dates Powder',
  category: 'herbs',
  description: 'Natural dry dates powder rich in iron and energy.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894397/Dry_Dates_Powder_h2ibk8.webp',
  sizes: [
    { size: '150g', price: 204, inStock: true },
    { size: '500g', price: 680, inStock: true }
  ],
  benefits: ['Boosts energy', 'Improves hemoglobin', 'Good for kids', 'Strengthens bones'],
  specifications: ['100% Pure Dry Dates', 'Naturally Sweet', 'No Sugar Added', 'Nutrient Dense'],
  howToUse: 'Mix with milk, porridges, baby food, or use in sweets and smoothies.'
},

{
  id: 'hr-004',
  name: 'Jaggery Powder',
  category: 'herbs',
  description: 'Pure chemical-free jaggery powder with natural sweetness.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894397/Jaggery_Powder_fftdck.jpg',
  sizes: [
    { size: '150g', price: 178, inStock: true },
    { size: '500g', price: 552, inStock: true }
  ],
  benefits: ['Boosts energy', 'Improves digestion', 'Rich in minerals', 'Natural sweetener'],
  specifications: ['No Sulphur', 'Chemical Free', 'Traditional Processed', 'Unrefined Jaggery'],
  howToUse: 'Use as a sugar substitute in tea, sweets, beverages, or daily cooking.'
},

{
  id: 'hr-005',
  name: 'Amla Powder',
  category: 'herbs',
  description: 'High vitamin C-rich amla powder for immunity and hair health.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894396/Amla_Powder_sctpzr.webp',
  sizes: [
    { size: '150g', price: 213, inStock: true },
    { size: '500g', price: 680, inStock: true }
  ],
  benefits: ['Boosts immunity', 'Improves digestion', 'Promotes hair growth', 'Rich in Vitamin C'],
  specifications: ['100% Natural', 'Sun Dried', 'No Sugar Added', 'Fine Texture'],
  howToUse: 'Mix with water or honey, or use in hair packs for shine and strength.'
},

{
  id: 'hr-006',
  name: 'Tamarind Seed Powder',
  category: 'herbs',
  description: 'Traditional tamarind seed powder known for joint and digestion support.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894393/Tamarind_Seed_Powder_gg6dpi.jpg',
  sizes: [
    { size: '150g', price: 75, inStock: true },
    { size: '500g', price: 250, inStock: true }
  ],
  benefits: ['Improves digestion', 'Supports joint health', 'Rich in antioxidants', 'Boosts metabolism'],
  specifications: ['Pure Tamarind Seeds', 'Stone Ground', 'No Additives', 'Natural Herbal Powder'],
  howToUse: 'Mix with warm water, use in herbal remedies, or add small quantities to cooking.'
},
{
  id: 'mm-001',
  name: 'Amla Powder',
  category: 'millet-mixes',
  description: 'Pure nutrient-rich amla powder packed with natural Vitamin C.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894392/Amla_Powder1_qkzhbo.webp',
  sizes: [
    { size: '150g', price: 213, inStock: true },
    { size: '500g', price: 680, inStock: true }
  ],
  benefits: ['Boosts immunity', 'Improves digestion', 'Promotes hair health', 'Rich in antioxidants'],
  specifications: ['100% Natural', 'Sun Dried', 'No Additives', 'Fine Powder'],
  howToUse: 'Mix 1 tsp with warm water, smoothies, or use in hair packs.'
},

{
  id: 'mm-002',
  name: 'ABC Mix (Amla + Beetroot + Carrot)',
  category: 'millet-mixes',
  description: 'Powerful nutrition blend of amla, beetroot, and carrot for overall wellness.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894392/ABC_Mix_Amla_Beetroot_Carrot_o7czo1.jpg',
  sizes: [
    { size: '150g', price: 283, inStock: true },
    { size: '500g', price: 945, inStock: true }
  ],
  benefits: ['Improves blood health', 'Boosts immunity', 'Enhances skin glow', 'Rich in vitamins & minerals'],
  specifications: ['Natural Ingredients', 'No Artificial Color', 'Nutrient Dense', 'Fine Blend'],
  howToUse: 'Mix with milk, smoothies, or consume with warm water daily.'
},

{
  id: 'mm-003',
  name: 'Sprouted Ragi Flour',
  category: 'millet-mixes',
  description: 'Calcium-rich sprouted ragi flour ideal for kids and adults.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894390/Sprouted_Ragi_Flour_vb9fua.jpg',
  sizes: [
    { size: '150g', price: 80, inStock: true },
    { size: '500g', price: 266, inStock: true }
  ],
  benefits: ['High in calcium', 'Improves digestion', 'Great for kids', 'Strengthens bones'],
  specifications: ['Sprouted & Sun Dried', 'No Preservatives', 'Stone Ground', 'High Fiber'],
  howToUse: 'Use for porridge, dosa batter, laddus, and baby foods.'
},

{
  id: 'mm-004',
  name: 'Sprouted Jowar Flour',
  category: 'millet-mixes',
  description: 'Nutritious sprouted jowar flour for healthy daily cooking.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894387/Sprouted_Jowar_Flour_qjjwob.jpg',
  sizes: [
    { size: '150g', price: 80, inStock: true },
    { size: '500g', price: 266, inStock: true }
  ],
  benefits: ['Diabetic-friendly', 'Good for digestion', 'High in fiber', 'Supports heart health'],
  specifications: ['Sprouted Grains', 'Gluten Free', 'No Additives', 'Stone Ground'],
  howToUse: 'Use to make rotis, dosa batter, porridges, and baking.'
},

{
  id: 'mm-005',
  name: 'Sprouted Moong Dal Flour',
  category: 'millet-mixes',
  description: 'Protein-rich sprouted moong dal flour perfect for healthy meals.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894386/Sprouted_Moong_Dal_Flour_fogmiy.webp',
  sizes: [
    { size: '150g', price: 102, inStock: true },
    { size: '500g', price: 340, inStock: true }
  ],
  benefits: ['High in protein', 'Easy to digest', 'Improves gut health', 'Great for weight loss'],
  specifications: ['Sprouted', 'No Chemicals', 'Premium Quality', 'Fine Texture'],
  howToUse: 'Use for dosa batter, roti mix, soups, or energy mixes.'
},

{
  id: 'mm-006',
  name: 'Sprouted Fenugreek Powder',
  category: 'millet-mixes',
  description: 'Healthy sprouted fenugreek powder known for digestion & sugar control.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894386/Sprouted_Fenugreek_Powder_u5jjqm.webp',
  sizes: [
    { size: '150g', price: 220, inStock: true },
    { size: '500g', price: 733, inStock: true }
  ],
  benefits: ['Controls blood sugar', 'Improves metabolism', 'Aids digestion', 'Boosts immunity'],
  specifications: ['Sprouted & Sun Dried', 'No Preservatives', 'Herbal Grade', 'Fine Powder'],
  howToUse: 'Mix with warm water, add to curries, or blend in health drinks.'
},

{
  id: 'mm-007',
  name: 'Multi Millet Nutri Mix',
  category: 'millet-mixes',
  description: 'A wholesome multi-millet blend for complete daily nutrition.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894385/Multi_Millet_Nutri_Mix_t7qlho.jpg',
  sizes: [
    { size: '150g', price: 150, inStock: true },
    { size: '500g', price: 500, inStock: true }
  ],
  benefits: ['Improves stamina', 'High in fiber', 'Rich in minerals', 'Perfect meal replacement'],
  specifications: ['Multi-Millet Blend', 'No Sugar Added', 'High Protein', '100% Natural'],
  howToUse: 'Use for porridge, laddus, dosa mix, or health drinks.'
}

 ,
  {
  id: 'hs-001',
  name: 'Nuvvula Laddu',
  category: 'healthy-snacks',
  description: 'Traditional sesame laddu made with natural ingredients.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894384/Nuvvula_Laddu_r259wm.jpg',
  sizes: [
    { size: '150g', price: 100, inStock: true }
  ],
  benefits: ['Good for bones', 'Rich in calcium', 'Boosts energy'],
  specifications: ['Freshly made', 'No preservatives', 'Premium quality'],
  howToUse: 'Consume directly as a healthy snack.'
},

{
  id: 'hs-002',
  name: 'Flax Seed Laddu',
  category: 'healthy-snacks',
  description: 'Healthy flaxseed laddu rich in omega-3 fatty acids.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894381/Flax_Seed_Laddu_tojj2x.jpg',
  sizes: [
    { size: '150g', price: 69, inStock: true }
  ],
  benefits: ['Improves heart health', 'Rich in fiber', 'Boosts immunity'],
  specifications: ['Omega-3 rich', 'No artificial flavors', 'Nutrient dense'],
  howToUse: 'Eat as a mid-meal snack or energy booster.'
},

{
  id: 'hs-003',
  name: 'Dry Fruit Laddu',
  category: 'healthy-snacks',
  description: 'Premium dry fruit laddu packed with nuts and nutrients.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894380/Dry_Fruit_Laddu_ejsxk8.jpg',
  sizes: [
    { size: '150g', price: 159, inStock: true }
  ],
  benefits: ['Instant energy', 'Rich in vitamins', 'Great for immunity'],
  specifications: ['Mixed dry fruits', 'No added sugar', 'Fresh & healthy'],
  howToUse: 'Perfect snack for all ages.'
},

{
  id: 'hs-004',
  name: 'Nethi Sunnundalu',
  category: 'healthy-snacks',
  description: 'Authentic Andhra-style sunnundalu made with pure ghee.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894379/Nethi_Sunnundalu_w2sehx.jpg',
  sizes: [
    { size: '150g', price: 149, inStock: true }
  ],
  benefits: ['Strengthens bones', 'Rich in protein', 'Good for kids'],
  specifications: ['Pure ghee', 'Traditional recipe', 'High nutrition'],
  howToUse: 'Consume any time of the day.'
},

{
  id: 'hs-005',
  name: 'Palli Laddu',
  category: 'healthy-snacks',
  description: 'Crunchy and tasty peanut laddu made with jaggery.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894379/Palli_Laddu_oe2mti.jpg',
  sizes: [
    { size: '150g', price: 79, inStock: true }
  ],
  benefits: ['High protein', 'Good for energy', 'Improves metabolism'],
  specifications: ['Natural jaggery', 'No chemicals', 'Freshly prepared'],
  howToUse: 'Eat as a quick healthy snack.'
},

{
  id: 'hs-006',
  name: 'Nuvvula Ariselu',
  category: 'healthy-snacks',
  description: 'Traditional sesame ariselu made with jaggery.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894378/Nuvvula_Ariselu_obtozx.jpg',
  sizes: [
    { size: '150g', price: 99, inStock: true }
  ],
  benefits: ['Good for heart', 'Rich in iron', 'Delicious festive snack'],
  specifications: ['Handmade', 'Premium quality', 'Natural ingredients'],
  howToUse: 'Serve as sweet snack.'
},

{
  id: 'hs-007',
  name: 'Muripilu',
  category: 'healthy-snacks',
  description: 'Light crunchy snack made with puffed rice.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894375/Muripilu_epyru0.jpg',
  sizes: [
    { size: '150g', price: 80, inStock: true }
  ],
  benefits: ['Light on stomach', 'Good for digestion', 'Low calorie'],
  specifications: ['Crispy texture', 'Freshly packed'],
  howToUse: 'Eat as a tea-time snack.'
},

{
  id: 'hs-008',
  name: 'Boondi Mixture',
  category: 'healthy-snacks',
  description: 'Crispy and spicy boondi mixture for a perfect snack.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894374/Boondi_Mixture_he0tqx.jpg',
  sizes: [
    { size: '150g', price: 70, inStock: true }
  ],
  benefits: ['Tasty', 'Crispy', 'Instant snack'],
  specifications: ['Freshly fried', 'Perfect seasoning'],
  howToUse: 'Serve with tea or enjoy anytime.'
},

{
  id: 'hs-009',
  name: 'Ribbon Pakoda',
  category: 'healthy-snacks',
  description: 'Crunchy ribbon pakoda with perfect spices.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894374/Ribbon_Pakoda_nqabdo.jpg',
  sizes: [
    { size: '150g', price: 89, inStock: true }
  ],
  benefits: ['Crispy snack', 'Perfect taste', 'Good for tea-time'],
  specifications: ['Handmade', 'Quality ingredients'],
  howToUse: 'Enjoy with tea or as snack.'
},

{
  id: 'hs-010',
  name: 'Kajjikayalu',
  category: 'healthy-snacks',
  description: 'Traditional kajjikayalu stuffed with sweet coconut mix.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894373/Kajjikayalu_u4aa7k.jpg',
  sizes: [
    { size: '150g', price: 129, inStock: true }
  ],
  benefits: ['Rich taste', 'Festival special', 'Good energy source'],
  specifications: ['Handmade', 'Fresh ingredients'],
  howToUse: 'Perfect as sweet snack.'
},

{
  id: 'hs-011',
  name: 'Dry Fruit Putharekulu',
  category: 'healthy-snacks',
  description: 'Premium dry fruit putharekulu from Andhra.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894370/Dry_Fruit_Putharekulu_oheuqg.jpg',
  sizes: [
    { size: '150g', price: 299, inStock: true }
  ],
  benefits: ['Rich in taste', 'Premium quality', 'High nutrition'],
  specifications: ['Traditional recipe', 'Dry fruit stuffed'],
  howToUse: 'Enjoy as dessert.'
},

{
  id: 'hs-012',
  name: 'Anamaya Laddu',
  category: 'healthy-snacks',
  description: 'Healthy special laddu made with natural ingredients.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894370/Anamaya_Laddu_nie5qi.jpg',
  sizes: [
    { size: '150g', price: 170, inStock: true }
  ],
  benefits: ['Boosts immunity', 'Rich in nutrients'],
  specifications: ['Natural sweetener', 'Fresh preparation'],
  howToUse: 'Eat as anytime snack.'
},

{
  id: 'hs-013',
  name: 'Ravva Laddu',
  category: 'healthy-snacks',
  description: 'Classic ravva laddu with rich taste.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894369/Ravva_Laddu_nr8ia0.jpg',
  sizes: [
    { size: '150g', price: 99, inStock: true }
  ],
  benefits: ['Good taste', 'Energy rich'],
  specifications: ['Fresh ghee', 'Premium quality'],
  howToUse: 'Serve as sweet snack.'
},

{
  id: 'hs-014',
  name: 'Millet Laddu',
  category: 'healthy-snacks',
  description: 'Nutritious millet laddu perfect for daily health.',
  image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894365/Millet_Laddu_gsxv0i.jpg',
  sizes: [
    { size: '150g', price: 150, inStock: true }
  ],
  benefits: ['High fiber', 'Boosts energy', 'Good for digestion'],
  specifications: ['Millet based', 'No preservatives'],
  howToUse: 'Consume daily for better nutrition.'
}
,
  {
    id: 'co-001',
    name: 'Coconut Oil',
    category: 'cold-pressed-oils',
    description: 'Pure cold pressed coconut oil',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894365/Coconut_Oil_wy6uds.jpg',
    sizes: [
      { size: '1L', price: 500, inStock: true },
      { size: '5L', price: 2450, inStock: true }
    ],
    benefits: ['Promotes hair growth', 'Moisturizes skin', 'Supports healthy cooking', 'Natural antibacterial properties'],
    specifications: ['Cold Pressed', 'Extra Virgin', 'No Chemicals', 'Traditional Extraction'],
    howToUse: 'Use for cooking, as a hair oil, or for body massage to enhance wellness.'
},
{
    id: 'co-002',
    name: 'Sesame Oil',
    category: 'cold-pressed-oils',
    description: 'Traditional gingelly oil',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894364/Sesame_Oil_b3vxnf.avif',
    sizes: [
      { size: '1L', price: 480, inStock: true },
      { size: '5L', price: 2350, inStock: true }
    ],
    benefits: ['Supports bone health', 'Rich in calcium', 'Heart friendly', 'Warming and soothing'],
    specifications: ['Cold Pressed', '100% Pure', 'Wood Pressed', 'Aromatic'],
    howToUse: 'Ideal for South Indian cooking, oil pulling, or as a massage oil.'
},
{
    id: 'co-003',
    name: 'Peanut Oil',
    category: 'cold-pressed-oils',
    description: 'Cold pressed peanut oil',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894364/Peanut_Oil_msppyp.webp',
    sizes: [
      { size: '1L', price: 320, inStock: true },
      { size: '5L', price: 1550, inStock: true }
    ],
    benefits: ['Heart healthy', 'High smoke point', 'Rich nutty taste', 'Contains Vitamin E'],
    specifications: ['Cold Pressed', 'Unrefined', 'Chemical Free', 'Natural'],
    howToUse: 'Perfect for deep frying, tadka, and general Indian cooking.'
},
{
    id: 'co-004',
    name: 'Caster Oil',
    category: 'cold-pressed-oils',
    description: 'Pure kachi ghani mustard oil',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763890872/cold_oil_ggu81b.webp',
    sizes: [
      { size: '1L', price: 350, inStock: true },
      { size: '5L', price: 1700, inStock: true }
    ],
    benefits: ['Antibacterial', 'Supports heart health', 'Nourishes skin & hair', 'Traditional cooking use'],
    specifications: ['Kachi Ghani', 'Pungent Aroma', '100% Pure', 'Cold Pressed'],
    howToUse: 'Use for pickles, cooking, hair oil, or winter body massage.'
},
{
    id: 'co-005',
    name: 'Safflower Oil',
    category: 'cold-pressed-oils',
    description: 'Cold pressed sunflower oil',
    image: 'https://res.cloudinary.com/dd4oiwnep/image/upload/v1763894364/Safflower_Oil_ocalgf.webp',
    sizes: [
      { size: '1L', price: 370, inStock: true },
      { size: '5L', price: 1800, inStock: true }
    ],
    benefits: ['Light & healthy', 'High in Vitamin E', 'Gentle on skin', 'Neutral flavor for cooking'],
    specifications: ['Cold Pressed', 'Light Color', 'Mild Flavor', 'Natural'],
    howToUse: 'Best for cooking, baking, and salad dressings.'
}

];
