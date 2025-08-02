import type { FormEvent, JSX } from 'react'

export interface ButtonProps {
	label: string
	variant?: 'primary' | 'outline' | 'danger'
	url?: string
	className?: string
	onClick?: () => void
}

export interface InputProps {
	isLoading: boolean
	type?: string
	placeholder: string
	value: string
	setValue: (value: string) => void
}

export interface ProtectedRouteProps {
	user: boolean
	children: JSX.Element
}

export interface RegisterFormProps {
	name: string
	setName: (val: string) => void
	email: string
	setEmail: (val: string) => void
	password: string
	setPassword: (val: string) => void
	confirmPassword: string
	setConfirmPassword: (val: string) => void
	onSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	isLoading: boolean
	error?: string
}

export interface LoginFormProps {
	email: string
	setEmail: (value: string) => void
	password: string
	setPassword: (value: string) => void
	onSubmit: (e: FormEvent<HTMLFormElement>) => void
}
