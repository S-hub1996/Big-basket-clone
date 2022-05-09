import React from "react";
import { useDispatch } from "react-redux";
import { ADD } from "../../Redux/CartCheckout/action/action";
import { Counter } from "./Counter";
const Crd = (props) => {
  const dispatch = useDispatch();


  const send = (Props)=>{
    console.log(props);
    dispatch(ADD(Props));
  };
  const addtocart = () => {};
  return (
    <>
      <div className="saif">
        <div className="card_img" style={{ padding: "0 2%", margin: "4% 2%" }}>
          <p
            style={{
              textAlign: "end",
              boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            }}
          >
            Get of {props.OFF}%{" "}
            <img
              style={{ height: "15px", width: "20px" }}
              src="https://thumbs.dreamstime.com/b/seal-stamp-icon-over-yellow-background-special-offer-concept-colorful-design-vector-illustration-96025025.jpg"
              alt=""
            />
          </p>
          <div style={{ height: "260px" }}>
            <img src={props.image} alt="my_pic" style={{ margin: "auto" }} />
            <p className="card_brand">{props.Brand}</p>
            <p className="card_ productName">{props.productName}</p>
          </div>
          <div className="card_info">
            <p className="card_QtyPiece"> {props.QtyPiece}</p>
            <p className="card_StrikePrice"> Rs {props.productprice}</p>
            <p className="card_delivery_Date">{props.Date}</p>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                marginBottom:"40px",
              }}
            >
              <Counter />
              <button
                style={{
                  // marginLeft: "65px",
                  backgroundColor: "rgb(219, 219, 27)",
                  height: "30px",
                  // margin:"center",
                }}
                onClick={() => send(props)}
              >
                Add Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Crd;
