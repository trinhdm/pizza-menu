
/* eslint-disable perfectionist/sort-union-types */
type Day =
	| 'Monday'
	| 'Tuesday'
	| 'Wednesday'
	| 'Thursday'
	| 'Friday'
	| 'Saturday'
	| 'Sunday'
/* eslint-enable perfectionist/sort-union-types */

interface StoreHours {
	close: string
	open: string
}

export interface StoreInfo {
	name: string
	about: string
	address: string
	hours: Record<Day, StoreHours | null>
	phone: string
	timezone: string
}
