import NestedList from 'components/NestedList'
import styled from 'styled-components'
import { Product } from 'types/product.type'
import ProductCard from './ProductCard'

const Products: React.FC = () => {
	const categories = ['Mobile', 'Desktop', 'Tablet']
	const products: Product[] = [
		{
			id: 1,
			title: 'Iphone XS',
			price: 1250,
			description: '',
			category: 'Mobile',
			thumbnail:
				'https://s3-alpha-sig.figma.com/img/dd6d/2238/729c114e1c066f2b863e8d6f48efbd57?Expires=1696204800&Signature=nAYdjrVdNRflZ-ZjGK3-puC63wuX4WYpx-GjRRC6UOgmyvORQuHZwGcxxxYhbA6eNJLAyRExzU7lVSMqbHRARr8Pyz5uZjG7KCiClDmsgaCd3vLY9LE3n00YXlNtlIbB4BpgiaRhQibPA8dcmWNwn0C7npX8r5brizktHdgWbySEwf3YbxhQ0DepgX1Q0EhyHsTnZ6Hxgek3iYvqDGbLdXu5xb-l2dE~YKljZ68SOG3Jwb7agJ9rnQuOfZ9YE91322Uv4bY~TC5-EVFBQSHmhdnvlpJNJDK9sWt2ZkNPT7lrP8ZnDbySuD2YbsS6TeFT8GhgvRd3RPH3UUJ0T4HDvw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			images: [],
		},
		{
			id: 2,
			title: 'Samsung Galaxy 9',
			price: 1250,
			description: '',
			category: 'Mobile',
			thumbnail:
				'https://s3-alpha-sig.figma.com/img/59a6/7bb8/8bcf50a7539d7d1ea20afdc910b9ee7c?Expires=1696204800&Signature=oWTD9Wi5KkaUO9UjxIrv~YtnfeljesBGvADFVCT5ryIcGwCVKGM2-jpKQYWrbaGNyD7x7IpKF7nTMaEuKS6G0z1WyxtVnkMk~JdQ68B6d6zHT8zyo6c5wevCo3kOpuk5h0zA9L-anAn4-XCFJthyODjDK~XiyXwwdVAZ7L2UOuLwf8GHFAPEL0t41S1aaPzr71VLk3SmvHCAiJA6HcfZFF3O8sJ6a85S~tmgG6jI6FBdh7qYnm8ZtJ6P8fT9c460poFjvZj0yh7b1R09gvRhpKure56WitROt8RsbCQwUELHbLKUe-exkuqHdiGix6tzjpZm9BZ9a8ElA3nYDjkSEQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			images: [],
		},
		{
			id: 3,
			title: 'Poco X3',
			price: 1250,
			description: '',
			category: 'Mobile',
			thumbnail:
				'https://s3-alpha-sig.figma.com/img/4db4/19e2/ad833b1a211e1bec3e2690b515717ad8?Expires=1696204800&Signature=abENSEgsvtVNU1BP1lxBpFouWLIRT~p8Fmt-e2rk9hLTz7fmsJdoNjx-FiIUjUEs0fh~nYiDHiYxlNVFWYp2vwv0QZ5slBpGnxAQd57nT7BIu5lePzmjek3ReTk5kJiiJc7D2Q6UeThnAv05QxbimxGkY7TTwLSELbSQ7JLJOJD2rBozjcoC12CgNx5tdw3c1CHA7GyRdzTs3ATh9kuV2tjocOhXPOjQziCNzn8boGYpEemR1GkcZnoPk5ejU6nLIeUXO~l9fhfxQvM2CDyb2NyetJ8U55sEfOnaOEYO3Gf3bL-MKKfndd3AZwVu7PnDMtKywS7NXpELiRG47E2GkA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
			images: [],
		},
	]

	return (
		<Container>
			<NestedList header="Mobile">
				{
					<ProductListContainer>
						{products
							.filter(product => product.category === 'Mobile')
							.map((product, index) => (
								<ProductCard product={product} />
							))}
					</ProductListContainer>
				}
			</NestedList>
			<NestedList header="Desktop"></NestedList>
			<NestedList header="Tablet"></NestedList>
		</Container>
	)
}

const ProductListContainer = styled.div``

const Container = styled.div``

export default Products
