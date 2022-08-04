import React, {useState} from "react";
import "../components/Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SHS Tennis
                </Link>  
                <Link to="/matches" className="nav-links">
                        Matches
                </Link>
                <div className="dropdown">
                    <button className="nav-links" onClick={handleClick}>
                        Our Teams
                    </button>
                    <div className="dropdown-content">
                        <Link to="/boysTeam" className="subnav-links"> Boys Team</Link>
                        <Link to="/girlsTeam" className="subnav-links"> Girls Team</Link>
                    </div>
                </div>
                <Link to="calendar" className="nav-links">
                    Calendar
                </Link>
        
            </div>
        </>
    );
}

export default Navbar;