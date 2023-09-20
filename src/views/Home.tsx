import PCard from 'components/Card'
import Divider from 'components/Divider'
import PSearch from 'components/SearchBox'
import React from 'react'
import styled from 'styled-components'
import Products from './Products'

const Home: React.FC = () => {
	return (
		<Container>
			<PCard>
				<PSearch />
				<StyledDivider>Product List</StyledDivider>
				<Products />
			</PCard>
		</Container>
	)
}

const StyledDivider = styled(Divider)`
	margin-top: 32px;
	margin-bottom: 24px;
`

const Container = styled.div`
	display: flex;
	width: 528px;
	height: 880px;

	max-width: 96vw;
	max-height: 96vh;
`

export default Home
