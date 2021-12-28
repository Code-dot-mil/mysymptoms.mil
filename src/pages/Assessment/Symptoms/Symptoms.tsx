import React, { useState, useEffect } from 'react'
import { symptoms as c19Symptoms } from '@deptofdefense/covid19-calculator'

import { CheckboxGroup, ContinueButton } from 'components'
import { FormData, Symptom, ErrorMsg } from '../interfaces'
import classes from './styles.module.scss'
import { useGAOnLoad } from '../hooks'

interface SymptomsProps {
	onNext(symptoms: Symptom[]): void
	onBack(): void
	formData: FormData
}

export const Symptoms: React.FC<SymptomsProps> = (props) => {
	const { onNext, formData } = props
	useGAOnLoad('Symptoms', 'symptoms')

	const [symptoms, setSymptoms] = useState<Symptom[]>([])
	const [errorState, setErrorState] = useState<ErrorMsg>(null)

	useEffect(() => {
		const { symptoms } = formData
		setSymptoms(symptoms)
	}, [formData])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (symptoms.length === 0) {
			setErrorState('Please select your current symptoms or none of the above.')
		} else {
			onNext(symptoms)
		}
	}

	return (
		<div className={classes.formWrapper}>
			<div className={classes.formConatiner}>
				<form onSubmit={onSubmit}>
					<div className={classes.wrapper}>
						<h2>{c19Symptoms.label}</h2>
						{errorState && <div className={classes.errorMsg}>{errorState}</div>}
						<CheckboxGroup<Symptom>
							choices={c19Symptoms.items}
							onChange={(values) => setSymptoms(values)}
							values={symptoms}
							grabFocus
							noneOfAbove
							half
						/>
					</div>
					<div className={classes.buttonContainer}>
						<ContinueButton />
					</div>
				</form>
			</div>
		</div>
	)
}
