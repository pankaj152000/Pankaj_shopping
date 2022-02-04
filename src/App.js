import React from "react";
import "./App.css";
import HomePage from "./pages/Homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop.jsx";
import Header from "./components/header/header";
import CartPage from "./pages/cartpage/cartpage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: "null",
    };
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/cart" component={CartPage}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          
        </Switch>
      </div>
    );
  }
}

export default App;
