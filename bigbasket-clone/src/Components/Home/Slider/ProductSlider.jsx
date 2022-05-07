import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ProductSlider.css"

export const ProductSlider = () => {
    const slides = [1,2,3,4,5,6,7,8,9,10,11,12,13]
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  const slidesOnRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  return (
    <div id="mslidercontainer">
      <IoIosArrowBack size={30} className="left" onClick={slidesOnRight}/>
      <div id="slider">
          {slides.map((slide,index)=>{
              return(
                  <div key={index} className="slidercard">
                        <h1>{index}</h1>
                  </div>
              )
          })}
      </div>
      <IoIosArrowForward size={30}  className="right" onClick={slideLeft}/>
    </div>
  );
};
