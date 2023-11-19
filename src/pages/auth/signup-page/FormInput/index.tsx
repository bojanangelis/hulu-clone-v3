import { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'
import { useSignUp } from '@clerk/clerk-react'

const FormInput = () => {
  const { isLoaded, signUp, setActive } = useSignUp()
  const [errorMessage, setErrorMessage] = useState('')
  const navigate = useNavigate()
  const [emailAddress, setEmailAddress] = useState('')
  const [password, setPassword] = useState('')
  const [pendingVerification, setPendingVerification] = useState(false)
  const [code, setCode] = useState('')

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      })

      // send the email.
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

      // change the UI to our pending section.
      setPendingVerification(true)
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      setErrorMessage(err.errors[0].longMessage)
    }
  }
  const onPressVerify = async (e: any) => {
    e.preventDefault()
    if (!isLoaded) {
      return
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      })
      if (completeSignUp.status !== 'complete') {
        /*  investigate the response, to see if there was an error
         or if the user needs to complete more steps.*/
        console.log(JSON.stringify(completeSignUp, null, 2))
      }
      if (completeSignUp.status === 'complete') {
        await setActive({ session: completeSignUp.createdSessionId })
        navigate('/')
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2))
      setErrorMessage(err.errors[0].longMessage)
    }
  }
  return (
    <main className='form-input__main'>
      <div className='form-input__title'>
        <h2>Create Your Account</h2>
        <div className='form-input__subtitle'>
          <p>Use your email and password to watch on your favorite devices.</p>
        </div>
      </div>

      <div className='form-input__content'>
        <p className='form-input__about'>
          You will use this email and password to log into your accounts for all your favorite
          services across The Walt Disney Family of Companies, including Disney+, Hulu and ESPN+.
        </p>
        {!pendingVerification && (
          <form className='form-input__form'>
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
          </form>
        )}

        {pendingVerification && (
          <form className='form-input__form'>
            <div className='form-group'>
              <label htmlFor='code'>code</label>
              <input
                value={code}
                id='code'
                name='code'
                placeholder='Code...'
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
          </form>
        )}
        {errorMessage && <p className='form-input__error'>{errorMessage}</p>}
      </div>
      <div className='form-actions'>
        <button
          onClick={pendingVerification ? onPressVerify : handleSubmit}
          className={`button-primary ${password.length > 3 && 'active-button'}`}
          type='submit'
        >
          {pendingVerification ? 'Verify code' : 'Continue'}
        </button>
      </div>
    </main>
  )
}

export default FormInput
