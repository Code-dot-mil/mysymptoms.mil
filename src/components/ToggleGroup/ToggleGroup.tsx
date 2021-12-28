import React, { ReactNode, useRef, useEffect } from 'react'
import classNames from 'classnames'
import classes from './styles.module.scss'
import { Button } from 'components/solo-uswds'
import { ButtonProps } from 'components/solo-uswds/Button'

interface WrappedButtonProp extends ButtonProps {
	ref?:
		| ((instance: HTMLButtonElement | null) => void)
		| React.RefObject<HTMLButtonElement>
		| null
		| undefined
	'data-testid'?: string //Used for testing
}

interface Props {
	title: string
	error?: string | null
	value?: boolean
	onChange(checked: boolean): void
	yesLabel?: ReactNode
	yesProps?: WrappedButtonProp
	noLabel?: ReactNode
	noProps?: WrappedButtonProp
	grabFocus?: boolean
}

export const ToggleGroup: React.FC<Props> = (props) => {
	const {
		title,
		error,
		value,
		onChange,
		yesLabel = 'Yes',
		yesProps,
		noLabel = 'No',
		noProps,
		grabFocus,
	} = props

	const firstButtonRef = useRef<HTMLButtonElement | null>(null)
	useEffect(() => {
		if (grabFocus && firstButtonRef.current) {
			firstButtonRef.current.focus()
		}
	}, [firstButtonRef, grabFocus])

	return (
		<>
			<h3 className={classes.sectionTitle}>
				{title}
				{error && <div className={classes.errorMsg}>{error}</div>}
			</h3>
			<div className={classes.buttonWrapper}>
				<Button
					type='button'
					big
					outline
					className={classNames({
						[classes.checked]: value === true,
					})}
					onClick={() => onChange(true)}
					ref={firstButtonRef}
					{...yesProps}
				>
					{yesLabel}
				</Button>
				<Button
					type='button'
					big
					outline
					className={classNames({
						[classes.checked]: value === false,
					})}
					onClick={() => {
						onChange(false)
					}}
					{...noProps}
				>
					{noLabel}
				</Button>
			</div>
		</>
	)
}
