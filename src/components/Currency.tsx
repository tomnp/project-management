import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const Currency: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
	return <Container {...rest}>{children}</Container>
}

const Container = styled.div`
	padding: 0px 8px;
	color: #676e7b;

	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
`

export default Currency
