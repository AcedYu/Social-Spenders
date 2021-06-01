import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import "./App.css";

import Landing from "./pages/Landing.js";
import Login from "./pages/Login.js";
import Home from "./pages/Home.js";
import Profile from "./pages/Profile.js";
import Market from "./pages/Market.js";
import UserProfile from "./pages/UserProfile.js";
import ProfileEdit from "./pages/ProfileEdit.js";

function App() {
  return (
    <Router>
      <StoreProvider>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/editprofile">
            <ProfileEdit />
          </Route>
          <Route exact path="/profile&user=:id">
            <UserProfile/>
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
