'use client'

import type { CartLine } from '@/types/item'
import type { FC, ReactNode } from 'react'

import {
	createContext,
	useContext,
	useMemo,
} from 'react'
import { useStatePersist } from './useStatePersist'


interface CartContextProps {
	readonly children: ReactNode
}

interface CartContextValues {
	itemCount: number
	lines: CartLine[]
	subtotal: number
	addLine: (line: CartLine) => void
	clearCart: () => void
	removeLine: (id: CartLine['id']) => void
}

const CartContext = createContext<CartContextValues | null>(null)

export const CartProvider: FC<CartContextProps> = ({ children }) => {
	const [lines, setLines] = useStatePersist<CartLine[]>('pizza-cart', [])

	const value = useMemo<CartContextValues>(() => ({
		itemCount: lines.reduce((sum, line) => sum + line.quantity, 0),
		lines,
		subtotal: lines.reduce((sum, line) => sum + line.price.total, 0),
		addLine: (line: CartLine): void => setLines(current => [line, ...current]),
		clearCart: (): void => setLines([]),
		removeLine: (id: CartLine['id']): void => setLines(
			current => current.filter(line => line.id !== id),
		),
	}), [lines, setLines])

	return <CartContext.Provider value={ value }>{ children }</CartContext.Provider>
}

export const useCart = (): CartContextValues => {
	const context = useContext(CartContext)

	if (!context)
		throw new Error('useCart must be used within CartProvider')

	return context
}
