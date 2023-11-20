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
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
      <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
    </div>
  )
}

export default HomePage
