import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Store from "./Pages/Store";
import History from "./Pages/History";
import Mypage from "./Pages/Mypage";
import ShoppingCart from "./Pages/ShoppingCart";
import Payment from "./Pages/Payment";
import TotalMenu from "./Pages/TotalMenu";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminSignup from "./Pages/Admin/AdminSignup";
import DetailMenu from "./Pages/DetailMenu";
import NotFound404 from "./Pages/NotFound404";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/store" component={Store} />
          <Route exact path="/history" component={History} />
          <Route exact path="/mypage" component={Mypage} />
          <Route exact path="/shoppingcart" component={ShoppingCart} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/totalMenu" component={TotalMenu} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/signup" component={AdminSignup} />
          <Route exact path="/detailmenu" component={DetailMenu} />
          <Route path="*" exact={true} component={NotFound404} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
