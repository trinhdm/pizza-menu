import type { PizzaIdentification } from '@/types/catalog'
import { filterCatalog } from '../_utils'


export const generateSummary = (choices: PizzaIdentification): string => {
	const { ingredients } = filterCatalog(choices)
	const summary = ingredients.map(({ label }, i) => (i === ingredients.length - 1
		? `and ${label}.`
		: label)).join(', ').toLowerCase()

	return summary.charAt(0).toUpperCase() + summary.slice(1)
}
