import { assess, cleanData, liklihoodTitles } from './testUtils'

const scrollMock = jest.fn()
beforeAll(() => {
	window.scrollTo = scrollMock
})
afterEach(() => {
	scrollMock.mockReset()
})

assess('(VL|L) age 64', {
	...cleanData,
	age: '40-64',
	recommendations: [
		liklihoodTitles.veryUnlikely,
		'You do not have the expected symptoms of Coronavirus (COVID-19).',
	],
})

assess('(VL|M) possible contact', {
	...cleanData,
	exposures: 'possibleContact',
	recommendations: [
		liklihoodTitles.veryUnlikely,
		'You do not have the expected symptoms of Coronavirus (COVID-19). If exposed, there is a risk of becoming ill, due to possible contact. Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('(VL|M) steroids', {
	...cleanData,
	preExistingConditions: ['steroids'],
	recommendations: [
		liklihoodTitles.veryUnlikely,
		'You do not have the expected symptoms of Coronavirus (COVID-19). If exposed, there is a risk of becoming ill, due to pre-existing condition(s). Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('(VL|M) age 81', {
	...cleanData,
	age: '80+',
	recommendations: [
		liklihoodTitles.veryUnlikely,
		'You do not have the expected symptoms of Coronavirus (COVID-19). If exposed, there is a risk of becoming ill, due to age. Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('(VL|H) contact with known diagnoiseseses', {
	...cleanData,
	exposures: 'contact',
	recommendations: [
		liklihoodTitles.veryUnlikely,
		'You do not have the expected symptoms of Coronavirus (COVID-19). However, if exposed, there is a higher risk of becoming ill, due to contact. Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('(VL|H) steroids, asthma', {
	...cleanData,
	preExistingConditions: ['steroids', 'asthma'],
	recommendations: [
		liklihoodTitles.veryUnlikely,
		'You do not have the expected symptoms of Coronavirus (COVID-19). However, if exposed, there is a higher risk of becoming ill, due to pre-existing condition(s). Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('( L|L) fatigue, chills', {
	...cleanData,
	symptoms: ['fatigue', 'chills'],
	recommendations: [
		liklihoodTitles.unlikely,
		'You do not have the expected combination of Coronavirus (COVID-19) symptoms.',
	],
})

assess('( L|M) fatigue, diarrhea, organ transplant, possibleContact', {
	...cleanData,
	exposures: 'possibleContact',
	symptoms: ['fatigue', 'diarrhea'],
	preExistingConditions: ['organTransplant'],
	recommendations: [
		liklihoodTitles.unlikely,
		'You do not have the expected combination of Coronavirus (COVID-19) symptoms. However, if exposed, there is a risk of becoming ill, due to possible contact and pre-existing condition(s). Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('( L|H) congestion, fatigue, steroids, organ transplant, contact with known diagnonses', {
	...cleanData,
	exposures: 'contact',
	symptoms: ['congestion', 'fatigue'],
	preExistingConditions: ['steroids', 'organTransplant'],
	recommendations: [
		liklihoodTitles.unlikely,
		'You do not have the expected combination of Coronavirus (COVID-19) symptoms. However, if exposed, there is a higher risk of becoming ill, due to contact and pre-existing condition(s). Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('( L|H) age 81, congestion, vomiting, heart disease, traveled outside country', {
	...cleanData,
	age: '80+',
	exposures: 'possibleContact',
	symptoms: ['congestion', 'vomiting'],
	preExistingConditions: ['heartDisease'],
	recommendations: [
		liklihoodTitles.unlikely,
		'You do not have the expected combination of Coronavirus (COVID-19) symptoms. However, if exposed, there is a higher risk of becoming ill, due to age, possible contact and pre-existing condition(s). Avoid going to a doctor’s office, urgent care center, or emergency room as that could result in exposure to other people’s germs as well as divert attention from sicker patients. Please consider calling a doctor to discuss any concerns instead.',
	],
})

assess('( M|L) congestion, lossOfSmell', {
	...cleanData,
	symptoms: ['congestion', 'lossOfSmell'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). However, there is not a combination of the common symptoms.',
	],
})

assess('( M|L) fatigue, headache', {
	...cleanData,
	symptoms: ['fever', 'headache'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). However, there is not a combination of the common symptoms.',
	],
})

assess('( M|L) body aches, fatigue, dizziness', {
	...cleanData,
	symptoms: ['bodyAches', 'fatigue', 'dizziness'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). However, there is not a combination of the common symptoms.',
	],
})

assess('( M|L) age 64, fever, fatigue, diarrhea', {
	...cleanData,
	age: '40-64',
	symptoms: ['fever', 'fatigue', 'diarrhea'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). However, there is not a combination of the common symptoms.',
	],
})
assess('( M|M) fatigue, cough, possible contact', {
	...cleanData,
	exposures: 'possibleContact',
	symptoms: ['fatigue', 'fever'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). If exposed, there is a risk of becoming ill, due to possible contact. Continue to monitor the symptoms.',
	],
})

assess('( M|M) chills, fatigue, congestion, in exposed state', {
	...cleanData,
	exposures: 'possibleContact',
	symptoms: ['chills', 'fatigue', 'congestion'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). If exposed, there is a risk of becoming ill, due to possible contact. Continue to monitor the symptoms.',
	],
})

assess('( M|M) age 81, chills, cough, diarrhea, in exposed state', {
	...cleanData,
	age: '80+',
	exposures: 'possibleContact',
	symptoms: ['chills', 'cough', 'diarrhea'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). If exposed, there is a risk of becoming ill, due to age and possible contact. Continue to monitor the symptoms.',
	],
})

assess('( M|H) sob, fatigue, liver disease, overweight, diabetes type 2', {
	...cleanData,
	symptoms: ['sob', 'fatigue'],
	preExistingConditions: ['liverDisease', 'overweight', 'diabetesType2'],
	recommendations: [
		liklihoodTitles.lessLikely,
		'Some of your symptoms have occurred in people with Coronavirus (COVID-19). If exposed, there is a higher risk of becoming ill, due to pre-existing condition(s). Closely monitor the symptoms.',
	],
})

assess('( H|L) fever, difficulty breathing', {
	...cleanData,
	symptoms: ['fever'],
	conditions: ['hardBreathing'],
	recommendations: [
		liklihoodTitles.likely,
		'There is a high likelihood that you have Coronavirus (COVID-19). Symptoms reported match those that are most common in Coronavirus (COVID-19) infections.',
	],
})

assess('( H|M) age 81, fever, congestion, lossOfSmell', {
	...cleanData,
	age: '80+',
	symptoms: ['fever', 'congestion', 'lossOfSmell'],
	recommendations: [
		liklihoodTitles.likely,
		'There is a high likelihood that you have Coronavirus (COVID-19). Symptoms reported are common in Coronavirus (COVID-19) infections. In addition, because of age, there is a higher risk of developing more severe symptoms.',
	],
})

assess('( H|M) fever, blueLips, traveled outside country', {
	...cleanData,
	exposures: 'possibleContact',
	symptoms: ['fever'],
	conditions: ['blueLips'],
	recommendations: [
		liklihoodTitles.likely,
		'There is a high likelihood that you have Coronavirus (COVID-19). Symptoms reported are common in Coronavirus (COVID-19) infections. In addition, because of possible contact, there is a higher risk of developing more severe symptoms. If symptoms persist, consider seeking medical attention.',
	],
})

assess('( H|M) age 81, body aches, fatigue, congestion, blueLips, in exposed US state', {
	...cleanData,
	age: '80+',
	exposures: 'possibleContact',
	symptoms: ['bodyAches', 'fatigue', 'congestion'],
	conditions: ['blueLips'],
	recommendations: [
		liklihoodTitles.likely,
		'There is a high likelihood that you have Coronavirus (COVID-19). Symptoms reported are common in Coronavirus (COVID-19) infections. In addition, because of age and possible contact, there is a higher risk of developing more severe symptoms. If symptoms persist, consider seeking medical attention.',
	],
})

assess('( H|H) age 81, body aches, fatigue, congestion, blueLips, contact with known diagnonses', {
	...cleanData,
	age: '80+',
	exposures: 'contact',
	symptoms: ['bodyAches', 'fatigue', 'congestion'],
	conditions: ['blueLips'],
	recommendations: [
		liklihoodTitles.likely,
		'There is a high likelihood that you have Coronavirus (COVID-19). Symptoms match those that are most common in Coronavirus (COVID-19) infections. There is also a very high risk of developing more severe symptoms because of age and contact. Seek immediate medical attention.',
	],
})

assess('(VH|L) body aches, fatigue, congestion, sore throat, chestPain, hardBreathing', {
	...cleanData,
	symptoms: ['bodyAches', 'fatigue', 'congestion', 'throat'],
	conditions: ['chestPain', 'hardBreathing'],
	recommendations: [
		liklihoodTitles.highlyLikely,
		'There is a very high likelihood that you have Coronavirus (COVID-19). Symptoms match those that are most common in Coronavirus (COVID-19) infections.',
	],
})

assess('(VH|M) age 75, fever, cough, vomiting, difficulty breathing, exposed US state', {
	...cleanData,
	age: '70-79',
	exposures: 'possibleContact',
	symptoms: ['fever', 'cough', 'vomiting'],
	conditions: ['hardBreathing'],
	recommendations: [
		liklihoodTitles.highlyLikely,
		'There is a very high likelihood that you have Coronavirus (COVID-19). Symptoms match those that are most common in Coronavirus (COVID-19) infections. Because of age and possible contact, there is a higher risk of developing more severe symptoms. Seek immediate medical attention.',
	],
})

assess(
	'(VH|H) fever, body aches, fatigue, congestion, arouse, chestPain, contact with known diagnonses',
	{
		...cleanData,
		exposures: 'contact',
		symptoms: ['fever', 'bodyAches', 'fatigue', 'congestion'],
		conditions: ['arouse', 'chestPain'],
		recommendations: [
			liklihoodTitles.highlyLikely,
			'There is a very high likelihood that you have Coronavirus (COVID-19). Symptoms match those that are most common in Coronavirus (COVID-19) infections. There is also a very high risk of developing more severe symptoms because of contact. Seek immediate medical attention.',
		],
	},
)
