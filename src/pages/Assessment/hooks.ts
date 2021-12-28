import { useCallback, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

import {
	Condition,
	DemographicData,
	FormData,
	PreExistingCondition,
	Symptom,
	Exposure,
	UpdateData,
} from './interfaces'
import { Demographics } from './Demographics'
import { Conditions } from './Conditions'
import { Exposures } from './Exposures'
import { PreExistingConditions } from './PreExistingConditions'
import { Recommendation } from './Recommendation'
import { Symptoms } from './Symptoms'
import { Terms } from './Terms'

const initialFormData: FormData = {
	acceptedTOS: null,
	demographics: {
		affiliation: null,
		age: null,
	},
	exposures: null,
	symptoms: [],
	conditions: [],
	preExistingConditions: [],
}

interface AssessmentStep<T> {
	Component: React.ElementType
	key: string
	onBack?: (data: UpdateData) => void
	onNext?: (data: UpdateData) => (data: T) => void
}

const resetFormDataKeys = (
	setFormData: React.Dispatch<React.SetStateAction<FormData>>,
	keys: (keyof FormData)[],
) =>
	setFormData((formData) => ({
		...formData,
		...keys.reduce(
			(data, key) => ({
				...data,
				[key]: initialFormData[key],
			}),
			{},
		),
	}))

const incrementStep = (setStep: React.Dispatch<React.SetStateAction<number>>) => {
	setStep((num) => num + 1)
}

const decrementStep = (setStep: React.Dispatch<React.SetStateAction<number>>) => {
	setStep((num) => num - 1)
}

const tosStep: AssessmentStep<any> = {
	Component: Terms,
	key: 'terms',
	onNext: ({ setStep, setFormData }) => () => {
		setFormData((formData) => ({ ...formData, acceptedTOS: true }))
		incrementStep(setStep)
	},
}

const demographicStep: AssessmentStep<DemographicData> = {
	Component: Demographics,
	key: 'demographics',
	onBack: ({ setStep, setFormData }) => {
		resetFormDataKeys(setFormData, ['demographics'])
		decrementStep(setStep)
	},
	onNext: ({ setFormData, setStep }) => (data) => {
		setFormData((prevData) => ({ ...prevData, demographics: data }))
		incrementStep(setStep)
	},
}

const exposureStep: AssessmentStep<Exposure> = {
	Component: Exposures,
	key: 'exposures',
	onBack: ({ setStep, setFormData }) => {
		resetFormDataKeys(setFormData, ['exposures'])
		decrementStep(setStep)
	},
	onNext: ({ setFormData, setStep }) => (exposures) => {
		setFormData((prevData) => ({ ...prevData, exposures }))
		incrementStep(setStep)
	},
}

const symptomsStep: AssessmentStep<Symptom[]> = {
	Component: Symptoms,
	key: 'symptoms',
	onBack: ({ setStep, setFormData }) => {
		resetFormDataKeys(setFormData, ['symptoms'])
		decrementStep(setStep)
	},
	onNext: ({ setStep, setFormData }) => (symptoms) => {
		setFormData((prevData) => ({ ...prevData, symptoms }))
		incrementStep(setStep)
	},
}

const conditionsStep: AssessmentStep<Condition[]> = {
	Component: Conditions,
	key: 'conditions',
	onBack: ({ setStep, setFormData }) => {
		resetFormDataKeys(setFormData, ['conditions'])
		decrementStep(setStep)
	},
	onNext: ({ setStep, setFormData }) => (conditions) => {
		setFormData((prevData) => ({ ...prevData, conditions }))
		incrementStep(setStep)
	},
}

const preExistingConditionsStep: AssessmentStep<PreExistingCondition[]> = {
	Component: PreExistingConditions,
	key: 'comorbids',
	onBack: ({ setStep, setFormData }) => {
		resetFormDataKeys(setFormData, ['preExistingConditions'])
		decrementStep(setStep)
	},
	onNext: ({ setStep, setFormData }) => (preExistingConditions) => {
		setFormData((prevData) => ({ ...prevData, preExistingConditions }))
		incrementStep(setStep)
	},
}

const recommendationsStep: AssessmentStep<any> = {
	Component: Recommendation,
	key: 'recommendation',
	onBack: ({ setStep }) => {
		decrementStep(setStep)
	},
}

export const useAssessment = () => {
	const [step, setStep] = useState(0)
	const [formData, setFormData] = useState<FormData>(initialFormData)

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [step])

	const {
		demographics: { age },
	} = formData

	const steps = useMemo(
		() =>
			age === '0-17'
				? [tosStep, demographicStep, recommendationsStep]
				: [
						tosStep,
						demographicStep,
						exposureStep,
						symptomsStep,
						conditionsStep,
						preExistingConditionsStep,
						recommendationsStep,
				  ],
		[age],
	)

	const currentStep = steps[step]

	const onBack = useCallback(
		() =>
			currentStep.onBack?.({
				setStep,
				setFormData,
			}),
		[currentStep],
	)

	const onNext = useMemo(
		() =>
			currentStep.onNext?.({
				setStep,
				setFormData,
			}) ?? (() => {}),
		[currentStep],
	)

	const percComplete = useMemo(() => (step / (steps.length - 1)) * 100, [step, steps])

	return { percComplete, formData, onBack, onNext, CurrentComponent: currentStep.Component }
}

export const useGAOnLoad = (pageName: string, subPath: string) => {
	const { pathname } = useLocation()
	useEffect(() => {
		if (window.gtag) {
			window.gtag('config', window.GA_MEASUREMENT_ID, {
				page_title: `U.S. Department of Defense Coronavirus (COVID-19) Symptom Checker - Assessment - ${pageName}`,
				page_path: pathname + '/' + subPath,
			})
		}
	}, [pageName, subPath, pathname])
}
