import React from "react";
import { Nav, Navbar, Accordion, Card, Button } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="col-2" sticky="left">
      <Accordion className="pl-0" defaultActiveKey="0">
        <Card>
          <p>ACCOUNT NAME HERE?</p>
          <p>PROFILE PHOTO HERE?</p>
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
            Following
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="px-1 py-0">
              <div className="input-group mb-3 mt-1">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                  name="search"
                  placeholder="Filter Following"
                />
              </div>
              <p>RENDER THE LIST OF WHO YOU ARE FOLLOWING</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="1">
            Followers
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="px-1 py-0">
              <div className="input-group mb-3 mt-1">
                <input
                  type="text"
                  className="form-control"
                  aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
                  name="search"
                  placeholder="Filter Followers"
                />
              </div>
              <p>RENDER THE LIST OF FOLLOWERS</p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default Sidebar;