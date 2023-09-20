import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Divider: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
	return (
		<Container {...rest}>
			{children}
			<StyledBar />
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	align-self: stretch;

	height: 24px;

	color: #353c49;
	font-size: 20px;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
`

const StyledBar = styled.div`
	height: 0;
	flex: 1 0 0;
	border: 1px dashed #d9e0e8;
`

export default Divider
