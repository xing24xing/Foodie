import images from './images';

const foods = [
  {
    title: 'Grilled Vegetable Platter',
    price: '$15',
    tags: 'Assorted grilled vegetables | Olive oil | Herbs',
    description: 'A colorful assortment of seasonal vegetables, perfectly grilled and drizzled with olive oil and fresh herbs.'
  },
  {
    title: 'Fresh Fruit Salad',
    price: '$12',
    tags: 'Mixed seasonal fruits | Honey drizzle | Mint',
    description: 'A refreshing mix of seasonal fruits, lightly drizzled with honey and garnished with fresh mint.'
  },
  {
    title: 'Whole Grain Sandwich',
    price: '$10',
    tags: 'Whole grain bread | Avocado | Tomato | Lettuce',
    description: 'A wholesome sandwich made with whole grain bread and filled with fresh avocado, tomato, and crisp lettuce.'
  },
  {
    title: 'Hearty Vegetable Soup',
    price: '$8',
    tags: 'Mixed vegetables | Herbs | Light broth',
    description: 'A warm, hearty soup packed with a variety of vegetables and aromatic herbs.'
  },
  {
    title: 'Homemade Granola Bowl',
    price: '$9',
    tags: 'Granola | Yogurt | Fresh berries | Honey',
    description: 'A nutritious bowl of homemade granola topped with creamy yogurt, fresh berries, and a touch of honey.'
  },
  {
    title: 'Vegan Burger',
    price: '$12',
    tags: 'Vegan patty | Lettuce | Tomato | Vegan cheese',
    description: 'A delicious vegan burger made with a plant-based patty, fresh veggies, and vegan cheese.'
  },
  {
    title: 'Stuffed Bell Peppers',
    price: '$14',
    tags: 'Bell peppers | Rice | Beans | Cheese',
    description: 'Bell peppers stuffed with rice, beans, and cheese, baked to perfection.'
  },
  {
    title: 'Spicy Lentil Salad',
    price: '$11',
    tags: 'Lentils | Spices | Fresh cilantro',
    description: 'A hearty lentil salad with a spicy kick and fresh cilantro.'
  },
  {
    title: 'Baked Sweet Potato',
    price: '$7',
    tags: 'Sweet potato | Olive oil | Herbs',
    description: 'Oven-baked sweet potatoes drizzled with olive oil and sprinkled with herbs.'
  },
  {
    title: 'Quinoa and Avocado Salad',
    price: '$10',
    tags: 'Quinoa | Avocado | Cherry tomatoes | Lemon dressing',
    description: 'A fresh salad with quinoa, avocado, cherry tomatoes, and a tangy lemon dressing.'
  },
];

const drinks = [
  {
    title: 'Fresh Lemonade',
    price: '$5',
    tags: 'Fresh lemons | Sugar | Mint',
    description: 'A classic, refreshing drink made with freshly squeezed lemons, a hint of sugar, and garnished with mint.'
  },
  {
    title: 'Herbal Tea',
    price: '$4',
    tags: 'Chamomile | Green tea | Lemon | Honey',
    description: 'A soothing blend of chamomile and green tea, enhanced with lemon and a touch of honey.'
  },
  {
    title: 'Berry Smoothie',
    price: '$7',
    tags: 'Mixed berries | Yogurt | Honey',
    description: 'A creamy, nutrient-packed smoothie with a blend of mixed berries, yogurt, and a dash of honey.'
  },
  {
    title: 'Coconut Water',
    price: '$3',
    tags: 'Fresh coconut | Naturally hydrating',
    description: 'Pure, natural coconut water served chilled for ultimate hydration.'
  },
  {
    title: 'Golden Milk',
    price: '$6',
    tags: 'Turmeric | Almond milk | Cinnamon | Honey',
    description: 'A warm and comforting drink made with turmeric, almond milk, a sprinkle of cinnamon, and a touch of honey.'
  },
  {
    title: 'Iced Coffee',
    price: '$4.5',
    tags: 'Coffee | Ice | Sugar',
    description: 'Chilled coffee served with ice and a touch of sugar.'
  },
  {
    title: 'Mango Lassi',
    price: '$6.5',
    tags: 'Mango | Yogurt | Sugar',
    description: 'A creamy, sweet mango lassi made with fresh mangoes and yogurt.'
  },
  {
    title: 'Strawberry Milkshake',
    price: '$5.5',
    tags: 'Strawberries | Milk | Sugar',
    description: 'A classic milkshake made with fresh strawberries and milk.'
  },
  {
    title: 'Cucumber Mint Cooler',
    price: '$4',
    tags: 'Cucumber | Mint | Lime',
    description: 'A refreshing cooler made with cucumber, mint, and a squeeze of lime.'
  },
  {
    title: 'Peach Iced Tea',
    price: '$4.5',
    tags: 'Peach | Tea | Ice',
    description: 'Iced tea infused with the sweet taste of peaches.'
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Best Healthy Cuisine',
    subtitle: 'Recognized for offering nutritious and delicious options.',
  },
  {
    imgUrl: images.award01,
    title: 'Family Favorite Award',
    subtitle: 'Celebrated for food and drinks loved by all ages.',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Presentation',
    subtitle: 'Awarded for visually appealing and creative dishes.',
  },
  {
    imgUrl: images.award03,
    title: 'Top Culinary Excellence',
    subtitle: 'Honored for exceptional quality and taste.',
  },
];

export default { foods, drinks, awards };
