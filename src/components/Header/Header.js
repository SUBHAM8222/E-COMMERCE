import React, { useContext } from "react";
import "./Header.css";
import Cartcontext from "../Store/Cart-context";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  let total = 0;
  const cartcnx = useContext(Cartcontext);
  cartcnx.items.forEach((element) => {
    total += element.quantity;
  });

  return (
    <header>
      <ul className="header">
        
          <li>
            <NavLink activeClassName="active" to="/Home">HOME</NavLink>
          </li>

          <NavLink to='/store'>STORE</NavLink>

          <li>
            <NavLink to="/about">ABOUT</NavLink>
          </li>

          <li>
            <NavLink to="/Contactus">Contact us</NavLink>
          </li>
          <li>
            <NavLink to="/MOVIES">MOVIES</NavLink>
          </li>
        
        <button className="cart-holder" onClick={props.onclick}>
          CART
          <span className="cart-number">{total}</span>
        </button>
      </ul>
      <h1>THE GENERICS</h1>
    </header>
  );
};

export default Header;
