/* eslint-disable */

'use client'

import { type FC, useEffect, useState } from 'react'
import type { ImageItemProps, PickFrom } from '@/types/base'
import { Skeleton } from '../Skeleton'
import ImageNext from 'next/image'
import classNames from 'classnames/bind'
import styles from './Image.module.scss'


export const isValidImage = (url: string) => {
	return new Promise((resolve) => {
	const img = new window.Image();
	img.onload = () => resolve(true);
	img.onerror = () => resolve(false);
	img.src = url;
	});
}
const isDimension = (value?: number): boolean => (
	typeof value === 'number'
	&& Number.isFinite(value)
	&& value > 0
)

const cx = classNames.bind(styles)

type ImageProps = ImageItemProps
	& PickFrom<typeof ImageNext, 'loading' | 'onError' | 'onLoad' | 'priority'> & {
		className?: string
	}

export const Image: FC<ImageProps> = ({
	src,
	alt,
	className,
	height,
	loading = 'lazy',
	priority,
	sizes,
	width,
}) => {
	const [isError, setIsError] = useState(false)
	const [isLoaded, setIsLoaded] = useState(false)

	const handleIsError = (): void => { setIsError(true) }
	const handleIsLoaded = (): void => { setIsLoaded(true) }

	useEffect(() => {
		isValidImage(src).then(isValid => !isValid && handleIsError())
	}, [])


	const props = isDimension(height) && isDimension(width)
		? { height, width }
		: { fill: true, sizes }

	if (isError)
		return null


	return (
		<div className={ cx('frame', className) }>
			{ !isLoaded && <Skeleton /> }
			<ImageNext
				{ ...props }
				src={ src }
				alt={ alt }
				className={ cx('image') }
				loading={ loading }
				onError={ handleIsError }
				onLoad={ handleIsLoaded }
				priority={ priority }
			/>
		</div>
	)
}
