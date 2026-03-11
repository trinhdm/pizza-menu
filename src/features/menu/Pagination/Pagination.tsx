import type { FC, ReactNode } from 'react'
import { Button } from '@/components/ui/Button'
import classNames from 'classnames/bind'
import styles from './Pagination.module.scss'

const cx = classNames.bind(styles)

interface PaginationProps {
	children?: ReactNode
	current?: number
	total?: number
	handlePage?: (nextPage: number) => void
}

export const Pagination: FC<PaginationProps> = ({
	children,
	current,
	handlePage,
	total,
}) => {
	console.log('pagination')

	return (
		<div className={ cx('pagination') }>
			{ children }
			<Button>
				Next
			</Button>
			<Button>
				Prev
			</Button>
		</div>
	)
}
