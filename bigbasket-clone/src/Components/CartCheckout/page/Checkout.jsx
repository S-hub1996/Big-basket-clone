import React,{useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckoutTable } from '../CheckoutTable';
import { CheckoutCards } from '../CheckoutCard';


export const Checkout = () => {
    let dispatch  = useDispatch();
    let list = useSelector(state => state.cartreducer.cart)
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
