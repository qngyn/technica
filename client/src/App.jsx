import './App.css'
import { useRoutes } from 'react-router-dom'
import Introduction from './pages/Introduction'
import Home from './pages/Home'
import Lesson from './pages/Lesson'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/introduction',
      element: <Introduction />
    },
    {
      path: '/mainpage',
      element: <Lesson />
    }
  ])

  return (
    <div className="App">
      <main>
        {element}
      </main>
    </div>
  )
}

export default App
