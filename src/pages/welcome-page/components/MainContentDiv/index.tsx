import '../MainWelcomeComponent/style.scss'

const MainContentDiv = () => {
  return (
    <div className='live-tv__content'>
      <h4>HULU + LIVE TV, NOW WITH DISNEY+ AND ESPN+, ALL WITH ADS</h4>
      <span className='title_live-tv'>Live TV Makes It Better</span>
      <p className='paragraph'>
        Get 90+ top channels on Hulu (With Ads) + Live TV with your favorite live sports, news, and
        events - plus the entire Hulu streaming library. With Unlimited DVR, store Live TV
        recordings for up to nine months and fast-forward through your DVR content. Access endless
        entertainment with Disney+ and live sports with ESPN+.
      </p>
      <div className='btn'>
        <button className='button-primary'>Get Hulu + TV</button>
      </div>
      <p className='paragraph_sub'>
        Hulu (With Ads) + Live TV plan only. $76.99/mo (or then-current, regular monthly price).
        Regional restrictions, blackouts and Live TV terms apply. Access content from each service
        separately. Location data required to watch certain content. Unlimited DVR recording is not
        available for on-demand shows. See details.
      </p>
    </div>
  )
}

export default MainContentDiv
