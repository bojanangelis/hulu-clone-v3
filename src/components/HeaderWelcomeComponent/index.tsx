import './style.scss'
import HuluLogo from '../../assets/hulu.svg'

const HeaderWelcomeComponent = () => {
  return (
    <header className='header-welcome__component'>
      <nav>
        <span>
          <img src={HuluLogo} alt='Hulu' className='logo-welcome__component' />
        </span>
        <button className='login-btn__welcome'>Log In</button>
      </nav>

      <div className='header-content'>
        <h4>Try up to one month free</h4>
        <img
          src={
            'https://cnbl-cdn.bamgrid.com/assets/f1607ad0edca860aef966f4295fcb94be1af04de5aefcf855bc080b778448bef/original'
          }
          alt='Hulu Disney'
          className='logo'
        />
        <div className='header-text-1'>Watch thousands of TV shows and movies.</div>
        <div className='header-text-2'>
          HBO Max™, SHOWTIME®, CINEMAX® and STARZ® available as add-ons.
        </div>
        <button className='btn btn-cta'>Start Your Free Trial</button>
        <div className='legal-text'>Free trial for new & eligible returning subscribers only.</div>
      </div>
    </header>
  )
}
export default HeaderWelcomeComponent
