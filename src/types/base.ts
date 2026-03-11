/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentProps, ComponentType } from 'react'
import type { CommonKeys, Diff } from './_utils'


export type PropsDiff<T, U> = Pick<T, Diff<T, U>>

export type UnionProps<T extends object> = Pick<T, {
	[K in CommonKeys<T>]: T extends Record<K, T[K]>
		? K
		: never
}[CommonKeys<T>]>


export type PickAs<
	C extends ComponentType<any>,
	T extends Record<string, unknown>,
> =
	Extract<ComponentProps<C>, T>

export type PickFrom<
	C extends ComponentType<any>,
	P extends keyof ComponentProps<C>,
> =
	Pick<ComponentProps<C>, P>

export type PickValue<
	C extends ComponentType<any>,
	P extends keyof ComponentProps<C>,
> =
	ComponentProps<C>[P]


//	general

export type RangeMinMax = [number, number] | [number]

interface Dimensions {
	height: number
	width: number
}

//	sizes

/* eslint-disable perfectionist/sort-interfaces */
export interface SizesList {
	xs: 'xsmall'
	sm: 'small'
	md: 'medium'
	lg: 'large'
	xl: 'xlarge'
}
/* eslint-enable perfectionist/sort-interfaces */

export interface BreakpointsGroup extends Record<keyof SizesList, number> {
	max: number
}


//	images

interface ImageBase {
	src: string
	alt: string
}

interface ImageBounded extends Dimensions, ImageBase {}

interface ImageFill extends ImageBase {
	height?: never
	width?: never
}

export type ImageItem = (
	| ImageBounded
	| ImageFill
) & { id?: `${string}:image:${number}` }

export type ImageItemProps<T extends ImageItem = ImageItem> =
	| Extract<T, ImageBounded> & { sizes?: never }
	| Extract<T, ImageFill> & { sizes: string }


//	links

export interface LinkItem {
	label: string
	href: string
}

//	prices

export interface PriceOption {
	id: `${string}:price:${string}`
	label: string
	dimensions?: string
	price: `$${number | string}`
}
