import { huluPosters } from '../../assets/huluPosters'
import CoverCardWelcomeComponent from '../CoverCardWelcomeComponent'
import MainContentDiv from '../MainContentDiv'
import MainToggleChannels from '../MainToggleChannels'
import './style.scss'

const MainWelcomeComponent = () => {
  return (
    <main className='main-content'>
      <div className='main-content_titles'>
        <h4>INCLUDED IN ALL PLANS</h4>
        <h2>All The TV You Love</h2>
        <p>
          Watch full seasons of exclusive streaming series, current-season episodes, hit movies,
          Hulu Originals, kids shows, and more.
        </p>
      </div>
      <div className='covers'>
        {huluPosters.map((poster, i) => (
          <CoverCardWelcomeComponent
            key={i}
            img={poster.img}
            subTitle={poster.subTitle}
            category={poster.category}
          />
        ))}
      </div>
      <MainContentDiv />
      <MainToggleChannels />
    </main>
  )
}

export default MainWelcomeComponent
