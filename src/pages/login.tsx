import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState, type FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import LoginForm from '../components/auth/login-form'
import Social from '../components/auth/social'
import { auth } from '../firebase/config'
import { signUserFailure, signUserStart, signUserSuccess } from '../slices/auth'
import type { RootState } from '../store'
import Loader from '../ui/loader'

const Login = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { isLoading } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		dispatch(signUserStart())

		try {
			const res = await signInWithEmailAndPassword(auth, email, password)
			const userData = {
				email: res.user.email || '',
				uid: res.user.uid,
			}
			dispatch(signUserSuccess(userData))
			navigate('/')
			toast.success('Login successful!')
			console.log(res.user)
		} catch (error) {
			const result = error as Error
			dispatch(signUserFailure(result.message))
			toast.error(result.message || 'Something went wrong')
			console.log(error)
		}
	}

	const loginFormProps = { email, setEmail, password, setPassword, onSubmit }

	return (
		<section>
			<div className='container h-[80vh] sm:h-screen d-flex flex-col'>
				<div className='relative px-5 sm:px-10 d-flex flex-col text-center  min-h-[500px] border border-blue rounded-3xl overflow-hidden'>
					{isLoading && <Loader />}

					<h2 className='font-bold text-2xl md:text-3xl text-blue mb-8'>
						Login
					</h2>

					<LoginForm {...loginFormProps} />

					<Social />
				</div>
			</div>
		</section>
	)
}

export default Login
