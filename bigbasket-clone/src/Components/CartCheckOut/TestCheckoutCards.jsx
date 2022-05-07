import React from 'react'
import styles from "./checkoutcard.module.css";

export const TestCheckoutCards = () => {
  return (
    <div className={styles.container}>
      <div className={styles.buttondiv}>
        {/* {categories.length !== 0 ? <EmptyBasketModel /> : null} */}
        {/* <button
          onClick={() => {
            navigate("/");
            window.scrollTo(0, 0);
          }}
        >
          CONTINUE SHOPPING
        </button> */}
      </div>
      <div className={styles.checkoutcardDiv}>
        {/* {categories.length !== 0 ? ( */}
          <div className={styles.checkoutcard}>
            <div className={styles.chargesDiv}>
              <div className={styles.chargesSection1}>
                <div>
                  <p>Subtotal</p>
                  <span>Rs. </span>
                </div>
                <div>
                  <p>Delivery Charges</p>
                  <span>**</span>
                </div>
                <div className={styles.totalDiv}>
                  <p>TOTAL</p>
                  <span>Rs. </span>
                </div>
              </div>
              <div className={styles.savingDiv}>
                <img
                  src="https://www.bbassets.com/static/v2531/uiv2/css/images/your_saved_icon.png"
                  alt=""
                />
                <span>You saved!</span>
                <span></span>
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
