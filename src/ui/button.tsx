import { Link } from 'react-router-dom'
import type { ButtonProps } from '../types'

const variants = {
	primary: 'bg-blue text-white',
	outline: 'bg-none text-grey hover:bg-blue hover:text-white',
  danger: 'bg-red text-white border-none'
}

const Button = ({
	label,
	url,
	className,
	variant = 'primary',
  onClick
}: ButtonProps) => {
	const classes = `
    px-7 py-3 rounded-2xl font-medium text-base transition-all border border-blue
    ${variants[variant] || variants.primary} ${className} max-sm:w-full max-sm:text-center
  `

	if (url)
		return (
			<Link to={url} className={classes} onClick={onClick}>
				{label}
			</Link>
		)

	return <button className={classes} onClick={onClick}>{label}</button>
}

export default Button
