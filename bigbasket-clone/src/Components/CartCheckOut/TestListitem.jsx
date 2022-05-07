import React,{ useEffect, useState } from 'react';
import styles from "./checkout.module.css";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {DLT,ADD,REMOVE} from '../../Redux/cartCheckout/action/action'

export const TestListitem = () => {
    const [data,setData] = useState([]);
  // console.log(data);

  const {id} = useParams();
  // console.log(id);

  const history = useNavigate();

  const dispatch = useDispatch();

  
  const getdata = useSelector((state)=> state.cartreducer.carts);
  // console.log(getdata);


  const compare = ()=>{
    let comparedata = getdata.filter((e)=>{
      return e.id == id
    });
    setData(comparedata);
  }

  // add data
  

  const send = (e)=>{
    // console.log(e);
    dispatch(ADD(e));
  }
  
  const dlt = (id)=>{
    dispatch(DLT(id));
    history("/");
}

// remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}


  useEffect(()=>{
    compare();
  },[id])
  return (
    <div className={styles.listItemDiv}>
      <div>&nbsp;</div>
      <div className={styles.description}>
        <div className={styles.fade}>brand</div>
        <div></div>
      </div>
      <div>
        <div>Rs: </div>
        <div className={styles.fade}>
          <strike>Rs: </strike>
        </div>
      </div>
      <div>
        <div className={styles.quantitydiv}>
          <button >-</button>
          <input
            type={"number"}
          />
          <button>+</button>
        </div>
      </div>
      <div>
        <div>Rs. </div>
      </div>
      <div className={styles.crossSign} >
        <img src="https://www.bigbasket.com/static/uiv2/css/images/close_grid_icon.png" />
      </div>
      <div>
        <div className={styles.savings}>Rs. </div>
      </div>
    </div>
  )
}
