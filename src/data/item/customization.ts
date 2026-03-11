import type {
	CustomPizzaDefinition,
	PizzaCustomization,
	PizzaIdentification,
} from '@/types/catalog'

import { crustCatalog, ingredientCatalog, pizzaSizeCatalog } from '../catalog'
import { collectAllergens } from '../menu/allergens'
import { computeNutritionFacts } from '../menu/nutrition'
import { computePriceBySize } from '../menu/pricing'
import { getIngredientDetails } from '../menu/toppings'


export const customizePizza = (
	choices: PizzaIdentification,
): CustomPizzaDefinition => {
	const toppings = getIngredientDetails(choices)

	return {
		allergens: collectAllergens(choices),
		choices,
		nutrition: computeNutritionFacts(choices),
		price: computePriceBySize(choices),
		toppings: {
			count: toppings.count,
			hasExceedsLimit: toppings.hasExceedsLimit,
			incompatibilities: toppings.incompatibilities,
			ingredients: toppings.ingredients,
		},
	}
}

export const getPizzaCustomizationOptions = (
	choices: PizzaIdentification,
): PizzaCustomization => ({
	base: {
		crustID: choices.crustID,
		ingredientsID: choices.ingredientsID,
		sizeID: choices.sizeID,
	},
	crusts: crustCatalog,
	ingredients: ingredientCatalog,
	sizes: pizzaSizeCatalog,
})

export const getDefaultPizza = (
	choices: PizzaIdentification,
): PizzaCustomization['base'] => ({
	crustID: choices.crustID,
	ingredientsID: choices.ingredientsID,
	sizeID: choices.sizeID,
})
