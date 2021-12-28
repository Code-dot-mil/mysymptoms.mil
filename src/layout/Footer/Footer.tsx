import React from 'react'
import classes from './styles.module.scss'
import { Link } from 'react-router-dom'
import { DDSBrandmark } from 'assets/svg/DDSBrandmark'

export const Footer: React.FC = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<a
					href='https://dds.mil/'
					target='_blank'
					rel='noopener noreferrer'
					className={classes.ddsLink}
				>
					<div className={classes.leftColumn}>
						<DDSBrandmark className={classes.brandmark} />

						<p className={classes.poweredBy}>
							Powered by
							<br /> Defense Digital Service.
						</p>
					</div>
				</a>
				<div className={classes.rightColumn}>
					<div className={classes.rightSubcolumn}>
						<a href='https://www.defense.gov/' className={classes.link}>
							About the DoD
						</a>
						<a href='https://www.foia.gov/' className={classes.link}>
							FOIA
						</a>
						<a
							href='https://www.defense.gov//Resources/DOD-Information-Quality-Guidelines/'
							className={classes.link}
						>
							Information Quality
						</a>
						<a
							href='https://www.nlrb.gov/reports/regulatory-reports-and-notices/no-fear-act'
							className={classes.link}
						>
							No FEAR Act
						</a>
						<a href='https://open.defense.gov' className={classes.link}>
							Open Government
						</a>
						<a
							href='https://www.esd.whs.mil/DD/plainlanguage/'
							className={classes.link}
						>
							Plain Writing Act
						</a>
						<a
							href='https://dodcio.defense.gov/DoDSection508/Std_Stmt.aspx'
							className={classes.link}
						>
							Accessibility/Section 508
						</a>
					</div>
					<div className={classes.rightSubcolumn}>
						<a href='https://www.usa.gov/' className={classes.link}>
							USA.gov
						</a>
						<a href='http://defense.gov/privacy' className={classes.link}>
							Privacy Program
						</a>
						<Link to='/terms-and-conditions' className={classes.link}>
							Terms & Conditions
						</Link>
						<a href='mailto:covid19feedback@dds.mil' className={classes.link}>
							Covid19feedback@dds.mil
						</a>
						<a
							href='https://ddsfedramp.gov1.qualtrics.com/jfe/form/SV_bxxqiW4rZGi8VM1 '
							className={classes.link}
						>
							Tell us what you think
						</a>
						<p className={classes.copyright}>&copy; 2020 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	)
}
