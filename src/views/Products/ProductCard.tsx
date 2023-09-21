import TextField from 'components/TextField'
import { HTMLAttributes, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Product } from 'types/product.type'

interface ProductCardProps {
	item: Product
	onChanged: (value: string) => void
}
const ProductCard: React.FC<ProductCardProps & HTMLAttributes<HTMLDivElement>> = ({ item, onChanged, ...rest }) => {
	const inputRef = useRef<HTMLInputElement>(null)
	const [updating, setUpdating] = useState(false)
	const formatter = new Intl.NumberFormat('en-US', {
		currency: 'USD',
		minimumFractionDigits: 0,
		maximumFractionDigits: 0,
	})

	useEffect(() => {
		if (updating) {
			inputRef.current?.focus()
		}
	}, [updating])

	return (
		<Container {...rest}>
			<ProductThumb $src={item.thumbnail ?? ''} />
			<ProductContent>
				{updating ? (
					<StyledTextField ref={inputRef} value={item.title} onChanged={onChanged} onBlur={() => setUpdating(false)} />
				) : (
					<Title
						tabIndex={0}
						onClick={() => {
							setUpdating(true)
						}}
					>
						{item.title}
					</Title>
				)}
				<Price>$ {formatter.format(item.price ?? 0)}</Price>
			</ProductContent>
		</Container>
	)
}

const StyledTextField = styled(TextField)`
	width: calc(100% - 24px);
`

const Price = styled.div`
	padding: 0px 8px;
	color: #676e7b;

	font-size: 14px;
	font-style: normal;
	font-weight: 400;
	line-height: 18px;
`

const Title = styled.div`
	text-overflow: ellipsis;
	white-space: nowrap;

	padding: 6px 8px;
	height: 20px;
	align-items: center;
	gap: 10px;
	align-self: stretch;
	border-radius: 8px;
	border: 1px solid transparent;

	overflow: hidden;
	color: #353c49;
	text-overflow: ellipsis;
	font-size: 16px;
	font-style: normal;
	font-weight: 600;

	cursor: pointer;

	:hover {
		background-color: #f8f8f9;
	}

	:active {
		background-color: #f2f4f6;
	}

	:focus {
		border: 1px solid #d1b8fa;
	}
`

const ProductContent = styled.div`
	display: flex;
	align-self: center;
	flex-direction: column;
	align-items: flex-start;
	gap: 8px;
	flex: 1 0 0;

	max-width: calc(100% - 100px);
`

const ProductThumb = styled.div<{ $src: string }>`
	height: 72px;
	width: 72px;
	min-width: 72px;
	border-radius: 8px;

	background-image: ${({ $src }) => `url(${$src})`};
	background-size: cover;
	background-position-y: center;
	background-repeat: no-repeat, repeat;
`

const Container = styled.div`
	display: inline-flex;
	padding: 12px 16px;
	gap: 24px;

	border: 1px solid transparent;
	border-radius: 8px;

	:hover {
		border-color: #d1b8fa;
	}
`

export default ProductCard
