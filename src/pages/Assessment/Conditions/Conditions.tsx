import React, { useState, useEffect } from 'react'
import { CheckboxGroup, ContinueButton } from 'components'
import { FormData, ErrorMsg, Condition } from '../interfaces'
import { conditions as c19Conditions } from '@deptofdefense/covid19-calculator'
import classes from './styles.module.scss'
import { useGAOnLoad } from '../hooks'

interface Props {
	onNext(data: Condition[]): void
	onBack(): void
	formData: FormData
}

export const Conditions: React.FC<Props> = ({ onNext, onBack, formData }) => {
	useGAOnLoad('Current Conditions', 'current-conditions')

	const [conditions, setConditions] = useState<Condition[]>([])
	const [errorState, setErrorState] = useState<ErrorMsg>(null)

	useEffect(() => {
		setConditions(formData.conditions)
	}, [formData])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (conditions.length === 0) {
			setErrorState('Please select your current conditions or none of the above.')
		} else {
			onNext(conditions)
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<div className={classes.wrapper}>
				<h2>{c19Conditions.label}</h2>
				{errorState && <div className={classes.errorMsg}>{errorState}</div>}
				<CheckboxGroup<Condition>
					choices={c19Conditions.items}
					onChange={setConditions}
					values={conditions}
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
