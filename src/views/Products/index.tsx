import NestedList from 'components/NestedList'
import styled from 'styled-components'
import { GetProductsApiResponse, Product } from 'types/product.type'
import ProductCard from './ProductCard'
import { useQuery } from 'react-query'
import LoadingSkelection from 'components/LoadingSkelecton'
import SearchBox from 'components/SearchBox'
import Divider from 'components/Divider'
import { debounce } from 'lodash'
import { create } from 'zustand'
import { useCallback, useEffect, useMemo, useState } from 'react'
import PCard from 'components/Card'
import { groupBy, upperFirstLetter } from 'utils'

type ProductsStoreType = {
	text: string
	products: Product[]
	setSearchText: (value: string) => void
	setProducts: (value: Product[]) => void
	updateProductTitleById: (id: number, value: string) => void
}

type ProductsMapperType = { [key: string]: Product[] }

const useProductStore = create<ProductsStoreType>(set => ({
	text: '',
	products: [],
	setSearchText: (value: string) => set({ text: value }),
	setProducts: (value: Product[]) => set({ products: value }),
	updateProductTitleById: (id: number, value: string) =>
		set(state => {
			const clonedProducts = [...state.products]
			const index = state.products.findIndex(product => product.id === id)
			if (index !== -1) {
				clonedProducts[index] = {
					...clonedProducts[index],
					title: value,
				}
			}

			return { products: clonedProducts }
		}),
}))

const Products: React.FC = () => {
	const { text, products, setSearchText, updateProductTitleById, setProducts } = useProductStore(state => state)
	const { isLoading, data } = useQuery(`search?q=${text}&select=title,price,category,thumbnail&limit=100`)

	const [groupContent, setProductContent] = useState<string[]>([])
	const [groupCounts, setGroupCounts] = useState<number[]>([])
	const [groupIndex, setGroupIndex] = useState<number[][]>([])

	const sortedProducts = useMemo(
		() =>
			products.sort((a, b) => {
				if (a.category[0] < b.category[0]) {
					return -1
				}

				if (a.category[0] > b.category[0]) {
					return 1
				}

				return 0
			}),
		[products],
	)

	const handleOnSearching = debounce(
		useCallback((text: string) => {
			setSearchText(text)
		}, []),
		300,
	)

	useEffect(() => {
		const productsMapper: ProductsMapperType = groupBy(sortedProducts, 'category')
		const parsedGroupCounts: number[] = []
		const parsedGroupIndex: number[][] = []

		Object.values(productsMapper).forEach((items, batchIndex) => {
			parsedGroupCounts.push(items.length)
			parsedGroupIndex.push(items.map((_, index) => index + batchIndex * items.length))
		})

		setGroupCounts(parsedGroupCounts)
		setGroupIndex(parsedGroupIndex)
		setProductContent(Object.keys(productsMapper).map(key => upperFirstLetter(key)))
	}, [sortedProducts])

	useEffect(() => {
		setProducts((data as GetProductsApiResponse)?.products ?? [])
	}, [data])

	return (
		<StyledPCard>
			<SearchBox onSearching={handleOnSearching} />
			<StyledDivider>
				<h2>Product List</h2>
			</StyledDivider>
			<ProductContainer>
				{isLoading ? (
					<LoadingSkelection amount={5} />
				) : (
					<NestedList
						groupIndex={groupIndex}
						groupCounts={groupCounts}
						groupContent={groupContent}
						itemContent={index => (
							<ProductCard
								item={sortedProducts[index]}
								key={index}
								onChanged={value => updateProductTitleById(sortedProducts[index].id, value)}
							/>
						)}
					/>
				)}
			</ProductContainer>
		</StyledPCard>
	)
}

const StyledPCard = styled(PCard)`
	display: inline-flex;
	width: 100%;
	flex-direction: column;
	overflow: hidden;
`

const StyledDivider = styled(Divider)`
	margin-top: 32px;
	margin-bottom: 24px;
`

const ProductContainer = styled.div`
	flex: 1;
	overflow: hidden;
	overflow-y: auto;
	height: 100%;
`

export default Products
