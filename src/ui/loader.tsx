import { LuLoaderCircle } from 'react-icons/lu'

const Loader = () => {
	return (
		<div className='absolute inset-0 d-flex w-full h-full bg-lightBlue/80 opacity-20 z-50'>
			<LuLoaderCircle className='animate-spin text-blue size-20' />
		</div>
	)
}

export default Loader
