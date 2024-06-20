import React from "react";
import "./CartItem.css";
import GradeIcon from "@mui/icons-material/Grade";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useStateValue } from "./StateProvider";

function CartItem({ id, desp, price, rating, img }) {
  /*---------------------------------------------------------------------*/
  const [{ cart }, dispatch] = useStateValue();
  // console.log(cart);
  const deleteFromCart = () => {
    dispatch({
      type: "DELETE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="cartitem">
      <img className="cartitem_img" src={img}></img>
      <div className="cartitem_center">
        <p className="cartitem_desp">{desp}</p>
        <span className="cartitem_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon className="cartitem_rating_icon" />
              </p>
            ))}
        </span>
        <small className="cartitem_inStock">In stock</small>
        <div className="cartitem_btns">
          <button className="cartitem_button" onClick={deleteFromCart}>
            Delete
          </button>
          <button className="cartitem_button">Save for later</button>
          <button className="cartitem_button">See more like this</button>
          <button className="cartitem_button">Share</button>
        </div>
      </div>
      <div className="cartitem_right">
        <CurrencyRupeeIcon className="cartitem_price_icon" />
        <strong className="cartitem_price">{price}</strong>
      </div>
    </div>
  );
}

export default CartItem;
