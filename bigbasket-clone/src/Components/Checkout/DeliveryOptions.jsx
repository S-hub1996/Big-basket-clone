import React from 'react'
import { FaRegCalendarAlt } from 'react-icons/fa'
import { BiTimeFive } from 'react-icons/bi'
import styles from './options.module.css'
import { useDispatch, useSelector } from 'react-redux'

export const DeliveryOptions = () => {
    const state = useSelector((state) => state.CheckoutReducer);
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch({
            type: "payment",
            payload:true
        })
        dispatch({
            type: "deliveryoption",
            payload:false
        })
}


  return (
    <div className={styles.options}>
      <div className={styles.FirstDiv}>
        <FaRegCalendarAlt size={20} />
        <p>Delivery Options</p>
      </div>
      <div className={styles.secondDiv}>
        <div>
          <h5>Delivery Option:1</h5>
          <p>total Delivery Charge : Free</p>
          <p>Shipments : 1</p>
        </div>
      </div>
      <div className={styles.thirdDiv}>
        <div>
          <div>
            <p>Shipment: 1</p>
            <p>Express Delivery</p>
          </div>
          <p>
            Delivery Charges : <span>Free</span>
          </p>
          <div className={styles.imgDiv}>
            <img src="https://www.bigbasket.com/media/uploads/p/l/264003_12-johnsons-baby-buds.jpg" />
          </div>
          <div className={styles.viewmore}>
            <p>View 1 items</p>
          </div>
          <div className={styles.slot}>
            {' '}
            <p>Delivery Slot</p>{' '}
          </div>
          <div className={styles.slotTime}>
            <BiTimeFive />
            <p>08 May,Sun - 11:30 - 1:30 PM </p>
          </div>
        </div>
          </div>
          <div className={styles.fourthDiv}>
              <button onClick={handleChange}>Continue to Payments</button>
          </div>
    </div>
  )
}
