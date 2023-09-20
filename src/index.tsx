import 'typeface-roboto'
import React, { Suspense, useReducer } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
	// <React.StrictMode>
	<Suspense
		fallback={
			<div style={{ position: 'absolute', width: '100%', height: '100%', margin: 'auto', backgroundColor: 'transparent' }}>
				loading...
			</div>
		}
	>
			<App />
	</Suspense>,
	// </React.StrictMode>
	document.getElementById('root'),
)
