import type { FC } from 'react'
import type { MenuItem } from '@/types/item'
import type { PickAs, UnionProps } from '@/types/base'
import { Image } from '@/components/ui/Image'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './MenuCard.module.scss'

const cx = classNames.bind(styles)

interface MenuCardProps extends UnionProps<MenuItem> {}

export const MenuCard: FC<MenuCardProps> = ({
	title,
	description,
	category,
	images,
	slug,
	tags,
	// ...props
}) => {
	// console.log('card', { props })
	const [image] = images

	return (
		<article className={ cx('card') }>
			<Link
				prefetch
				aria-label={ `View ${title}` }
				href={ `/${process.env.RESOURCE}/${slug}` }
			>
				<div className={ cx('card-image') }>
					<Image
						{ ...(image as PickAs<typeof Image, { sizes: string }>) }
						src={ image.src }
						alt={ image.alt }
						className="card-image"
						loading="eager"
						sizes="(max-width: 720px) 100vw, (max-width: 1080px) 50vw, 33vw"
					/>
				</div>
				<div className={ cx('card-body') }>
					<div className={ cx('card-row', 'card-eyebrow') }>
						<span className={ cx('card-category') }>{ category }</span>
						<span className={ cx('card-price') }>price</span>
					</div>
					<div className={ cx('card-row', 'card-details') }>
						<h3 className={ cx('card-title') }>{ title }</h3>
						<p className={ cx('card-description') }>{ description.summary }</p>
					</div>
					<div className={ cx('card-row', 'card-tags') }>
						{ tags.map(tag => (
							<span key={ tag } className={ cx('card-tag') }>{ tag }</span>
						))}
					</div>
				</div>
			</Link>
		</article>
	)
}
