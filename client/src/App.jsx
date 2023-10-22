import './App.css'
import { useRoutes } from 'react-router-dom'
import Introduction from './pages/Introduction'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Lesson1 from './pages/Lesson1'

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
    }, 
    {
      path: '/lesson1',
      element: <Lesson1 />
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
