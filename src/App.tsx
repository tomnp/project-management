import Home from 'views/Home'
import React from 'react'
import styled from 'styled-components'

const App: React.FC = () => {
	return (
		<AppContainer className="App">
			<Home />
		</AppContainer>
	)
}

const AppContainer = styled.main`
	display: flex;
	height: 100vh;
	width: 100vw;

	justify-content: center;
	align-items: center;

	overflow: hidden;
	background-color: #f0e7fd;
`

export default App
