import type { SeedItem } from '@/types/item'


export const itemSeeds: readonly SeedItem[] = [
	{
		key: 'margherita',
		title: 'Margherita Burst',
		description: 'Our signature margherita layers slow tomato sauce, fresh mozzarella, basil, and a quick olive oil finish on a long-fermented dough. It is the cleanest read on the house bake.',

		allergens: [],
		base: {
			crustID: 'classic',
			ingredientsID: [
				'sauce-red',
				'cheese-mozzarella',
				'garnish-basil',
			],
			sizeID: 'md',
		},
		category: 'pizza',
		imageUrls: [
			'/images/menu/margherita-1.png',
			'/images/menu/margherita-2.png',
			'/images/menu/margherita-3.png',
			'/images/menu/margherita-4.png',
		],
		nutrition: {
			calories: 420,
			carbs: 18,
			fat: 31,
			protein: 12,
			sodium: 780,
		},
		tags: ['vegetarian', 'customer-favorite'],
	},
	{
		key: 'pepperoni',
		title: 'Cinder Pepperoni',
		description: 'The pepperoni pie leans crisp, savory, and a little smoky. We finish it with charred onions and a restrained Calabrian chili pop so the pepperoni still leads.',
		// description: 'Red sauce, mozzarella, and crisped pepperoni.',

		allergens: [],
		base: {
			crustID: 'classic',
			ingredientsID: [
				'sauce-red',
				'cheese-mozzarella',
				'meat-pepperoni',
			],
			sizeID: 'lg',
		},
		category: 'pizza',
		imageUrls: [
			'/images/menu/pepperoni-1.png',
			'/images/menu/pepperoni-2.png',
			'/images/menu/pepperoni-3.png',
			'/images/menu/pepperoni-4.png',
		],
		nutrition: {
			calories: 420,
			carbs: 18,
			fat: 31,
			protein: 12,
			sodium: 780,
		},
		tags: ['customer-favorite'],
	},

	{
		key: 'garden',
		title: 'Garden Static',
		description: 'Garden Static is our green-forward seasonal build. It arrives with pesto, mushrooms, spinach, and basil, then leaves room for a vegan cheese swap without losing texture.',

		allergens: ['milk', 'wheat', 'tree nut'],
		base: {
			crustID: 'thin',
			ingredientsID: [
				'sauce-pesto',
				'cheese-mozzarella',
				'garnish-basil',
			],
			sizeID: 'lg',
		},
		category: 'pizza',
		imageUrls: [
			'/images/menu/garden-1.png',
			'/images/menu/garden-2.png',
		],
		nutrition: {
			calories: 690,
			carbs: 26,
			fat: 79,
			protein: 18,
			sodium: 980,
		},
		tags: ['vegetarian', 'limited'],
	},

	{
		key: 'truffle',
		title: 'Truffle Voltage',
		description:
			'Truffle Voltage is a richer pie built for cool nights and bigger appetites. Roasted mushroom, smoked provolone, and a truffle cream finish land it firmly in indulgent territory.',

		allergens: ['milk', 'wheat', 'tree nut'],

		base: {
			crustID: 'thin',
			ingredientsID: [
				'sauce-white',
				'cheese-provolone',
				'drizzle-truffle-cream',
			],
			sizeID: 'lg',
		},
		category: 'pizza',
		imageUrls: [
			'/images/menu/truffle-1.png',
			'/images/menu/truffle-2.png',
		],
		nutrition: {
			calories: 690,
			carbs: 26,
			fat: 79,
			protein: 18,
			sodium: 980,
		},
		tags: ['vegetarian', 'limited'],
	},

	{
		key: 'caesar-salad',
		title: 'Caesar Salad',
		description: 'Romaine, parmesan, croutons, and house Caesar dressing.',

		allergens: ['milk', 'wheat'],
		category: 'salad',
		imageUrls: ['/images/menu/caesar.png'],
		nutrition: {
			calories: 420,
			carbs: 18,
			fat: 31,
			protein: 12,
			sodium: 780,
		},
		priceBase: 10,
		tags: [],
	},
]
