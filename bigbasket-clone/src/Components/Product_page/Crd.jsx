import React from "react";
import { useDispatch } from 'react-redux';
import { ADD } from '../../Redux/CartCheckout/action/action';
const Crd = (props) => {
  const dispatch = useDispatch();


  const send = (Props)=>{
    // console.log(e);
    dispatch(ADD(Props));
  }
  return (
    <>
      <div className="saif">
        <div className="card_img" style={{ padding: "0 2%", margin: "4% 2%" }}>
          <h5 style={{ textAlign: "end" }}>Get of {props.OFF}% </h5>
          <div style={{ height: "250px" }}>
            <img src={props.image} alt="my_pic" style={{ margin: "auto" }} />
            <p className="card_brand">{props.Brand}</p>
            <p className="card_ productName">{props.productName}</p>
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
              onClick={()=> send(props)}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Crd;
