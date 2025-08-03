import { FaLocationDot } from 'react-icons/fa6'
import { MdDateRange } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import itemsService from '../../service/items'
import {
	deleteItemFailure,
	deleteItemStart,
	deleteItemSuccess,
} from '../../slices/item'
import type { RootState } from '../../store'
import type { ItemProps } from '../../types'
import Button from '../../ui/button'

const ItemCard = ({
	id,
	image,
	title,
	description,
	location,
	date,
	userId,
}: ItemProps) => {
	const { user } = useSelector((state: RootState) => state.auth)
	const { isLoading } = useSelector((state: RootState) => state.item)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const deleteItem = async () => {
		dispatch(deleteItemStart())

		try {
			const res = await itemsService.removeItem(id!)
			dispatch(deleteItemSuccess())
			console.log(res)
			toast.success('Your is deleted !')
			navigate('/')
		} catch (error) {
			const result = error as Error
			toast.error(result.message)
			dispatch(deleteItemFailure(result.message))
		}
	}

	return (
		<div className='relative w-[360px] min-h-[500px] rounded-2xl border border-grey overflow-hidden'>
			<div
				className='w-full h-2/3 cursor-pointer'
				onClick={() => navigate(`/item/${id}`)}
			>
				<img src={image} alt={title} className='size-full object-cover' />
			</div>

			<div className='p-5 h-full bg-primary'>
				<h2 className='font-medium text-2xl mb-1'>{title}</h2>
				<p className='mb-1'>
					{description.length > 60
						? description.slice(0, 60) + '...'
						: description}
				</p>
				<p className='flex items-center gap-2'>
					<FaLocationDot /> {location}
				</p>
				<p className='flex items-center gap-2'>
					<MdDateRange />
					{date}
				</p>

				{user?.uid === userId ? (
					<Button
						label={isLoading ? 'Loading...' : 'Delete'}
						variant='danger'
						className=' absolute right-2 bottom-2'
						onClick={() => deleteItem()}
					/>
				) : null}
			</div>
		</div>
	)
}

export default ItemCard
