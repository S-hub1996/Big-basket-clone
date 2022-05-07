import React,{useState } from 'react';
import styles from './checkout.module.css';
import { Listitems } from './Listitems';

const [data,setData] = useState([]);
const getdata = useSelector((state)=> state.cartreducer.carts);
const compare = ()=>{
    let comparedata = getdata.filter((props)=>{
      return props.id == id
    });
    setData(comparedata);
  }
  useEffect(()=>{
    compare();
  },[id])
export const CheckoutTable = () => {
  return (
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
    <div>
      { getdata.map((ele)=> {
          return (
            <Listitems id = {ele.id} productName = {ele.productName}  productprice = {ele.productprice} StrikePrice = {ele.strikePrice} quantity = {ele.quantity} price = {ele.price} sprice = {ele.sprice}  />
          )
  
      })
      }
        
    </div>
</div>
  )
}
