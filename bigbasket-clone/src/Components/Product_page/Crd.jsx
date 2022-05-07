import React from 'react'
import Counter from './Counter'
const Crd = (props) => {
  return (
    <>
    <div className='saif'>
       
       
        <div className='card_img'  style={{padding:"0 2%",margin:"4% 2%" }}>
        <p className='card_off' style={{textAlign:"end"}}>Get of {props.OFF}% <img style={{height:"20px",width:"15px"}} src="https://thumbs.dreamstime.com/z/seal-stamp-icon-over-yellow-background-special-offer-concept-colorful-design-vector-illustration-96025025.jpg" alt="" /></p>
        <div style={{height:"250px"}}>
            <img src={props.image} alt="my_pic"  style={{margin:"auto"}}/>
            <p className='card_brand'>{props.Brand}</p>
            <p className='card_ productName'>{props.productName}</p>
            </div>
         <div className='card_info'>
            <p className='card_QtyPiece'>  {props.QtyPiece}</p>
            <p className='card_StrikePrice'> Rs {props.productprice}</p>
            <p className='card_delivery_Date'>{props.Date}</p>
           <div style={{justifyContent:"center", display:"flex",flexDirection:"row"}}>
           <Counter/> 
            <button style={{marginLeft:"65px", backgroundColor: "rgb(219, 219, 27)",marginLeft:"10px"}}>  Add Cart</button>
  </div>
            </div>
            </div>
    </div>
    
    
    
    </>
  )
}

export default Crd