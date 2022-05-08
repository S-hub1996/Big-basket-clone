import React from 'react'
import { GoLocation } from 'react-icons/go'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Deliver.module.css'

export const DelliveryAddress = () => {
  const state = useSelector((state) => state.CheckoutReducer)
  const dispatch = useDispatch()
  const handleChange = () => {
    dispatch({
      type: 'change',
      payload: true,
    })
    dispatch({
      type: 'deliveryoption',
      payload: false,
    })
    dispatch({
      type: "payment",
      payload:false
    })
  }
  return (
    <div className={styles.delivery}>
      <div>
        <GoLocation size={20} />
        <h5>Delivery Address</h5>
      </div>
      <div>
        <p className={styles.addressP}>
          {state.address.length > 0 && state.address[0].firstName}
          <span>{state.address.length > 0 && state.address[0].lastName}</span>
          <span>{state.address.length > 0 && state.address[0].street}</span>
          <span>{state.address.length > 0 && state.address[0].pincode}</span>
          <span>{state.address.length > 0 && state.address[0].city}</span>
        </p>
      </div>
      <div onClick={handleChange}>CHANGE</div>
    </div>
  )
}
