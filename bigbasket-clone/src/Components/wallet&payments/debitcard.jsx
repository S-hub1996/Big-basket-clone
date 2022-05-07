import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './Debitcard.module.css'
import { OtpVisible } from './Reducer/Action'
export const Debitcard = () => {
  const [card, setCard] = useState({})
  const state = useSelector((state) => state.WalletReducer.otp)
    console.log(state,"otp")
    const dispatch=useDispatch()

    const handleSubmit = () => {
        const length = Object.keys(card).length;
    
        if (length >= 3) {
          dispatch(OtpVisible(true))
        
    } else {
      alert('please Enter every field')
    }
  }
  const handleChange = (e) => {
    if (e.target.name !== 'Save') {
      setCard({
        ...card,
        [e.target.name]: e.target.value,
      })
    } else {
      setCard({
        ...card,
        [e.target.name]: e.target.checked,
      })
    }

    console.log(card)
  }
  return (
    <div className={styles.CardMain}>
      <div className={styles.circleTitle}>
        <div className={styles.circle}>
          <div></div>
        </div>
        <h5>Add Credit / Debit card</h5>
      </div>
      <div className={styles.formDiv}>
        <div>
          <label>Card Number</label>
          <input
            onChange={handleChange}
            name="Card Number"
            placeholder="Enter Card number"
          />
        </div>
        <div className={styles.validity}>
          <div>
            <label>Valid Thru</label>
            <input
              onChange={handleChange}
              name="Expiry"
              placeholder="MM / YY"
            />
          </div>
          <div>
            {' '}
            <label>Cvv</label>
            <input
              onChange={handleChange}
              name="cvv"
              placeholder="Security Code"
            />
          </div>
        </div>
        <div className={styles.checkBox}>
          {' '}
          <input onChange={handleChange} type="checkbox" name="Save" />
          <label>Save this card for faster payments</label>
        </div>
        <button onClick={handleSubmit}>Pay</button>
      </div>
    </div>
  )
}
