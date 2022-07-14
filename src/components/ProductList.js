import React,{useContext} from 'react';
import './Productlist.css';
import Cartcontext from './Store/Cart-context';
const ProductList=(props)=>{

 const cartctx=useContext(Cartcontext);


 const  additemstocarthandler=()=>{
    
    cartctx.additems(props);
    console.log(props);

    
   
 }

    return(
        
 <React.Fragment>

    
    <ul className='products' id={props.id}>
    <div >
    <h3> {props.title}</h3>
    <div >
        <img  src={props.imageurl} alt='music1'></img>
    </div>
    <div>
        <span>$
        <span>{props.price}</span>
        </span>
        <button className='button' type='button' onClick={additemstocarthandler}>ADD TO CART</button>
    </div>
    </div>

</ul>
</React.Fragment>






    )




};

export default ProductList;