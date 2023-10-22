import './App.css'
import { useRoutes } from 'react-router-dom'
import Introduction from './pages/Introduction'
import Home from './pages/Home'
import Lesson from './pages/Lesson'
import Lesson1 from './pages/Lesson1'
import Lesson2 from './pages/Lesson2'
import Lesson3 from './pages/Lesson3'

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
      path: '/lesson',
      element: <Lesson />
    }, 
    {
      path: '/lesson1',
      element: <Lesson1 />
    },
    {
      path: '/lesson2',
      element: <Lesson2 />
    }, 
    {
      path: '/lesson3',
      element: <Lesson3 />
    },
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
