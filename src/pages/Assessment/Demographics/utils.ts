import { Affiliation } from '../interfaces'
import { ScorableCollection } from '@deptofdefense/covid19-calculator'

export const affiliations: ScorableCollection<Affiliation> = {
	key: 'affiliations',
	label: 'What is your affiliation with the Department of Defense (DoD)?',
	items: [
		{ prompt: 'Military', key: 'military' },
		{ prompt: 'Military Dependent', key: 'dodDependent' },
		{ prompt: 'DoD Civilian', key: 'dodCivilian' },
		{ prompt: 'DoD Contractor', key: 'civilian' },
	],
}
