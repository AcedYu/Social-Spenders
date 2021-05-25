import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Landing from "./pages/Landing.js"

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/saved">

        </Route>
      </Switch>
    </Router>
  );
}


export default App;
