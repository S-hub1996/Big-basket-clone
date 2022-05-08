import React,{useState } from 'react';
import styles from './checkout.module.css';
import { Listitems } from './Listitems';
import { useSelector } from 'react-redux';

// const [data,setData] = useState([]);

// const compare = ()=>{
//     let comparedata = getdata.filter((props)=>{
//       return props.id == id
//     });
  //   setData(comparedata);
  // }
  // useEffect(()=>{
    
  // },[id])
export const CheckoutTable = () => {
  const getdata = useSelector((state)=> state.carts.carts);
  
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
      { getdata.map((val)=> {
          return (
            <Listitems  id={val.id} OFF={val.OFF}  QtyPiece={val.QtyPiece} QtyPieceForOneElement={val.QtyPieceForOneElement} productName={val.productName}  productprice={val.productprice} StrikePrice={val.StrikePrice} Brand={val.Brand} Date={val.Date} image={val.image} quantity={val.quantity}  />
          )
  
      })
      }
        
    </div>
</div>
  )
}
