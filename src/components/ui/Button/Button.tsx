import type { FC, ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

interface ButtonProps {
	active?: boolean
	children: ReactNode
	className?: string
	type?: 'cta'
}

export const Button: FC<ButtonProps> = ({
	active,
	children,
	className,
	type = 'cta',
	...props
}) => {
	console.log('button')

	return (
		<button
			{ ...props }
			className={ cx(type, { active }, className) }
			type="button"
		>
			<span>{ children }</span>
		</button>
	)
}
