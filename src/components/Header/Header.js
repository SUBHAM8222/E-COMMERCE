import React,{useContext}from 'react';
import './Header.css';
import Cartcontext from '../Store/Cart-context';

const Header=(props)=>{
let total=0;
     const cartcnx=useContext(Cartcontext);
     cartcnx.items.forEach(element => {
        total+=element.quantity;
        
      });;

   return(
   <header>
    <ul className='header'>
        <li>HOME</li>
        <li>STORE</li>
        <li>ABOUT</li>
        <li>Contact us</li>
        <button className='cart-holder' onClick={props.onclick}>
            CART
        <span className="cart-number">{total}</span>
        </button>
        </ul>
<h1>THE GENERICS</h1>
   </header>
   )

   
}

export default Header;