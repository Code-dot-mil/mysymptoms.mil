import React from 'react'
import classNames from 'classnames'

export const RadioLabel: React.FC<JSX.IntrinsicElements['label']> = (props) => {
	const { className, ...rest } = props
	return <label className={classNames('usa-radio__label', className)} {...rest} />
}
