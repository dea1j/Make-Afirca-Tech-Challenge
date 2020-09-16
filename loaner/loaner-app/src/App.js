import React, { Fragment } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./layout/auth/Login";
import Signup from "./layout/auth/Signup";
import Main from "./Main";
import LandingPage from "./layout/pages/LandingPage";
import Profile from "./layout/pages/Profile";
import "./App.css";

function App() {
  return (
    <Router>
      <Fragment>
        <Switch>
          {/* <Route exact path="/" component={Main} /> */}
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/auth/login" component={Login} />
          <Route exact path="/auth/signup" component={Signup} />
          <Route exact path="/profile" component={Profile} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
