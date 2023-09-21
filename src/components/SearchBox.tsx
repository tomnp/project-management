import { TextField } from '@mui/material'
import { Icons } from 'assets/svgs'
import styled, { css } from 'styled-components'
import PButton from './Button'
import { create } from 'zustand'

type SearchStoreType = {
	text: string
	setSearchText: (value: string) => void
}
const useSearchStore = create<SearchStoreType>(set => ({
	text: '',
	setSearchText: (value: string) => set({ text: value }),
}))

interface PSearchProps {
	onSearching: (text: string) => void
}
const PSearch: React.FC<PSearchProps> = ({ onSearching }) => {
	const { text, setSearchText } = useSearchStore(state => state)
	const searching = text.length > 0

	const handleOnInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		const searchText = e.target.value
		setSearchText(searchText)
		onSearching(searchText)
	}

	const handleOnClear = () => {
		setSearchText('')
		onSearching('')
	}

	return (
		<Container>
			<Search $searching={searching}>
				<Icons.SearchIcon />
				<StyledInputBase variant="outlined" placeholder="Search" value={text} onChange={handleOnInputChanged} />
				<StyledClearIcon tabIndex={0} onClick={handleOnClear} $show={searching}>
					<Icons.CloseIcon />
				</StyledClearIcon>
			</Search>
			<CancelButton
				onClick={e => {
					if (!searching) {
						e.preventDefault()
						return
					}

					handleOnClear()
				}}
				$disabled={searching}
			>
				Cancel
			</CancelButton>
		</Container>
	)
}

const CancelButton = styled(PButton)<{ $disabled: boolean }>`
	font-size: 14px;
	font-weight: 400;
	background-color: transparent;
	border-radius: 8px;
	border: 2px solid transparent;

	:hover {
		background-color: ${({ $disabled }) => (!$disabled ? 'transparent' : '#f8f8f9')};
	}

	:active {
		background-color: ${({ $disabled }) => (!$disabled ? 'transparent' : '#f2f4f6')};
	}

	:focus {
		border-color: ${({ $disabled }) => (!$disabled ? 'transparent' : '#d1b8fa')};
	}

	${({ $disabled }) =>
		!$disabled &&
		css`
			cursor: not-allowed;
			color: #d1d6da;
		`}
`

const Container = styled.div`
	display: flex;
	gap: 8px;
`

const Search = styled.div<{ $searching: boolean }>`
	display: inline-flex;
	border-radius: 50px;
	border: 1px solid #d9e0e8;
	background-color: #f8f8f9;
	gap: 8px;
	padding: 9px 16px;
	align-items: center;

	:hover {
		border-color: #d1b8fa;
	}

	:focus-within {
		border-color: #6713ef;
		> svg {
			> path {
				fill: #353c49;
			}
		}
	}

	${({ $searching }) =>
		$searching &&
		css`
			border-color: #353c49;
		`}

	> svg {
		> path {
			fill: ${({ $searching }) => ($searching ? '#353c49' : '#b1b8c0')};
		}
	}
`

const StyledClearIcon = styled.div<{ $show: boolean }>`
	display: flex;
	padding: 4px;
	border-radius: 15px;
	border: 2px solid transparent;

	cursor: pointer;

	:hover {
		background-color: #f8f8f9;
	}

	:active {
		background-color: #f2f4f6;
	}

	:focus {
		border-color: #d1b8fa;
	}

	${({ $show }) =>
		!$show &&
		css`
			cursor: initial;
			opacity: 0;
		`}
`

const StyledInputBase = styled(TextField)`
	font-size: 14px;

	input {
		padding: 0;
		line-height: 17;
	}

	fieldset {
		display: none;
	}
`

export default PSearch
