import './App.css';
import Navbar from './components/Navbar.js';
import Body from './components/Body'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';
import Matches from './components/pages/Matches.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>;
          <Route exact path = "/matches" element={<Matches/>}/>;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
