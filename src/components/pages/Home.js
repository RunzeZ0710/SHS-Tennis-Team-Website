import React from "react";
import '../../App.css';
import Body from "../CoreVals.js";
import ImageSlider from "../ImageSlider"
import "../pages/Home.css";
import Coach from "../Captains";


function Home(){
    return(
        <>
        <ImageSlider/>
        <Body/>
        <Coach/>
        </>
    );
}

export default Home;
