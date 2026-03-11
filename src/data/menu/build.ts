import type {
	MenuItem,
	PizzaItem,
	SeedItem,
	StandardItem,
} from '@/types/item'
import type { PizzaIdentification } from '@/types/catalog'
import type { UnionProps } from '@/types/base'

import {
	createIDFrom,
	createSlugFrom,
	getImagesFromURLs,
	getInventoryStatus,
} from '../seeds'
import { collectAllergens } from './allergens'
import { computeNutritionFacts } from './nutrition'
import { computePriceBySize, formatPrice } from './pricing'
import { generateSummary } from './descriptions'


const buildMenuItem = (seed: SeedItem): MenuItem => {
	const itemID = createIDFrom('item', seed.key)
	const sharedInfo = {
		id: itemID,
		title: seed.title,
		description: {
			summary: '',
			details: seed.description,
		},
		category: seed.category,
		images: getImagesFromURLs(seed),
		slug: createSlugFrom(seed),
		status: getInventoryStatus(seed),
		tags: seed.tags,
	} satisfies Partial<UnionProps<MenuItem>>

	if (seed.category === 'pizza') {
		const target = seed.base as PizzaIdentification
		target.itemID = itemID

		return {
			...(sharedInfo as PizzaItem),
			selection: {
				current: target,
				default: Object.freeze(target),
			},

			description: {
				...sharedInfo.description,
				summary: generateSummary(target),
			},
			allergens: collectAllergens(target),
			nutrition: computeNutritionFacts(target),
			prices: computePriceBySize(target),
			type: 'customizable',
		}
	}

	return {
		...(sharedInfo as StandardItem),
		description: {
			...sharedInfo.description,
			summary: seed.description,
		},
		allergens: seed.allergens,
		nutrition: seed.nutrition,
		prices: [
			{
				id: createIDFrom('price', seed.key, 'default'),
				label: 'Standard',
				price: formatPrice(seed.priceBase),
			},
		],
		type: 'standard',
	}
}

export const buildMenu = (seeds: readonly SeedItem[]): MenuItem[] => seeds.map(buildMenuItem)
