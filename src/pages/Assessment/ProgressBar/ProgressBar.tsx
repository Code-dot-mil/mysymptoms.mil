import React from 'react'
import { IoIosArrowBack } from 'react-icons/io'
import classnames from 'classnames'

import classes from './styles.module.scss'
import { Button } from 'components/solo-uswds'

interface Props {
	percentComplete: number
	onBack(): void
}
export const ProgressBar: React.FC<Props> = (props) => {
	const { percentComplete, onBack } = props

	return (
		<div className={classes.container}>
			<Button className={classes.backButton} unstyled onClick={() => onBack()}>
				<IoIosArrowBack className={classes.leftArrow} /> back
			</Button>
			<div className={classes.progressBackground}>
				<div
					className={classnames(classes.progress, {
						[classes.complete]: percentComplete === 100,
					})}
					style={{ width: `${percentComplete}%` }}
				/>
				<span
					className={classnames(classes.progressPlaceholder, {
						[classes.completeLabel]: percentComplete === 100,
					})}
				>
					{percentComplete === 100 ? 'COMPLETE' : 'PROGRESS'}
				</span>
			</div>
		</div>
	)
}
