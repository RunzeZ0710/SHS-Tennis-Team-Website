import React from "react";
import "../components/Captains.css"
import frame from "../components/photos/frame.png";

function Captains(){
    return(
        <div className="captains-coaches">
            <div className="captains">
                <div className="captain-container">
                    <h1>
                        Captains you can trust.
                    </h1>
                    <div className="team-captains">
                        <div className="captain">
                            <img src={frame} alt="example" height="250px" width="250px"/>
                            <h2>
                                Aanya Gupta
                            </h2>
                        </div>
                        <div className="captain">
                            <img src={frame} alt="example" height="250px" width="250px"/>
                            <h2>
                                Khadijah Ahmed
                            </h2>
                        </div>
                        <div className="captain">
                            <img src={frame} alt="example" height="250px" width="250px"/>
                            <h2>
                                Boy Captain 1
                            </h2>
                        </div>
                        <div className="captain">
                            <img src={frame} alt="example" height="250px" width="250px"/>
                            <h2>
                                Boy Captain 2
                            </h2> 
                        </div>             
                    </div> 
                </div>
            </div>
            <div className="coaches">
                <div className="coaches-container">
                    <h1>
                        Dedicated Coaches.
                    </h1>
                    <div className="coach-R">
                        <img src={frame} alt="coach" height="350px" width="350px"/>
                        <div className="coach-content">
                            <h2>Coach R</h2>
                            <p>
                                Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum.
                            </p>
                            <hr/>
                        </div>
                    </div> 
                    <div className="coach-josh">
                        <div className="coach-content">
                            <h2>Coach Josh</h2>
                            <p>
                                Qui pariatur nostrud est anim esse adipisicing enim nisi fugiat. Sint aute sint deserunt sint anim duis. Magna ad Lorem sit quis sint laborum. 
                            </p>
                            <hr/>
                        </div>
                        <img src={frame} alt="coach-josh" height="350px" width="350px"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Captains;