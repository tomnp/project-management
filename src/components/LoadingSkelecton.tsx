import Skeleton from '@mui/material/Skeleton/Skeleton'

interface LoadingSkelectionProps {
	amount: number
}
const LoadingSkelection: React.FC<LoadingSkelectionProps> = ({ amount }) => {
	if (amount < 1) {
		return <Skeleton animation="wave" />
	}

	const skelectons = []
	for (let i = 0; i < amount; i++) {
		skelectons.push(<Skeleton key={i} animation="wave" />)
	}

	return <div>{skelectons.map((item, index) => item)}</div>
}

export default LoadingSkelection
