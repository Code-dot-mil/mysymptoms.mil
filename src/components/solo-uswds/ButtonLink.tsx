import React, { useState } from 'react'
import classNames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'

import classes from './Button.module.scss'

interface Props extends LinkProps {
	focused?: boolean
	active?: boolean
	square?: boolean
	unstyled?: boolean
	outline?: boolean
	inverse?: boolean
	big?: boolean
	color?: 'secondary' | 'accent-cool' | 'base'
	className?: string
}

export const ButtonLink: React.FC<Props> = ({
	children,
	color,
	focused = false,
	active = false,
	outline = false,
	inverse = false,
	big = false,
	square = false,
	unstyled = false,
	className = '',
	...rest
}) => {
	const [isHovered, setIsHovered] = useState(false)

	return (
		<Link
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
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
			{...rest}
		>
			{children}
		</Link>
	)
}
