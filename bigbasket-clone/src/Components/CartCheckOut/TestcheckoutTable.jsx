import React from 'react'
import styles from './checkout.module.css'

const TestcheckoutTable = () => {
  return (
    <>
         <div className={styles.checkoutTable}>
            <div className={styles.tableHeading}>
                <div className={styles.emptySpace}>&nbsp;</div>
                <div className={styles.description}>ITEM DESCRIPTION</div>
                <div className={styles.unitPrice}>UNIT PRICE</div>
                <div className={styles.quantity}>QUANTITY</div>
                <div className={styles.subtotal}>SUBTOTAL</div>
                <div className={styles.cross}></div>
                <div className={styles.saving}>SAVINGS</div>
            </div>
        </div>
    </>
  )
}

export default TestcheckoutTable