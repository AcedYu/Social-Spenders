import React from "react";
import { Card } from "react-bootstrap";
import moment from "moment";

const CommentsEntry = ({user, content, timestamp}) => {
  var formatDate = moment(timestamp).format('MMMM Do YYYY');
  var timeAgo= moment(timestamp).fromNow();
  return (
    <Card className="my-1">
      <Card.Body className="py-0">
        <Card.Text>
          {content}
          <p className="text-secondary mb-0">@{user}</p>
          <p className="text-secondary mb-0">{timeAgo} ({formatDate})</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentsEntry;