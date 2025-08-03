import { useEffect, useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6'
import { GrStatusInfo } from 'react-icons/gr'
import { MdOutlineDateRange, MdOutlineDescription } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import itemsService from '../service/items'
import type { ItemProps } from '../types'
import Loader from '../ui/loader'

const ItemDetail = () => {
	const { id } = useParams()
	const [item, setItem] = useState<ItemProps | null>(null)
	const [loading, setLoading] = useState(false)

	useEffect(() => {
		const fetchItem = async () => {
			setLoading(true)
			try {
				const data = await itemsService.getItemDetail(id!)
				setItem(data)
			} catch (error) {
				console.log(error)
			} finally {
				setLoading(false)
			}
		}

		fetchItem()
	}, [id])

	if (loading) return <Loader />
	if (!item) return <p>Item not found</p>

	return (
		<section className='container min-h-[80vh] py-10 d-flex'>
			<div className='flex justify-start items-center max-md:flex-col border border-grey rounded-2xl overflow-hidden gap-10 w-full'>
				<div className='w-1/3 h-[450px] mb-5 '>
					<img
						src={item.image}
						alt={item.title}
						className='size-full object-cover'
					/>
				</div>

				<div className=''>
					<h2 className='text-3xl font-bold text-blue mb-5'>{item.title}</h2>
					<div className='flex items-center gap-3 mb-3'>
						<MdOutlineDescription className='size-8' />
						<p className='text-lg'>{item.description}</p>
					</div>
					<div className='flex items-center gap-3 mb-3'>
						<FaLocationDot className='size-8' />
						<p className='text-lg'>{item.location}</p>
					</div>
					<div className='flex items-center gap-3 mb-3'>
						<MdOutlineDateRange className='size-8' />
						<p className='text-lg'>{item.date}</p>
					</div>
					<div className='flex items-center gap-3 mb-3'>
						<GrStatusInfo className='size-7' />
						<p className='text-lg'>{item.status}</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default ItemDetail
