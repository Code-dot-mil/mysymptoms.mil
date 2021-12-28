import React from 'react'
import {
	symptoms,
	conditions,
	preExistingConditions,
	exposures,
} from '@deptofdefense/covid19-calculator'

import { Assessment } from './Assessment'
import { Symptom, Condition, PreExistingCondition, Exposure } from './interfaces'
import { render, fireEvent, waitFor } from 'test-utils'

const nonePrompt = 'None of the above'
const exposureNonePrompt = 'No'

interface AssessmentTestData {
	age: string
	affiliation: string
	exposures: Exposure
	symptoms: Symptom[]
	conditions: Condition[]
	preExistingConditions: PreExistingCondition[]
	recommendations: string[]
}

export const cleanData: AssessmentTestData = {
	age: '18-39',
	affiliation: 'Military',
	exposures: 'none',
	symptoms: ['none'],
	conditions: ['none'],
	preExistingConditions: ['none'],
	recommendations: [],
}

export const titles = {
	tos: 'Terms & Conditions',
	age: "Let's Get Started",
	exposure:
		'In the last 14 days, did you have close contact with someone with symptoms of COVID-19 or diagnosed with COVID-19?',
	symtoms: 'Select your current symptoms:',
	conditions: 'Select current conditions:',
	comorbids: 'Select pre-existing conditions:',
	recommendations: 'Additional recommendations from the CDC:',
}

export const continuations = {
	tos: "Yes, I agree. Let's continue",
	demographic: 'Continue',
	exposure: 'Continue',
	symtoms: 'Continue',
	conditions: 'Continue',
	comorbids: 'Continue',
}

export const liklihoodTitles = {
	veryUnlikely: 'Very low likelihood for Coronavirus (COVID-19)',
	unlikely: 'Low likelihood for Coronavirus (COVID-19)',
	lessLikely: 'Some likelihood for Coronavirus (COVID-19)',
	likely: 'High likelihood for Coronavirus (COVID-19)',
	highlyLikely: 'Very High likelihood for Coronavirus (COVID-19)',
}

export const assess = (name: string, data: AssessmentTestData) => {
	it(
		name,
		async () => {
			const { queryByText, getByText, getByLabelText, queryAllByText, container } = render(
				<Assessment />,
			)

			// Accept TOS
			expect(queryByText(titles.tos)).toBeInTheDocument()
			fireEvent.click(queryAllByText(continuations.tos)[0])

			// Select demographic information
			await waitFor(() => expect(queryByText(titles.age)).toBeInTheDocument())
			fireEvent.click(getByText(data.age))
			await waitFor(() => expect(getByText(data.age)).toHaveClass('checked'))
			fireEvent.click(getByText(data.affiliation))
			await waitFor(() => expect(getByText(data.affiliation)).toHaveClass('checked'))
			fireEvent.click(getByText(continuations.demographic))

			// Select exposure information
			await waitFor(() => expect(getByText(titles.exposure)).toBeInTheDocument())
			const exposurePrompt =
				exposures.items.find((choice) => choice.key === data.exposures)?.prompt ??
				exposureNonePrompt
			fireEvent.click(getByText(exposurePrompt))
			await waitFor(() => expect(getByLabelText(exposurePrompt)).toBeChecked())
			fireEvent.click(getByText(continuations.exposure))

			// select symptoms
			await waitFor(() => expect(getByText(titles.symtoms)).toBeInTheDocument())
			const symptomPrompts = data.symptoms.map(
				(symptomKey) =>
					symptoms.items.find((choice) => choice.key === symptomKey)?.prompt ??
					nonePrompt,
			)
			symptomPrompts.forEach((prompt) => fireEvent.click(getByLabelText(prompt)))
			for (const prompt of symptomPrompts) {
				await waitFor(() => expect(getByLabelText(prompt)).toBeChecked())
			}
			fireEvent.click(getByText(continuations.symtoms))

			// select conditions
			await waitFor(() => expect(getByText(titles.conditions)).toBeInTheDocument())
			const conditionPromps = data.conditions.map(
				(conditionKey) =>
					conditions.items.find((choice) => choice.key === conditionKey)?.prompt ??
					nonePrompt,
			)
			conditionPromps.forEach((prompt) => fireEvent.click(getByLabelText(prompt)))
			for (const prompt of conditionPromps) {
				await waitFor(() => expect(getByLabelText(prompt)).toBeChecked())
			}
			fireEvent.click(getByText(continuations.conditions))

			// select preExistingConditions
			await waitFor(() => expect(getByText(titles.comorbids)).toBeInTheDocument())
			const preExistingConditionsPromps = data.preExistingConditions.map(
				(preExistingConditionKey) =>
					preExistingConditions.items.find(
						(choice) => choice.key === preExistingConditionKey,
					)?.prompt ?? nonePrompt,
			)
			preExistingConditionsPromps.forEach((prompt) => fireEvent.click(getByLabelText(prompt)))
			for (const prompt of preExistingConditionsPromps) {
				await waitFor(() => expect(getByLabelText(prompt)).toBeChecked())
			}
			fireEvent.click(getByText(continuations.comorbids))

			// assert recommendations
			await waitFor(() => {
				expect(getByText(titles.recommendations)).toBeInTheDocument()
			})
			const recommendationText = container.textContent
			data.recommendations.forEach((recommend) =>
				expect(recommendationText).toEqual(expect.stringContaining(recommend)),
			)
		},
		10000,
	)
}
