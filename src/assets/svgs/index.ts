import { ReactComponent as SearchIcon } from 'assets/svgs/ic_search.svg'
import { ReactComponent as CloseIcon } from 'assets/svgs/ic_close.svg'
import { ReactComponent as ChevronIcon } from 'assets/svgs/ic_chevron.svg'

export const Icons = {
	SearchIcon,
	CloseIcon,
	ChevronIcon,
}

export const getIcon = (iconName: keyof typeof Icons) => {
	return Icons[iconName]
}
