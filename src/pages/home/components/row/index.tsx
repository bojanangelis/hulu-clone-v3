import { useEffect } from 'react'
import { useState } from 'react'
import './style.scss'
import { useNavigate } from 'react-router-dom'

interface RowProps {
  title: string
  fetchUrl?: string
  favorites?: any
  isLargeRow?: boolean
  modal?: boolean
}
function Row({ title, fetchUrl, isLargeRow = false, favorites, modal }: RowProps) {
  const [movies, setMovies] = useState<any>([])
  const navigate = useNavigate()
  useEffect(() => {
    if (fetchUrl) {
      async function fetchData() {
        const request = await fetch(import.meta.env.VITE_REACT_APP_TMDB_URL + fetchUrl)
        const data = await request.json()
        setMovies(data.results)
        return request
      }
      fetchData()
    }
    if (favorites) {
      setMovies(favorites)
    }
  }, [fetchUrl, favorites])

  const base_url = 'https://image.tmdb.org/t/p/original/'

  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies.map(
          (movie: any) =>
            ((isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (
              <img
                onClick={() => (modal ? null : navigate(`/movie/${movie.id}`))}
                key={movie.id}
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  )
}

export default Row
