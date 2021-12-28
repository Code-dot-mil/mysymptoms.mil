import React, { useCallback, PropsWithChildren, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { RadioInput, RadioLabel } from 'components/solo-uswds'
import { Choice } from 'interfaces'
import classes from './styles.module.scss'

interface Props<T extends string> {
	className?: string
	onChange(value: T): void
	choices: Choice<T>[]
	value?: T
	noneOfAbove?: boolean
	grabFocus?: boolean
	half?: boolean
}

export const RadioButtonGroup = <T extends string>({
	className,
	onChange,
	choices,
	value,
	noneOfAbove,
	grabFocus,
	half,
}: PropsWithChildren<Props<T>>) => {
	const firstInput = useRef<HTMLInputElement | null>(null)
	useEffect(() => {
		if (grabFocus && firstInput.current) {
			firstInput.current.focus()
		}
	}, [firstInput, grabFocus])

	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value as T),
		[onChange],
	)
	const handleKeyPress = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>, value: T) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				onChange(value)
			}
		},
		[onChange],
	)

	return (
		<div className={className}>
			{choices.map(({ key, prompt }, index) => (
				<div
					className={classNames(classes.radioButtonWrapper, { [classes.half]: half })}
					key={key}
				>
					<RadioInput
						id={key}
						value={key}
						checked={value === key}
						onChange={handleOnChange}
						onKeyPress={(e) => handleKeyPress(e, key)}
						ref={index === 0 ? firstInput : undefined}
					/>
					<RadioLabel htmlFor={key}>
						<div className={classes.labelTextWrapper}>
							<span className={classes.labelPrimary}>{prompt}</span>
						</div>
					</RadioLabel>
				</div>
			))}
			{noneOfAbove && (
				<div className={classNames(classes.radioButtonWrapper, { [classes.half]: half })}>
					<RadioInput
						id='none'
						value='none'
						checked={value === ('none' as T)}
						onChange={handleOnChange}
						onKeyPress={(e) => handleKeyPress(e, 'none' as T)}
					/>
					<RadioLabel htmlFor='none'>
						<div className={classes.labelTextWrapper}>
							<span className={classes.labelPrimary}>None of the above</span>
						</div>
					</RadioLabel>
				</div>
			)}
		</div>
	)
}
