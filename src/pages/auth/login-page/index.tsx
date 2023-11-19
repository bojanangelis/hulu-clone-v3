import { useNavigate } from 'react-router-dom'
import LoginModel from '../../../components/models/login-model'
import Header from '../plans/components/header-sign-up'

const LoginPage = () => {
  const navigate = useNavigate()
  return (
    <>
      {/* WIP ON THIS */}
      <Header />
      <LoginModel isOpen={true} onClose={() => navigate('/welcome')} />
    </>
  )
}

export default LoginPage
