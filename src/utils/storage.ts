
const getStoredValue = <T>(
	key: string,
	fallback: T,
): T => {
	if (typeof window === 'undefined') return fallback

	try {
		const value = localStorage.getItem(key)
		return value ? (JSON.parse(value) as T) : fallback
	} catch {
		return fallback
	}
}

const setStoredValue = <T>(
	key: string,
	value: T,
): void => {
	window.localStorage.setItem(key, JSON.stringify(value))
}


export { getStoredValue, setStoredValue }
