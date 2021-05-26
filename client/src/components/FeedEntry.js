import React from "react";
import moment from "moment";
import { Card, Button, Accordion } from "react-bootstrap";

import Comments from "./Comments.js";

const FeedEntry = ({ user, timestamp, comments, content}) => {
  var formatDate = moment(timestamp).format('MMMM Do YYYY');
  var timeAgo= moment(timestamp).fromNow();
  return (
    <Card className="my-3">
      <Card.Body>
        <Card.Title>@{user}</Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Card.Text className="text-secondary">
          posted {timeAgo} ({formatDate})
        </Card.Text>
      </Card.Body>
      <Accordion>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-primary" eventKey="0">
            View Comments
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="px-1 py-0">
              <Comments
              comments = {comments}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Card>
  )
}

export default FeedEntry;