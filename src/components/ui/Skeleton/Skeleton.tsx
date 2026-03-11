import type { FC } from 'react'
import classNames from 'classnames/bind'
import styles from './Skeleton.module.scss'

const cx = classNames.bind(styles)

interface SkeletonProps {
	className?: string
}

export const Skeleton: FC<SkeletonProps> = ({ className }) => {
	console.log('base component')

	return (
		<span className={ cx('skeleton', className) } />
	)
}
