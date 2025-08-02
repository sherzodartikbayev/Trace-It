import { Link, NavLink } from 'react-router-dom'
import { navbarLinks } from '../constants'
import Button from '../ui/button'
import Logo from './logo'

const Navbar = () => {
	const user = false

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

					{!user && (
						<>
							<Button label='Login' url='/login' variant='outline' />
							<Button label='Register' url='/register' variant='primary' />
						</>
					)}

					{user && (
						<>
							<Link to='/profile' className='border border-blue rounded-full'>
								<img
									src='/assets/icons/user.png'
									alt='user'
									className='size-12 object-contain'
								/>
							</Link>

							<Button label='Logout' variant='outline' />
						</>
					)}
				</nav>
			</div>
		</header>
	)
}

export default Navbar
