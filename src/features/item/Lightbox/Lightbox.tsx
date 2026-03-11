import type { FC, ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './Lightbox.module.scss'

const cx = classNames.bind(styles)

interface LightboxProps {
	children: ReactNode
}

export const Lightbox: FC<LightboxProps> = ({ children }) => {
	console.log('base component')

	return (
		<div className={ cx('basecomponent') }>
			{ children }
		</div>
	)
}
