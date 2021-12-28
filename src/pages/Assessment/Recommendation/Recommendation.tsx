import React from 'react'
import classnames from 'classnames'

import { teleworkDocs } from 'config/pdfs'
import { FormData } from '../interfaces'
import { useRecommendation } from './useRecommendation'
import { cdcRecommendations } from './data'
import classes from './styles.module.scss'
import { useGAOnLoad } from '../hooks'

interface Props {
	formData: FormData
}

export const Recommendation: React.FC<Props> = (props) => {
	const { formData } = props
	useGAOnLoad('Recommendations', 'recommendations')

	const {
		likelihoodLevel,
		affiliation,
		headerData,
		recommendations,
		riskReason,
		demographics,
	} = useRecommendation(formData)
	const { title, Icon, description, iconStyle } = headerData

	return (
		<>
			{demographics.age === '0-17' ? (
				<h2 className={classes.titleNoHeader}>{title}</h2>
			) : (
				<div className={classes.header}>
					<h2>{title}</h2>
					{Icon && iconStyle !== undefined && (
						<div
							className={classes.barBackground}
							aria-label={`Risk Level - ${likelihoodLevel}`}
						>
							<div className={classes.barLabelWrapper}>
								<span className={classes.barLabel}>Low</span>
								<span className={classes.barLabel}>Medium</span>
								<span className={classes.barLabel}>High</span>
							</div>
							<Icon className={classes.barIcon} style={iconStyle} />
						</div>
					)}
				</div>
			)}
			<div className={classes.wrapper}>
				<p>{description(riskReason)}</p>
				{!!recommendations.length && (
					<>
						<h3>WHAT TO DO:</h3>
						<ol>
							{recommendations.map((rec, index) => (
								<li key={index}>{rec}</li>
							))}
						</ol>
					</>
				)}
				{affiliation === 'military' && (
					<div className={classes.milInstructions}>
						<p>
							<b>For Army Coronavirus (COVID-19) non-emergency health questions</b>{' '}
							follow unit flowchart and please seek help in this order:
						</p>
						<ol>
							<li>1-800-984-8523</li>
							<li>Overseas DSN 312-421-3700</li>
							<li>Stateside DSN 421-3700</li>
							<li>Tricare Nurse Advice Line: 1-800-TRICARE (874-2273) </li>
						</ol>
						<p>
							<b>
								For Air Force Coronavirus (COVID-19) non-emergency health questions
							</b>{' '}
							follow unit flowchart please seek help in this order:
						</p>
						<ol>
							{/* <li>Stateside 1-703-695-0646</li>
							<li>DSN 225-0640</li> */}
							<li>Tricare Nurse Advice Line: 1-800-TRICARE (874-2273) </li>
						</ol>
						<p>
							<b>For Navy Coronavirus (COVID-19) non-emergency health questions</b>{' '}
							follow unit flowchart please seek help in this order:
						</p>
						<ol>
							<li>Tricare Nurse Advice Line: 1-800-TRICARE (874-2273)</li>
						</ol>
						<p>
							<b>For Marine Coronavirus (COVID-19) non-emergency health questions</b>{' '}
							follow unit flowchart please seek help in this order:
						</p>
						<ol>
							<li>Tricare Nurse Advice Line: 1-800-TRICARE (874-2273)</li>
						</ol>
						<p>
							<b>If you are a Commander</b>, ensure sick service members:
						</p>
						<ol>
							<li>Are evaluated by medical personnel before returning to work.</li>
							<li>Avoid large gatherings.</li>
							<li>
								Call ahead before arriving at a medical facility for evaluation.
							</li>
						</ol>
					</div>
				)}
				<div className={classes.blockWrapper}>
					{affiliation === 'dodCivilian' ||
						(affiliation === 'civilian' && (
							<div className={classes.block}>
								<h4>DoD Telework Flexibilities</h4>
								<p>
									It is possible you may be allowed to telework during this time.
									Please see the following OMB and DoD documents for more
									information.
								</p>
								<ul>
									<li>
										<a
											href={teleworkDocs.omb}
											target='_blank'
											rel='noopener noreferrer'
										>
											OMB Updated Guidance on Telework Flexibilities in
											Response to Coronavirus
										</a>
									</li>
									<li>
										<a
											href={teleworkDocs.dod}
											target='_blank'
											rel='noopener noreferrer'
										>
											DoD Civilian Workforce Guidance
										</a>
									</li>
								</ul>
							</div>
						))}
					<div className={classes.block}>
						<p>
							For non-emergency health questions please call and seek help in this
							order:
						</p>
						<ol>
							<li>
								Your{' '}
								<span className={classes.bold}>
									healthcare provider or nurse hotline;
								</span>
							</li>
							<li>Local health department;</li>
							<li>
								If none of the above are available, call the{' '}
								<span className={classes.bold}>CDC</span> at{' '}
								<span className={classes.bold}>
									<a href='tel:+18002324636'>1-800-232-4636</a>
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
			<div className={classnames(classes.wrapper, classes.additional)}>
				<h3>Additional recommendations from the CDC:</h3>
				<ul>
					{cdcRecommendations.map((rec, index) => (
						<li key={index}>{rec}</li>
					))}
				</ul>
			</div>
		</>
	)
}
