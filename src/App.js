import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navigate from "./components/Navigate/Navigate";
import HomeScreen from "./screens/home-screen/HomeScreen";
import CartScreen from "./screens/cart-screen/CartScreen";
import Footer from "./components/Footer/Footer";

const App = () => {
  //@useState hooks
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  //@PRODUCTS
  // fetchProducts
  const getStaticProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  console.log("products logged from App.js", products);

  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  //@CART
  //fetch cart
  const getStaticCart = async () => {
    const response = await commerce.cart.retrieve();
    setCartData(response);
  };
  // add to cart
  const quickAddToCart = async (productId, quantity) => {
    const response = await commerce.cart.add(productId, quantity);
    setCartData(response.cart);
  };

  useEffect(() => {
    getStaticProducts();
    getStaticCart();
  }, []);

  console.log("cart data logged from App.js", cartData);

  return (
    <Router>
      <Navigate />
      <main className="main-container">
        <Switch>
          <Route exact path="/">
            <HomeScreen
              products={products}
              quickAddToCart={quickAddToCart}
            ></HomeScreen>
          </Route>
          <Route path="/cart">
            <CartScreen cartData={cartData}></CartScreen>
          </Route>
        </Switch>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
