import React from "react";
import "../components/Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SHS Tennis
                </Link>  
                <Link to="/matches" className="nav-links">
                            Matches
                </Link>
                <Link to="/ourteam" className="nav-links">
                    Our Team
                </Link>
                <Link to="calender" className="nav-links">
                    Caleneder
                </Link>
        
            </div>
        </>
    );
}

export default Navbar;