import React from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import Feed from "../components/Feed.js";

const AdminDashboard = () => {
  const [auth, setAuth] = React.useState(true);
  const [admin, setAdmin] = React.useState(false);

  React.useEffect(() => {
    authorize();
    checkadmin();
  }, []);

  const authorize = () => {
    API.auth()
      .then(result => {
        setAuth(result.data)
      })
      .catch(err => console.log(err));
  }

  const checkadmin = () => {
    API.admin_check()
      .then(result => {
        console.log(result.data)
        setAdmin(result.data)
        if (!admin) {
          return <Redirect to="/home" />
        }
      })
      .catch(err => console.log(err));
  }

  if (!auth) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <Nav page="Administrator's Dashboard" />
      <div className="row container-fluid">
        <Sidebar />
        <Feed isAdmin = {admin}/>
      </div>
    </div>
  );
}

export default AdminDashboard;