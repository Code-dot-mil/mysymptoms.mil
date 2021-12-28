import React from 'react'
import { ButtonLink } from 'components/solo-uswds'

import classes from './styles.module.scss'
import { IoIosArrowForward } from 'react-icons/io'

export const Home: React.FC = () => {
	return (
		<>
			<div className={classes.header}>
				<h2 className={classes.title}>
					Check and assess your symptoms for
					<br /> Coronavirus (COVID-19)
				</h2>
			</div>
			<div className={classes.body}>
				<p>
					Use this tool to{' '}
					<b>assess your symptoms during the Coronavirus (COVID-19) pandemic</b>. We've
					utilized the latest information from the CDC and medical experts to provide the
					most current assessment possible.
				</p>
				<div className={classes.cta}>
					<p>
						<b>Free to use. No sign-up needed.</b>
						<span className={classes.notAffiliated}>
							Not affiliated with the DoD?{' '}
							<a href='https://www.cdc.gov/coronavirus/2019-nCoV/index.html'>
								Visit the CDC for guidance.
							</a>
						</span>
					</p>
					<ButtonLink to='/assessment' big className={classes.startButton}>
						Start my assessment{' '}
						<IoIosArrowForward className={classes.startButtonIcon} />
					</ButtonLink>
				</div>
			</div>
			<div className={classes.container}>
				<div className={classes.content}>
					<div>
						<b>Why should I use this?</b> While there are other symptom checkers out
						there, there isn’t anything currently in the market developed specifically
						for DOD personnel to include active duty, Reserve and National Guard
						uniformed service members and their families, civilian employees and
						contractors.
						<p>
							Unlike other symptom checkers,{' '}
							<b>
								MySymptoms.mil provides feedback and direction specifically for DOD
								military
							</b>{' '}
							and civilian personnel.
						</p>
					</div>
					<div className={classes.disclaimer}>
						{' '}
						Sources:{' '}
						<a
							href='https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html'
							target='_blank'
							rel='noopener noreferrer'
						>
							CDC
						</a>
						;{' '}
						<a
							href='https://www.ncbi.nlm.nih.gov/pubmed/20605260'
							target='_blank'
							rel='noopener noreferrer'
						>
							SORT
						</a>
						, originally developed for the H1N1 (Swine Flu) pandemic of 2009 by
						RAND/Emory/CDC;
						<br />
						<br />
						Recent literature &amp; statistics on COVID‑19 from{' '}
						<a
							href='https://www.ncbi.nlm.nih.gov/pubmed/32109013'
							target='_blank'
							rel='noopener noreferrer'
						>
							NEJM
						</a>
						,{' '}
						<a
							href='https://jamanetwork.com/journals/jama/fullarticle/2761044'
							target='_blank'
							rel='noopener noreferrer'
						>
							JAMA
						</a>
						,{' '}
						<a
							href='https://www.ncbi.nlm.nih.gov/pubmed/31986264'
							target='_blank'
							rel='noopener noreferrer'
						>
							LANCET
						</a>
						,{' '}
						<a
							href='https://www.aoa.org/documents/HPI/HPI%20CoronaVirus%20Statement%201-30-20.pdf'
							target='_blank'
							rel='noopener noreferrer'
						>
							AOA
						</a>
						.
					</div>
				</div>
			</div>
		</>
	)
}
