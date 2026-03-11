import type { ItemBase, PizzaBase, StandardBase } from './shared'
import type { Merge } from '../_utils'


interface CartLineBase extends Pick<ItemBase, 'id' | 'slug' | 'title'> {
	price: {
		total: number
		unit: number
	}
	quantity: number
}


interface CartLinePizza extends Merge<CartLineBase, PizzaBase> {
	// customization: PizzaCustomization
	// type: Extract<ItemTypes, 'pizza'>
}

interface CartLineStandard extends Merge<CartLineBase, StandardBase> {
	// customization?: never
	// type: ExtractItemTypes, 'standard'>
}

export type CartLine =
	| CartLinePizza
	| CartLineStandard

