import React from 'react'
import classNames from 'classnames'

export const Checkbox = React.forwardRef<HTMLInputElement, JSX.IntrinsicElements['input']>(
	({ className, ...rest }, ref) => (
		<input
			className={classNames('usa-checkbox__input', className)}
			type='checkbox'
			ref={ref}
			{...rest}
		/>
	),
)
