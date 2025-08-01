import { Link } from 'react-router-dom'
import type { ButtonProps } from '../types'

const variants = {
	primary: 'bg-blue text-white',
	outline:
		'bg-none text-grey hover:bg-blue hover:text-white',
}

const Button = ({
	label,
	url,
	className,
	variant = 'primary',
}: ButtonProps) => {
	const classes = `
    px-6 py-2 rounded-2xl font-medium text-base transition-all border border-blue
    ${variants[variant] || variants.primary} ${className}
  `

	if (url)
		return (
			<Link to={url} className={classes}>
				{label}
			</Link>
		)

	return <button className={classes}>{label}</button>
}

export default Button
