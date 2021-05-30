import React from "react";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import UserProfileData from "../components/UserProfileData.js";

const UserProfile = () => {
  const user_id = document.location.pathname.split('=')[1];
  return (
    <div>
      <Nav/>
      <div className="row container-fluid">
        <Sidebar />
        <UserProfileData />
      </div>
    </div>
  );
}

export default UserProfile;