// import React, { useState } from 'react'
// import * as React from 'react';
import Popover from '@mui/material/Popover';
import {createTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { BasketItems } from "./BasketItem";
import styles from "./basket.module.css";

import React, { useState, useRef } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import { Popover } from "@material-ui/core";
import { useSelector } from "react-redux";
import { BasketList } from "./BasketList";
import { useNavigate } from "react-router-dom";

const useStyles = createTheme((theme) => ({
  popover: {
    pointerEvents: "none",
  },
  popoverContent: {
    pointerEvents: "auto",
  },
}));

export const MyBasket = ({ loading, login, wrong, clearWrongLogin }) => {
  const [openedPopover, setOpenedPopover] = useState(false);
  const popoverAnchor = useRef(null);
  const cart = useSelector((state) => state.carts.carts.length);
  const navigate = useNavigate();

  const popoverEnter = ({ currentTarget }) => {
    setOpenedPopover(true);
  };

  const popoverLeave = ({ currentTarget }) => {
    setOpenedPopover(false);
  };

  const classes = createTheme();

  return (
    <div>
      <span
        ref={popoverAnchor}
        aria-owns="mouse-over-popover"
        aria-haspopup="true"
        // onMouseEnter={popoverEnter}
        // onMouseLeave={popoverLeave}
      >
        <div className={styles.basketDiv}>
          <div className="basket" onClick={() => navigate("/checkout")}>
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
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        PaperProps={{ onMouseEnter: popoverEnter, onMouseLeave: popoverLeave }}
      >
        <div>
          <BasketList />
        </div>
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