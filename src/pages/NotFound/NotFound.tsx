import React from 'react'

import { ButtonLink } from 'components/solo-uswds'

import classes from './styles.module.scss'

export const NotFound: React.FC = () => {
	return (
		<>
			<div className={classes.body}>
				<h2>Page not Found</h2>
				<p>Sorry, this page does not exist.</p>
				<p>
					If you head back to the home page, you can begin checking your risk for
					Coronavirus (COVID‑19) from there.
				</p>
				<ButtonLink to='/'>Return Home</ButtonLink>
			</div>
		</>
	)
}
