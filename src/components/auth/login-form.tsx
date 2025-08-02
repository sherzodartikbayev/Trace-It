import { useSelector } from 'react-redux'
import type { RootState } from '../../store'
import type { LoginFormProps } from '../../types'
import Button from '../../ui/button'
import Input from '../../ui/input'

const LoginForm = (props: LoginFormProps) => {
	const { email, setEmail, password, setPassword, onSubmit } = props
	const { isLoading, error } = useSelector((state: RootState) => state.auth)

	return (
		<form onSubmit={onSubmit} className='d-flex flex-col gap-5 mb-3'>
			{error && <p className='text-red '>{error}</p>}

			<Input
				isLoading={isLoading}
				type='email'
				placeholder='Email'
				value={email}
				setValue={setEmail}
			/>

			<Input
				isLoading={isLoading}
				type='password'
				placeholder='Password'
				value={password}
				setValue={setPassword}
			/>

			<Button label={isLoading ? 'Loading...' : 'Sign In'} className='w-full' />
		</form>
	)
}

export default LoginForm
