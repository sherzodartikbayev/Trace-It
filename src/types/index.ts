import type { FormEvent } from 'react'

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
	className?: string
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

export interface AuthState {
	user: {
		name?: string
		email: string
		uid: string
	} | null
	isLoading: boolean
	error: string | null
  loggedIn: boolean
}

export interface ItemCreateFormProps {
	image: string
	setImage: (value: string) => void
	title: string
	setTitle: (value: string) => void
	description: string
	setDescription: (value: string) => void
	location: string
	setLocation: (value: string) => void
	date: string
	setDate: (value: string) => void
}

export type ItemStatus = 'lost' | 'found'
export type ItemType = 'wallet' | 'phone' | 'backpack' | 'other'

export interface ItemProps {
	id?: string
	image: string
	title: string
	description: string
	location: string
	date: string
	type: ItemType
	status: ItemStatus
	userId: string
	createdAt: number
}
