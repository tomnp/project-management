import { DependencyList, useEffect } from 'react'

const useKeyboard = (key: string, callback: () => void, deps?: DependencyList) => {
	useEffect(() => {
		const keyDownHandler = (event: KeyboardEvent) => {
			if (event.key === key) {
				callback()
			}
		}

		document.addEventListener('keydown', keyDownHandler)
		return () => {
			document.removeEventListener('keydown', keyDownHandler)
		}
	}, deps)
}

export default useKeyboard
