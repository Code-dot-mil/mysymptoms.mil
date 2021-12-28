import React from 'react'
import classes from './styles.module.scss'
import { Button, ButtonLink } from 'components/solo-uswds'
import { useGAOnLoad } from '../hooks'

interface Props {
	onNext(): void
}
export const Terms: React.FC<Props> = (props) => {
	const { onNext } = props
	useGAOnLoad('Terms & Conditions', 'terms-and-conditions')

	return (
		<>
			<div className={classes.formWrapper}>
				<div className={classes.formConatiner}>
					<div className={classes.wrapper}>
						<h2>Terms & Conditions</h2>
						<p>
							The services and information offered on mysymptoms.mil (the “Website”)
							are designed for educational purposes by the Defense Digital Service, in
							cooperation with the Office of the Under Secretary of Defense for
							Personnel and Readiness and others, and are not intended to be a
							substitute for the advice, diagnosis or treatment of a healthcare
							professional. The guidance you receive depends on the accuracy of the
							information you provide as well as current guidelines for responding to
							symptoms associated with the novel coronavirus Coronavirus (COVID-19).
						</p>
						<p>
							<b>Never disregard professional medical advice</b> or delay seeking
							advice because of something you have read on this website. If you think
							you or someone in your care is seriously ill or has a medical emergency,
							call a doctor or 9-1-1 immediately (if non-US, call your national
							emergency number), regardless of the information offered by the Website.
						</p>
						<p>
							The services on the Website are not intended to constitute the practice
							of medicine or any other professional health care advice, diagnosis or
							treatment. Reliance on the services and information provided by the
							Website is solely at your own risk.
						</p>
						<p>
							By clicking below, you indicate that you have reviewed these terms and
							agree to use this service only under the conditions set out in this
							policy.
						</p>
						<ButtonLink to='/terms-and-conditions' className='margin-bottom-2' unstyled>
							Full Terms & Conditions
						</ButtonLink>
					</div>
					<div className={classes.buttonContainer}>
						<p className={classes.question}>Do you agree to the above terms of use?</p>
						<Button onClick={() => onNext()}>Yes, I agree. Let's continue</Button>
						<ButtonLink to='/' outline>
							No, I do not accept
						</ButtonLink>
					</div>
				</div>
			</div>
			<div className={classes.confirmBox}>
				<p className={classes.question}>Do you agree to the above terms of use?</p>
				<Button onClick={() => onNext()}>Yes, I agree. Let's continue</Button>
				<ButtonLink to='/' outline>
					No, I do not accept
				</ButtonLink>
			</div>
		</>
	)
}
