import useDynamicBackgroundToggle from '../../../../hooks/useDynamicBackgroundToggle'
import { useState } from 'react'
import './style.scss'

const MainToggleChannels = () => {
  const [toggleInfo, setToggleInfo] = useState<'sports' | 'events' | 'news'>('sports')
  const { backgroundStyle, categoryInfo } = useDynamicBackgroundToggle(toggleInfo)
  const handleToggle = (toggle: 'sports' | 'events' | 'news') => setToggleInfo(toggle)

  return (
    <section className='toggle-info' style={backgroundStyle}>
      <div className='toggle-shadow' />
      <div className='toggle-component'>
        <button
          className={toggleInfo === 'sports' ? 'active-btn' : ''}
          onClick={() => handleToggle('sports')}
        >
          Live Sports
        </button>
        <button
          className={toggleInfo === 'events' ? 'active-btn' : ''}
          onClick={() => handleToggle('events')}
        >
          Breaking News
        </button>
        <button
          className={toggleInfo === 'news' ? 'active-btn' : ''}
          onClick={() => handleToggle('news')}
        >
          Biggest Events
        </button>

        <div className='toggle-info-content'>
          <div className='text-xl'>{categoryInfo.title}</div>
          <div className='sub-text'>{categoryInfo.description}</div>

          <div className='toggle-info-logos'>
            {categoryInfo.images.map((logo, i) => (
              <div key={i}>
                <img loading='lazy' src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>

          <div className='legal-text'>
            Live TV plan required. Regional restrictions, blackouts and additional terms apply.{' '}
            <span>See details</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MainToggleChannels
