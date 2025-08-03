import type { InputProps } from '../types'

const Input = ({
	isLoading,
	type = 'text',
	placeholder,
	value,
	setValue,
	className,
}: InputProps) => {
	return (
		<input
			type={type}
			placeholder={placeholder}
			disabled={isLoading}
			value={value}
			onChange={e => setValue(e.target.value)}
			className={`px-5 py-4 w-80 border-2 border-lightGrey rounded-2xl outline-none font-normal text-base ${className}`}
		/>
	)
}

export default Input
