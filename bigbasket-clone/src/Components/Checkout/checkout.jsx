import React from 'react'
import { DelliveryAddress } from './delliveryAddress'
import { Address } from './Address'
import { DeliveryOptions } from './DeliveryOptions'
import styles from './checkout.module.css'
import { Coupon } from './coupon'
import { Recharge } from './paymentOptions/recharge'
import { useSelector } from 'react-redux'
export const Checkout = () => {
  const state = useSelector((state) => state.CheckoutReducer)

  return (
    <div className={styles.checkout}>
      <div className={styles.checkoutFirst}>
        <DelliveryAddress />
        {state.address.length == 0 && <Address /> || state.changeAddress == true && <Address/>}
        {state.deliveryoption && state.changeAddress ==false && <DeliveryOptions />}

        {state.payment && <Recharge/>}
      </div>
      <div className={styles.second}>
        <Coupon />
      </div>
    </div>
  )
}
