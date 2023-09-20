import { TextField } from '@mui/material'
import { Icons } from 'assets/svgs'
import styled from 'styled-components'
import PButton from './Button'

const PSearch: React.FC = () => {
	return (
		<Container>
			<Search>
				<Icons.SearchIcon />
				<StyledInputBase variant="outlined" placeholder="Search..." />
				<StyledClearIcon>
					<Icons.CloseIcon />
				</StyledClearIcon>
			</Search>
			<PButton>Cancel</PButton>
		</Container>
	)
}

const Container = styled.div`
	display: flex;
	gap: 8px;
`

const Search = styled.div`
	display: inline-flex;
	border-radius: 50px;
	border: 1px solid #353c49;
	background: #fff;
	gap: 8px;

	padding: 9px 16px;
	align-items: center;
`

const StyledClearIcon = styled.div`
	display: flex;
	padding: 4px;

	cursor: pointer;
`

const StyledInputBase = styled(TextField)`
	font-size: 14px;

	input {
		padding: 0;
	}

	fieldset {
		display: none;
	}
`

export default PSearch
