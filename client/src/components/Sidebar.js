import React from "react";
import { Nav, Navbar, Accordion, Card, Button, Image } from "react-bootstrap";

const Sidebar = () => {
  return (
    <div className="col-2">
      <Accordion className="pl-1" defaultActiveKey="0">
      <Card className="my-1">
          <p className="text-center">ACCOUNT NAME HERE?</p>
          <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfXS7fJN_7a8ya0FnVl5NP2-3g_IwPDA6WzuqNjXNyJ2ariI_7ch0xx5EhXSFMBHpg-v4&usqp=CAU" thumbnail/>
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
                  name="following_search"
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
                  name="followers_search"
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