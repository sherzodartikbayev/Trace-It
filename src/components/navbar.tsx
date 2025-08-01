import { Link } from 'react-router-dom'
import { navbarLinks } from '../constants'
import Button from '../ui/button'
import Logo from './logo'

const Navbar = () => {
	return (
		<header className='fixed inset-0 z-40 h-20 bg-primary'>
			<div className='container h-full d-between'>
				<Logo />

				<ul className='d-flex gap-6'>
					{navbarLinks.map(nav => (
						<li key={nav.id}>
							<Link to={nav.url} className='transition-colors hover:text-blue'>
								{nav.label}
							</Link>
						</li>
					))}

					<Button label='Login' url='/login' variant='outline' />
					<Button label='Register' url='/register' variant='primary' />
				</ul>
			</div>
		</header>
	)
}

export default Navbar
