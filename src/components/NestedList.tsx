import Collapse from '@mui/material/Collapse/Collapse'
import { Icons } from 'assets/svgs'
import { HTMLAttributes, useState } from 'react'
import styled, { css } from 'styled-components'

interface NestedListItemProps {
	header: string
}
const NestedList: React.FC<NestedListItemProps & HTMLAttributes<HTMLDivElement>> = ({ header, children, ...rest }) => {
	const [open, setOpen] = useState(true)

	return (
		<Container>
			<Header onClick={() => setOpen(!open)} {...rest}>
				{
					<StyledNestedIcon $open={open}>
						<Icons.ChevronIcon />
					</StyledNestedIcon>
				}
				{header}
			</Header>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{children}
			</Collapse>
		</Container>
	)
}

const Header = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
`

const StyledNestedIcon = styled.div<{ $open: boolean }>`
	display: inline-flex;
	svg {
		transition: 0.3s;

		${({ $open }) =>
			!$open &&
			css`
				transform: rotate(-90deg);
				& path {
					fill: #b1b8c0;
				}
			`}
	}
`

const Container = styled.div`
	padding: 12px 16px;

	color: #353c49;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
`

export default NestedList
