import { Button } from '@mui/base/Button'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

const PButton: React.FC<HTMLAttributes<HTMLButtonElement>> = ({ children, ...rest }) => {
	return <StyledButton {...rest}>{children}</StyledButton>
}

const StyledButton = styled(Button)`
	padding: 12px 16px;
	align-items: flex-start;
	gap: 10px;
	background-color: #f2f4f6;

	border-radius: 8px;
	border: none;
	cursor: pointer;
`

export default PButton
