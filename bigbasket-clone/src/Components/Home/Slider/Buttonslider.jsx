import React, { useEffect } from "react";
import { ArrowDown } from "../styledcomponents/Elements";
import "./slider.css";

export const ButtonSlider = ({ imges }) => {
  const [index, setIndex] = React.useState(0);
  const tRef = React.useRef();

  useEffect(() => {
    start();

    return () => {
      stopTimer();
    };
  }, []);

  const start = () => {
    tRef.current = setInterval(() => {
      setIndex(function (prev) {
        if (prev === imges.length - 1) {
          return (prev = 0);
        }
        return prev + 1;
      });
    }, 3000);
  };

  const stopTimer = () => {
    clearInterval(tRef.current);
  };

  const next = () => {
    if (index === imges.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };
  const prev = () => {
    if (index === 0) {
      setIndex(imges.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className="slideshow">
      <img src={imges[index]} className="mainImg" />
      <div className="actions">
        <button style={{transform:" rotate(90deg)",marginLeft:"-18px"}}>
          <ArrowDown onClick={prev} />
        </button>
        <button style={{transform:" rotate(-90deg)",marginRight:"-18px"}}>
          <ArrowDown onClick={next} />
        </button>
      </div>
    </div>
  );
};
