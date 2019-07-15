import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./Pages/Admin";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/admin" component={Admin} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
