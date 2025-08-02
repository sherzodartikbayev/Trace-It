import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layout/root-layout'
import Error from './pages/error'
import Found from './pages/found'
import Home from './pages/home'
import Login from './pages/login'
import Lost from './pages/lost'
import Profile from './pages/profile'
import Register from './pages/register'
import Report from './pages/report'
import { ToastContainer } from 'react-toastify';

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
					path: '/report',
					element: <Report />,
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
