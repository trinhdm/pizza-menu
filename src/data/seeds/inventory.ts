import type { ItemStatus, SeedItem } from '@/types/item'
import { initializeAs } from '../_utils'


export const inventoryBySeed: Record<SeedItem['key'], Partial<ItemStatus>> = {
	'caesar-salad': { soldOut: true },
	margherita: { soldOut: false },
	pepperoni: { soldOut: false },
}

export const getInventoryStatus = ({ key }: SeedItem): ItemStatus => {
	const baseStatus = initializeAs(['featured', 'isNew', 'soldOut'], false),
		inventory = Object.keys(inventoryBySeed)

	if (!inventory.length) return baseStatus
	const currentStatus = Object.hasOwn(inventory, key) ? inventoryBySeed[key] : {}

	return { ...baseStatus, ...currentStatus }
}
