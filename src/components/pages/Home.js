import React from "react";
import '../../App.css';
import Body from "../CoreVals.js";
import ImageSlider from "../ImageSlider"
import "../pages/Home.css";
import Captains from "../Captains";
import Signup from "../SignUp.js";


function Home(){
    return(
        <>
        <ImageSlider/>
        <Body/>
        <Captains/>
        <Signup/>
        </>
    );
}

export default Home;
