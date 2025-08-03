import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import itemsService from '../../service/items'
import {
	itemFetchingFailure,
	itemFetchingStart,
	itemFetchingSuccess,
} from '../../slices/item'
import type { RootState } from '../../store'
import type { ItemProps } from '../../types'
import Loader from '../../ui/loader'
import ItemCard from './item-card'

const ItemList = ({ filterBy }: { filterBy: 'lost' | 'found' }) => {
	const { items, isLoading } = useSelector((state: RootState) => state.item)
	const dispatch = useDispatch()

	const getItems = async () => {
		dispatch(itemFetchingStart())

		try {
			const res = await itemsService.getItems()
			dispatch(
				itemFetchingSuccess(res.filter(item => item.status === filterBy))
			)
		} catch (error) {
			const result = error as Error
			dispatch(itemFetchingFailure(result.message))
			console.log(error)
		}
	}

	useEffect(() => {
		getItems()
	}, [])

	return (
		<div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
			{isLoading && <Loader />}
			{Array.isArray(items) && items.length > 0 ? (
				items.map((item: ItemProps) => <ItemCard key={item.id} {...item} />)
			) : (
				<p>No items found.</p>
			)}
		</div>
	)
}

export default ItemList
