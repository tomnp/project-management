import Card from '@mui/material/Card'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const PCard: React.FC<HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
	return <StyledCard {...rest}>{children}</StyledCard>
}

const StyledCard = styled(Card)`
	padding: 24px;
	border-radius: 24px;

	box-shadow: 0px 0px 4px 0px rgba(5, 43, 97, 0.12), 2px 6px 12px 0px rgba(0, 0, 0, 0.12);
`

export default PCard
