import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from '../error/error-auth-page'
import WelcomePage from '../welcome-page'

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: '/welcome',
      element: <WelcomePage />,
      errorElement: <ErrorPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default Routes
