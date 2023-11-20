import { useParams } from 'react-router-dom'
import Banner from '../home/components/banner'
import Nav from '../home/components/header'
import './style.scss'
import MovieDetailsToggle from './components/MovieDetailsToggle'

const MovieDetails = () => {
  const params = useParams()

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Nav />
      <Banner movieId={params.id} />
      <MovieDetailsToggle />
    </div>
  )
}

export default MovieDetails
