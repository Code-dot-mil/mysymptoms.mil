import React from 'react'
import classNames from 'classnames'

export const RadioInput = React.forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
	({ className, ...rest }, ref) => (
		<input
			className={classNames('usa-radio__input', className)}
			type='radio'
			ref={ref}
			{...rest}
		/>
	),
)
