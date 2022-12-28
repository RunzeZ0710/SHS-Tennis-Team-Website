import {useState, useEffect} from "react";
import {AiOutlineArrowLeft, AiOutlineArrowRight} from 'react-icons/ai';
import {SliderData} from "./SliderData";
import "./ImageSlider.css";

const ImageSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = SliderData.length;

    const autoScroll = true;
    let slideInterval;
    let intervalTime = 10000;


    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
    };
    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slideLength - 1: currentSlide - 1);
    };

    function auto(){
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    useEffect(() => {
        setCurrentSlide(0);
    }, []);

    useEffect(() => {
        if(autoScroll){
            auto();
        }
        return () => clearInterval(slideInterval)
    }, [currentSlide]);

    return(
        <div className="slider">
            <AiOutlineArrowLeft className= "arrow prev" onClick={prevSlide}/>
            <AiOutlineArrowRight className = "arrow next" onClick={nextSlide}/>

            {SliderData.map((slide, index) => {
                return(
                    <div className={index === currentSlide ? 
                    "slide current" : "slide"} key={index}>
                        {index === currentSlide && (
                            <>
                            <img src={slide.image} alt="slide" />
                            <div className="content">
                                <h2>{slide.heading}</h2>
            
                                <hr />
                            </div>
                            
                            </>

                        )}
                    </div>
                )
            })}
            <div className="mobile-front-image">
                <h2>SHS Tennis</h2>
                <p>"Don't do drugs, it's too expensive"</p> 
                <button>
                    Learn More
                </button>
            </div>
        </div>
    )
}

export default ImageSlider;