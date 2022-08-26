import React from "react";
import '../../App.css';
import Body from "../CoreVals.js";
import ImageSlider from "../ImageSlider"
import "../pages/Home.css";
import Captains from "../Captains";


function Home(){
    return(
        <>
        <ImageSlider/>
        <Body/>
        <Captains/>
        </>
    );
}

export default Home;
