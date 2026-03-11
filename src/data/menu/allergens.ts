import type { Allergen } from '@/types/item'
import type { PizzaIdentification } from '@/types/catalog'
import { filterCatalog } from '../_utils'


export const collectAllergens = (choices: PizzaIdentification): Allergen[] => {
	const { crust, ingredients } = filterCatalog(choices)
	const collection = new Set<Allergen>()

	for (const allergen of crust?.allergens ?? [])
		collection.add(allergen)

	for (const ingredient of ingredients) {
		for (const allergen of ingredient.allergens)
			collection.add(allergen)
	}

	return Array.from(collection)
}
