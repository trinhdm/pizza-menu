import type { FC } from 'react'
import type { MenuItem } from '@/types/item'
import { Grid } from '@/components/ui/Grid'
// import { useMemo } from 'react'
import classNames from 'classnames/bind'
import styles from './ItemDetails.module.scss'

const cx = classNames.bind(styles)

type ItemDetailsProps = MenuItem & {}

export const ItemDetails: FC<ItemDetailsProps> = ({
	id,
	description,
	nutrition,
}) => {
	const areas = `
		"calories calories"
		"carbs fat"
		"protein sodium"
	`

	return (
		<section className={ cx('itemdetails') }>
			<Grid gap="0 3rem">
				<div className="info-left">
					<h2>About</h2>
					<p>{ description.details }</p>
				</div>
				{ nutrition ? (
					<div className={ cx('nutrition-facts') }>
						<h2>Nutritional Facts</h2>
						<Grid
							areas={ areas }
							className={ cx('facts-table') }
							// gap="1.125rem"
						>
							{ Object.entries(nutrition).map(([nutrient, value]) => (
								<dl key={ `${id}-${nutrient}` } className={ cx('fact', nutrient) }>
									<div className="">
										<dt>{ nutrient }</dt>
										<dd>{ value }</dd>
									</div>
								</dl>
							)) }
						</Grid>
					</div>
				) : null }
			</Grid>
		</section>
	)
}
