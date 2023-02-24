import React from "react";
import "../components/SignUp.css";
import { Link } from 'react-router-dom';

function Signup(){
    return(
        <div className="page">
            <div className="recruit-container">
                <h1>
                    Tryouts will be hosted in the Spring. More details can be found when signing up.
                </h1>
                
                    <a className="signupRedirect" href="https://schools.shrewsburyma.gov/high/athletics/index" target="_blank" rel="noopener noreferrer">
                        <button className="signupButton">
                            Sign Up  
                        </button> 
                    </a>    
                
            </div>   
        </div>
    );
}

export default Signup;