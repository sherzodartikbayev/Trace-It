import { signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase/config'
import { logoutUser } from '../slices/auth'
import Button from '../ui/button'

const Profile = () => {
	const user = auth.currentUser
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogout = async () => {
		await signOut(auth)
		dispatch(logoutUser())
		navigate('/')
	}

	return (
		<section className='container h-screen py-10'>
			<div className='max-w-md mx-auto text-center border border-lightGrey rounded-2xl p-8 shadow-sm'>
				<div className='w-24 h-24 mx-auto mb-4 rounded-full bg-blue text-white text-3xl font-bold flex items-center justify-center'>
					{user?.displayName?.[0]?.toUpperCase() || 'U'}
				</div>

				<h2 className='text-2xl font-bold mb-2'>
					{user?.displayName || 'No Name'}
				</h2>

				<p className='text-base text-grey mb-4'>{user?.email}</p>

				<Button
					label='Logout'
					variant='danger'
					onClick={() => handleLogout()}
				/>
			</div>
		</section>
	)
}

export default Profile
