import React from "react";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import UserProfileData from "../components/UserProfileData.js";

const UserProfile = () => {
  return (
    <div>
      <Nav page="User Profile"/>
      <div className="row container-fluid">
        <Sidebar />
        <UserProfileData />
      </div>
    </div>
  );
}

export default UserProfile;