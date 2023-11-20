import React, { createContext, useState, ReactNode } from 'react'

// Main Movie data structure
interface Movie {
  adult: boolean
  backdrop_path: string
  belongs_to_collection: null | any
  budget: number
  genres: Genre[]
  homepage: string
  id: number
  imdb_id: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies: ProductionCompany[]
  production_countries: ProductionCountry[]
  release_date: string
  revenue: number
  runtime: number
  spoken_languages: SpokenLanguage[]
  status: string
  tagline: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

// Genre information
interface Genre {
  id: number
  name: string
}

// Production company information
interface ProductionCompany {
  id: number
  logo_path: string | null
  name: string
  origin_country: string
}

// Production country information
interface ProductionCountry {
  iso_3166_1: string
  name: string
}

// Spoken language information
interface SpokenLanguage {
  english_name: string
  iso_639_1: string
  name: string
}

interface MovieContextType {
  movie: Movie | null
  setMovie: (movie: Movie) => void
  favorites: Movie[] | null
  setFavorites: (favorites: Movie[]) => void
}

const initialMovieContextValue: MovieContextType = {
  movie: null,
  setMovie: () => {},
  favorites: [],
  setFavorites: () => {},
}

interface MovieProviderProps {
  children: ReactNode
}

export const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
  const [movie, setMovie] = useState<Movie | null>(null)
  const [favorites, setFavorites] = useState<Movie[] | null>([])

  const value = {
    movie,
    setMovie,
    favorites,
    setFavorites,
  }

  return <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
}
export const MovieContext = createContext<MovieContextType>(initialMovieContextValue)
