import React from 'react'
import classNames from 'classnames'
import classes from './Header.module.scss'

export const Header: React.FC<Partial<JSX.IntrinsicElements['header']>> = (props) => {
	const { children, className = '', ...rest } = props
	return (
		<header className={classNames('usa-header usa-header--basic', className)} {...rest}>
			<div className={classNames('usa-nav-container', classes.navContainer)}>{children}</div>
		</header>
	)
}

export const HeaderNavbar: React.FC = ({ children }) => <div className='usa-navbar'>{children}</div>
