import { Link } from 'react-router-dom'
import { socialMedia } from '../constants'
import Logo from './logo'

const Footer = () => {
	const year = new Date().getFullYear()

	return (
		<footer className='bg-primary'>
			<div className='container d-between py-10 max-md:flex-col '>
				<div className='d-start flex-col max-md:items-center max-md:text-center max-md:mb-5'>
					<Logo />
					<h2 className='font-medium text-base mt-2'>
						© {year} trace-it.com. All rights reserved.
					</h2>
				</div>

				<ul className='d-flex gap-5'>
					{socialMedia.map(social => (
						<li key={social.id}>
							<Link to={social.url} target='_blank'>
								<img
									src={social.src}
									alt='social media'
									className='size-6'
								/>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</footer>
	)
}

export default Footer
