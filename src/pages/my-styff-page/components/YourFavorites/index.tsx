import { useContext } from 'react'
import requests from '../../../../utils/Requests'
import Row from '../../../home/components/row'
import './style.scss'
import { MovieContext } from '../../../../store/movie-context'
const YourFavorites = () => {
  const { favorites } = useContext(MovieContext)
  return (
    <div>
      <Row title='YOUR FAVORITES' favorites={favorites} />
      <Row title='MAYBE YOU WILL LIKE' fetchUrl={requests.fetchHuluOriginals} />
    </div>
  )
}

export default YourFavorites
