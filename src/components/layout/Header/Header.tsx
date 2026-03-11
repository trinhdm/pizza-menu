'use client'

import type { FC } from 'react'
import type { LinkItem } from '@/types/base'
import { usePathname } from 'next/navigation'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import classNames from 'classnames/bind'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

interface HeaderProps {
	links: LinkItem[]
}

export const Header: FC<HeaderProps> = ({ links }) => {
	const pathname = usePathname()
	const { itemCount } = useCart()

	const cartLink = links.find(({ href }) => href.includes('cart'))

	return (
		<header className={ cx('header') }>
			<div className={ cx('header-wrapper') }>
				<div className={ cx('brand') }>
					<Link href="/">Pizza Joint</Link>
				</div>
				<nav aria-label="primary" className={ cx('navbar') }>
					{ links.map(({ label, href }) => {
						const isActive = pathname === href

						return (
							<Link
								key={ href }
								className={ cx('link', { active: isActive }) }
								href={ href }
							>
								{ label }
								{ href === cartLink?.href
									? <span className={ cx('item-count') }>{ itemCount }</span>
									: null }
							</Link>
						)
					})}
				</nav>
			</div>
		</header>
	)
}
