import { useNavigate } from 'react-router-dom'
import './style.scss'
const Header = () => {
  const navigate = useNavigate()
  return (
    <div className='header'>
      <img src='https://signup.hulu.com/static/images/hulu-dark.svg' alt='hulu logo' />
      <button onClick={() => navigate('/login')}>Log in</button>
    </div>
  )
}

export default Header
