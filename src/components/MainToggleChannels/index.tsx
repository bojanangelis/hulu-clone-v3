import { useState } from 'react'
import { sportsLogos } from '../../assets/live-sports-logos'
import './style.scss'
import useDynamicBackgroundToggle from '../../hooks/useDynamicBackgroundToggle'

const MainToggleChannels = () => {
  const [toggleInfo, setToggleInfo] = useState<'sports' | 'events' | 'news'>('sports')
  const backgroundStyle = useDynamicBackgroundToggle(toggleInfo)
  console.log(backgroundStyle)
  return (
    <section className='toggle-info' style={backgroundStyle}>
      <div className='toggle-shadow' />
      <div className='toggle-component'>Toggle</div>
      <div className='toggle-info-content'>
        <div className='text-xl'>Live Sports</div>
        <div className='sub-text'>
          Catch your games at home or on the go. Stream live games from major college and pro
          leagues including the NCAA®, NBA, NHL, NFL, and more.
        </div>

        <div className='toggle-info-logos'>
          {sportsLogos.map((logo, i) => (
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
    </section>
  )
}

export default MainToggleChannels
