import React from "react";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import ProfileData from "../components/ProfileData.js";
import Editor from "../components/Editor.js";

const ProfileEdit = () => {
  return (
    <div>
      <Nav page="Profile Editor"/>
      <div className="row container-fluid">
        <Sidebar />
        <Editor />
      </div>
    </div>
  );
}

export default ProfileEdit;