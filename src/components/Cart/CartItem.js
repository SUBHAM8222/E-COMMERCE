import React from 'react';
import './cartitem.css';
const Cartitem=(props)=>{

return(
<div className="container">
      <div className="row">
        <div className="col">
          <span>{props.title}</span>
          <img src={props.imageurl} alt="products" className="i"/>
        </div>
        <div className="col">
          <span>{props.price}</span>
        </div>
        <div className="col">
          <span>{props.quantity}</span>
        </div>
        <div className="col">
           <span>{props.quantity}</span>
        <button  >Remove</button>
        </div>
      </div>
      
      
    </div>

)

}

export default Cartitem;