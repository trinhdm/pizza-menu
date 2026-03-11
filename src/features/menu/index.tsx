import type { FC } from 'react'
import type { MenuItem } from '@/types/item'
import { Grid } from '@/components/ui/Grid'
import { MenuCard } from './MenuCard'
import { MenuHero } from './MenuHero'
import { Pagination } from './Pagination'


interface MenuPageProps {
	items: MenuItem[]
}

const MenuFeatures: FC<MenuPageProps> = ({ items }) => {
	console.log('menu feats')

	return (
		<>
			<MenuHero
				eyebrow="Neighborhood pizza, elevated."
				title="Browse, filter, and customize every pie."
			/>
			<section>
				<div>
					sidebar filters here
				</div>

				<Grid cols="320px 1fr">
					<div className="menu__header">
						<h2>Menu</h2>

						<span className="menu__count">
							# items
						</span>
					</div>

					<Grid>
						{ items.length
							? items.map(item => <MenuCard key={ item.id } { ...item } />)
							: 'no results' }
					</Grid>

					<Pagination />
				</Grid>
			</section>
		</>
	)
}

export default MenuFeatures
