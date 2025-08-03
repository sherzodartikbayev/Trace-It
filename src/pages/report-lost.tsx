import { useState } from 'react'
import ItemCreateForm from '../components/item/item-create-form'

const ReportLost = () => {
	const [image, setImage] = useState('')
	const [title, setTitle] = useState('')
	const [location, setLocation] = useState('')
	const [date, setDate] = useState('')
	const [description, setDescription] = useState('')

	const reportCreateForm = {
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
	}

	return (
		<div className='mt-5'>
			<ItemCreateForm props={reportCreateForm} status='lost' />
		</div>
	)
}

export default ReportLost
