'use client'

import type { Dispatch, SetStateAction } from 'react'
import { useEffect, useState } from 'react'


export const useStatePersist = <T,>(
	key: string,
	initialValue: T,
): [T, Dispatch<SetStateAction<T>>, boolean] => {
	const [value, setValue] = useState<T>(() => {
		if (typeof window === 'undefined') return initialValue

		const storedValue = window.localStorage.getItem(key)
		return storedValue ? (JSON.parse(storedValue) as T) : initialValue
	})
	const [isHydrated, setIsHydrated] = useState<boolean>(false)

	useEffect(() => {
		try {
			const stored = localStorage.getItem(key)
			if (stored) setValue(JSON.parse(stored) as T)
		} catch(error) {
			console.error('failed to persist state', error)
		} finally {
			setIsHydrated(true)
		}
	}, [key])

	useEffect(() => {
		if (!isHydrated) return

		try {
			localStorage.setItem(key, JSON.stringify(value))
		} catch(error) {
			console.error('failed to persist state', error)
		}
	}, [isHydrated, key, value])

	return [value, setValue, isHydrated]
}
