import type { FC, ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './Footer.module.scss'

const cx = classNames.bind(styles)

interface FooterProps {
	children: ReactNode
}

export const Footer: FC<FooterProps> = ({ children }) => {
	console.log('footer')

	return (
		<footer className={ cx('footer') }>
			{ children }
		</footer>
	)
}
