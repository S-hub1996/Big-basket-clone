import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styles from "../basket.module.css";
import { SwapnilBasketItem } from './SwapnilBasketItem';
import { DLT } from '../../../../Redux/CartCheckout/action/action';

export const SwapnilBasketList = () => {
    const getdata = useSelector((state)=> state.carts.carts);
    const dispatch = useDispatch();
  const navigate = useNavigate();
    const [price, setPrice] = useState([]);
    const subtotal = ()=>{
        let price = 0;
        getdata.map((ele,k)=>{
            price = ele.productprice * ele.quantity +price
        });
        console.log(price, 'price')
        setPrice(price) ;
    };
    useEffect(()=>{
        subtotal(price);
      },[getdata])
  return (
    <div className={styles.container}>
      <div className={styles.basketItems}>
        {getdata.length !== 0 ? (
          getdata.map((item) =>
            item.quantity <= 0 ? (
              dispatch(DLT({ id: item.id }))
            ) : (
              <SwapnilBasketItem id={item.id} OFF={item.OFF}  QtyPiece={item.QtyPiece} QtyPieceForOneElement={item.QtyPieceForOneElement} productName={item.productName}  productprice={item.productprice} StrikePrice={item.StrikePrice} Brand={item.Brand} Date={item.Date} image={item.image} quantity={item.quantity} />
            )
          )
        ) : (
          <div className={styles.emptyBasket}>
            Your basket is empty. Start shopping now!
          </div>
        )}
      </div>

      {getdata.length !== 0 ? (
        <div className={styles.checkoutDiv}>
          <div className={styles.warning}>
            <p>**Actual Delivery Charges computed at checkout</p>
          </div>
          <div className={styles.charges}>
            <section>
              <div>
                <p>Subtotal</p>
                <span>Rs. {Math.round(price)} </span>
              </div>
              <div>
                <p>Delivery Charges</p>
                <span>**</span>
              </div>
            </section>
            <div
              className={styles.buttonDiv}
              onClick={() => navigate("/Basket")}
            >
              View Basket & Checkout
            </div>
          </div>
        </div>
      ) : undefined}
    </div>
  );
};
