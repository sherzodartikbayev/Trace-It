import { signOut } from 'firebase/auth'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ItemCard from '../components/item/item-card'
import { auth } from '../firebase/config'
import itemsService from '../service/items'
import { logoutUser } from '../slices/auth'
import {
	itemFetchingFailure,
	itemFetchingStart,
	itemFetchingSuccess,
} from '../slices/item'
import type { RootState } from '../store'
import type { ItemProps } from '../types'
import Button from '../ui/button'
import Loader from '../ui/loader'

const Profile = () => {
	const user = auth.currentUser
	const navigate = useNavigate()
	const dispatch = useDispatch()

	const handleLogout = async () => {
		await signOut(auth)
		dispatch(logoutUser())
		navigate('/')
	}

	const { items, isLoading } = useSelector((state: RootState) => state.item)

	const getUserItems = async () => {
		dispatch(itemFetchingStart())

		try {
			const res = await itemsService.getItems()
			dispatch(
				itemFetchingSuccess(res.filter(item => item.userId === user?.uid))
			)
		} catch (error) {
			const result = error as Error
			dispatch(itemFetchingFailure(result.message))
			console.log(error)
		}
	}

	useEffect(() => {
		getUserItems()
	}, [])

	return (
		<section className='container min-h-screen py-10'>
			<div className='max-w-md mx-auto text-center border border-lightGrey rounded-2xl p-8 shadow-sm mb-10'>
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

			<div className=''>
				<h2 className='font-semibold text-3xl text-blue mb-5'>Your items</h2>
				<div className='grid grid-cols-3 gap-5'>
					{isLoading && <Loader />}
					{Array.isArray(items) && items.length > 0 ? (
						items.map((item: ItemProps) => <ItemCard key={item.id} {...item} />)
					) : (
						<p>You have not created item yet.</p>
					)}
				</div>
			</div>
		</section>
	)
}

export default Profile
