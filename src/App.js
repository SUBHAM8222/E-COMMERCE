import React, { useState } from "react";
import { Route,Switch } from "react-router-dom";

import "./App.css";
import Product from "./components/products";
import Header from "./components/Header/Header";
import Cart from "./components/Cart/CART";
import CartProvider from "./components/Store/CartProvider";
import About from "./components/Pages/About";
import Home from "./components/Pages/Home";
import Contactus from "./components/Pages/Contactus";
import Movies from "./components/Pages/Movies";
import ItemDetails from "./components/Pages/ItemDetails";
//import AuthPage from "./components/Pages/Authpage";
const App = () => {
  const [cartshown, cartisshown] = useState(false);

  const showcarthandler = () => {
    cartisshown(true);
  };
  const hidecarthandler = () => {
    cartisshown(false);
  };

  return (
    <React.Fragment>
      <main>
        <Switch>
        <Route path="/store/:productId">
              <ItemDetails />
            </Route>
          <Route path="/store" >
            <CartProvider>
              {cartshown && <Cart onclick={hidecarthandler}></Cart>}
              <Header onclick={showcarthandler}></Header>

              <ul>
                <Product></Product>
              </ul>
            </CartProvider>
           
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contactus">
            <Contactus></Contactus>
          </Route>

          <Route path="/movies" exact>
            <Movies />
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
        
      </main>
    </React.Fragment>
  );
};

export default App;
