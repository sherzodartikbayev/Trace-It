import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import RootLayout from './layout/root-layout'
import Error from './pages/error'
import Found from './pages/found'
import Home from './pages/home'
import ItemDetail from './pages/item-detail'
import Login from './pages/login'
import Lost from './pages/lost'
import Profile from './pages/profile'
import Register from './pages/register'
import Report from './pages/report'
import ReportFound from './pages/report-found'
import ReportLost from './pages/report-lost'

const App = () => {
	const route = createBrowserRouter([
		{
			path: '/',
			element: <RootLayout />,
			errorElement: <Error />,
			children: [
				{
					index: true,
					element: <Home />,
				},
				{
					path: '/login',
					element: <Login />,
				},
				{
					path: '/register',
					element: <Register />,
				},
				{
					path: '/lost',
					element: <Lost />,
				},
				{
					path: '/found',
					element: <Found />,
				},
				{
					path: '/item/:id',
					element: <ItemDetail />,
				},
				{
					path: '/report',
					element: <Report />,
					children: [
						{
							path: '/report/lost',
							element: <ReportLost />,
						},
						{
							path: '/report/found',
							element: <ReportFound />,
						},
					],
				},
				{
					path: '/profile',
					element: <Profile />,
				},
			],
		},
	])

	return (
		<>
			<RouterProvider router={route} />
			<ToastContainer />
		</>
	)
}

export default App
