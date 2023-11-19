import './style.scss'
import HuluLogo from '../../../../assets/hulu.svg'
import useDynamicBackground from '../../../../hooks/useDynamicBackground'
import CustomPortal from '../../../../utils/CustomPortal'
import LoginModel from '../../../../components/models/login-model'
import { useState } from 'react'

const HeaderWelcomeComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const backgroundStyle = useDynamicBackground(
    'https://cnbl-cdn.bamgrid.com/assets/62ed936344e6ffbac48c896b2bd327fe171521dd941b6ddc8402e2eae50116fc/original'
  )

  const handleIsModalOpen = () => {
    setIsOpen((e) => !e)
  }

  return (
    <>
      <CustomPortal>
        <LoginModel onClose={handleIsModalOpen} isOpen={isOpen} />
      </CustomPortal>
      <header style={backgroundStyle} className='header-welcome__component'>
        <nav>
          <span>
            <img src={HuluLogo} alt='Hulu' className='logo-welcome__component' />
          </span>
          <button onClick={() => setIsOpen(true)} className='login-btn__welcome'>
            Log In
          </button>
        </nav>
        <div className='main-header__content'>
          <div className='header-content'>
            <div className='header-content__view'>
              <h4>DISNEY BUNDLE DUO BASIC</h4>
              <img
                src={
                  'https://cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original'
                }
                alt='Hulu Disney'
                className='logo'
              />
              <div className='header-content-text'>Both with ads, for $9.99/month.</div>
              <button className='button-primary'>Get them both</button>
            </div>
            <div className='header-content__view'>
              <h4>DISNEY BUNDLE TRIO BASIC</h4>
              <img
                src={
                  'https://www.hulu.com/static/hitch/s3/attachments/ckdz36xqi7zz019ym0b2seyqk-dplus-logo-0-1-2-0.full.png'
                }
                alt='Hulu Disney'
                className='logo_trio'
              />
              <div className='header-content-text'>Both with ads, for $9.99/month.</div>
              <button className='button-primary'>Get all three</button>
            </div>
          </div>
          <div className='links'>
            <h5>Terms apply</h5>
            <h5>Sign up for Hulu only</h5>
          </div>
        </div>
      </header>
    </>
  )
}
export default HeaderWelcomeComponent
