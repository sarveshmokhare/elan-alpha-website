import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "./App.css";
import HomePage from "./Pages/HomePage";
import Events from "./Pages/Events";
import Competitions from "./Pages/Competitions";
import Sponsors from "./Pages/Sponsors";
import Litfest from "./Pages/Litfest";
import ThemeState from "./Contexts/ThemeState";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import ScrollToTop from "./helpers/ScrollToTop";
import Teams from "./Pages/Teams";
import Valenrow from "./Pages/Valenrow";
import AnimationState from "./Contexts/AnimationState";
import SocialCause from "./Pages/Social Cause"

function App() {
  return (
    <AnimationState>
      <Router>
        <ScrollToTop>
          <Header />
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="/events" element={<Events />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/litfest" element={<Litfest />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/valenrow" element={<Valenrow />} />
            <Route path="/socialCause" element={<SocialCause />} />
          </Routes>
          <Footer />
        </ScrollToTop>
      </Router>
    </AnimationState>
  );
}

export default App;
