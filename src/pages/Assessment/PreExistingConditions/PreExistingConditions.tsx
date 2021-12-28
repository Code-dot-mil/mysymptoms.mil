import React, { useEffect, useState } from 'react'
import { preExistingConditions as c19PreExistingConditions } from '@deptofdefense/covid19-calculator'
import { FormData, ErrorMsg, PreExistingCondition } from '../interfaces'
import { CheckboxGroup, ContinueButton } from 'components'
import classes from './styles.module.scss'
import { useGAOnLoad } from '../hooks'

interface Props {
	onNext(preExistingConditions: PreExistingCondition[]): void
	onBack(): void
	formData: FormData
}

export const PreExistingConditions: React.FC<Props> = ({ onNext, formData }) => {
	useGAOnLoad('Pre-Existing Conditions', 'pre-existing conditions')
	const [preExistingConditions, setPreExisitingConditions] = useState<PreExistingCondition[]>([])
	const [errorState, setErrorState] = useState<ErrorMsg>(null)

	useEffect(() => {
		setPreExisitingConditions(formData.preExistingConditions)
	}, [formData])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (preExistingConditions.length === 0) {
			setErrorState('Please select your pre-existing conditions or none of the above.')
		} else {
			onNext(preExistingConditions)
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<div className={classes.wrapper}>
				<h2>{c19PreExistingConditions.label}</h2>
				{errorState && <div className={classes.errorMsg}>{errorState}</div>}
				<CheckboxGroup<PreExistingCondition>
					choices={c19PreExistingConditions.items}
					onChange={setPreExisitingConditions}
					values={preExistingConditions}
					grabFocus
					noneOfAbove
					half
				/>
			</div>
			<div className={classes.buttonContainer}>
				<ContinueButton />
			</div>
		</form>
	)
}
