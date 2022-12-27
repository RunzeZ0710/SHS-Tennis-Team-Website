import React, {useState, useEffect, useRef, setState} from "react";
import "../components/Navbar.css";
import {Link} from "react-router-dom";

function Navbar(){
    const ref = useRef()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
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
                    SHS Tennis
                </Link>  
                <div className="menu-icon" onClick={handleClick}>
                    <i className={click ? "fas fa-times" : "fas fa-bars"} />
                </div>
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
            <div className={click ? "mobile-active" : "mobile-menu"}>
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                    Home
                </Link>
                <Link to="matches" className="nav-links" onClick={closeMobileMenu}>
                    Highlights
                </Link>
                <Link to="/boysTeam" className="nav-links" onClick={closeMobileMenu}>
                    Boys Team
                </Link>
                <Link to="/girlsTeam" className="nav-links" onClick={closeMobileMenu}>
                    Girls Team
                </Link>
                <Link to="calendar" className="nav-links" onClick={closeMobileMenu}>
                    Calendar
                </Link>

            </div>
            </nav>
        </>
    );
}

export default Navbar;