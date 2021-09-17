import React from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import MarketFeed from "../components/MarketFeed.js";

const Market = () => {
  const [auth, setAuth] = React.useState(true);

  React.useEffect(() => {
    authorize();
  }, []);

  const authorize = () => {
    API.auth()
      .then(result => {
        setAuth(result.data)
      })
      .catch(err => console.log(err));
  }

  if (!auth) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <Nav page="Marketplace" />
      <div className="row container-fluid">
        <Sidebar />
        <MarketFeed />
      </div>
    </div>
  );
}

export default Market;