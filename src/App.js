import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigate from "./components/Navigate/Navigate";
import HomeScreen from "./screens/home-screen/HomeScreen";
import CartScreen from "./screens/cart-screen/CartScreen";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <Router>
      <Navigate />
      <main className="main-container">
        <Switch>
          <Route exact path="/">
            <HomeScreen></HomeScreen>
          </Route>
          <Route path="/cart">
            <CartScreen></CartScreen>
          </Route>
        </Switch>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
