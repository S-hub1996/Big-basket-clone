import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styles from './otp.module.css';
import { ConfirmAdd } from './Reducer/Action';

export const Otp = () => {
    const [OTP, setOTP] = useState();
    const dispatch = useDispatch();
    const navigate=useNavigate()
    const state=useSelector((state)=>state.WalletReducer)
    const handleSubmit = () => {
        if (OTP === "1234") {
            dispatch(ConfirmAdd(state.AddMoney));
            navigate("/wallet")
            
        } else {
            alert("Enter Right OTP")
        }
    }
  return (
    <div className={styles.otpDiv}>
      <h4>Enter otp</h4>
      <div>
        <input
          type="password"
          onChange={(e) => setOTP(e.target.value)}
          placeholder="Enter Your Otp"
        />
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}
