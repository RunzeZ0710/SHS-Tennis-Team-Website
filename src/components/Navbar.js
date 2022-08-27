import React, {useState, useEffect, useRef} from "react";
import "../components/Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    useEffect(() => {
        const checkIfClickedOutside = e => {
        if (isMenuOpen && ref.current && !ref.current.contains(e.target)) {
            setIsMenuOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    }, [isMenuOpen])

    return(
        <>
        <nav className = "navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    [LOGO]
                </Link>  
                <div className="nav-links-container">
                    <Link to="/matches" className="nav-links">
                            Matches
                    </Link>
                    <div className="dropdown" ref={ref}>
                        <button className="nav-links" onClick={() => setIsMenuOpen(oldState => !oldState)}>
                            Our Teams
                            <i class="fa-solid fa-angle-down"></i>
                        </button>
                        {isMenuOpen && (
                        <div className={"dropdown-content active"}>
                            <Link to="/boysTeam" onClick={() => setIsMenuOpen(oldState => !oldState)} className="subnav-links"> Boys Team</Link>
                            <Link to="/girlsTeam" onClick={() => setIsMenuOpen(oldState => !oldState)} className="subnav-links"> Girls Team</Link>
                        </div>
                        )}
                    </div>
                    <Link to="calendar" className="nav-links">
                        Calendar
                    </Link>
                </div>
            </div>
            </nav>
        </>
    );
}

export default Navbar;