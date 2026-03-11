import type { NotStartsWith, RemovePlural } from './_utils'
import type { SizesList } from '../base'


export type IngredientGroup =
	| 'cheeses'
	| 'drizzles'
	| 'garnishes'
	| 'meats'
	| 'misc'
	| 'sauces'
	| 'vegetables'

type Ingredient<T extends IngredientGroup = IngredientGroup> =
	T extends `${infer S}hes`
		? `${S}h`
		: RemovePlural<T>


export type CrustID =
	| 'cauliflower'
	| 'classic'
	| 'deep-dish'
	| 'stuffed'
	| 'thin'

export type IngredientID<T extends IngredientGroup = IngredientGroup> =
	`${Ingredient<T>}-${string}`

export type SizeID = NotStartsWith<keyof SizesList, 'xs'>


type BaseSizeIDs = SizeID | 'default'
export type ValuesOfIDs = BaseSizeIDs | number | null


export interface IDsMap<
	K extends string,
	V extends ValuesOfIDs = null,
> {
	image: `${K}:image:${V}`
	item: `item:${K}`
	price: `${K}:price:${V}`
}

export type FindID<
	K extends string,
	V extends ValuesOfIDs = null,
> =
	V extends BaseSizeIDs
		? IDsMap<K, V>['price']
		: V extends number
			? IDsMap<K, V>['image']
			: V extends null
				? IDsMap<K, V>['item']
				: never

export type LocateID<
	K extends string,
	V extends ValuesOfIDs = null,
> =
	FindID<K, V> extends `${K}:${infer T1}:${V}`
		? T1
		: FindID<K, V> extends `${infer T2}:${K}`
			? T2
			: never
