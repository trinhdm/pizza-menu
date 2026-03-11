import type { FC } from 'react'
import type { PickAs } from '@/types/base'
import type { MenuItem } from '@/types/item'
import { Button } from '@/components/ui/Button'
import { Grid } from '@/components/ui/Grid'
import { Image } from '@/components/ui/Image'
import classNames from 'classnames/bind'
import styles from './ItemHero.module.scss'

const cx = classNames.bind(styles)

type ItemHeroProps = MenuItem & {}

export const ItemHero: FC<ItemHeroProps> = ({
	id,
	title,
	description,
	category,
	// eyebrow,
	images,
	prices,
	status,
}) => {
	console.log('menu item')
	const ariaLabel = 'item-heading'

	return (
		<section
			aria-labelledby={ ariaLabel }
			className={ cx('hero') }
		>
			<Grid>
				{ images.length ? (
					<Grid>
						{ images.map((image, i) => (i < 3 ? (
							<Image
								{ ...(image as PickAs<typeof Image, { sizes: string }>) }
								key={ `${id}-${image.id}` }
								src={ image.src }
								alt={ image.alt }
								className={ cx('hero-image') }
								loading={ i === 0 ? 'eager' : 'lazy' }
								sizes="(max-width: 768px) 100vw, 33vw"
							/>
						) : null)) }
					</Grid>
				) : null }
				<div className={ cx('hero-content') }>
					<span className="eyebrow">{ category }</span>
					<h1 id={ ariaLabel }>{ title }</h1>
					<p>{ description.summary }</p>

					<div className="hero__status">
						{ Object.entries(status).map(([stat, value]) => (value
							? <span key={ `${id}-${stat}` }>{ stat }</span>
							: null)) }
					</div>

					<div className="hero__details">
						<div className="hero__price">
							{ prices[0].price }
						</div>
						<Button>Add to Cart</Button>
					</div>
				</div>
			</Grid>
		</section>
	)
}
