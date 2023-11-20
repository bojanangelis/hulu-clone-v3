import { useEffect, useState } from 'react'
import './styles.scss'
import requests from '../../../../utils/Requests'
import { truncate } from '../../../../utils/truncate'
import PlayArrowIcon from '../../../../assets/play-icon.svg'
import InfoOutlinedIcon from '../../../../assets/info.svg'

const Banner = () => {
  const [movie, setMovie] = useState<any>([])

  useEffect(() => {
    async function fetchData() {
      const request = await fetch(
        import.meta.env.VITE_REACT_APP_TMDB_URL + requests.fetchHuluOriginals
      )
      const data = await request.json()

      console.log(data)
      setMovie(data.results[Math.floor(Math.random() * data.results.length - 1)])
    }
    fetchData()
  }, [])

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
        <h1 className='banner__title'>{movie?.title || movie?.name || movie?.original_name}</h1>
        <h1 className='banner__description'>{truncate(movie?.overview, 150)}</h1>
        <h2 className='banner__description--more'>
          {movie?.popularity} views · {movie?.vote_average} · Originals
        </h2>
        <div className='banner__buttons'>
          <button className='banner__button--play'>
            <img src={PlayArrowIcon} alt='play button' />
            Play
          </button>
          <button className='banner__button--moreInfo'>
            <img src={InfoOutlinedIcon} alt='arrow right' />
            Details
          </button>
        </div>
      </div>
      <div className='banner--fadeBottom' />
    </div>
  )
}

export default Banner
