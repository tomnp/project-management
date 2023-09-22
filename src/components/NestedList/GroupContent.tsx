import { Icons } from 'assets/svgs'
import { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

interface GroupContentProps {
	open: boolean
	onChanged: (value: boolean) => void
}
const GroupContent: React.FC<GroupContentProps & HTMLAttributes<HTMLDivElement>> = ({ open, onChanged, children, ...rest }) => {
	return (
		<Container onClick={() => onChanged(!open)} {...rest}>
			<StyledNestedIcon $collapse={open}>
				<Icons.ChevronIcon />
			</StyledNestedIcon>
			{children}
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;
	padding: 12px 16px;
	border-radius: 8px;
	background-color: #fff;

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

export default GroupContent
