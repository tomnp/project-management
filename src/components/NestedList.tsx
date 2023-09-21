import Collapse from '@mui/material/Collapse/Collapse'
import { Icons } from 'assets/svgs'
import { HTMLAttributes, useState } from 'react'
import styled, { css } from 'styled-components'

interface NestedListItemProps {
	header: string
	open?: boolean
}
const NestedList: React.FC<NestedListItemProps & HTMLAttributes<HTMLDivElement>> = ({ header, children, open = false, ...rest }) => {
	const [collapse, setCollapse] = useState(open)

	return (
		<Container>
			<Header onClick={() => setCollapse(!collapse)} {...rest}>
				{
					<StyledNestedIcon $collapse={collapse}>
						<Icons.ChevronIcon />
					</StyledNestedIcon>
				}
				{header}
			</Header>
			<StyledCollapse in={collapse} timeout="auto" unmountOnExit>
				{children}
			</StyledCollapse>
		</Container>
	)
}

const StyledCollapse = styled(Collapse)`
	display: flex;
	margin: 0 32px;

	> div {
		display: flex;
		width: 100%;
	}

	> div > div {
		display: flex;
		flex-direction: column;
	}
`

const Header = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 12px 16px;
	border-radius: 8px;

	:hover {
		background-color: #f8f8f9;
	}

	:active {
		background-color: #f2f4f6;
	}
`

const StyledNestedIcon = styled.div<{ $collapse: boolean }>`
	display: inline-flex;
	svg {
		transition: 0.3s;

		${({ $collapse }) =>
			!$collapse &&
			css`
				transform: rotate(-90deg);
				& path {
					fill: #b1b8c0;
				}
			`}
	}
`

const Container = styled.div`
	display: flex;
	flex-direction: column;

	color: #353c49;
	font-size: 18px;
	font-style: normal;
	font-weight: 600;
	line-height: 22px;
`

export default NestedList
