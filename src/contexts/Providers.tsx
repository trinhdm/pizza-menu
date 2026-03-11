import type { FC, ReactNode } from 'react'
import { CartProvider } from '@/hooks/useCart'


interface ProvidersProps {
	readonly children: ReactNode
}

// eslint-disable-next-line arrow-body-style
export const Providers: FC<ProvidersProps> = ({ children }) => {
	return <CartProvider>{ children }</CartProvider>
}
