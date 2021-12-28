import { useMemo } from 'react'
import { ages, calculate, LikelihoodLevel } from '@deptofdefense/covid19-calculator'
import { FormData } from '../interfaces'
import {
	outcomesByAffiliation,
	RiskLevel,
	HeaderData,
	lessThan18Check,
	serverityHeader,
} from './data'

export const useRecommendation = (formData: FormData) => {
	const {
		likelihoodLevel,
		riskLevel,
		riskReason,
	}: {
		likelihoodLevel: LikelihoodLevel
		riskLevel: RiskLevel
		riskReason: string
	} = useMemo(() => {
		const { demographics, exposures, symptoms, conditions, preExistingConditions } = formData
		const { age } = demographics

		const riskReasons = []
		//If I find an age with a preExisting score > 0
		if (ages.items.find((ageData) => ageData.key === age)?.preExisting) {
			riskReasons.push('age')
		}
		switch (exposures) {
			case 'contact':
				riskReasons.push('contact')
				break
			case 'possibleContact':
				riskReasons.push('possible contact')
				break
			default:
				break
		}

		if (!preExistingConditions.includes('none')) {
			riskReasons.push('pre-existing condition(s)')
		}

		const riskReason =
			riskReasons.length > 1
				? riskReasons.slice(0, riskReasons.length - 1).join(', ') +
				  ` and ${riskReasons[riskReasons.length - 1]}`
				: riskReasons.join()

		const { levels } = calculate({
			ages: [age ?? ''],
			exposures: [exposures ?? ''],
			symptoms,
			conditions,
			preExistingConditions,
		})

		const riskLevel =
			levels.preExisting === 'high' || levels.exposure === 'high'
				? 'high'
				: levels.preExisting === 'medium' || levels.exposure === 'medium'
				? 'medium'
				: 'low'

		return {
			riskLevel,
			//TODO: this typing is bad but just a patch for now
			likelihoodLevel: levels.likelihood as LikelihoodLevel,
			riskReason,
		}
	}, [formData])

	const affiliation = formData.demographics.affiliation ?? 'civilian'
	const recommendations =
		formData.demographics.age === '0-17'
			? []
			: outcomesByAffiliation[affiliation][likelihoodLevel]

	let headerData: HeaderData
	if (formData.demographics.age === '0-17') {
		headerData = lessThan18Check[affiliation]
	} else {
		headerData = serverityHeader[likelihoodLevel][riskLevel]
	}

	return {
		likelihoodLevel,
		riskLevel,
		headerData,
		recommendations,
		affiliation,
		riskReason,
		...formData,
	}
}
