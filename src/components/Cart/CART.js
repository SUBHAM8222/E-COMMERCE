import Cartitem from "./CartItem";
import './CART.css';
const cartElements = [
  {
    title: "Colors",

    price: 100,

    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

    quantity: 2,
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

    quantity: 3,
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl:
      "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

    quantity: 1,
  },
];

const Cart = () => {
  
  const items = cartElements.map((itemss) => (
    <Cartitem
      title={itemss.title}
      price={itemss.price}
      imageurl={itemss.imageUrl}
      quantity={itemss.quantity}
    />
  ));

  return(
    <div className="cart">
    <h3 className="cartName">
      Cart 
      <button className="btn btn-primary X">
        X
      </button>
    </h3>
    <div className="container">
      <div className="row Header">
        <div className="col">
          <span>Item</span>
        </div>
        <div className="col">
          <span>Price</span>
        </div>
        <div className="col">
          <span>Amount</span>
        </div>
        <div className="col">
          Total
        </div>
      </div>
    </div>
    {items}
    
     
       <div className="Total">Order Total</div>
       {/* <button >Place Order</button> */}
         
  </div>
  )
};

export default Cart;
