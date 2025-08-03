import ItemList from '../components/item/item-list'

const Found = () => {
	return (
		<section>
			<div className='relative container min-h-screen py-10'>
				<h2 className='section-paragraph'>Found Items</h2>

				<ItemList filterBy='found' />
			</div>
		</section>
	)
}

export default Found
