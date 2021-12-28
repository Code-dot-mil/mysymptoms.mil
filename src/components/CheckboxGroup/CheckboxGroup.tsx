import React, { useCallback, PropsWithChildren, useRef, useEffect } from 'react'
import classNames from 'classnames'
import { Checkbox, CheckboxLabel } from 'components/solo-uswds'
import { Choice } from 'interfaces'
import classes from './styles.module.scss'

interface Props<T extends string> {
	onChange(values: T[]): void
	choices: Choice<T>[]
	values: T[]
	noneOfAbove?: boolean
	grabFocus?: boolean
	half?: boolean
}

export const CheckboxGroup = <T extends string>({
	onChange,
	choices,
	values,
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

	const handleChange = useCallback(
		(newValue: T) => {
			if (newValue === 'none') {
				onChange([newValue])
				return
			}
			const updatedValues = values.filter((val) => val !== 'none')
			if (updatedValues.includes(newValue)) {
				onChange(updatedValues.filter((val) => val !== newValue))
			} else {
				onChange([...updatedValues, newValue])
			}
		},
		[onChange, values],
	)
	const handleOnChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e.target.value as T),
		[handleChange],
	)
	const handleKeyPress = useCallback(
		(e: React.KeyboardEvent<HTMLInputElement>, value: T) => {
			if (e.key === 'Enter') {
				e.preventDefault()
				handleChange(value)
			}
		},
		[handleChange],
	)

	return (
		<>
			{choices.map(({ key, prompt }, index) => (
				<div
					className={classNames(classes.checkboxWrapper, { [classes.half]: half })}
					key={key}
				>
					<Checkbox
						id={key}
						value={key}
						checked={values.includes(key)}
						onChange={handleOnChange}
						onKeyPress={(e) => handleKeyPress(e, key)}
						ref={index === 0 ? firstInput : undefined}
					/>
					<CheckboxLabel htmlFor={key}>
						<div className={classes.labelTextWrapper}>
							<span className={classes.labelPrimary}>{prompt}</span>
						</div>
					</CheckboxLabel>
				</div>
			))}
			{noneOfAbove && (
				<div className={classNames(classes.checkboxWrapper, { [classes.half]: half })}>
					<Checkbox
						id='none'
						value='none'
						checked={values.includes('none' as T)}
						onChange={handleOnChange}
						onKeyPress={(e) => handleKeyPress(e, 'none' as T)}
					/>
					<CheckboxLabel htmlFor='none'>
						<div className={classes.labelTextWrapper}>
							<span className={classes.labelPrimary}>None of the above</span>
						</div>
					</CheckboxLabel>
				</div>
			)}
		</>
	)
}
