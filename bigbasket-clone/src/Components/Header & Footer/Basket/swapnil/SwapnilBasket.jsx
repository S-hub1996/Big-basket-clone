// import React, { useState } from 'react'
// import * as React from 'react';
// import Popover from '@mui/material/Popover';
import {createTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
// import { BasketItems } from "./BasketItem";
import styles from "../basket.module.css";
import {SwapnilBasketList} from './SwapnilBasketList'

import React, { useState, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
 import { Popover } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    popover: {
      pointerEvents: 'none',
    },
    popoverContent: {
      pointerEvents: 'auto',
    },
  }));

export const SwapnilBasket = () => {
    const cart = useSelector((state) => state.carts.carts.length)
    const navigate = useNavigate();
    const [openedPopover, setOpenedPopover] = useState(false)
    const popoverAnchor = useRef(null);
  
    const popoverEnter = ({ currentTarget }) => {
      setOpenedPopover(true)
    };
  
    const popoverLeave = ({ currentTarget }) => {
      setOpenedPopover(false)
    };
  
    const classes = useStyles();

  return (
    
      <div>
         <span
          ref={popoverAnchor}
          aria-owns="mouse-over-popover"
          aria-haspopup="true"
          onMouseEnter={popoverEnter}
          onMouseLeave={popoverLeave}
        >
         <div className={styles.basketDiv}>
          <div className="basket" onClick={() => navigate("/basket")}>
            <span>
              <i className="basket-image"></i>
              <b className="cart-count">No. of Products</b>
            </span>
            <div>
              <span className="my-basket">My Basket</span>
              <span className="cart-value">
                {cart}
                <span>items</span>
              </span>
            </div>
          </div>
        </div>
      </span>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.popoverContent,
        }}
        open={openedPopover}
        anchorEl={popoverAnchor.current}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        PaperProps={{onMouseEnter: popoverEnter, onMouseLeave: popoverLeave}}
      >
        
        <div> <SwapnilBasketList /> </div>
    
      </Popover>
    </div>
  );
};
// export const MyBasket = () => {
//     const [cart, setCart] = useState(0);
//     return (
//         <div className={styles.basketDiv}>
//             <div className="basket" >
//                 <span>
//                     <i className="basket-image"></i>
//                     <b className="cart-count">{cart}</b>
//                 </span>
//                 <div>
//                     <span className="my-basket">My Basket</span>
//                     <span className="cart-value">
//                         {cart}
//                         <span>items</span>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     )
// }