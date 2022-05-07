import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from "./Order.module.css"
export const OrderSummery = () => {
    const state = useSelector((state) => state.WalletReducer.AddMoney);

  return (
      <div className={styles.maincont}>
          <p>Order Summary</p>
          <div>
              <div className={styles.insidecontainer}>
                  <div>
                      <p>Recharge Amount</p>
                      <p>Rs { state}</p>
                  </div>
                  <div>
                      <p>Total Amount Payable</p>
                      <p>Rs {state}</p>
                  </div>
              </div>
          </div>
    </div>
  )
}
