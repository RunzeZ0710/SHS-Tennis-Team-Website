import './App.css';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
