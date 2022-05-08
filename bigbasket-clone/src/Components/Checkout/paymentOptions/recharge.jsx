import React from 'react'

import { RiCalendar2Line } from 'react-icons/ri'
import styles from './Recharge.module.css'
import { Debitcard } from './debitcard'
import { NetBanking } from './NetBanking'
import { UPI } from './UPI'

import { useDispatch, useSelector } from 'react-redux'
import { Option } from './Reducer/Action'
import { Otp } from './otp'
import { CashOnDelivery } from './cashOnDelivery'

export const Recharge = () => {
  const state = useSelector((state) => state.WalletReducer)
    console.log(state, 'state')
    
  const dispatch = useDispatch()

  return (
    <div>
      {/* <RechargeNavabar /> */}
      <div className={styles.mainDiv}>
        <div className={styles.paymentDiv}>
          <div
            style={{
              display: 'flex',
              gap: 10,
              margin: 20,
              color: '#505050',
              alignItems: 'center',
            }}
          >
            <RiCalendar2Line size={25} />
            <h5>Payment Options</h5>
          </div>
        </div>
        <div className={styles.paymentMethods}>
          <div>
            <div onClick={() => dispatch(Option('Card'))}>
              <h6>Credit / Debit Card</h6>
            </div>

            <div onClick={() => dispatch(Option('netBanking'))}>
              <h6>Netbanking</h6>
            </div>
            <div onClick={() => dispatch(Option('upi'))}>
              <h6>UPI</h6>
            </div>
            <div onClick={() => dispatch(Option('cash'))}>
              <h6>Cash on Delivery</h6>
            </div>
          </div>
          <div>
            {state.PaymentOption === 'Card' && <Debitcard />}
            {state.PaymentOption === 'netBanking' && <NetBanking />}

            {state.PaymentOption === 'upi' && <UPI />}
            {state.PaymentOption === "cash" && <CashOnDelivery/>}
          </div>
        </div>
        
        (<div className={styles.otpcont}>{state.otp && <Otp />}</div>)
      </div>
    </div>
  )
}
