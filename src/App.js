import { commerce } from "./lib/commerce";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Navigate from "./components/Navigate/Navigate";
import HomeScreen from "./screens/home-screen/HomeScreen";
import CartScreen from "./screens/cart-screen/CartScreen";
import Checkout from "./components/Checkout/Checkout";
import LoginScreen from "./screens/login-screen/LoginScreen";
import TrucksHomeScreen from "./screens/trucks-home-screen/TrucksHomeScreen";
import ClassicsHomeScreen from "./screens/classics-home-screen/ClassicsHomeScreen";
import RvHomeScreen from "./screens/rv-home-screen/RvHomeScreen";
import Footer from "./components/Footer/Footer";

const App = () => {
  //@useState hooks
  const [products, setProducts] = useState([]);
  const [cartData, setCartData] = useState({});
  const [cartId, setCartId] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
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

  // update product quantity in cart
  const updateProduct = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCartData(response.cart);
  };

  // remove product from cart
  const removeProductFromCart = async (itemId) => {
    const response = await commerce.cart.remove(itemId);
    setCartData(response.cart);
  };

  // refresh cart (after checkout process completion)
  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();
    setCartData(newCart);
  };

  // empty cart
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCartData(response.cart);
  };

  // refresh cart function here

  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  ////////////////////////////////////////////////
  //@Checkout

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(
        checkoutTokenId,
        newOrder
      );
      setOrder(incomingOrder);
      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  console.log("cart data logged from App.js", cartData);

  useEffect(() => {
    getStaticCart();
  }, []);

  return (
    <Router>
      <Navigate
        cartData={cartData}
        cartItems={cartData.total_items}
        totalCost={
          (cartData.subtotal && cartData.subtotal.formatted_with_symbol) ||
          "00.00"
        }
      />
      <main className="main-container">
        <Switch>
          <Route exact path="/">
            <HomeScreen products={products}></HomeScreen>
          </Route>
          <Route path="/cart">
            <CartScreen
              cartData={cartData}
              updateProduct={updateProduct}
              handleEmptyCart={handleEmptyCart}
              removeProductFromCart={removeProductFromCart}
              totalCost={
                (cartData.subtotal &&
                  cartData.subtotal.formatted_with_symbol) ||
                "00.00"
              }
            ></CartScreen>
          </Route>
          <Route path="/checkout">
            <Checkout
              cartData={cartData}
              onCaptureCheckout={handleCaptureCheckout}
            ></Checkout>
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
