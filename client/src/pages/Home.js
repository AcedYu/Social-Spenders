import React from "react";

import Nav from "../components/Nav.js";
import HeaderSpacer from "../components/HeaderSpacer.js";
import Sidebar from "../components/Sidebar.js";
import Feed from "../components/Feed.js";

const Home = () => {
  return (
    <div>
      <Nav page="Home" />
      <div className="row">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Home;