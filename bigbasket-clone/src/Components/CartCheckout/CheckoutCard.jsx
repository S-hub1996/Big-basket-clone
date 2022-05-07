import React from 'react';
import { MdSavings } from 'react-icons/md';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "./checkoutcard.module.css";

export const CheckoutCards = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getdata = useSelector((state)=> state.cartreducer.carts);
    const subtotal = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.price+ price
        });
        return price;
    };
    const savings = ()=>{
        let save1 = 0;
        getdata.map((ele,k)=>{
            save1 = ele.sprice + save1;
        });
        return save1;
    }
    
  return (
    <div className={styles.container}>
      <div className={styles.buttondiv}>
        {/* {categories.length !== 0 ? <EmptyBasketModel /> : null} */}
        <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          CONTINUE SHOPPING
        </button>
      </div>
      <div className={styles.checkoutcardDiv}>
        {/* {categories.length !== 0 ? ( */}
          <div className={styles.checkoutcard}>
            <div className={styles.chargesDiv}>
              <div className={styles.chargesSection1}>
                <div>
                  <p>Subtotal</p>
                  <span>Rs.{subtotal()} </span>
                </div>
                <div>
                  <p>Delivery Charges</p>
                  <span>**</span>
                </div>
                <div className={styles.totalDiv}>
                  <p>TOTAL</p>
                  <span>Rs.{subtotal()} </span>
                </div>
              </div>
              <div className={styles.savingDiv}>
                <img
                  src="https://www.bbassets.com/static/v2531/uiv2/css/images/your_saved_icon.png"
                  alt=""
                />
                <span>You saved!</span>
                <span>RS. {savings}</span>
              </div>
            </div>
            <div className={styles.coupondiv}>
              <p>
                * For this order: Accepted food coupon is 
              </p>
            </div>
            <div className={styles.buttonSection}>
              <div>
                <button className={styles.checkoutButton}>
                  <p>CHECKOUT</p> <span></span>
                </button>
              </div>
            </div>
            <div className={styles.warning}>
              <p>** Actual delivery charges computed at checkout time</p>
            </div>
          </div>
        ) 
        {/* : null} */}
      </div>
    </div>
  )
}