import React from "react";
import "./Product.css";
import GradeIcon from "@mui/icons-material/Grade";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { useStateValue } from "./StateProvider";

function Product({id, desp, price, rating, img }) {
  /*---------------------------------------------------------------------*/
  const [state, dispatch] = useStateValue();
  // console.log(cart);
  const addToCart =()=>{
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        desp: desp,
        price: price,
        rating: rating,
        img: img,
      }   

    })
  }
  /*---------------------------------------------------------------------*/
  return (
    <div className="product">
      <div className="product_info">
        <p>{desp}</p>
        <div className="product_price">
          <CurrencyRupeeIcon className="product_price_icon" />
          <strong>{price}</strong>
        </div>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>
                <GradeIcon className="product_rating_icon" />
              </p>
            ))}
        </div>
      </div>
      <div>
        <img className="product_img" src={img} alt="" />
      </div>
      <div>
        <button className="product_button" onClick={addToCart}>Add to Basket</button>
      </div>
    </div>
  );
}

export default Product;
