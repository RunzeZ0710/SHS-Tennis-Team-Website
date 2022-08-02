import './App.css';
import Navbar from './components/Navbar.js';
import Matches from './components/Matches';
import Body from './components/Body'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Matches/>
        <Body/>
        <Routes>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
