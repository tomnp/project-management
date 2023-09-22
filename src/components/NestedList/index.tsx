import { HTMLAttributes, useEffect, useState } from 'react'
import styled from 'styled-components'
import { GroupedVirtuoso } from 'react-virtuoso'
import GroupContent from './GroupContent'
import CollapsedItem from 'components/CollapsedItem'

interface NestedListItemProps {
	groupIndex: number[][]
	groupCounts: number[]
	groupContent: string[]
	itemContent: (index: number) => JSX.Element
	open?: boolean
}
const NestedList: React.FC<NestedListItemProps & HTMLAttributes<HTMLDivElement>> = ({
	groupIndex,
	groupCounts,
	groupContent,
	itemContent,
	open = false,
	...rest
}) => {
	const [collapseMapper, setCollapseMapper] = useState(Array(groupCounts.length).fill(false))
	const setCollapeByIndex = (index: number, value: boolean) => {
		const clonedMapper = [...collapseMapper]
		clonedMapper[index] = value
		setCollapseMapper(clonedMapper)
	}

	useEffect(() => {
		setCollapseMapper(Array(groupCounts.length).fill(false))
	}, [groupCounts.length])

	const checkBatchCollapse = (index: number) => {
		for (let i = 0; i < groupIndex.length; i++) {
			const element = groupIndex[i]
			if (element.some(item => item === index)) {
				return collapseMapper[i]
			}
		}
	}

	return (
		<Container
			{...rest}
			groupCounts={groupCounts}
			groupContent={index => (
				<GroupContent open={collapseMapper[index]} onChanged={value => setCollapeByIndex(index, value)}>
					<h3>{groupContent[index]}</h3>
				</GroupContent>
			)}
			itemContent={index => <CollapsedItem collapsed={checkBatchCollapse(index)}>{itemContent(index)}</CollapsedItem>}
		/>
	)
}

const Container = styled(GroupedVirtuoso)`
	display: flex;
	flex-direction: column;
`

export default NestedList
