import Collapse from '@mui/material/Collapse/Collapse'
import { HTMLAttributes } from 'react'
import styled from 'styled-components'

interface CollapsedItemProps {
	collapsed: boolean
}
const CollapsedItem: React.FC<CollapsedItemProps & HTMLAttributes<HTMLDivElement>> = ({ collapsed, children, ...rest }) => {
	return (
		<>
			{/* Render dummy element to fix bug: Error: zero-sized element */}
			<ZeroSizeElement />

			<Container in={collapsed} timeout="auto" unmountOnExit {...rest}>
				{children}
			</Container>
		</>
	)
}

const ZeroSizeElement = styled.div`
	height: 1px;
	opacity: 0;
`

const Container = styled(Collapse)`
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

export default CollapsedItem
