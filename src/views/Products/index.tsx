import NestedList from 'components/NestedList'
import styled from 'styled-components'
import { GetProductsApiResponse, Product } from 'types/product.type'
import ProductCard from './ProductCard'
import { useQuery } from 'react-query'
import LoadingSkelection from 'components/LoadingSkelecton'
import PSearch from 'components/SearchBox'
import Divider from 'components/Divider'
import { debounce } from 'lodash'
import { create } from 'zustand'
import { useCallback, useEffect } from 'react'
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
	useEffect(() => {
		setProducts((data as GetProductsApiResponse)?.products ?? [])
	}, [data])

	const handleOnSearching = debounce(
		useCallback((text: string) => {
			setSearchText(text)
		}, []),
		300,
	)

	const productsMapper: ProductsMapperType = groupBy(products, 'category')

	return (
		<StyledPCard>
			<PSearch onSearching={handleOnSearching} />
			<StyledDivider>Product List</StyledDivider>
			<ProductContainer>
				{isLoading ? (
					<LoadingSkelection amount={5} />
				) : (
					Object.keys(productsMapper).map((key, index) => (
						<NestedList header={upperFirstLetter(key)} key={index} open={index === 0}>
							{productsMapper[key].map((product, productItemKey) => (
								<ProductCard item={product} key={productItemKey} onChanged={value => updateProductTitleById(product.id, value)} />
							))}
						</NestedList>
					))
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
