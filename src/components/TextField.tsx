import { forwardRef, useState } from 'react'
import styled from 'styled-components'

interface TextFieldProps {
	value: string
	onChanged: (value: string) => void
	onBlur: () => void
}
const TextField = forwardRef<HTMLInputElement, TextFieldProps>(({ value, onChanged, onBlur, ...rest }, ref) => {
	const [inputValue, setInputValue] = useState(value)

	const handleOnInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = e.target.value
		setInputValue(newValue)
	}

	return (
		<StyledInputBase
			ref={ref}
			{...rest}
			value={inputValue}
			onChange={handleOnInputChanged}
			onBlur={() => {
				onBlur()
				onChanged(inputValue)
			}}
			onFocus={e => {
				e.target.select()
			}}
		/>
	)
})

const StyledInputBase = styled.input`
	width: 100%;
	border: 1px solid transparent;
	border-radius: 8px;
	padding: 6px 8px;
	height: 20px;
	outline: none;

	font-size: 16px;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	color: #353c49;

	:focus-within {
		border-color: #6713ef;
	}
`

export default TextField
