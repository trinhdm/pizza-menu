import type { IngredientDefinition, PizzaIdentification } from '@/types/catalog'
import type { NutritionFacts } from '@/types/item'
import { filterCatalog, initializeAs } from '../_utils'
import { nutrientUnits } from '../constants'


const updateNutritionFacts = (
	nutrition: NutritionFacts,
	delta: IngredientDefinition['nutritionDelta'],
): NutritionFacts => (
	(Object.keys(nutrition) as (keyof NutritionFacts)[])
		.reduce<NutritionFacts>((acc, key) => {
			acc[key] += (typeof delta === 'number' ? delta : delta[key])
			return acc
		}, nutrition)
)

const getNutritionFacts = (delta?: IngredientDefinition['nutritionDelta']): NutritionFacts => {
	const nutrients = Object.keys(nutrientUnits) as (keyof NutritionFacts)[],
		baseNutrition = initializeAs(nutrients, 0)

	if (!delta) return baseNutrition

	return typeof delta === 'number'
		? updateNutritionFacts(baseNutrition, delta)
		: delta
}

export const computeNutritionFacts = (choices: PizzaIdentification): NutritionFacts => {
	const { crust, ingredients } = filterCatalog(choices),
		crustNutrition = getNutritionFacts(crust?.nutritionDelta)

	return ingredients.reduce((acc, ingredient) => (
		updateNutritionFacts(acc, ingredient.nutritionDelta)
	), { ...crustNutrition })
}
