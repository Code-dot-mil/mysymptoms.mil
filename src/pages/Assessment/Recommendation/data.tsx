import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { GoAlert } from 'react-icons/go'
import { IconType } from 'react-icons/lib/cjs'
import classes from './styles.module.scss'
import { Affiliation } from '../interfaces'
import { LikelihoodLevel } from '@deptofdefense/covid19-calculator'

export type RiskLevel = 'low' | 'medium' | 'high'
export interface HeaderData {
	title: React.ReactNode
	Icon?: IconType
	iconStyle?: { [key: string]: string }
	description(riskReasons: string): React.ReactNode
}

export const lessThan18Check: {
	[key in Affiliation]: {
		title: JSX.Element
		description: () => JSX.Element
	}
} = {
	military: {
		title: (
			<>
				This is only meant for individuals <br />
				<span className={classes.bold}>18 years or older.</span>
			</>
		),
		description: () => (
			<span style={{ textAlign: 'center', display: 'inherit' }}>
				<span className={classes.bold}>
					Sorry, this application is designed and intended for adult use (18 years or
					older) only.
				</span>{' '}
				Please contact your military leadership for further guidance as the Coronavirus
				(COVID-19) outbreak evolves.
			</span>
		),
	},
	civilian: {
		title: (
			<>
				This is only meant for individuals <br />
				<span className={classes.bold}>18 years or older.</span>
			</>
		),
		description: () => (
			<span style={{ textAlign: 'center', display: 'inherit' }}>
				<span className={classes.bold}>
					Sorry, this application is designed and intended for adult use (18 years or
					older) only.
				</span>{' '}
				Please contact your parent(s) or guardian(s) for further guidance as the Coronavirus
				(COVID-19) outbreak evolves.
			</span>
		),
	},
	dodDependent: {
		title: (
			<>
				This is only meant for individuals <br />
				<span className={classes.bold}>18 years or older.</span>
			</>
		),
		description: () => (
			<span style={{ textAlign: 'center', display: 'inherit' }}>
				<span className={classes.bold}>
					Sorry, this application is designed and intended for adult use (18 years or
					older) only.
				</span>{' '}
				Please contact your parent(s) or guardian(s) for further guidance as the Coronavirus
				(COVID-19) outbreak evolves. Their units will have further guidance.
			</span>
		),
	},
	dodCivilian: {
		title: (
			<>
				This is only meant for individuals <br />
				<span className={classes.bold}>18 years or older.</span>
			</>
		),
		description: () => (
			<span style={{ textAlign: 'center', display: 'inherit' }}>
				<span className={classes.bold}>
					Sorry, this application is designed and intended for adult use (18 years or
					older) only.
				</span>{' '}
				Please contact your HR representative for further guidance as the Coronavirus
				(COVID-19) outbreak evolves.
			</span>
		),
	},
}
export const serverityHeader: { [key in LikelihoodLevel]: { [key in RiskLevel]: HeaderData } } = {
	veryLow: {
		low: {
			title: (
				<>
					<span className={classes.bold}>Very low likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: FaCheck,
			iconStyle: { left: '45px' },
			description: () => (
				<>
					<b>You do not have the expected symptoms of Coronavirus (COVID-19)</b>.
				</>
			),
		},
		medium: {
			title: (
				<>
					<span className={classes.bold}>Very low likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: FaCheck,
			iconStyle: { left: '45px' },
			description: (riskReasons) => (
				<>
					<b>You do not have the expected symptoms of Coronavirus (COVID-19).</b> If
					exposed<b>, there is a risk of becoming ill</b>, due to {riskReasons}. Avoid
					going to a doctor’s office, urgent care center, or emergency room as that could
					result in exposure to other people’s germs as well as divert attention from
					sicker patients. Please consider calling a doctor to discuss any concerns
					instead.
				</>
			),
		},
		high: {
			title: (
				<>
					<span className={classes.bold}>Very low likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: '45px' },
			description: (riskReasons) => (
				<>
					<b>You do not have the expected symptoms of Coronavirus (COVID-19).</b> However,
					if exposed, <b>there is a higher risk of becoming ill</b>, due to {riskReasons}.
					Avoid going to a doctor’s office, urgent care center, or emergency room as that
					could result in exposure to other people’s germs as well as divert attention
					from sicker patients. Please consider calling a doctor to discuss any concerns
					instead.
				</>
			),
		},
	},
	low: {
		low: {
			title: (
				<>
					<span className={classes.bold}>Low likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: FaCheck,
			iconStyle: { left: '15%' },
			description: () => (
				<>
					<b>
						You do not have the expected combination of Coronavirus (COVID-19) symptoms
					</b>
					.
				</>
			),
		},
		medium: {
			title: (
				<>
					<span className={classes.bold}>Low likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: '15%' },
			description: (riskReasons) => (
				<>
					<b>
						You do not have the expected combination of Coronavirus (COVID-19) symptoms.
					</b>{' '}
					However, <b>if exposed, there is a risk of becoming ill</b>, due to{' '}
					{riskReasons}. Avoid going to a doctor’s office, urgent care center, or
					emergency room as that could result in exposure to other people’s germs as well
					as divert attention from sicker patients. Please consider calling a doctor to
					discuss any concerns instead.
				</>
			),
		},
		high: {
			title: (
				<>
					<span className={classes.bold}>Low likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: '15%' },
			description: (riskReasons) => (
				<>
					<b>
						You do not have the expected combination of Coronavirus (COVID-19) symptoms.
					</b>{' '}
					However, if exposed, <b>there is a higher risk of becoming ill</b>, due to{' '}
					{riskReasons}. Avoid going to a doctor’s office, urgent care center, or
					emergency room as that could result in exposure to other people’s germs as well
					as divert attention from sicker patients. Please consider calling a doctor to
					discuss any concerns instead.
				</>
			),
		},
	},
	medium: {
		low: {
			title: (
				<>
					<span className={classes.bold}>Some likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: 'calc(50% - 90px)' },
			description: () => (
				<>
					<b>
						Some of your symptoms have occurred in people with Coronavirus (COVID-19).
					</b>{' '}
					However, there is <b>not a combination of the common symptoms</b>.
				</>
			),
		},
		medium: {
			title: (
				<>
					<span className={classes.bold}>Some likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: 'calc(50% - 90px)' },
			description: (riskReasons) => (
				<>
					<b>
						Some of your symptoms have occurred in people with Coronavirus (COVID-19).
					</b>{' '}
					If exposed, <b>there is a risk of becoming ill</b>, due to {riskReasons}.{' '}
					Continue to monitor the symptoms.
				</>
			),
		},
		high: {
			title: (
				<>
					<span className={classes.bold}>Some likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: 'calc(50% - 90px)' },
			description: (riskReasons) => (
				<>
					<b>
						Some of your symptoms have occurred in people with Coronavirus (COVID-19).
					</b>{' '}
					If exposed, <b>there is a higher risk of becoming ill</b>, due to {riskReasons}.{' '}
					<b>Closely monitor the symptoms.</b>
				</>
			),
		},
	},
	high: {
		low: {
			title: (
				<>
					<span className={classes.bold}>High likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: 'calc(50% + 40px)' },
			description: () => (
				<>
					<b>There is a high likelihood that you have Coronavirus (COVID-19).</b> Symptoms
					reported match those that are most common in Coronavirus (COVID-19) infections.
				</>
			),
		},
		medium: {
			title: (
				<>
					<span className={classes.bold}>High likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: 'calc(50% + 40px)' },
			description: (riskReasons) => (
				<>
					<b>There is a high likelihood that you have Coronavirus (COVID-19).</b> Symptoms
					reported are common in Coronavirus (COVID-19) infections. In addition, because
					of {riskReasons},{' '}
					<b>there is a higher risk of developing more severe symptoms.</b> If symptoms
					persist, consider seeking medical attention.
				</>
			),
		},
		high: {
			title: (
				<>
					<span className={classes.bold}>High likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { left: 'calc(50% + 40px)' },
			description: (riskReasons) => (
				<>
					<b>There is a high likelihood that you have Coronavirus (COVID-19).</b> Symptoms
					match those that are most common in Coronavirus (COVID-19) infections. There is
					also a <b>very high risk of developing more severe symptoms</b> because of{' '}
					{riskReasons}. <b>Seek immediate medical attention.</b>
				</>
			),
		},
	},
	veryHigh: {
		low: {
			title: (
				<>
					<span className={classes.bold}>Very High likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { right: '40px' },
			description: () => (
				<>
					<b>There is a very high likelihood that you have Coronavirus (COVID-19).</b>{' '}
					Symptoms match those that are most common in Coronavirus (COVID-19) infections.
				</>
			),
		},
		medium: {
			title: (
				<>
					<span className={classes.bold}>Very High likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { right: '40px' },
			description: (riskReasons) => (
				<>
					<b>There is a very high likelihood that you have Coronavirus (COVID-19).</b>{' '}
					Symptoms match those that are most common in Coronavirus (COVID-19) infections.
					Because of {riskReasons},{' '}
					<b>
						there is a higher risk of developing more severe symptoms. Seek immediate
						medical attention.
					</b>
				</>
			),
		},
		high: {
			title: (
				<>
					<span className={classes.bold}>Very High likelihood</span> for{' '}
					<span className={classes.covidLine}>Coronavirus (COVID-19)</span>
				</>
			),
			Icon: GoAlert,
			iconStyle: { right: '40px' },
			description: (riskReasons) => (
				<>
					<b>There is a very high likelihood that you have Coronavirus (COVID-19).</b>{' '}
					Symptoms match those that are most common in Coronavirus (COVID-19) infections.
					There is also a <b>very high risk of developing more severe symptoms</b> because
					of {riskReasons}. <b>Seek immediate medical attention.</b>
				</>
			),
		},
	},
}
export const outcomesByAffiliation = {
	military: {
		veryLow: [
			'Practice social distancing by standing six (6) feet away from other people while in public.',
			'Avoid close contact with people who are sick.',
			'Do not travel outside of the restricted travel radius.',
			'Avoid unnecessary gatherings beyond military duties.',
			'Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
		],
		low: [
			'Follow standard unit sick call procedures.',
			'Stand in back for unit formations.',
			'Practice social distancing by standing six (6) feet away from other people while in public.',
			'Do not travel outside of the restricted travel radius.',
			'Avoid unnecessary gatherings beyond military duties.',
			'Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
		],
		medium: [
			'Follow standard unit sick call and screening procedures, and notify unit medic in advance if possible.',
			'Notify your Chain-of-Command. Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
			'Follow leadership and local guidance for performing non-essential duties such as PT and unit formations.',
			'Do not visit your unit’s medic in-person until told to do so.',
			'Practice social distancing by standing six (6) feet away from other people while in public.',
			'Do not travel outside of the restricted travel radius.',
			'Avoid unnecessary gatherings beyond military duties.',
		],
		high: [
			'Call your unit’s medic immediately.',
			'Immediately notify your Chain-of-Command. Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
			'Do not visit your unit’s medic in-person until told to do so.',
			'Follow leadership and local guidance for performing non-essential duties such as PT and unit formations.',
			'Practice social distancing by standing six (6) feet away from other people while in public.',
			'Do not travel outside of the restricted travel radius.',
			'Avoid unnecessary gatherings beyond military duties.',
		],
		veryHigh: [
			'Seek emergency care.',
			'Contact your unit’s medic and Chain-of-Command immediately. Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
			'Do not visit your unit’s medic in-person until told to do so.',
			'Follow leadership and local guidance for performing non-essential duties such as PT and unit formations.',
			'Practice social distancing by standing six (6) feet away from other people while in public.',
			'Do not travel outside of the restricted travel radius.',
			'Avoid unnecessary gatherings beyond military duties.',
		],
	},
	dodCivilian: {
		veryLow: [
			'Practice self-isolation by removing yourself from the general public.',
			'Follow DoD travel guidelines.',
			'Only go out for essential activities (i.e. food, banking, medical, and work).',
			'Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command',
		],
		low: [
			'Practice self-isolation by removing yourself from the general public.',
			'Follow DoD travel guidelines.',
			'Only go out for essential activities (i.e. food, banking, medical, and work).',
			'Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
		],
		medium: [
			'Practice self-isolation by removing yourself from the general public.',
			'Follow DoD travel guidelines.',
			'Call your primary care doctor if symptoms are new or worsening.',
			'Immediately notify your department and HR representative.',
			'Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
		],
		high: [
			'Call your primary care doctor if symptoms are new or worsening.',
			'Follow DoD travel guidelines.',
			'Immediately notify your department and HR representative.',
			'Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
		],
		veryHigh: [
			'Call your primary care doctor if symptoms are new or worsening.',
			'Call 911 or seek care at an ER.',
			'Follow DoD travel guidelines.',
			'Immediately notify your department and HR representative.',
			'Adhere to DoD guidelines, and follow lawful orders of your Chain-of-Command.',
		],
	},
	dodDependent: {
		veryLow: [
			'Practice self-isolation by removing yourself from the general public.',
			'Follow service travel guidelines.',
			'Only go out for essential activities (i.e. food, banking, medical, and work).',
		],
		low: [
			'Practice self-isolation by removing yourself from the general public.',
			'Follow service travel guidelines.',
			'Only go out for essential activities (i.e. food, banking, medical, and work).',
		],
		medium: [
			'Practice self-isolation by removing yourself from the general public.',
			'Call your primary care doctor if symptoms are new or worsening.',
			'Follow service travel guidelines.',
			'Immediately notify your department and HR representative.',
		],
		high: [
			'Call your primary care doctor if symptoms are new or worsening.',
			'Avoid going to the hospital until a call to your physician is placed.',
			'Follow service travel guidelines.',
			'Immediately notify your department and HR representative.',
		],
		veryHigh: [
			'Call your primary care doctor if symptoms are new or worsening.',
			'Call 911 or seek care at an ER.',
			'Avoid going to the hospital until a call to your physician is placed.',
			'Follow service travel guidelines.',
			'Immediately notify your department and HR representative.',
		],
	},
	civilian: {
		veryLow: [
			'Practice self-isolation by removing yourself from the general public.',
			'Only go out for essential activities (i.e. food, banking, medical, and work).',
			'Adhere to DoD guidelines',
		],
		low: [
			'Practice self-isolation by removing yourself from the general public.',
			'Only go out for essential activities (i.e. food, banking, medical, and work).',
			'Adhere to DoD guidelines',
		],
		medium: [
			'Practice self-isolation by removing yourself from the general public.',
			'Call your primary care doctor if symptoms are new or worsening.',
			'Adhere to DoD guidelines',
		],
		high: [
			'Call your primary care doctor if symptoms are new or worsening.',
			'Avoid going to the hospital until a call to your physician is placed.',
			'Adhere to DoD guidelines',
		],
		veryHigh: [
			'Call your primary care doctor if symptoms are new or worsening.',
			'Call 911 or seek care at an ER.',
			'Avoid going to the hospital until a call is placed.',
			'Adhere to DoD guidelines',
		],
	},
}

export const cdcRecommendations = [
	<>
		<span className={classes.bold}>Avoid contact with older adults</span> and those with serious
		underlying medical conditions.
	</>,
	<>
		<span className={classes.bold}>If your symptoms get worse,</span> contact a healthcare
		provider.
	</>,
	<>
		<span className={classes.bold}>Wear a face mask in public.</span> This includes in group
		living and working areas.
	</>,
	<>
		<span className={classes.bold}>Practice social distancing</span> by standing six (6) feet
		away from other people while in public.
	</>,
	<>
		<span className={classes.bold}>Wash your hands often with soap and water</span> for at least
		20 seconds especially after you have been in a public place, or after blowing your nose,
		coughing, or sneezing.
	</>,
	<>
		If soap and water are not readily available,{' '}
		<span className={classes.bold}>use a hand sanitizer</span> that contains at least 60%
		alcohol. Cover all surfaces of your hands and rub them together until they feel dry.
	</>,
	<>
		<span className={classes.bold}>Avoid touching your eyes, nose, and mouth</span> with
		unwashed hands.
	</>,
	<>
		<span className={classes.bold}>Cover your coughs and sneezes</span> with a tissue or into
		your elbow.
	</>,
	<>
		<span className={classes.bold}>Throw used tissues away</span> as you use them. Don’t use a
		tissue more than once.
	</>,
	<>Coronavirus (COVID-19) testing is available in all 50 states, DC, and territories.</>,
	<>
		<span className={classes.bold}>To find out if testing is available</span> in your area, call
		your doctor or state/region public health line.
	</>,
	<>
		Before you go to the doctor, urgent care center, or emergency room, call to ask: Do I need
		to put on a mask before I get there? Is there anything else I need to do for safety?
	</>,
	<>
		<span className={classes.bold}>Additional CDC Coronavirus (COVID-19) information</span> is
		available at <a href='http://www.cdc.gov'>CDC.gov</a>.
	</>,
	<>
		<span className={classes.bold}>For further information for anyone that has traveled</span>,
		please refer to{' '}
		<a href='https://www.cdc.gov/coronavirus/2019-ncov/downloads/COVID-19_CAREKit_ENG.pdf'>
			this document
		</a>{' '}
		from the CDC.
	</>,
]
