import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { navbarLinks } from '../constants'
import type { RootState } from '../store'
import Button from '../ui/button'
import Logo from './logo'
import MobileNavbar from './mobile-navbar'

const Navbar = () => {
	const [open, setOpen] = useState(false)
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
						<div className='d-flex gap-5 max-md:hidden'>
							<Button label='Login' url='/login' variant='outline' />
							<Button label='Register' url='/register' variant='primary' />
						</div>
					)}

					{loggedIn && (
						<>
							<Link to='/profile' className='border border-blue rounded-full'>
								<img
									src='/assets/icons/user.png'
									alt='user'
									className='size-12 max-md:size-8 object-contain'
								/>
							</Link>
						</>
					)}

					<GiHamburgerMenu className='size-8 md:hidden' onClick={() => setOpen(!open)} />
          <MobileNavbar open={open} setOpen={setOpen} />
				</nav>
			</div>
		</header>
	)
}

export default Navbar
