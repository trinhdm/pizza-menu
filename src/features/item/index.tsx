import type { FC } from 'react'
import type { MenuItem } from '@/types/item'
import { notFound } from 'next/navigation'
import { ItemHero } from '@/features/item/ItemHero'
import { ItemDetails } from '@/features/item/ItemDetails'
import { PizzaCustomizer } from './PizzaCustomizer'


interface ItemPageProps {
	item?: MenuItem | undefined
}

const ItemFeatures: FC<ItemPageProps> = ({ item }) => {
	if (!item) notFound()
	const isPizza = item.category === 'pizza'
	console.log(item)

	return (
		<>
			<ItemHero { ...item } />
			<ItemDetails { ...item } />
			{ isPizza ? <PizzaCustomizer item={ item } /> : null }
			{/* { slug } <pre>{ JSON.stringify(item, null, 4) }</pre> */}
		</>
	)
}

export default ItemFeatures
