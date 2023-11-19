import { Route, Routes, useNavigate } from 'react-router-dom'
import WelcomePage from '../welcome-page'
import { SignedIn, SignedOut, useUser } from '@clerk/clerk-react'
import { useEffect } from 'react'
import PlansPage from '../auth/plans'
import SignUpPage from '../auth/signup-page'
import LoginPage from '../auth/login-page'

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
              <div>daaa signed in sum</div>
            </SignedIn>
          </>
        }
      />
    </Routes>
  )
}

export default RouteNavigation

{
  /* <Routes>
<Route path="/" element={<PublicPage />} />
<Route
  path="/sign-in/*"
  element={<SignIn routing="path" path="/sign-in" />}
/>
<Routes
  path="/sign-up/*"
  element={<SignUp routing="path" path="/sign-up" />}
/>
<Route
  path="/protected"
  element={
  <>
    <SignedIn>
      <ProtectedPage />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </>
  }
/>
</Routes> */
}
