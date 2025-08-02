import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { auth } from '../../firebase/config'
import {
	signUserFailure,
	signUserStart,
	signUserSuccess,
} from '../../slices/auth'
import type { RootState } from '../../store'
import Button from '../../ui/button'

const Social = () => {
	const navigate = useNavigate()
	const location = useLocation()
	const { isLoading } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()

	const isLoginPage = location.pathname === '/login'

	const onGoogle = () => {
		dispatch(signUserStart())

		const googleProvider = new GoogleAuthProvider()
		signInWithPopup(auth, googleProvider)
			.then(res => {
				const user = res.user
				dispatch(
					signUserSuccess({
						email: user.email,
						uid: user.uid,
						name: user.displayName,
						photoURL: user.photoURL,
					})
				)
				toast.success('Logged in with Google!')
				navigate('/')
			})
			.catch(error => {
				const result = error as Error
				dispatch(signUserFailure(result.message))
				toast.error(result.message || 'Something went wrong')
				console.error(error)
			})
	}

	return (
		<div className='d-flex flex-col gap-4'>
			<p className='font-bold text-lg mb-1'>or</p>
			<p className='font-normal text-base text-grey mb-1'>
				{isLoginPage ? 'Don’t have an account?' : 'Already have an account?'}
			</p>

			<div className='d-flex gap-5'>
				<Button
					label={isLoginPage ? 'Register' : 'Login'}
					url={isLoginPage ? '/register' : '/login'}
					variant='outline'
				/>

				<button
					onClick={onGoogle}
					disabled={isLoading}
					className='d-flex gap-2 px-7 py-3 rounded-2xl font-medium text-base transition-all border border-blue bg-none text-grey hover:bg-blue hover:text-white disabled:opacity-60'
				>
					<img src='/assets/icons/google.svg' alt='Google' />
					<p>Google</p>
				</button>
			</div>
		</div>
	)
}

export default Social
