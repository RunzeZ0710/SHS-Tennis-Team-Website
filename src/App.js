import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Matches from './components/pages/Matches.js';
import Calendar from './components/pages/Calendar.js';
import ScrollToTop from './components/ScrollToTop.js';
import BoysTeam from "./components/pages/BoysTeam.js";


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <ScrollToTop/>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>;
          <Route exact path = "/matches" element={<Matches/>}/>;
          <Route exact path = "/calendar" element={<Calendar/>}/>;
          <Route exact path = "/boysTeam" element={<BoysTeam/>}/>;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
