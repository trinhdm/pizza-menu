import type { FC, ReactNode } from 'react'
import classNames from 'classnames/bind'
import styles from './Search.module.scss'

const cx = classNames.bind(styles)

interface SearchProps {
	children: ReactNode
}

export const Search: FC<SearchProps> = ({ children }) => {
	console.log('base component')

	return (
		<div className={ cx('basecomponent') }>
			{ children }
		</div>
	)
}
