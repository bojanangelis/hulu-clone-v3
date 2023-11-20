import requests from '../../utils/Requests'
import Banner from './components/banner'
import Header from './components/header'
import Row from './components/row'
import './style.scss'

const HomePage = () => {
  return (
    <div style={{ backgroundColor: 'white' }} className=''>
      <Header />
      <Banner />
      <Row title='NEARLY ADDED MOVIES' fetchUrl={requests.fetchHuluOriginals} isLargeRow />
      <Row title='FOX' fetchUrl={requests.fetchTopRated} />
      <Row title='POPULAR' fetchUrl={requests.fetchTrending} />
      <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
      <Row title='COMEDIES MOVIES' fetchUrl={requests.fetchComedyMovies} />
      <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
      <Row title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} />
    </div>
  )
}

export default HomePage
