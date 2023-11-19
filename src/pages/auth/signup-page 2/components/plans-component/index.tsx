import { useState } from 'react'
import PlanCardComponent from '../plan-card-component'
import { plans } from '../../../../../assets/huluPlans'
import './style.scss'
import { useNavigate } from 'react-router-dom'

const PlansComponent = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans)
  const navigate = useNavigate()

  const handleSelectPlan = (selectedPlan: string) => {
    // Create a new array with updated isSelected values
    const updatedPlans = plans.map((plan) => {
      if (plan.title === selectedPlan) {
        // Toggle isSelected for the clicked plan
        return { ...plan, isSelected: true }
      } else {
        // Set isSelected to false for all other plans
        return { ...plan, isSelected: false }
      }
    })

    // Update the state with the new plans array
    setSelectedPlan(updatedPlans)
  }
  const aboutSelectedPlan = selectedPlan.filter((x) => x.isSelected === true)

  return (
    <main className='plans-main__component'>
      <div className='choose-plans__title'>
        <h2>Choose Your Plan</h2>
        <div className='choose-plans__page-subtitle'>
          <p>Switch plans or cancel anytime.</p>
        </div>
      </div>

      <div className='row__price--carousel'>
        {selectedPlan.map((plan, i) => (
          <PlanCardComponent key={i} handleSelectPlan={handleSelectPlan} plan={plan} />
        ))}
      </div>

      <div className='selected--plans__about'>
        {aboutSelectedPlan[0].img && (
          <img className='selected--plan__img' src={aboutSelectedPlan[0].img} alt='logo' />
        )}
        <span className='selected--plan__title'>
          Get {aboutSelectedPlan[0].title} for 30 days free
        </span>
        <span className='selected--plan__price'>then {aboutSelectedPlan[0].price}/month</span>
        <span className='selected--plan__description'>{aboutSelectedPlan[0].description}</span>
        <a href='#'>Looking for our student discount?</a>
      </div>
      <div className='plans__view'>
        <div className='plans__view--component'>
          <img
            className='plans__view--image'
            src={'https://signup.hulu.com/static/images/superbundle-logo-color.svg'}
            alt='logo'
          />
          <div className='plans__view--content'>
            <span className='plans__view--title'>Hulu (No Ads) + Live TV</span>
            <span className='plans__view--subTitle'>Get Hulu (No Ads) + Live TV for</span>
            <span className='plans__view--subTitle'>$89.99/month</span>
            <a href='#'>More Details</a>
          </div>
          <div className='plans__view--buttons'>
            <button className='button-primary'>Select</button>
            <a href='#'>Terms Apply</a>
          </div>
        </div>
      </div>
      <div className='selected__plan--button'>
        <button onClick={() => navigate('/sign-up')} type='button' className='button-primary'>
          select
        </button>
      </div>
    </main>
  )
}

export default PlansComponent
