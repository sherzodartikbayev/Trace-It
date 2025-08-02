import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useState, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import RegisterForm from '../components/auth/register-form'
import Social from '../components/auth/social'
import { auth } from '../firebase/config'
import { signUserFailure, signUserStart, signUserSuccess } from '../slices/auth'
import type { RootState } from '../store'
import Loader from '../ui/loader'

const Register = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const { isLoading } = useSelector((state: RootState) => state.auth)

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if (password !== confirmPassword) {
			toast.error('Passwords do not match')
			return
		}

		dispatch(signUserStart())

		try {
			const res = await createUserWithEmailAndPassword(auth, email, password)

			await updateProfile(res.user, {
				displayName: name,
			})

			dispatch(signUserSuccess({ name, email }))
			toast.success('Registered successfully!')
			navigate('/')
		} catch (error) {
			const result = error as Error
			dispatch(signUserFailure(result.message))
			toast.error(result.message)
		}
	}

	const registerFormProps = {
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
		error: '',
	}

	return (
		<section>
			<div className='container h-screen d-flex flex-col'>
				<div className='relative py-10 px-5 sm:px-10 d-flex flex-col text-center max-w-[400px] min-h-[500px] border border-blue rounded-3xl overflow-hidden'>
					{isLoading && <Loader />}

					<h2 className='font-bold text-2xl md:text-3xl text-blue mb-8'>
						Register
					</h2>
					<RegisterForm {...registerFormProps} />

					<Social />
				</div>
			</div>
		</section>
	)
}

export default Register
