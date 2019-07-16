import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Main from "./Pages/Main";
import Login from "./Pages/Login";
import TotalMenu from "./Pages/TotalMenu";
import AdminLogin from "./Pages/Admin/AdminLogin";
import AdminSignup from "./Pages/Admin/AdminSignup";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={Main} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/TotalMenu" component={TotalMenu} />
          <Route exact path="/admin/login" component={AdminLogin} />
          <Route exact path="/admin/signup" component={AdminSignup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
