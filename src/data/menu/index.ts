import type { MenuItem } from '@/types/item'
import { buildMenu } from './build'
import { itemSeeds } from '../seeds'


export const menuItems: MenuItem[] = buildMenu(itemSeeds)

export const menuItemsBySlug = Object.fromEntries(menuItems.map(item => [item.slug, item]))
