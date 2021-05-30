import React from "react";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import Feed from "../components/Feed.js";

const Home = () => {
  return (
    <div>
      <Nav page="Home Feed" />
      <div className="row container-fluid">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Home;