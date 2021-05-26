import React from "react";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";

const Profile = () => {
  return (
    <div>
      <Nav page="My Profile"/>
      <Sidebar />
    </div>
  );
}

export default Profile;