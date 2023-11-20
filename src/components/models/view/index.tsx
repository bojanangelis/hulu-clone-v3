import './style.scss'
import XIcon from '../../../assets/x-icon.svg'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Banner from '../../../pages/home/components/banner'
import Row from '../../../pages/home/components/row'
import requests from '../../../utils/Requests'

interface ViewModelProps {
  onClose: () => void
  isOpen: boolean
}

const ViewModel = ({ onClose, isOpen }: ViewModelProps) => {
  const [activeModel, setActiveModel] = useState(false)
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

  if (!isOpen && !activeModel) return null
  return (
    <div
      className={`modal-overlay${activeModel ? ' active' : ''}`}
      onTransitionEnd={handleTransitionEnd}
      onClick={handleOverlayClick}
    >
      <div className='modal modal_view' onClick={(e) => e.stopPropagation()}>
        <Banner modal />
        <button className='modal-close' onClick={onClose}>
          <img src={XIcon} alt='' />
        </button>
        <Row modal title='FOX' fetchUrl={requests.fetchTopRated} />
        <Row modal title='POPULAR' fetchUrl={requests.fetchTrending} />
        <Row modal title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
        <Row modal title='COMEDIES MOVIES' fetchUrl={requests.fetchComedyMovies} />
        <Row modal title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
      </div>
    </div>
  )
}

export default ViewModel
