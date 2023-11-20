import { BrowserRouter } from 'react-router-dom'
import RouteNavigation from './pages/routes'
import { MovieProvider } from './store/movie-context'

function App() {
  return (
    <>
      <MovieProvider>
        <BrowserRouter>
          <RouteNavigation />
        </BrowserRouter>
      </MovieProvider>
    </>
  )
}

export default App
