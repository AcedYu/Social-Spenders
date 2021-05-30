import React from "react";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import MarketFeed from "../components/MarketFeed.js";

const Market = () => {
  return (
    <div>
      <Nav page="Marketplace"/>
      <div className="row container-fluid">
        <Sidebar />
        <MarketFeed />
      </div>
    </div>
  );
}

export default Market;