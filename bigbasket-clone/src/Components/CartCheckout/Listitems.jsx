import React,{ useEffect, useState } from 'react';
import styles from "./checkout.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {DLT,ADD,REMOVE} from '../../Redux/CartCheckout/action'

export const Listitems = (props) => {
    const [data,setData] = useState([]);
  console.log(data);

  const {id} = useParams();
  // console.log(id);

//   const history = useNavigate();

  const dispatch = useDispatch();

  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  console.log(getdata);


  const compare = ()=>{
    let comparedata = getdata.filter((props)=>{
      return props.id == id
    });
    setData(comparedata);
  }

  // add data
  

  const send = (props)=>{
    // console.log(e);
    dispatch(ADD(props));
  }
  
  const dlt = (props)=>{
    dispatch(DLT(props));
    // history("/");
}
const total = ()=>{
    let price = 0;
    getdata.map((props,k)=>{
        price = props.quantity * props.productprice 
    });
    // setPrice(price);
};
const stotal = ()=>{
    let sprice = 0;
    getdata.map((props,k)=>{
        sprice = props.quantity * props.StrikePrice
    });
    // setsPrice(sprice);
};

// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}

  useEffect(()=>{
    compare();
    total();
    stotal();
  },[id,total,stotal])

  return (
    <div className={styles.listItemDiv}>
      <div>&nbsp;</div>
      <div className={styles.description}>
        <div className={styles.fade}>{props.Brand}</div>
        <div>{props.productName}</div>
      </div>
      <div>
        <div>Rs: {props.productprice} </div>
        <div className={styles.fade}>
          <strike>Rs:{props.StrikePrice} </strike>
        </div>
      </div>
      <div>
        <div className={styles.quantitydiv}>
          <button onClick={props.quantity <=1 ? ()=>dlt(props.id) : ()=>remove(props)}>-</button>
          <input
            type={"number"}
            placeholder = {props.quantity}
          />
          <button onClick={()=>send(props)}>+</button>
        </div>
      </div>
      <div>
        <div>Rs.{props.price} </div>
      </div>
      <div className={styles.crossSign} 
      onClick={()=>dlt(props.id)}>
        <img src="https://www.bigbasket.com/static/uiv2/css/images/close_grid_icon.png" />
      </div>
      <div>
        <div className={styles.savings}>Rs.{props.sprice} </div>
      </div>
    </div>
  )
}