import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import './App.css'
import HomePage from './Pages/HomePage'
import Events from './Pages/Events'
import Competitions from './Pages/Competitions'
import Sponsors from './Pages/Sponsors'
import Litfest from './Pages/Litfest'
import ThemeState from './Contexts/ThemeState'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ScrollToTop from './helpers/ScrollToTop'
import Teams from './Pages/Teams'

function App() {

  return (
    <ThemeState>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/litfest" element={<Litfest />} />
            <Route path="/team" element={<Teams />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </ThemeState>
  )
}

export default App
