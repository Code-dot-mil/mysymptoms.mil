import React, { useState, useEffect } from 'react'
import { exposures as c19Exposures } from '@deptofdefense/covid19-calculator'

import { ContinueButton, RadioButtonGroup } from 'components'
import { FormData, ErrorMsg, Exposure } from '../interfaces'
import classes from './styles.module.scss'
import { useGAOnLoad } from '../hooks'

interface Props {
	onNext(exposures: Exposure): void
	formData: FormData
}
export const Exposures: React.FC<Props> = (props) => {
	useGAOnLoad('Travel and Exposure', 'travel-and-exposure')
	const { onNext, formData } = props
	const [exposureData, setExposureData] = useState<Exposure>()
	const [errorState, setErrorState] = useState<ErrorMsg>()

	useEffect(() => {
		setExposureData(formData.exposures ?? undefined)
	}, [formData])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!exposureData) {
			setErrorState('Your answer to this question is required')
		} else {
			onNext(exposureData)
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<div className={classes.wrapper}>
				<h2>{c19Exposures.label}</h2>
				{errorState && <div className={classes.errorMsg}>{errorState}</div>}
				<RadioButtonGroup<Exposure>
					className={classes.radioButtonGroupWrapper}
					choices={c19Exposures.items}
					onChange={(value) => setExposureData(value)}
					value={exposureData}
					grabFocus
				/>
			</div>
			<div className={classes.buttonContainer}>
				<ContinueButton />
			</div>
		</form>
	)
}
