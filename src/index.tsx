import 'typeface-roboto'
import { Suspense } from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import { QueryClient, QueryClientProvider, QueryFunctionContext, QueryKey } from 'react-query'

const PRODUCT_API = 'https://dummyjson.com/products/'

const defaultQueryFn = async ({ queryKey }: QueryFunctionContext<QueryKey>) => {
	return fetch(`${PRODUCT_API}${queryKey[0]}`).then(res => res.json())
}

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryFn: defaultQueryFn,
		},
	},
})

ReactDOM.render(
	<Suspense
		fallback={
			<div style={{ position: 'absolute', width: '100%', height: '100%', margin: 'auto', backgroundColor: 'transparent' }}>loading...</div>
		}
	>
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	</Suspense>,
	document.getElementById('root'),
)
