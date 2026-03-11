import type { FC } from 'react'
import type { MenuItem } from '@/types/item'
import MenuFeatures from '@/features/menu'


interface ApiResponse {
	items: MenuItem[]
}

const MenuPage: FC = async () => {
	const url = `${process.env.ENDPOINT}`,
		response = await fetch(url)

	if (!response.ok) throw new Error('unable to load pizzas')
	const res = (await response.json()) as ApiResponse

	console.log(res)

	return <MenuFeatures items={ res.items } />
}

export default MenuPage
