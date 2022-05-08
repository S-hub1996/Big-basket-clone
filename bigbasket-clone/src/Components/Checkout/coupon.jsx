import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './coupon.module.css'

export const Coupon = () => {
  const state = useSelector((state) => state)
  const dispatch = useDispatch()

  let price = state.carts.carts.reduce((acc, { productprice }) => {
    return acc + productprice
  }, 0)
  price = Math.round(price)
  const [code, setCode] = useState('')
  const [discount, setDiscount] = useState(price)
  let saving = state.carts.carts.reduce((acc, { OFF }) => {
    return acc + OFF
  }, 0)
  const [temp, setTemp] = useState(price)

  const handleBalance = (e) => {
    if (e.target.checked) {
      dispatch({
        type: 'useBalance',
        payload: discount,
      })
      if (state.WalletReducer.Balance >= discount) {
        setDiscount(0)
      } else {
        setDiscount(discount - state.WalletReducer.Balance)
      }
    } else {
      dispatch({
        type: 'PaymentConfirm',
        payload: temp,
      })
      setDiscount(temp)
    }
  }

  const handleChange = (e) => {
    setCode(e.target.value)
  }

  const handleSubmit = (e) => {
    if (code == 'MASAI30' || code == 'masai30') {
      let final = (price / 100) * 70
      setDiscount(final)
    } else {
      alert('please enter a valid coupon code')
    }
  }

  return (
    <div>
      <div className={styles.Voucher}>
        <p>Apply Voucher</p>
        <div>
          <div className={styles.inputDiv}>
            {' '}
            <input
              onChange={handleChange}
              placeholder="Enter Voucher Code"
            />{' '}
            <button onClick={handleSubmit}>Apply</button>{' '}
          </div>
          <div className={styles.info}>
            <div className={styles.circle}></div>
            <div className={styles.note}>
              <p>use MASAI30 for 30% Discount </p>
            </div>
            <div className={styles.circle}></div>
          </div>
        </div>
      </div>

      <div className={styles.orderSummary}>
        <p>Order Summary</p>
        <div className={styles.summaryDiv}>
          <div>
            <div className={styles.basketValue}>
              <p>Basket Value</p>
              <p>Rs {discount}</p>
            </div>
            <div className={styles.checkbox}>
              <div>
                <input onClick={handleBalance} type="checkbox" />
                <p>Use bbwallet balance</p>
              </div>
              <p>Rs {Math.round(state.WalletReducer.Balance)}</p>
            </div>

            <div className={styles.totalMainDiv}>
              <div className={styles.totalAmount}>
                <p>Total Amount Payable</p>
                <p>Rs {discount}</p>
              </div>
              <div>
                <p>Total Saving</p>
                <p>Rs {saving}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
