import { IoCloseSharp } from 'react-icons/io5'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { navbarLinks } from '../constants'
import type { RootState } from '../store'

const MobileNavbar = ({
	open,
	setOpen,
}: {
	open: boolean
	setOpen: (value: boolean) => void
}) => {
	const { loggedIn } = useSelector((state: RootState) => state.auth)

	return (
		<div
			className={`${
				open ? 'absolute' : 'hidden'
			} inset-0 w-full h-screen bg-lightBlue`}
		>
			<IoCloseSharp
				className='absolute top-5 right-5 size-8 text-white'
				onClick={() => setOpen(false)}
			/>

			<ul className='d-flex flex-col gap-5 h-screen'>
				{navbarLinks.map(nav => (
					<li key={nav.id}>
						<Link
							to={nav.url}
							className='text-white text-2xl'
							onClick={() => setOpen(false)}
						>
							{nav.label}
						</Link>
					</li>
				))}

				{loggedIn && (
					<>
						<Link
							to='/profile'
							className='text-white text-2xl'
							onClick={() => setOpen(false)}
						>
							Profile
						</Link>
					</>
				)}

				{!loggedIn && (
					<>
						<Link
							to='/login'
							className='text-white text-2xl'
							onClick={() => setOpen(false)}
						>
							Login
						</Link>

						<Link
							to='/register'
							className='text-white text-2xl'
							onClick={() => setOpen(false)}
						>
							Register
						</Link>
					</>
				)}
			</ul>
		</div>
	)
}

export default MobileNavbar
