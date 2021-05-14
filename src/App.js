import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navigate from "./components/Navigate/Navigate";
import HomeScreen from "./screens/home-screen/HomeScreen";
import CartScreen from "./screens/cart-screen/CartScreen";
import LoginScreen from "./screens/login-screen/LoginScreen";
import TrucksHomeScreen from "./screens/trucks-home-screen/TrucksHomeScreen";
import ClassicsHomeScreen from "./screens/classics-home-screen/ClassicsHomeScreen";
import RvHomeScreen from "./screens/rv-home-screen/RvHomeScreen";
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
  const fetchProductsBySlug = async (slug) => {
    const response = await commerce.products.list({
      category_slug: [slug],
    });
    setProducts(response.data);
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
    getStaticCart();
  }, []);

  console.log("cart data logged from App.js", cartData);

  return (
    <Router>
      <Navigate />
      <main className="main-container">
        <Switch>
          <Route exact path="/">
            <HomeScreen products={products}></HomeScreen>
          </Route>
          <Route path="/cart">
            <CartScreen cartData={cartData}></CartScreen>
          </Route>
          <Route path="/login">
            <LoginScreen></LoginScreen>
          </Route>
          <Route path="/mideasternchromestop">
            <TrucksHomeScreen
              products={products}
              fetchProductsBySlug={fetchProductsBySlug}
              quickAddToCart={quickAddToCart}
            ></TrucksHomeScreen>
          </Route>
          <Route path="/classics">
            <ClassicsHomeScreen
              products={products}
              fetchProductsBySlug={fetchProductsBySlug}
              quickAddToCart={quickAddToCart}
            ></ClassicsHomeScreen>
          </Route>
          <Route path="/rv">
            <RvHomeScreen
              products={products}
              fetchProductsBySlug={fetchProductsBySlug}
              quickAddToCart={quickAddToCart}
            ></RvHomeScreen>
          </Route>
        </Switch>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
