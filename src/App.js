import React from "react";
import "./App.css";
import HomePage from "./pages/Homepage/homepage";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./pages/shop-page/shop.jsx";
import Header from "./components/header/header";
import SignPage from "./pages/sign-in-sign-up-page/sign-in-sign-up";
import CartPage from "./pages/cartpage/cartpage";
import { auth } from "./firebase/firebase.util";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: "null",
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/cart" component={CartPage}></Route>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/shop" component={ShopPage}></Route>
          <Route exact path="/sign" component={SignPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
