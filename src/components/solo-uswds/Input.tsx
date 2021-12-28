import React from 'react'
import classNames from 'classnames'

export const Input: React.FC<JSX.IntrinsicElements['input']> = ({ className, ...rest }) => (
	<input className={classNames('usa-input', className)} {...rest} />
)
