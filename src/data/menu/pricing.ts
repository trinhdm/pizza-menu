import type {
	IngredientDefinition,
	PizzaIdentification,
	SizeDefinition,
} from '@/types/catalog'
import type { PizzaItem } from '@/types/item'
import type { PriceOption } from '@/types/base'

import { filterCatalog, initializeAs, outputRange } from '../_utils'
import { createIDFrom } from '../seeds'
import { pizzaSizeCatalog } from '../catalog'
import { sizesPizza } from '../constants'


export const formatPrice = (price: number): PriceOption['price'] => `$${price.toFixed(2)}`

const getPricing = (
	delta?: IngredientDefinition['priceDelta'],
	size: SizeDefinition['id'] | undefined = 'md',
): number => {
	const basePricing = initializeAs(sizesPizza, 0),
		fallbackPrice = basePricing[size]

	if (!delta) return fallbackPrice

	return typeof delta === 'object'
		? (delta[size] ?? fallbackPrice)
		: delta
}

const calculateTotalPrice = (
	choices: PizzaIdentification,
	targetSize?: SizeDefinition,
): PriceOption['price'] => {
	const selected = filterCatalog(choices),
		{ crust, ingredients } = selected
	const size = targetSize ?? selected.size

	const basePrice = size?.priceBase ?? 0,
		crustDelta = getPricing(crust?.priceDelta, size?.id),
		ingredientSum = ingredients.reduce((sum, item) => (
			sum + getPricing(item.priceDelta, size?.id)
		), 0)

	return formatPrice(basePrice + crustDelta + ingredientSum)
}

export const computePriceBySize = (choices: PizzaIdentification): PizzaItem['prices'] => {
	const { itemID } = choices,
		key = itemID.slice(itemID.indexOf(':'))

	console.log(`\n\n\n`, { key, itemID }, `\n\n\n`)

	return pizzaSizeCatalog.map(size => ({
		// id: `${choices.itemID.replace('item:', '')}:price:${size.id}`,
		id: createIDFrom('price', key, size.id),
		label: size.label,
		dimensions: outputRange(size.diameter, 'in'),
		price: calculateTotalPrice(choices, size),
	}))
}
