import type { FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import itemsService from '../../service/items'
import {
	createItemFailure,
	createItemStart,
	createItemSuccess,
} from '../../slices/item'
import type { RootState } from '../../store'
import type { ItemCreateFormProps, ItemProps } from '../../types'
import Button from '../../ui/button'
import Input from '../../ui/input'

const ItemCreateForm = ({
	props,
	status,
}: {
	props: ItemCreateFormProps
	status: 'lost' | 'found'
}) => {
	const {
		image,
		setImage,
		title,
		setTitle,
		location,
		setLocation,
		date,
		setDate,
		description,
		setDescription,
	} = props

	const { user } = useSelector((state: RootState) => state.auth)
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const newItem: ItemProps = {
			image,
			title,
			description,
			location,
			date,
			status,
			userId: user?.uid || '',
			createdAt: Date.now(),
			type: 'wallet',
		}

		dispatch(createItemStart())

		try {
			const res = itemsService.postItem(newItem)
			dispatch(createItemSuccess(res))
			console.log(res)
			navigate(`/${status}`)
		} catch (error) {
			const result = error as Error
			dispatch(createItemFailure(result.message))
			console.log(error)
		}
	}

	return (
		<form onSubmit={onSubmit} className='d-flex flex-col gap-3'>
			<Input
				placeholder='Name'
				value={title}
				setValue={setTitle}
				isLoading={false}
				className='w-full'
			/>

			<Input
				placeholder='Description'
				value={description}
				setValue={setDescription}
				isLoading={false}
				className='w-full'
			/>

			<Input
				placeholder='Location'
				value={location}
				setValue={setLocation}
				isLoading={false}
				className='w-full'
			/>

			<Input
				type='date'
				placeholder='Date'
				value={date}
				setValue={setDate}
				isLoading={false}
				className='w-full'
			/>

			<Input
				placeholder='Image URL'
				value={image}
				setValue={setImage}
				isLoading={false}
				className='w-full'
			/>

			<Button label='Create Lost Item' className='w-full' />
		</form>
	)
}

export default ItemCreateForm
