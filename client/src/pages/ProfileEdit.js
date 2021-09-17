import React from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import ProfileData from "../components/ProfileData.js";
import Editor from "../components/Editor.js";

const ProfileEdit = () => {
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
      <Nav page="Profile Editor"/>
      <div className="row container-fluid">
        <Sidebar />
        <Editor />
      </div>
    </div>
  );
}

export default ProfileEdit;