import React from "react";
import "../components/CoreVals.css";
import effort from "../components/graphics/effort.png"
import attitude from "../components/graphics/attitude.png"
import discipline from "../components/graphics/discipline.png"


function Body() {
    return(
        <>
        <div className="body">
            <h1>Our Values</h1>
            <div className="core-values">
                <div className="core-value">
                    <img src={effort} alt="effort" height="250px" width="250px" />
                    <h2>Effort</h2>
                    <p>Our athletes are expected to put their all into everything they do, both on and off court</p>
                </div>
                <div className="core-value">
                    <img src={attitude} alt="attitude" height="250px" width="250px" />
                    <h2>Attitude</h2>
                    <p>In order to succeed in tennis, athletes need to have a right attitude towards both the game an the people around them.</p>
                </div>
                <div className="core-value">
                    <img src={discipline} alt="discipline" height="250px" width="250px" />
                    <h2>Discipline</h2>
                    <p>Athletes must follow a consistent training schedule to improve their game.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Body;