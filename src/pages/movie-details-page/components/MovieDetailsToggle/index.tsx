import { useContext, useState } from 'react'
import './style.scss'
import Row from '../../../home/components/row'
import requests from '../../../../utils/Requests'
import { MovieContext } from '../../../../store/movie-context'
import StarsRating from 'react-star-rate'
import YourFavorites from '../../../my-styff-page/components/YourFavorites'

const MovieDetailsToggle = () => {
  const [movieToggle, setMovieToggle] = useState('like')
  const [value, setValue] = useState(0)

  const { movie } = useContext(MovieContext)

  return (
    <main className='main__movie--details'>
      <div className='movie__details--toggle'>
        <a
          onClick={() => setMovieToggle('like')}
          className={`${movieToggle === 'like' && 'active'}`}
        >
          You may also like
        </a>

        <a
          onClick={() => setMovieToggle('details')}
          className={`${movieToggle === 'details' && 'active'}`}
        >
          Details
        </a>
        <a
          onClick={() => setMovieToggle('favorites')}
          className={`${movieToggle === 'favorites' && 'active'}`}
        >
          Your Favorites
        </a>
      </div>
      {movieToggle === 'like' && (
        <>
          <Row title='POPULAR' fetchUrl={requests.fetchTrending} />
          <Row title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
          <Row title='COMEDIES MOVIES' fetchUrl={requests.fetchComedyMovies} />
          <Row title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
          <Row title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
        </>
      )}
      {movieToggle === 'details' && (
        <div className='movie__details--div'>
          <h6>About this Movie</h6>
          <h3 className='movie__details--title'>{movie?.original_title}</h3>
          <p className='movie__details--details'>{movie?.overview}</p>
          <p className='movie__details--details'>Tagline: {movie?.tagline}</p>
          <p className='movie__details--details'>Status: {movie?.status}</p>
          <br />
          <div className='movie__details--rate'>
            <StarsRating
              value={value}
              onChange={(value: any) => {
                setValue(value)
              }}
            />
          </div>
        </div>
      )}
      {movieToggle === 'favorites' && <YourFavorites />}
    </main>
  )
}

export default MovieDetailsToggle
