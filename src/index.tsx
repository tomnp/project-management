import 'typeface-roboto'
import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(
	<Suspense
		fallback={
			<div style={{ position: 'absolute', width: '100%', height: '100%', margin: 'auto', backgroundColor: 'transparent' }}>loading...</div>
		}
	>
		<App />
	</Suspense>,
	document.getElementById('root'),
)
