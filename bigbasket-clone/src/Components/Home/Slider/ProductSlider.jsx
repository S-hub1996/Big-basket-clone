import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "./ProductSlider.css";
import snacksBrandedFood from "../../Product_page/snacksBrandedFood_store";
import Crd from "../../Product_page/Crd";
import { useDispatch } from "react-redux";
import { ADD } from '../../../Redux/CartCheckout/action/action'

export const ProductSlider = () => {
  const dispatch = useDispatch();
  const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 400;
  };

  const slidesOnRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 400;
  };

  const send = (Props) => {
    // console.log(e);
    dispatch(ADD(Props));
  };

  return (
    <div id="mslidercontainer">
      <IoIosArrowBack size={30} className="left" onClick={slidesOnRight} />
      <div id="slider">
        {snacksBrandedFood.map((props, index) => {
          return (
            <div key={index} className="slidercard">
              <h5 style={{ textAlign: "end" }}>Get of {props.OFF}% </h5>
              <div style={{ height: "auto" }}>
                <img
                  src={props.image}
                  alt="my_pic"
                  style={{ margin: "auto" }}
                />
                <p className="card_brand">{props.Brand}</p>
                <p className="card_ productName" style={{overflow: "hidden"}}>{props.productName}</p>
              </div>
              <div className="card_info">
                <p className="card_QtyPiece"> {props.QtyPiece}</p>
                <p className="card_StrikePrice"> Rs {props.productprice}</p>
                <p className="card_delivery_Date">{props.Date}</p>
                <button
                  style={{
                    marginLeft: "65px",
                    backgroundColor: "rgb(219, 219, 27)",
                    borderRadius: "11%",
                  }}
                  onClick={() => send(props)}
                >
                  Add Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <IoIosArrowForward size={30} className="right" onClick={slideLeft} />
    </div>
  );
};
