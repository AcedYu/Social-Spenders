import React from "react";

import Nav from "../components/Nav.js";
import HeaderSpacer from "../components/HeaderSpacer.js";
import Sidebar from "../components/Sidebar.js";

const Home = () => {
  return (
    <div>
      <Nav page="Home"/>
      <Sidebar />
    </div>
  );
}

export default Home;