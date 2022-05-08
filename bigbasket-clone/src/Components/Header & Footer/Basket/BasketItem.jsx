import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addQuantity, deleteItem, setCart } from "../../../Redux/cart/CartAction";
import styles from "./basket.module.css";

export const BasketItem = ({ item }) => {
  let dispatch = useDispatch();
//   const cart = useSelector((state) => state.cart.cart);
  let saving =
    item.quantity * item.product.mrp - item.quantity * item.product.price;

  const handleIncrease = () => {
    // dispatch(addQuantity({id:item.id,quantity:item.quantity +1}))
    const updateQuantity = (id, newQty) => {
      if (newQty === 0) {
        axios
          .delete(`/items/${id}`)
          .then()
          .catch((err) => alert(err.message));
      } else {
        axios
          .patch(`/items/${id}`, { quantity: newQty })
          .then()
          .catch((err) => alert(err.message));
      }
    };

    updateQuantity(item._id, item.quantity + 1);
  };

  const handleDelete = () => {
    // dispatch(deleteItem({id:item.id}))
    const deleteQuantity = (id) => {
      axios
        .delete(`/items/${id}`)
        .then()
        .catch((err) => alert(err.message));
    };

    deleteQuantity(item._id);
  };

  const handleDecrease = () => {
    // let quantity = item.quantity -1
    // if(quantity < 0){
    //     quantity = 0
    // }
    // dispatch(addQuantity({id:item.id,quantity}))

    const updateQuantity = (id, newQty) => {
      if (newQty === 0) {
        axios
          .delete(`/items/${id}`)
          .then()
          .catch((err) => alert(err.message));
      } else {
        axios
          .patch(`/items/${id}`, { quantity: newQty })
          .then()
          .catch((err) => alert(err.message));
      }
    };

    updateQuantity(item._id, item.quantity - 1);
  };

  useEffect(() => {
    const fetchcart = async () => {
      const res = await fetch("/items/?user=62435193c1dab43bbce3f6eb");
      const json = await res.json();
      dispatch(setCart(json));
    };
    fetchcart();
  }, [handleIncrease, handleDelete, handleDecrease]);

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
        <span onClick={handleDecrease}>-</span>
        <p>{item.quantity}</p>
        <span onClick={handleIncrease}>+</span>
      </div>
      <div className={styles.priceDiv}>
        <span>Rs. {item.productprice}</span>
        <span>Saved Rs. {saving.toFixed(2)}</span>
      </div>
      <div className={styles.crossDiv} onClick={handleDelete}>
        X
      </div>
    </div>
  );
};
