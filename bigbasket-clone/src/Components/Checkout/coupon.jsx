import React from 'react'
import styles from './coupon.module.css'

export const Coupon = () => {
  return (
    <div>
      <div className={styles.Voucher}>
        <p>Apply Voucher</p>
        <div>
          <div className={styles.inputDiv}>
            {' '}
            <input placeholder="Enter Voucher Code" /> <button>Apply</button>{' '}
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
              <p>Rs 90</p>
            </div>
            <div className={styles.checkbox}>
              <div>
                <input type="checkbox" />
                <p>Use bbwallet balance</p>
              </div>
              <p>Rs 0</p>
            </div>

            <div className={styles.totalMainDiv}>
              <div className={styles.totalAmount}>
                <p>Total Amount Payable</p>
                <p>Rs 90</p>
              </div>
              <div>
                <p>Total Saving</p>
                <p>Rs 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
