import { useEffect } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Report = () => {
	const navigate = useNavigate()

	useEffect(() => {
		navigate('/report/lost')
	}, [])

	return (
		<section>
			<div className='container min-h-screen d-flex'>
				<div className='w-1/2 min-h-1/2 max-md:w-[400px] p-10 border border-primary rounded-2xl'>
					<h2 className='font-semibold text-3xl text-center mb-5'>Report</h2>
					<div className='d-flex gap-2 text-center'>
						<NavLink
							to='/report/lost'
							className={({ isActive }) =>
								`outline-btn ${
									isActive ? 'bg-blue text-white font-semibold' : 'text-black'
								}`
							}
						>
							Lost
						</NavLink>
						<NavLink
							to='/report/found'
							className={({ isActive }) =>
								`outline-btn ${
									isActive ? 'bg-blue text-white font-semibold' : 'text-black'
								}`
							}
						>
							Found
						</NavLink>
					</div>

					<Outlet />
				</div>
			</div>
		</section>
	)
}

export default Report
