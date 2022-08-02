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
                <ul className = "nav-menu">
                    <li className = "nav-item">
                        <Link to="/Matches" className="nav-links">
                            Matches
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Navbar;