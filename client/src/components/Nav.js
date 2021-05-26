import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const Navigation = ({ page }) => {
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
          <Nav.Link href="/" className="border-left border-right">
            <h4>Sign Out</h4>
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}

export default Navigation;