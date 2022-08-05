import React from "react";
import "../components/Body.css";
import girlsTeam from "./photos/girlsTeam.png"


function Body() {
    return(
        <>
        <div className="body">
            <img className="girls-team-photo" src={girlsTeam} alt="Girls Team" />
            <div className="header-wrapper">
                <h1 className="header">SHS Tennis</h1>
            </div>
        </div>
        </>
    )
}

export default Body;