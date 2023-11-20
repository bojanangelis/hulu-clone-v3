import { useContext, useEffect } from 'react'
import './styles.scss'
import requests from '../../../../utils/Requests'
import { truncate } from '../../../../utils/truncate'
import PlayArrowIcon from '../../../../assets/play-icon.svg'
import InfoOutlinedIcon from '../../../../assets/info.svg'
import { MovieContext } from '../../../../store/movie-context'

interface BannerProps {
  movieId?: string
}
const Banner = ({ movieId }: BannerProps) => {
  const { movie, setMovie, setFavorites, favorites } = useContext(MovieContext)

  const API_KEY = import.meta.env.VITE_REACT_TMDB_API_KEY
  const url_tmdb = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`
  useEffect(() => {
    async function fetchData() {
      if (movieId) {
        const request = await fetch(url_tmdb)
        const data = await request.json()
        setMovie(data)
        return request
      } else {
        const request = await fetch(
          import.meta.env.VITE_REACT_APP_TMDB_URL + requests.fetchHuluOriginals
        )
        const data = await request.json()

        setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
      }
    }
    fetchData()
  }, [movieId])
  console.log('console.log-->', favorites)
  const handleFavorites = () => {
    const isFavorite = favorites?.some((favorite) => favorite.id === movie?.id)
    console.log(isFavorite)
    //@ts-ignore
    if (!isFavorite) setFavorites((favorites) => [...favorites, movie])
  }

  return (
    <div
      className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className='cover-grad' />
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title ||
            // @ts-ignore
            movie?.name ||
            // @ts-ignore

            movie?.original_name}
        </h1>
        <h1 className='banner__description'>
          {truncate(
            // @ts-ignore
            movie?.overview,
            150
          )}
        </h1>
        <h2 className='banner__description--more'>
          {movie?.popularity} views · {movie?.vote_average} · Originals
        </h2>
        <div className='banner__buttons'>
          <button className='banner__button--play'>
            <img src={PlayArrowIcon} alt='play button' />
            Play
          </button>
          <button onClick={handleFavorites} className='banner__button--moreInfo'>
            add to your favorites
            <img src={InfoOutlinedIcon} alt='arrow right' />
          </button>
        </div>
      </div>
      <div className='banner--fadeBottom' />
    </div>
  )
}

export default Banner
