import type { BreakpointsGroup, LinkItem } from '@/types/base'
import type { SizeID } from '@/types/catalog'
import type { NutritionFacts } from '@/types/item'


export const navbarLinks = [
	{ label: 'Menu', href: '/menu' },
	{ label: 'Store', href: '/store' },
	{ label: 'Cart', href: '/cart' },
] satisfies LinkItem[]

/* eslint-disable perfectionist/sort-objects */
export const breakpoints = {
	xs: 576,
	sm: 768,
	md: 1024,
	lg: 1280,
	xl: 1440,
	max: 1920,
} satisfies BreakpointsGroup

export const sizesPizza: SizeID[] = [
	'sm', 'md', 'lg', 'xl',
] as const
/* eslint-enable perfectionist/sort-objects */

export const nutrientUnits: Readonly<
	Record<keyof NutritionFacts, string>
> = Object.freeze({
	calories: '',
	carbs: 'g',
	fat: 'g',
	protein: 'g',
	sodium: 'mg',
})

