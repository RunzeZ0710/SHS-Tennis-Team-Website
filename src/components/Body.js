import React from "react";
import "../components/Body.css";
import perserverance from "../components/graphics/perserverance.png"
import responsibility from "../components/graphics/responsibility.png"
import teamwork from "../components/graphics/teamwork.png"


function Body() {
    return(
        <>
        <div className="body">
            <div className="core-values">
                <div className="core-value">
                    <img src={perserverance} alt="perserverance" height="250px" width="250px" />
                    <h2>Perserverance</h2>
                    <p>Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum. Eiusmod duis eiusmod eu excepteur exercitation officia ad velit tempor in eu.</p>
                </div>
                <div className="core-value">
                    <img src={responsibility} alt="responsibility" height="250px" width="250px" />
                    <h2>Reponsibility</h2>
                    <p>Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum. Eiusmod duis eiusmod eu excepteur exercitation officia ad velit tempor in eu.</p>
                </div>
                <div className="core-value">
                    <img src={teamwork} alt="teamwork" height="250px" width="250px" />
                    <h2>Teamwork</h2>
                    <p>Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum. Eiusmod duis eiusmod eu excepteur exercitation officia ad velit tempor in eu.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Body;