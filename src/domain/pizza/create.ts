import type { PizzaIdentification } from '@/types/catalog'


export const getDefaultPizzaOptions = (choices: PizzaIdentification) => ({
	crustID: choices.crustID ?? 'classic',
	finishingIDs: choices.finishingIDs,
	sizeID: 'medium',
	toppingIDs: [choices.sauceID, choices.cheeseID],
})
