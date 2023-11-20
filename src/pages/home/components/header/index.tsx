import { useEffect, useState } from 'react'
import './style.scss'
import { Link, useNavigate } from 'react-router-dom'
import { UserButton } from '@clerk/clerk-react'
import Hulu from '../../../../assets/hulu.svg'
function Nav() {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav__white'}`}>
      <div className='nav__contents'>
        <img onClick={() => navigate('/')} className='nav__logo' src={Hulu} alt='hulu logo' />
        <ul className='nav__links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <a href='#'>Live</a>
          </li>
          <li>
            <a href='#'>Movies</a>
          </li>
          <li>
            <a href='#'>Sports</a>
          </li>
          <li>
            <Link to='/my-stuff'>My Stuff</Link>
          </li>
        </ul>
        <div className='nav__avatar'>
          <UserButton />
        </div>
      </div>
    </div>
  )
}

export default Nav
