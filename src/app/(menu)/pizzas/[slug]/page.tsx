import type { FC } from 'react'
import { notFound } from 'next/navigation'
import { menuItemsBySlug } from '@/data/menu'
import ItemFeatures from '@/features/item'


interface ItemPageProps {
	params: Promise<{ slug: string }>
}

const ItemPage: FC<ItemPageProps> = async ({ params }) => {
	const { slug } = await params

	if (!slug) notFound()
	const item = menuItemsBySlug[slug]
	console.log(slug, item)

	return <ItemFeatures item={ item } />
}

export default ItemPage
