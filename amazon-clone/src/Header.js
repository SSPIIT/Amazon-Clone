import React from "react";
import "./Header.css";
import logo from "./assests/amazon_logo.png";
import SearchIcon from "@mui/icons-material/Search";
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{cart}, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src={logo}></img>
      </Link>
      <div className="header_search">
        <input className="header_search_input" type="text"></input>
        <SearchIcon className="header_search_icon"></SearchIcon>
      </div>
      <div className="header_nav">
        <Link to='/login'>
        <div className="header_opt header_hover">
          <span className="header_optLine1">Hello</span>
          <span className="header_optLine2">Sign In</span>
        </div>
        </Link>
        
        <div className="header_opt header_hover">
          <span className="header_optLine1">Returns</span>
          <span className="header_optLine2">& Orders</span>
        </div>
        <div className="header_opt header_hover">
          <span className="header_optLine1">Your</span>
          <span className="header_optLine2">Prime</span>
        </div>
      </div>
      <Link to='/cart'>
      <div className="header_cart header_hover">
        <span className="header_optLine2 header_cart_count">{cart.length}</span>
        <ShoppingCartIcon />
      </div>
      </Link>
      
    </div>
  );
}

export default Header;
