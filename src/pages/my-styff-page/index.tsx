import Banner from '../home/components/banner'
import Nav from '../home/components/header'
import YourFavorites from './components/YourFavorites'
import './style.scss'

const MyStuff = () => {
  return (
    <div style={{ backgroundColor: 'white' }}>
      <Nav />
      <Banner />
      <YourFavorites />
    </div>
  )
}

export default MyStuff
