import React,{useState}from 'react';
import './App.css';
import Product from './components/products';
import Header from './components/Header/Header';
import Cart from './components/Cart/CART';

const App = () => {

    const [cartshown,cartisshown]=useState(false);

    const showcarthandler=()=>{

        cartisshown(true);
        
    }
  
 return(
    <React.Fragment>
      {cartshown&&<Cart></Cart>}  
<Header onclick={showcarthandler}></Header>

  <ul><Product></Product></ul>
  </React.Fragment>
    
  
 )
}

 export default App;