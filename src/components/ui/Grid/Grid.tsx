'use client'

import type { CSSProperties, FC, ReactNode } from 'react'
import { useRef } from 'react'
import { getValidProperties } from '@/utils'
import classNames from 'classnames/bind'
import styles from './Grid.module.scss'

const cx = classNames.bind(styles)

type CSSVariables = Record<`--${string}`, number | string>
type CSSDeclarations = CSSProperties & CSSVariables

interface GridProps {
	areas?: CSSProperties['gridTemplateAreas']
	children: ReactNode
	className?: string
	cols?: CSSProperties['gridTemplateColumns']
	gap?: CSSProperties['gap']
	rows?: CSSProperties['gridTemplateRows']
}

export const Grid: FC<GridProps> = ({
	areas,
	children,
	className,
	cols = 'repeat(2, 1fr)',
	gap = '1rem',
	rows,
}) => {
	const gridRef = useRef<HTMLDivElement>(null)
	const stylesClasslist = {
		'grid-areas': areas,
		'grid-cols': cols,
		'grid-gap': gap,
		'grid-rows': rows,
	}

	const stylesClasses = getValidProperties(stylesClasslist),
		stylesVars = (Object.keys(stylesClasses) as (keyof typeof stylesClasses)[])
			.reduce<CSSDeclarations>((acc, prop) => {
				acc[`--${prop}`] = stylesClasses[prop]
				return acc
			}, {})


	console.log(cx(stylesClasses))

	return (
		<div ref={ gridRef } className={ cx('grid', stylesClasses, className) } style={ stylesVars }>
			{ children }
		</div>
	)
}
