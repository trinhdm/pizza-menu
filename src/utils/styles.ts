
const isPropertyValid = <
	K extends string,
	V,
>(property: [K, V | undefined]): property is [K, V] => property[1] !== undefined

export const getValidProperties = <T extends object>(styles: Partial<T>): T => (
	Object.fromEntries(
		Object.entries(styles).filter(isPropertyValid),
	) as T
)
