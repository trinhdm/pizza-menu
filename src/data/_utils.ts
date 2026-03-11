import type { PizzaDefinition, PizzaIdentification } from '@/types/catalog'
import type { RangeMinMax } from '@/types/base'
import { crustCatalog, ingredientCatalog, pizzaSizeCatalog } from './catalog'


export const initializeAs = <K extends PropertyKey, V>(
	keys: K[],
	value: V,
): Record<K, V> => keys.reduce((acc, key) => (
	{ ...acc, [key]: value }
), {} as Record<K, V>)


export const outputRange = (
	range: RangeMinMax,
	unit: string,
): string => {
	const [min, max] = range,
		hasMax = max !== undefined && max > min,
		measurements = ['cm', 'ft', 'in']

	let minmax = hasMax ? `${min}-${max}` : min,
		text = unit

	if (measurements.includes(unit)) minmax += `"`
	else text += min > 1 || hasMax ? 's' : ''

	return `${minmax} ${text}`
}


export const filterCatalog = ({
	crustID, ingredientsID, itemID, sizeID,
}: PizzaIdentification): PizzaDefinition => {
	const crust = crustCatalog.find(item => crustID === item.id),
		ingredients = ingredientCatalog.filter(item => ingredientsID.includes(item.id)),
		size = pizzaSizeCatalog.find(item => sizeID === item.id)

	const ids = {
		crust: crustID,
		ingredients: ingredientsID,
		item: itemID,
		size: sizeID,
	} satisfies PizzaDefinition['ids']

	return {
		crust,
		ids,
		ingredients,
		size,
	}
}
