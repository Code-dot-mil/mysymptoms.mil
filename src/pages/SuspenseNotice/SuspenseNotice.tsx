import React from 'react'

import classes from './styles.module.scss'

export const SuspenseNotice: React.FC = () => {

	return (
		<>
			<div className={classes.body}>
				<h2>MySymptoms is at end of life</h2>
				<p>
					Please check in with the medical providers or Chain of Command for procedures at your base.{' '}
					For symptom checking please use the CDC's <a href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'> Coronovirus Self-Checker </a>
				</p>
			</div>
		</>
	)
}
