import './style.scss'
import XIcon from '../../../assets/x-icon.svg'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSignIn } from '@clerk/clerk-react'

interface LoginModelProps {
  onClose: () => void
  isOpen: boolean
}

const LoginModel = ({ onClose, isOpen }: LoginModelProps) => {
  const { isLoaded, signIn, setActive } = useSignIn()
  const [activeModel, setActiveModel] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (event.target === event.currentTarget) {
      onClose()
    }
  }
  // Trigger the animation after the component mounts
  useEffect(() => {
    if (isOpen) {
      // A slight delay to trigger the CSS transition
      requestAnimationFrame(() => setActiveModel(true))
    } else {
      setActiveModel(false)
    }
  }, [isOpen])

  // When the modal is closing, wait for the animation to finish before unmounting
  const handleTransitionEnd = () => {
    if (!activeModel && !isOpen) {
      onClose()
    }
  }
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      })

      if (result.status === 'complete') {
        console.log(result)
        await setActive({ session: result.createdSessionId })
        navigate('/')
      } else {
        /*Investigate why the login hasn't completed */
        console.log(result)
      }
    } catch (err: any) {
      console.error('error', err.errors[0].longMessage)
      setError(err.errors[0].longMessage)
    }
  }

  if (!isOpen && !activeModel) return null
  return (
    <div
      className={`modal-overlay${activeModel ? ' active' : ''}`}
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
              <input
                value={emailAddress}
                onChange={(e) => setEmailAddress(e.target.value)}
                id='email'
                name='email'
                type='email'
                autoComplete='email'
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id='password'
                name='password'
                type='password'
                autoComplete='current-password'
              />
            </div>
            <a href='#'>Forgot your email or password?</a>
            <div className='form-actions'>
              <button
                onClick={handleSubmit}
                className={`button-primary ${
                  password.length > 2 && emailAddress.length > 4 && 'active-button'
                }`}
                type='submit'
              >
                LOG IN
              </button>
            </div>
          </form>
        </div>
        {error && <p className='error'>{error}</p>}
        <div className={`modal-footer`}>
          Don't have an account? <Link to={'/plans'}> Start your free trial</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginModel
