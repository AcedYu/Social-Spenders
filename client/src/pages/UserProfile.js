import React from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import UserProfileData from "../components/UserProfileData.js";

const UserProfile = () => {
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