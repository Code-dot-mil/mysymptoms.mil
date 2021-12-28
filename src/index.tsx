import 'react-app-polyfill/ie9'
import 'react-app-polyfill/stable'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { App } from './App'
import { BrowserRouter } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'

import './styles.scss'

//Allow GA to be on window
declare global {
	interface Window {
		ga?: any
		gtag?: any
		GA_MEASUREMENT_ID?: string
	}
}

const Base: React.FC = () => {
	return (
		<BrowserRouter>
			<App />
		</BrowserRouter>
	)
}

ReactDOM.render(<Base />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
