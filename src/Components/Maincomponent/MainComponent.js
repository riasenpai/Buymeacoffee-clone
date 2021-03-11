import React from "react";
import styles from "./MainComponent.module.css";
import Landing from "./../Landing/Landing";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Profile from "./../Profile/Profile";


class MainComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path="/profile">
              <Profile></Profile>
            </Route>
            <Route path="/">
              <Landing></Landing>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
export default MainComponent;
