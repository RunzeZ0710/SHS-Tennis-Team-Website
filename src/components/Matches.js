import React from "react";
import "../components/Matches.css";

function Matches(){
    return(
        <>
        <div className="matches">
            <div className="matchesSideBar">
                <ol className="matchList">
                    <li>Match 1</li>
                    <li>Match 2</li>
                    <li>Match 3</li>
                </ol>
            </div>
        </div>
        </>
    )
}

export default Matches;