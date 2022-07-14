import { useState } from "react";
import Cartcontext from "./Cart-context";

const CartProvider = (props) => {
  const [items, updateitems] = useState([]);

  const additemhandler = (item) => {
    let hasItem = false;
    const newItemArray = [];
    
    items.forEach((element) => {
      if (item.id === element.id) {
        hasItem = true;
        
        newItemArray.push({...item,quantity:item.quantity+1})
      
    }
    else
  {newItemArray.push(item);}
    
  });
    if (hasItem === false) updateitems([...items, item]);
    else updateitems(newItemArray);
  };

  const removeitemhandler = (id) => {
    {
        const newItemArray=[ ...items];
        newItemArray.forEach((index) => {
        if(id===index.id){
            newItemArray.splice(index,1);
        }
       


        })
        updateitems(newItemArray);
    };
  };

  const Cartcontextt = {
    items: items,
    total: 0,
    additems: additemhandler,
    deleteitems: removeitemhandler,
    message: "click is working",
  };

  return (
    <Cartcontext.Provider value={Cartcontextt}>
      {props.children}
    </Cartcontext.Provider>
  );
};

export default CartProvider;
