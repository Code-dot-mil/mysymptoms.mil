import {
	Age as C19Age,
	Symptom as C19Symptom,
	Condition as C19Condition,
	PreExistingCondition as C19PreExistingCondition,
	Exposure as C19Exposure,
} from '@deptofdefense/covid19-calculator'

export type Affiliation = 'military' | 'civilian' | 'dodDependent' | 'dodCivilian'
export type Exposure = C19Exposure | 'none'
export type Symptom = C19Symptom | 'none'
export type Condition = C19Condition | 'none'
export type PreExistingCondition = C19PreExistingCondition | 'none'

export interface DemographicData {
	age: C19Age | null
	affiliation: Affiliation | null
}

export interface FormData {
	acceptedTOS: boolean | null
	demographics: DemographicData
	exposures: Exposure | null
	symptoms: Symptom[]
	conditions: Condition[]
	preExistingConditions: PreExistingCondition[]
}

export interface UpdateData {
	setStep: React.Dispatch<React.SetStateAction<number>>
	setFormData: React.Dispatch<React.SetStateAction<FormData>>
}

export type ErrorMsg = string | null
