import React from "react";
import "../components/Captains.css"

function Coach(){
    return(
        <div className="captains">
            <div className="captain-container">
                <h1 className="title">
                    Captains you can trust.
                </h1>
                <div className="girl-captain right">
                    Aanya Gupta
                </div> 
                <div className="girl-captain left">
                    Khadijah Ahmed
                </div>
            </div>
        </div>
    );
}

export default Coach;