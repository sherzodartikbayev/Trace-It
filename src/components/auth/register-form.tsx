import type { RegisterFormProps } from '../../types'
import Input from '../../ui/input'
import Button from '../../ui/button'

const RegisterForm = ({
	name,
	setName,
	email,
	setEmail,
	password,
	setPassword,
	confirmPassword,
	setConfirmPassword,
	onSubmit,
	isLoading,
	error,
}: RegisterFormProps) => {
	return (
		<form onSubmit={onSubmit} className='d-flex flex-col gap-5 mb-3'>

			<Input
				type='text'
				placeholder='Full Name'
				value={name}
				setValue={setName}
				isLoading={isLoading}
			/>

			<Input
				type='email'
				placeholder='Email'
				value={email}
				setValue={setEmail}
				isLoading={isLoading}
			/>

			<Input
				type='password'
				placeholder='Password'
				value={password}
				setValue={setPassword}
				isLoading={isLoading}
			/>

			<Input
				type='password'
				placeholder='Confirm Password'
				value={confirmPassword}
				setValue={setConfirmPassword}
				isLoading={isLoading}
			/>

			{error && <p className='text-red-500 text-sm'>{error}</p>}

			<Button label={isLoading ? 'Loading...' : 'Register'} className='w-full' />
		</form>
	)
}

export default RegisterForm
