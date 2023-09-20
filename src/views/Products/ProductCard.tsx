import { HTMLAttributes } from 'react'
import styled from 'styled-components'
import { Product } from 'types/product.type'

interface ProductCardProps {
	product: Product
}
const ProductCard: React.FC<ProductCardProps & HTMLAttributes<HTMLDivElement>> = ({ product, ...rest }) => {
	const formatter = new Intl.NumberFormat('en-US', {
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})

	return (
		<Container {...rest}>
			<ProductThumb $src={product.thumbnail} />
			<ProductContent>
				<Title>{product.title}</Title>
				<Price>$ {formatter.format(product.price)}</Price>
			</ProductContent>
		</Container>
	)
}

const Price = styled.div`
	padding: 0px 8px;
	color: #676e7b;

	/* Pretendard / Body 2 */
	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px; /* 128.571% */
`

const Title = styled.div`
	display: flex;
	padding: 6px 8px;
	align-items: center;
	gap: 10px;
	align-self: stretch;

	overflow: hidden;
	color: #353c49;
	text-overflow: ellipsis;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: 20px;
`

const ProductContent = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	flex: 1 0 0;
`

const ProductThumb = styled.div<{ $src: string }>`
	height: 72px;
	width: 72px;
	border-radius: 8px;

	background-image: ${({ $src }) => `url(${$src})`};
	background-size: cover;
	background-position-y: center;
	background-repeat: no-repeat, repeat;
`

const Container = styled.div`
	display: inline-flex;
	width: 100%;
	padding: 12px 16px;
	gap: 24px;
`

export default ProductCard
