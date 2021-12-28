import React, { useEffect } from 'react'
import { Route, Switch, useLocation } from 'react-router-dom'

import { ContentWrapper } from 'layout/ContentWrapper'
import { NotFound } from 'pages/NotFound'
import { SuspenseNotice } from 'pages/SuspenseNotice'


export const App: React.FC = () => {
	const location = useLocation()
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])

	return (
		<ContentWrapper>
			<Switch>
				<Route path='/' exact component={SuspenseNotice} />
				<Route component={NotFound} />
			</Switch>
		</ContentWrapper>
	)
}
