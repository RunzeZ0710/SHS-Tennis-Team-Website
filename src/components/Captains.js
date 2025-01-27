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
                        
                            <h2>
                            Khadijah Ahmed
                            </h2>
                        </div>
                        <div className="captain">
                        
                            <h2>
                                Aanya Gupta
                            </h2>
                        </div>
                        <div className="captain">
                         
                            <h2>
                                Krish Gupta
                            </h2>
                        </div>
                        <div className="captain">
                          
                            <h2>
                                Mihir Patil
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
                     
                        <div className="coach-content">
                            <h2>Coach R</h2>
                            <p>
                                Many years of professional coaching experience. Girls coach.
                            </p>
                            <hr/>
                        </div>
                    </div> 
                    <div className="coach-josh">
                        <div className="coach-content">
                            <h2>Coach Josh</h2>
                            <p>
                                Many years of professional coaching experience. Boys coach.
                            </p>
                            <hr/>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Captains;