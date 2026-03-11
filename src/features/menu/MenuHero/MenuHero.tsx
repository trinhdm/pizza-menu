'use client'

import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import classNames from 'classnames/bind'
import gsap from 'gsap'
import styles from './MenuHero.module.scss'

const cx = classNames.bind(styles)

interface MenuHeroProps {
	title: string
	description?: string
	eyebrow?: string
}

export const MenuHero: FC<MenuHeroProps> = ({
	title,
	description,
	eyebrow,
}) => {
	const heroRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!heroRef.current) return

		const ctx = gsap.context(() => {
			gsap.fromTo(
				'[data-animate]',
				{
					opacity: 0,
					y: 28,
				},
				{
					duration: 0.8,
					ease: 'power3.out',
					opacity: 1,
					stagger: .08,
					y: 0,
				},
			)
		}, heroRef)

		return (): void => ctx.revert()
	}, [])

	return (
		<section
			ref={ heroRef }
			aria-labelledby="hero-heading"
			className={ cx('hero') }
		>
			{ eyebrow
				? <span data-animate className={ cx('eyebrow') }>{ eyebrow }</span>
				: null }
			<h1
				data-animate className={ cx('title') }
				id="hero-heading"
			>
				{ title }
			</h1>
			{ description
				? <p data-animate className={ cx('description') }>{ description }</p>
				: null }
		</section>
	)
}
