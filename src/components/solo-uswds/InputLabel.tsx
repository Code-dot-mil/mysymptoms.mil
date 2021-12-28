import React from 'react'
import classNames from 'classnames'

export const InputLabel: React.FC<JSX.IntrinsicElements['label']> = (props) => {
	const { className, ...rest } = props
	return <label className={classNames('usa-label', className)} {...rest} />
}
