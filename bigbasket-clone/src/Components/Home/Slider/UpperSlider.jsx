import React, { useEffect } from "react";
import style from "./Slider.module.css";

export const Slider = ({ imgs }) => {
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
        if (prev === imgs.length - 1) {
          return prev = 0;
        }
        return prev + 1;
      });
    }, 3000);
  };

  const stopTimer = () => {
    clearInterval(tRef.current);
  };

  return (
    <div className={style.slider}>
      <img src={imgs[index]} alt="" width="100%" />
    </div>
  );
};
