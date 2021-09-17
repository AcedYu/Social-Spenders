import React from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import ProfileData from "../components/ProfileData.js";

const Profile = () => {
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
      <Nav page="My Profile" />
      <div className="row container-fluid">
        <Sidebar />
        <ProfileData />
      </div>
    </div>
  );
}

export default Profile;