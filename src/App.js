import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigate from "./components/Navigate/Navigate";
import HomeScreen from "./screens/home-screen/HomeScreen";
import HomeGateway from "./components/HomeGateway/HomeGateway";
import CategoryScreen from "./screens/category-screen/CategoryScreen";
import Footer from "./components/Footer/Footer";
import ProductGateway from "./components/ProductGateway/ProductGateway";

const App = () => {
  return (
    <Router>
      <Navigate />
      <main className="main-container">
        <Switch>
          <Route exact path="/">
            <HomeScreen></HomeScreen>
          </Route>
        </Switch>
      </main>

      <Footer />
    </Router>
  );
};

export default App;
