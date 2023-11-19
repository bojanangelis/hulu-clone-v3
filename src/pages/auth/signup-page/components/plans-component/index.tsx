import { useState } from 'react'
import './style.scss'
const PlansComponent = () => {
  const [currentPlan, setCurrentPlan] = useState('base')
  return (
    <main className='plans-main__component'>
      <div className='choose-plans__title'>
        <h2>Choose Your Plan</h2>
        <div className='choose-plans__page-subtitle'>
          <p>Switch plans or cancel anytime.</p>
        </div>
      </div>
      <div className='choose-plans__body'>
        <div className='choose-pans__body-buttons'>
          <button
            onClick={() => setCurrentPlan('base')}
            className={`${currentPlan === 'base' && 'active-plans__button'}`}
          >
            Base Plans
          </button>
          <button
            onClick={() => setCurrentPlan('pro')}
            className={`${currentPlan === 'pro' && 'active-plans__button'}`}
          >
            Bundle / save
          </button>
        </div>
        <div className='choose-plans__body-plans'>
          <div className='carousel'>
            <h5>Hulu (No Ads)</h5>
            <h4>Get First Month Free, Then</h4>
            <h5>$17.99 / month</h5>
            <p>
              Our Hulu (No Ads) plan lets you watch exclusive series, hit movies, Originals, kids
              shows, and tons more with no ad interruptions.
            </p>
            <button>select</button>
          </div>
          <div className='carousel'>
            <span>MOST POPULAR</span>
            <h5>Hulu (No Ads)</h5>
            <h4>Get First Month Free, Then</h4>
            <h5>$17.99 / month</h5>
            <p>
              Our Hulu (No Ads) plan lets you watch exclusive series, hit movies, Originals, kids
              shows, and tons more with no ad interruptions.
            </p>
            <button>select</button>
          </div>
          <div className='carousel'>
            <h5>Hulu (No Ads)</h5>
            <h4>Get First Month Free, Then</h4>
            <h5>$17.99 / month</h5>
            <p>
              Our Hulu (No Ads) plan lets you watch exclusive series, hit movies, Originals, kids
              shows, and tons more with no ad interruptions.
            </p>
            <button>select</button>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PlansComponent
