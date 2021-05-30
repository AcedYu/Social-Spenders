import React from "react";
import { Accordion, Card, Button, Image } from "react-bootstrap";
import API from "../utils/API.js";

import FollowerList from "./FollowerList.js";
import FollowingList from "./FollowingList.js";

const Sidebar = () => {
  const [user, setUser] = React.useState({});

  React.useEffect(() => {
    getSession();
  }, []);

  function getSession() {
    API.getSession()
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="col-2 pl-1">
      <Accordion defaultActiveKey="0">
        <Card className="my-1">
          <h3 className="text-center">{user.name}</h3>
          <Image src={user.image} thumbnail />
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
            Following
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="px-1 py-0">
              <FollowingList/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="1">
            Followers
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="px-1 py-0">
              <FollowerList/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default Sidebar;