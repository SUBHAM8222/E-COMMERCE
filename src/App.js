import React,{useState}from 'react';
import './App.css';
import Product from './components/products';
import Header from './components/Header/Header';
import Cart from './components/Cart/CART';
import CartProvider from './components/Store/CartProvider';
// import About from './components/Pages/About';
//import Home from './components/Pages/Home';
//import Contactus from './components/Pages/Contactus';

const App = () => {

    const [cartshown,cartisshown]=useState(false);

    const showcarthandler=()=>{

        cartisshown(true);
        
    }
   const  hidecarthandler=()=>{
      cartisshown(false);
    }
  
 return(
  
  
      <CartProvider>
      {cartshown&&<Cart onclick={hidecarthandler}></Cart>}
 <Header onclick={showcarthandler}></Header> 

   <ul><Product></Product></ul> 
   </CartProvider> 
//  <Contactus></Contactus>
    
 )
}

 export default App;