import type { FindID } from '../catalog'
import type { ImageItem } from '../base'


export interface Item extends ItemBase, ItemDetails {}

export interface ItemDetails {
	allergens: Allergens
	category: ItemCategory
	nutrition: NutritionFacts
	tags: ItemTag[]
}

export interface ItemBase {
	id: FindID<string>
	title: string
	description: {
		summary: string
		details: string
	}
	images: ImageItem[]
	slug: string
}

export interface PizzaBase {
	category: Extract<ItemCategory, 'pizza'>
}

export interface StandardBase {
	category: Exclude<ItemCategory, 'pizza'>
}


export interface ItemStatus {
	featured?: boolean
	isNew: boolean
	// isPopular: boolean
	soldOut: boolean
}

export type ItemCategory =
	| 'appetizer'
	| 'dessert'
	| 'drinks'
	| 'favorites'
	| 'pizza'
	| 'salad'

export type ItemTag =
	| 'contains-nuts'
	| 'customer-favorite'
	| 'dairy-free'
	| 'gluten-free'
	| 'limited'
	| 'new'
	| 'popular'
	| 'spicy'
	| 'staff-pick'
	| 'vegetarian'

export type Allergen =
	| 'egg'
	| 'fish'
	| 'milk'
	| 'peanut'
	| 'sesame'
	| 'shellfish'
	| 'soybeans'
	| 'tree nut'
	| 'wheat'

export type Allergens = Allergen[]

export interface NutritionFacts {
	calories: number
	carbs: number
	fat: number
	protein: number
	sodium: number
}
