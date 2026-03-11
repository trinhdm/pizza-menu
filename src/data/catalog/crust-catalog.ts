import type { CrustDefinition } from '@/types/catalog'
import type { NutritionFacts } from '@/types/item'


// type PositiveNumber = number & { readonly __brand: unique symbol }

// eslint-disable-next-line id-length
const n = (
	calories: number,
	carbs: number,
	fat: number,
	protein: number,
	sodium: number,
// eslint-disable-next-line @typescript-eslint/max-params
): NutritionFacts => ({
	calories,
	carbs,
	fat,
	protein,
	sodium,
})

export const crustCatalog: readonly CrustDefinition[] = [
	{
		id: 'classic',
		label: 'Classic hand tossed',
		description: 'Airy rim, crisp underside, balanced chew.',
		allergens: ['milk', 'wheat'],
		countsTowardLimit: false,
		nutritionDelta: n(80, 3, 10, 3, 55),
		priceDelta: 1.5,
		// nutritionDelta: 1.5,
		// priceDelta: {},
	},
	{
		id: 'thin',
		label: 'Thin crisp',
		description: 'Lighter bite with a cracker-edge finish.',
		allergens: ['milk', 'wheat'],
		countsTowardLimit: false,
		nutritionDelta: n(-40, -1, -8, -1, -20),
		priceDelta: 2,
		// nutritionDelta: 2,
		// priceDelta: {
		// 	lg: 2, md: 1, sm: 1, xl: 2,
		// },
	},
	{
		id: 'deep-dish',
		label: 'Sesame deep edge',
		description: 'Golden pan-crisp crust with toasted sesame.',
		allergens: ['milk', 'wheat'],
		countsTowardLimit: false,
		nutritionDelta: 3,
		priceDelta: 3,
		// nutritionDelta: n(80, 3, 10, 3, 55),
		// priceDelta: {
		// 	lg: 3, md: 2, sm: 2, xl: 4,
		// },
	},
	{
		id: 'stuffed',
		label: 'Stuffed crust',
		description: 'A thick, doughy crust with cheese or other fillings baked inside the outer rim.',
		allergens: ['milk', 'wheat'],
		countsTowardLimit: false,
		nutritionDelta: n(0, 0, 0, 0, 0),
		priceDelta: 0,
		// priceDelta: {
		// 	lg: 3, md: 2, sm: 2, xl: 4,
		// },
	},
]
