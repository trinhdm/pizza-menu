import type {
	CrustID,
	FindID,
	IngredientGroup,
	IngredientID,
	SizeID,
} from './id'

import type { Allergens, NutritionFacts } from '../item/shared'
import type { CleanProps } from '../_utils'
import type { Delta, ReplacePrefix } from './_utils'
import type { PriceOption, RangeMinMax, SizesList } from '../base'


interface BaseDefinition<T> {
	id: T
	label: string
	nutritionDelta: Delta<keyof NutritionFacts, false>
	priceDelta: Delta<SizeID>
}

interface FoodDefinition<T>
	extends BaseDefinition<T> {
	description?: string
	allergens: Allergens
	countsTowardLimit: boolean
}

export interface CrustDefinition
	extends FoodDefinition<CrustID> {}

export interface IngredientDefinition
	extends FoodDefinition<IngredientID> {
	group: IngredientGroup
	incompatibleWith?: IngredientID[]
}

export interface SizeDefinition
	extends BaseDefinition<SizeID> {
	label: PizzaSizeLabel
	diameter: RangeMinMax
	priceBase: number
	toppings: {
		max: number
		recommended: RangeMinMax | undefined
	}
}

type PizzaSizeLabel = ReplacePrefix<
	SizesList[SizeID], 'x', 'Extra '
>


export interface PizzaSelection {
	crustID: CrustID
	ingredientsID: IngredientID[]			//	ingredientIDs > ingredientsID
	sizeID: SizeID
}

export interface PizzaIdentification extends PizzaSelection {
	itemID: FindID<string>
}

export interface PizzaDefinition {
	crust: CrustDefinition | undefined
	ids: CleanProps<PizzaIdentification, 'ID'>
	ingredients: IngredientDefinition[]
	size: SizeDefinition | undefined
}

export interface CustomPizzaDefinition {
	allergens: Allergens
	choices: PizzaIdentification
	nutrition: NutritionFacts
	price: PriceOption[]
	toppings: {
		count: number
		hasExceedsLimit: boolean
		incompatibilities: {
			conflictsWith: IngredientID[]
			ingredientID: IngredientID
		}[]
		ingredients: IngredientDefinition[]
	}
}

export interface PizzaCustomization {
	base: PizzaSelection
	crusts: readonly CrustDefinition[]
	ingredients: readonly IngredientDefinition[]
	sizes: readonly SizeDefinition[]
}
