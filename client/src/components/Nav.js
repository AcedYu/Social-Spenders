import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import API from "../utils/API.js";

const Navigation = ({ page }) => {
  function logout() {
    API.logout()
      .then(() => {
        document.location.replace('/');
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <Navbar bg="white" variant="primary" className="border-bottom" sticky="top">
        <Navbar.Brand href="/home">
          <img
            alt="Failed to Load"
            src="./img/socialspendersnav.png"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <h1 className="mx-auto">{page}</h1>
        <Nav className="ml-auto">
          <Nav.Link href="/home" className="border-left">
            <h4>Home</h4>
          </Nav.Link>
          <Nav.Link href="/profile" className="border-left">
            <h4>Profile</h4>
          </Nav.Link>
          <Nav.Link href="/market" className="border-left">
            <h4>Market</h4>
          </Nav.Link>
          <Nav.Link className="border-left border-right" onClick={logout}>
            <h4>Sign Out</h4>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;