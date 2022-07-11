import React from 'react';
import './Header.css';

const Header=(props)=>{

   return(
   <header>
    <ul className='header'>
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
        <button className='cart-holder' onClick={props.onclick}>
            CART
        <span className="cart-number">(2)</span>
        </button>
        </ul>
<h1>THE GENERICS</h1>
   </header>
   )

   
}

export default Header;