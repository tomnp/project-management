import React from 'react'
import styled from 'styled-components'
import Products from './Products'

const Home: React.FC = () => {
	return (
		<Container>
			<Products />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	width: 528px;
	height: 880px;

	max-width: 96vw;
	max-height: 96vh;
`

export default Home
