import React, { useState, useContext } from "react";
import { Route, Switch,Redirect } from "react-router-dom";

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
import AuthPage from "./components/Pages/Authpage";
import AuthContext from "./components/Store/Auth-Context";
import UserProfile from "./components/Profile/UserProfile";
import Footer from "./components/Pages/Footer";
const App = () => {
  const authCtx = useContext(AuthContext);
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
        <CartProvider>
          <Switch>
            <Route path="/auth">
              <AuthPage />
            </Route>
            <Route path="/store/:productId">
              <ItemDetails />
            </Route>
            <Route path="/store">
              {cartshown && <Cart onclick={hidecarthandler}></Cart>}
              <Header onclick={showcarthandler}></Header>

              {authCtx.isLoggedIn &&(
                <Route path="/store" exact>
                  
                  <ul>
                    <Product></Product>
                  </ul>
                </Route>
              )}
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
            <Route path="/" exact>
              <Home></Home>
            </Route>

            {authCtx.isLoggedIn && (
              <Route path="/profile">
                <UserProfile />
              </Route>
            )}
            <Route path='*'>
              <Redirect to='/'/>
            </Route>

          </Switch>
        </CartProvider>
      </main>
      <Footer></Footer>
    </React.Fragment>
  );
};

export default App;
