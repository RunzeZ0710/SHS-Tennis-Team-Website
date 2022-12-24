import React from "react";
import "../components/CoreVals.css";
import effort from "../components/graphics/effort.png"
import attitude from "../components/graphics/attitude.png"
import discipline from "../components/graphics/discipline.png"


function Body() {
    return(
        <>
        <div className="body">
            <div className="core-values">
                <div className="core-value">
                    <img src={effort} alt="effort" height="250px" width="250px" />
                    <h2>Effort</h2>
                    <p>Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum.</p>
                </div>
                <div className="core-value">
                    <img src={attitude} alt="attitude" height="250px" width="250px" />
                    <h2>Attitude</h2>
                    <p>Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum.</p>
                </div>
                <div className="core-value">
                    <img src={discipline} alt="discipline" height="250px" width="250px" />
                    <h2>discipline</h2>
                    <p>Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Body;