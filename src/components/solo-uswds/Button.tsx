import React, { useState } from 'react'
import classNames from 'classnames'
import classes from './Button.module.scss'

export interface ButtonProps extends Partial<JSX.IntrinsicElements['button']> {
	focused?: boolean
	active?: boolean
	disabled?: boolean
	square?: boolean
	unstyled?: boolean
	outline?: boolean
	inverse?: boolean
	big?: boolean
	color?: 'secondary' | 'accent-cool' | 'base'
	className?: string
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			children,
			color,
			focused = false,
			active = false,
			outline = false,
			inverse = false,
			big = false,
			disabled = false,
			square = false,
			unstyled = false,
			className = '',
			...rest
		},
		ref,
	) => {
		const [isHovered, setIsHovered] = useState(false)

		return (
			<button
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				disabled={disabled}
				className={classNames('usa-button', className, {
					'usa-button--hover': isHovered,
					'usa-button--active': active,
					'usa-button--outline': outline,
					'usa-button--inverse': inverse,
					'usa-focus': focused,
					'usa-button--secondary': color === 'secondary',
					'usa-button--accent-cool': color === 'accent-cool',
					'usa-button--base': color === 'base',
					'usa-button--big': big,
					'usa-button--unstyled': unstyled,
					[classes.square]: square,
				})}
				ref={ref}
				{...rest}
			>
				{children}
			</button>
		)
	},
)
