import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  DecQty,
  IncQty,
  RemoveOne,
} from "../../../redux/kfc/cartRedux/CartAction";
import styles from "./cartcard.module.css";

export const CartCard = (props) => {
  const [qty, setqty] = useState(1);
  const dispatch = useDispatch();

  const qtyInc = () => {
    setqty(qty + 1);
    dispatch(IncQty(props.id));
  };
  const qtyDec = () => {
    if (qty > 1) {
      setqty(qty - 1);
      dispatch(DecQty(props.id));
    }
  };

  const removeOne = () => {
    dispatch(RemoveOne(props.id));
  };
  return (
    <div id={styles.frame}>
      <div>
        <img src={props.imgURL} alt="product image" />
      </div>
      <div id={styles.centerDiv}>
        <p>{props.title}</p>
        <button onClick={removeOne}>Remove</button>
      </div>
      <div id={styles.priceandqty}>
        <button className={styles.btn} onClick={qtyDec}>
          -
        </button>
        <p>{qty}</p>
        <button className={styles.btn} onClick={qtyInc}>
          +
        </button>
        <p>{`₹${props.mrp * qty}`}</p>
      </div>
    </div>
  );
};
