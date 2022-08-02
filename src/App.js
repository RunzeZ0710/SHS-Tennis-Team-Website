import './App.css';
import Navbar from './components/Navbar.js';
import Matches from './components/Matches';
import Body from './components/Body'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home.js';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path = "/" element={<Home/>}/>;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
