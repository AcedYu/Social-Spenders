import React from "react";
import { Accordion, Card, Button, Image } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { SET_USER } from "../utils/actions";
import API from "../utils/API.js";

import UserList from "./UserList.js"

const Sidebar = () => {
  const [state, dispatch] = useStoreContext();

  React.useEffect(() => {
    getSession();
  }, []);

  function getSession() {
    API.getSession()
      .then(res => {
        dispatch({
          type: SET_USER,
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="col-2">
      <Accordion className="pl-1" defaultActiveKey="0">
        <Card className="my-1">
          <h3 className="text-center">{state.user.name}</h3>
          <Image src={state.user.image} thumbnail />
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="0">
            Following
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="px-1 py-0">
              <UserList type="Following" list={state.user.following}/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-secondary" eventKey="1">
            Followers
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body className="px-1 py-0">
              <UserList type="Followers" list={state.user.followed_by}/>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  )
}

export default Sidebar;