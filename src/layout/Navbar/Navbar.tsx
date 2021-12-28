import React from 'react'
import { Link } from 'react-router-dom'

import classes from './styles.module.scss'
import { OfficialSiteBanner } from 'components/solo-uswds'
import { dodLogo } from 'config/images'

export const Navbar: React.FC = () => {
	return (
		<>
			<OfficialSiteBanner />
			<div className={classes.header}>
				<Link to='/' className={classes.link}>
					<img src={dodLogo.default} className={classes.logo} alt='Department of Defense' />
					<h1 className={classes.title}>
						<span className={classes.small}>Department of Defense</span> <br />
						<span className={classes.bold}>
							Coronavirus (COVID-19)
							<br /> Symptom Checker
						</span>
					</h1>
				</Link>
			</div>
		</>
	)
}
