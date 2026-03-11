/* eslint-disable @stylistic/max-len */

import type { FC } from 'react'
import type { PizzaItem } from '@/types/item'
import { useMemo } from 'react'
import { getPizzaCustomizationOptions } from '@/data/item/customization'
import { Button } from '@/components/ui/Button'
import classNames from 'classnames/bind'
import styles from './PizzaCustomizer.module.scss'

const cx = classNames.bind(styles)

interface PizzaCustomizerProps {
	item: PizzaItem
}

export const PizzaCustomizer: FC<PizzaCustomizerProps> = ({ item }) => {
	const defaultDraft = useMemo(() => getPizzaCustomizationOptions(item.selection.default), [item])
	console.log({ defaultDraft, item })

	return (
		<section className={ cx('customize') }>
			<div className={ cx('section-header') }>
				<h2>Build your pizza</h2>
				<p>Customization is persisted per pizza in localStorage. Half & half pizzas are intentionally unsupported in this build.</p>
			</div>
			<div className={ cx('options') }>
				<Button>
					<strong>label</strong>
					<p>description</p>
				</Button>
			</div>
		</section>
	)
}
