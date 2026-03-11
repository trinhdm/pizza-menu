import type { Merge } from '../_utils'
import type { ItemDetails, PizzaBase, StandardBase } from './shared'
import type { PizzaCustomization, SizeDefinition } from '../catalog'


interface SeedBase extends ItemDetails {
	key: string
	title: string
	description: string
	imageUrls: string[]
}

interface PizzaSeed extends Merge<SeedBase, PizzaBase>,
	Pick<PizzaCustomization, 'base'> {}

interface StandardSeed extends Merge<SeedBase, StandardBase>,
	Pick<SizeDefinition, 'priceBase'> {}

export type SeedItem =
	| PizzaSeed
	| StandardSeed
