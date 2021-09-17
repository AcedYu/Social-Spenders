import React from "react";
import { Redirect } from "react-router-dom";
import API from "../utils/API";

import Nav from "../components/Nav.js";
import Sidebar from "../components/Sidebar.js";
import Feed from "../components/Feed.js";

const Home = () => {
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
      <Nav page="Home Feed" />
      <div className="row container-fluid">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Home;