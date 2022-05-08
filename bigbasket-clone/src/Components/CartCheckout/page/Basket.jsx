import React from 'react';
import {  useSelector } from 'react-redux';
import { CheckoutTable } from '../CheckoutTable';
import { CheckoutCards } from '../CheckoutCard';
import styles from '../checkout.module.css'


export const Basket = () => {
    // let dispatch  = useDispatch();
    let list = useSelector(state => state.carts.carts)
    console.log(list, 'list')
  return (
    <div className={styles.checkoutdiv}>
    <div className={styles.container}>
        <div className={styles.heading}>
            {list.length !== 0? `Your Basket (${list.length} items)` : 'There are no items in your basket.'}
        </div>
        {list.length !== 0 && <CheckoutTable/>}
        <CheckoutCards/>
    </div>
</div>
  )
}
