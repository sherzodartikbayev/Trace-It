import ItemList from '../components/item/item-list'

const Lost = () => {
	return (
		<section>
			<div className='relative container min-h-screen py-10'>
				<h2 className='section-paragraph mb-5'>Lost Items</h2>

				<ItemList filterBy='lost' />
			</div>
		</section>
	)
}

export default Lost
