import React from "react";
import "./CartPage.css";
import cart_empty from "./assests/cart_empty.svg";
import CartItem from "./CartItem";
import Total from "./Total";
import { useStateValue } from "./StateProvider";

function CartPage() {
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className="cartpage">
      <div className="cartpage_left">
        {/* <img src={cart_empty} alt="" />
        <span>Your Amazon Cart is Empty</span> */}
        <div className="cartpage_left_title">Shopping Cart</div>
        <div className="cartpage_left_price">Price</div>
        {cart.map(item => (
          <CartItem
            id={item.id}
            desp={item.desp}
            price={item.price}
            rating={item.rating}
            img={item.img}
            />
        ))}
        
      </div>

      <div className="cartpage_right">
        <Total/>
      </div>
    </div>
  );
}

export default CartPage;
