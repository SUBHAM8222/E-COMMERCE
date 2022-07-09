import React from 'react';
import './Productlist.css';
const ProductList=(props)=>{

  

    return(
        
 <React.Fragment>

    
    <ul className='products'>
    <div >
    <h3> {props.title}</h3>
    <div >
        <img  src={props.imgurl} alt='music1'></img>
    </div>
    <div>
        <span>$
        <span>{props.price}</span>
        </span>
        <button className='button'  type='button'>ADD TO CART</button>
    </div>
    </div>

</ul>
</React.Fragment>






    )




};

export default ProductList;