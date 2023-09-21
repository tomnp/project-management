export const groupBy = (array: any[], key: string) => {
	return array.reduce(function(result, item) {
		result[item[key]] = result[item[key]] || []
		result[item[key]].push(item)
		return result
	}, {})
}

export const upperFirstLetter = (text: string) => {
	return `${text.charAt(0).toUpperCase()}${text.slice(1)}`
}
