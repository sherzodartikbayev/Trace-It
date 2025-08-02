import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { navbarLinks } from '../constants'
import type { RootState } from '../store'
import Button from '../ui/button'
import Logo from './logo'

const Navbar = () => {
	const { loggedIn } = useSelector((state: RootState) => state.auth)

	return (
		<header className='fixed inset-0 z-40 h-20 bg-primary'>
			<div className='container h-full d-between'>
				<Logo />

				<nav className='d-flex gap-5'>
					<ul className='d-flex gap-5 max-md:hidden'>
						{navbarLinks.map(nav => (
							<li key={nav.id}>
								<NavLink
									to={nav.url}
									className={({ isActive }) =>
										`transition-colors hover:text-blue ${
											isActive ? 'text-blue font-semibold' : 'text-black'
										}`
									}
								>
									{nav.label}
								</NavLink>
							</li>
						))}
					</ul>

					{!loggedIn && (
						<>
							<Button label='Login' url='/login' variant='outline' />
							<Button label='Register' url='/register' variant='primary' />
						</>
					)}

					{loggedIn && (
						<>
							<Link to='/profile' className='border border-blue rounded-full'>
								<img
									src='/assets/icons/user.png'
									alt='user'
									className='size-12 object-contain'
								/>
							</Link>
						</>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
