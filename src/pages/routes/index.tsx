import { Route, Routes, useNavigate } from 'react-router-dom'
import WelcomePage from '../welcome-page'
import { SignedIn, SignedOut, useAuth } from '@clerk/clerk-react'
import { useEffect } from 'react'
import SignUpPage from '../auth/signup-page'
import LoginPage from '../auth/login-page'
import HomePage from '../home'
import PlansPage from '../auth/plans'
import MovieDetails from '../movie-details-page'
import MyStuff from '../my-styff-page'

const RouteNavigation = () => {
  const { isLoaded, userId } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    async function checkUserIsLoggedIn() {
      if (isLoaded && !userId) {
        navigate('welcome')
      }
    }
    checkUserIsLoggedIn()
  }, [isLoaded, userId])

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
      <Route
        path='/my-stuff'
        element={
          <>
            <SignedIn>
              <MyStuff />
            </SignedIn>
          </>
        }
      />
      <Route
        path='/movie/:id'
        element={
          <>
            <SignedIn>
              <MovieDetails />
            </SignedIn>
          </>
        }
      />
    </Routes>
  )
}

export default RouteNavigation
