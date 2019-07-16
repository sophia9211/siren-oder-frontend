import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Main from "./Pages/Main";
import TotalMenu from "./Pages/TotalMenu";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminSignup from "./Pages/Admin/AdminSignup";
import DetailMenu from "./Pages/DetailMenu";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={Main} />
          <Route exact path="/totalmenu" component={TotalMenu} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/signup" component={AdminSignup} />
          <Route exact path="/detailmenu" component={DetailMenu} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
