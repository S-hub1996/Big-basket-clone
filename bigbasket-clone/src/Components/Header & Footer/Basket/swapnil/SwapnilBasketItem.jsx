import React,{ useEffect, useState } from 'react';
import styles from "../basket.module.css";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {DLT,ADD,REMOVE} from '../../../../Redux/CartCheckout/action/action'


export const SwapnilBasketItem = (item) => {
    const [data,setData] = useState([]);
  // console.log(data);
  // const [price,setPrice] = useState([]);

  const {id} = useParams();
  // console.log(id);

//   const history = useNavigate();

  const dispatch = useDispatch();

  const getdata = useSelector(state => state.carts.carts)
  // console.log(getdata)


  const compare = ()=>{
    let comparedata = getdata.filter((item)=>{
      return item.id == id
    });
    setData(comparedata);
  }

  // add data
  

  const send = (item)=>{
    // console.log(e);
    dispatch(ADD(item));
  }
  
  const dlt = (item)=>{
    dispatch(DLT(item));
    // history("/");
}
// const total = ()=>{
//     let price = 0;
//     getdata.map((e,k)=>{
//         price = e.quantity * e.productprice
//         setPrice(price);
//     });
    
// };
// const stotal = ()=>{
//     let sprice = 0;
//     getdata.map((props,k)=>{
//         sprice = props.quantity * props.StrikePrice
//     });
//     setPrice(sprice);
// };


// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}

  useEffect(()=>{
    compare();
    // total();
    // stotal();
  },[id])
  return (
    <div className={styles.listItems}>
      <img src={item.image} style={{ width: "5.5rem" }} alt="" />
      <div className={styles.nameDiv}>
        <span>{item.brand}</span>
        <span>{item.productName}</span>
        <span>
          {item.quantity} x {item.productprice}
        </span>
      </div>
      <div className={styles.quantityDiv}>
        <span onClick={item.quantity <=1 ? ()=>dlt(item.id) : ()=>remove(item)}>-</span>
        <p>{item.quantity}</p>
        <span onClick={()=>send(item)}>+</span>
      </div>
      <div className={styles.priceDiv}>
        <span>Rs. {item.productprice}</span>
        <span>Saved Rs.  {(item.quantity * (item.StrikePrice-item.productprice)).toFixed(2)}</span>
      </div>
      <div className={styles.crossDiv} onClick={()=>dlt(item.id)}>
        X
      </div>
    </div>
  );
};
