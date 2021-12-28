import React from 'react'

import { Footer } from 'layout/Footer'
import { Navbar } from 'layout/Navbar'

import classes from './styles.module.scss'

export const ContentWrapper: React.FC = (props) => {
	return (
		<main className={classes.main}>
			<Navbar />
			<div className={classes.bodyWrapper}>{props.children}</div>
			<Footer />
		</main>
	)
}
