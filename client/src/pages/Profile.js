import React from "react";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import ProfileData from "../components/ProfileData.js";

const Profile = () => {
  return (
    <div>
      <Nav page="My Profile"/>
      <div className="row container-fluid">
        <Sidebar />
        <ProfileData />
      </div>
    </div>
  );
}

export default Profile;