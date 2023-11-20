import './style.scss'
interface PlansCardProps {
  plan: {
    title: string
    subTitle: string
    isSelected: boolean
  }
  handleSelectPlan: (e: any) => void
}

const PlanCardComponent = ({ plan, handleSelectPlan }: PlansCardProps) => {
  return (
    <div
      onClick={() => handleSelectPlan(plan.title)}
      className={`row__component ${plan.isSelected && 'row__component--selected'}`}
    >
      <div className='row__component--subtitle'>{plan.subTitle}</div>
      <div className='row__component--title'>{plan.title}</div>

      {plan.isSelected ? (
        <img
          className='row__component--checkbox'
          src='https://signup.hulu.com/static/images/selectActivePlan.svg'
          alt='checkbox'
        />
      ) : (
        <input type='radio' readOnly className='row__component--checkbox' />
      )}
    </div>
  )
}

export default PlanCardComponent
