import React from "react";

const Nav = ({page}) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-primary border-bottom fixed-top">
      <div className="container-fluid">
      <img src="./img/socialspendersnav.png" alt="Social Spenders" class="d-inline-block align-text-top"/>
        <div className="collapse navbar-collapse">
          <div className="navbar-nav ms-md-auto">
            <h1 className="text-primary">{page}</h1>
          </div>
          <ul className="navbar-nav ms-md-auto">
            <li className="nav-item mx-2">
              <a className="nav-link" href="/home">
                <h4>Home</h4>
              </a>
            </li>
            <li className="nav-item mx-2">
              <a className="nav-link" href="/profile">
                <h4>My Profile</h4>
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/market">
                <h4>Marketplace</h4>
              </a>
            </li>
            <li className="nav-item mx-auto">
              <a className="nav-link" href="/">
                <h4>Sign Out</h4>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;