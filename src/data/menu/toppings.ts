import type { IngredientID, PizzaIdentification } from '@/types/catalog'
import { filterCatalog } from '../_utils'


const getIngredientConflicts = (choices: PizzaIdentification): {
	conflictsWith: IngredientID[]
	ingredientID: IngredientID
}[] => {
	const { ids, ingredients } = filterCatalog(choices)

	return ingredients
		.map(item => {
			const conflictsWith: IngredientID[] = (item.incompatibleWith ?? [])
				.filter(conflictID => ids.ingredients.includes(conflictID))

			return {
				conflictsWith,
				ingredientID: item.id,
			}
		})
		.filter(result => result.conflictsWith.length > 0)
}


export const getIngredientDetails = (choices: PizzaIdentification): {
	count: number
	hasExceedsLimit: boolean
	incompatibilities: ReturnType<typeof getIngredientConflicts>
	ingredients: ReturnType<typeof filterCatalog>['ingredients']
} => {
	const { ingredients, size } = filterCatalog(choices)
	const limitedToppings = new Set(
		ingredients.reduce<(typeof ingredients)[number]['group'][]>((acc, item) => {
			if (item.countsTowardLimit) acc.push(item.group)
			return acc
		}, []),
	)
	const count = limitedToppings.size

	// const limitedToppings = new Set(ingredients.filter(item => item.countsTowardLimit)
	// 	.map(item => item.group))
	// const count = ingredients.filter(item => limitedToppings.has(item.group)).length
	// if (size) hasExceedsLimit = count > size.toppings.max

	return {
		count,
		hasExceedsLimit: !!size && (count > size.toppings.max),
		incompatibilities: getIngredientConflicts(choices),
		ingredients,
	}
}
