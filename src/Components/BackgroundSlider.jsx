import React from "react";
import '../Styles/BackgroundSlider.css'
import { slideData } from "../Assets/slideData";

export default function BackgroundSlider() {
    const [currentSlide, setCurrentSlide] = React.useState(0);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slideData.length - 1 ? 0 : currentSlide + 1);
    }

    let slideInterval;

    function intervalChange() {
        slideInterval = setInterval(nextSlide, 4000)
    }

    React.useEffect(() => {
        intervalChange()
        return () => clearInterval(slideInterval);
    }, [currentSlide])

    return (
        <div className="slider">
            {slideData.map(function (slide, index) {
                return (
                    <div className={index === currentSlide ? "slide isCurrent" : "slide"} key={index}>
                        <img src={require("../Assets/turbine-image-" + (index + 1) + ".jpg")}></img>
                        <div className="tti-title"><p>Leading source for expander innovations since 1981</p></div>
                    </div>
                )
            })}
        </div>
    );
};