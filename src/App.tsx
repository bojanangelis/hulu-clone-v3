import { BrowserRouter } from 'react-router-dom'
import RouteNavigation from './pages/routes'

function App() {
  return (
    <>
      <BrowserRouter>
        <RouteNavigation />
      </BrowserRouter>
    </>
  )
}

export default App
