import React from "react";
import moment from "moment";
import { Card, Button, Accordion, Image } from "react-bootstrap";

import Comments from "./Comments.js";

const FeedEntry = ({ post_id, user, pic, timestamp, comments, content, refresh}) => {
  var formatDate = moment(timestamp).format('MMMM Do YYYY');
  var timeAgo= moment(timestamp).fromNow();
  return (
    <Card className="my-3">
      <Card.Body className="py-1">
        <Card.Title>
          <Image src={pic} roundedCircle height="60" width="60" className="border"/>
          @{user}
        </Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Card.Text className="text-secondary text-right">
          posted {timeAgo} | {formatDate}
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
              post_id = {post_id}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Card>
  )
}

export default FeedEntry;