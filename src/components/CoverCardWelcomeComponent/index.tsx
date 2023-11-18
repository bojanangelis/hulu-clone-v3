import './style.scss'
interface CoverCardProps {
  img: string
  subTitle: string
  category: string
}
const CoverCardWelcomeComponent = ({ img, subTitle, category }: CoverCardProps) => {
  return (
    <button className='cover-card__button'>
      <img className='poster_image' src={img} alt={subTitle} />
      <div className='cover-card__text'>
        <div className='sub-title'>{subTitle}</div>
        <p>{category}</p>
      </div>
    </button>
  )
}

export default CoverCardWelcomeComponent
