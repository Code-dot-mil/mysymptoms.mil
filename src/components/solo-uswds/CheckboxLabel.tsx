import React from 'react'
import classNames from 'classnames'

export const CheckboxLabel: React.FC<JSX.IntrinsicElements['label']> = ({ className, ...rest }) => (
	<label className={classNames('usa-checkbox__label', className)} {...rest} />
)
