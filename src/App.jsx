import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import HomePage from './Pages/HomePage'
import Events from './Pages/Events'
import Competitions from './Pages/Competitions'
import Sponsors from './Pages/Sponsors'
import Litfest from './Pages/Litfest'
import ThemeState from './Contexts/ThemeState'

function App() {

  return (
    <ThemeState>
      <Router>
        <nav>
          <Link to="/"> Home </Link>
          <Link to="/events"> Events </Link>
          <Link to="/competitions"> Competitions </Link>
          <Link to="/sponsors"> Sponsors </Link>
          <Link to="/litfest"> Litfest </Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/events" element={<Events />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/sponsors" element={<Sponsors />} />
          <Route path="/litfest" element={<Litfest />} />
        </Routes>
        <footer>
          Footer
        </footer>
      </Router>
    </ThemeState>
  )
}

export default App
