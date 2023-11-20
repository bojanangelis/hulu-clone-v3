import { useState } from 'react'
import './style.scss'
import CustomPortal from '../../../../utils/CustomPortal'
import ViewModel from '../../../../components/models/view'
interface CoverCardProps {
  img: string
  subTitle: string
  category: string
}
const CoverCardWelcomeComponent = ({ img, subTitle, category }: CoverCardProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsModalOpen = () => {
    setIsOpen((e) => !e)
  }
  return (
    <>
      <button onClick={() => setIsOpen(true)} className='cover-card__button'>
        <img className='poster_image' src={img} alt={subTitle} />
        <div className='cover-grad' />
        <div className='cover-card__text'>
          <div className='sub-title'>{subTitle}</div>
          <p>{category}</p>
        </div>
      </button>
      <CustomPortal>
        <ViewModel onClose={handleIsModalOpen} isOpen={isOpen} />
      </CustomPortal>
    </>
  )
}

export default CoverCardWelcomeComponent
