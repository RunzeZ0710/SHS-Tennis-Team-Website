import React from "react";
import "../components/Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    return(
        <>
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    SHS Tennis
                </Link>  
            </div>
        </nav>
        </>
    );
}

export default Navbar;