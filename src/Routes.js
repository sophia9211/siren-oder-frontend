import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Pages/Admin";
import Main from "./Pages/Main";
import TotalMenu from "./Pages/TotalMenu";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
          <Route exact path="/" component={Main} />
          <Route exact path="/TotalMenu" component={TotalMenu} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
