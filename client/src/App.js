import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import "./App.css";

import Landing from "./pages/Landing.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Market from "./pages/Market.js";

function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/market">
            <Market />
          </Route>
        </Switch>
      </StoreProvider>
    </Router>
  );
}


export default App;
