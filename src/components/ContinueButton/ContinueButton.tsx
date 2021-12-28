import React from 'react'
import classNames from 'classnames'
import { IoIosArrowForward } from 'react-icons/io'
import { Button } from 'components/solo-uswds'
import classes from './styles.module.scss'
import { ButtonProps } from 'components/solo-uswds/Button'

export const ContinueButton: React.FC<Omit<ButtonProps, 'ref'>> = ({
	children = 'Continue',
	className,
	...rest
}) => (
	<Button type='submit' className={classNames(classes.submit, className)} {...rest}>
		{children} <IoIosArrowForward className={classes.confirmArrow} />
	</Button>
)
