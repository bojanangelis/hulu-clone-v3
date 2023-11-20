import { Route, Routes, useNavigate } from 'react-router-dom'
import WelcomePage from '../welcome-page'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import SignUpPage from '../auth/signup-page'
import LoginPage from '../auth/login-page'
import HomePage from '../home'
import PlansPage from '../auth/plans'

const RouteNavigation = () => {
  const { isLoaded, isSignedIn } = useUser()
  const navigate = useNavigate()
  useEffect(() => {
    if (!isLoaded && !isSignedIn) {
      navigate('welcome')
    } else {
      navigate('')
    }

    return () => {}
  }, [])

  return (
    <Routes>
      <Route
        path='/welcome'
        element={
          <SignedOut>
            <WelcomePage />
          </SignedOut>
        }
      />
      <Route path='/plans' element={<PlansPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/sign-up' element={<SignUpPage />} />
      <Route
        path='/'
        element={
          <>
            <SignedIn>
              <HomePage />
            </SignedIn>
          </>
        }
      />
    </Routes>
  )
}

export default RouteNavigation
