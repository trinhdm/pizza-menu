import type { SizeDefinition } from '@/types/catalog'


export const pizzaSizeCatalog: readonly SizeDefinition[] = [
	{
		id: 'sm',
		label: 'Small',
		diameter: [10],
		nutritionDelta: 1,
		priceBase: 16,
		priceDelta: 1,
		toppings: {
			max: 2,
			recommended: [1, 2],
		},
	},
	{
		id: 'md',
		label: 'Medium',
		diameter: [12, 14],
		nutritionDelta: 1,
		priceBase: 20,
		priceDelta: 1,
		toppings: {
			max: 4,
			recommended: [2, 3],
		},
	},
	{
		id: 'lg',
		label: 'Large',
		diameter: [14, 16],
		nutritionDelta: 1,
		priceBase: 26,
		priceDelta: 1,
		toppings: {
			max: 8,
			recommended: [5, 7],
		},
	},
	{
		id: 'xl',
		label: 'Extra Large',
		diameter: [18],
		nutritionDelta: 1,
		priceBase: 32,
		priceDelta: 1,
		toppings: {
			max: 12,
			recommended: [8, 10],
		},
	},
]
