import React from 'react'
import { ProgressBar } from './ProgressBar'

import { useAssessment } from './hooks'
import classes from './styles.module.scss'

export const Assessment: React.FC = () => {
	const { percComplete, formData, onBack, onNext, CurrentComponent } = useAssessment()

	return (
		<div className={classes.pageBackground}>
			<div className={classes.formConatiner}>
				{percComplete > 0 && <ProgressBar percentComplete={percComplete} onBack={onBack} />}
				<CurrentComponent onNext={onNext} formData={formData} />
			</div>
		</div>
	)
}
