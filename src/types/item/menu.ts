import type {
	Item,
	ItemStatus,
	PizzaBase,
	StandardBase,
} from './shared'
import type { Merge } from '../_utils'
import type { PizzaIdentification } from '../catalog'
import type { PriceOption } from '../base'


type ItemTypes =
	| 'customizable'
	| 'standard'

interface MenuItemBase extends Item {
	prices: PriceOption[]
	status: ItemStatus
}

interface PizzaMenuItem extends Merge<MenuItemBase, PizzaBase> {
	prices: (PriceOption & { dimensions: string })[]
	selection: {
		current: PizzaIdentification
		default: Readonly<PizzaIdentification>
	}
	type: Extract<ItemTypes, 'customizable'>
}

interface StandardMenuItem extends Merge<MenuItemBase, StandardBase> {
	prices: (PriceOption & { dimensions?: never })[]
	type: Extract<ItemTypes, 'standard'>
}

export type MenuItem =
	| PizzaMenuItem
	| StandardMenuItem


export type PizzaItem<T = MenuItem> = Extract<T, { category: 'pizza' }>
export type StandardItem<T = MenuItem> = Exclude<T, { category: 'pizza' }>
