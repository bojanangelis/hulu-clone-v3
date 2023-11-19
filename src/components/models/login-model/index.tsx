import './style.scss'
import XIcon from '../../../assets/x-icon.svg'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

interface LoginModelProps {
  onClose: () => void
  isOpen: boolean
}

const LoginModel = ({ onClose, isOpen }: LoginModelProps) => {
  const [active, setActive] = useState(false)

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }
  // Trigger the animation after the component mounts
  useEffect(() => {
    if (isOpen) {
      // A slight delay to trigger the CSS transition
      requestAnimationFrame(() => setActive(true))
    } else {
      setActive(false)
    }
  }, [isOpen])

  // When the modal is closing, wait for the animation to finish before unmounting
  const handleTransitionEnd = () => {
    if (!active && !isOpen) {
      onClose()
    }
  }

  if (!isOpen && !active) return null
  return (
    <div
      className={`modal-overlay${active ? ' active' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      onClick={handleOverlayClick}
    >
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button className='modal-close' onClick={onClose}>
          <img src={XIcon} alt='' />
        </button>
        <div className='modal-header'>
          Log In
          <p>
            You will use this email and password to log into your accounts for all your favorite
            services across The Walt Disney Family of Companies, including Disney+, Hulu and ESPN+.{' '}
          </p>
        </div>
        <div className='modal-content'>
          <form>
            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>password</label>
              <input type='password' />
            </div>
            <a href='#'>Forgot your email or password?</a>
            <div className='form-actions'>
              <button className='button-primary' type='submit'>
                LOG IN
              </button>
            </div>
          </form>
        </div>
        <div className='modal-footer'>
          Don't have an account? <Link to={'/plans'}> Start your free trial</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginModel
