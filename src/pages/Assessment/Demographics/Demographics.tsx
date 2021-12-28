import React, { useEffect, useState } from 'react'
import classnames from 'classnames'

import { ContinueButton } from 'components'
import { Button } from 'components/solo-uswds'
import { useSetFocus } from 'hooks/useSetFocus'

import { useGAOnLoad } from '../hooks'
import { Affiliation, DemographicData, ErrorMsg, FormData } from '../interfaces'
import classes from './styles.module.scss'
import { affiliations } from './utils'
import { ages, Age } from '@deptofdefense/covid19-calculator'

interface Props {
	onNext(info: DemographicData): void
	formData: FormData
}
export const Demographics: React.FC<Props> = (props) => {
	const { onNext, formData } = props
	useGAOnLoad('Get Started', 'get-started')
	const firstButtonRef = useSetFocus<HTMLButtonElement>()

	const [selectedAge, setSelectedAge] = useState<Age>()
	const [selectedAffiliation, setSelectedAffiliation] = useState<Affiliation>()
	const [errorState, setErrorState] = useState<{
		selectedAffiliation?: ErrorMsg
		selectedAge?: ErrorMsg
	}>({})

	useEffect(() => {
		const { age, affiliation } = formData.demographics
		setSelectedAge(age ?? undefined)
		setSelectedAffiliation(affiliation ?? undefined)
	}, [formData])

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (!selectedAffiliation || !selectedAge) {
			setErrorState({
				selectedAffiliation: !selectedAffiliation
					? 'Please select your affiliation with the DoD'
					: null,
				selectedAge: !selectedAge ? 'Please select your age' : null,
			})
		} else {
			onNext({
				affiliation: selectedAffiliation!,
				age: selectedAge,
			})
		}
	}

	return (
		<form onSubmit={onSubmit}>
			<div className={classes.wrapper}>
				<h2>Let's Get Started</h2>
				<h3 className={classes.sectionTitle}>
					<b>{ages.label}</b>
				</h3>
				{errorState?.selectedAge && (
					<div className={classes.errorMsg}>{errorState.selectedAge}</div>
				)}
				<div className={classes.buttonWrapper}>
					{ages.items.map((age, index) => (
						<Button
							key={age.key}
							type='button'
							big
							outline
							className={classnames(classes.third, {
								[classes.checked]: selectedAge === age.key,
							})}
							onClick={() => {
								setSelectedAge(age.key)
							}}
							ref={index === 0 ? firstButtonRef : undefined}
						>
							{age.prompt}
						</Button>
					))}
				</div>
				<h3 className={classes.sectionTitle}>
					<b>{affiliations.label}</b>
					<span className={classes.notAffiliated}>
						Not affiliated with the DoD?{' '}
						<a href='https://www.cdc.gov/coronavirus/2019-nCoV/index.html'>
							Visit the CDC for guidance.
						</a>
					</span>
				</h3>
				{errorState?.selectedAffiliation && (
					<div className={classes.errorMsg}>{errorState.selectedAffiliation}</div>
				)}
				<div className={classes.buttonWrapper}>
					{affiliations.items.map(({ prompt, key }) => (
						<Button
							key={key}
							type='button'
							big
							outline
							className={classnames(classes.fourth, {
								[classes.checked]: selectedAffiliation === key,
							})}
							onClick={() => {
								setSelectedAffiliation(key)
							}}
						>
							{prompt}
						</Button>
					))}
				</div>
			</div>
			<div className={classes.buttonContainer}>
				<ContinueButton />
			</div>
		</form>
	)
}
