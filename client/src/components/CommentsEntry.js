import React from "react";
import { Card, Image } from "react-bootstrap";
import moment from "moment";

const CommentsEntry = ({user, pic, content, timestamp}) => {
  var formatDate = moment(timestamp).format('MMMM Do YYYY');
  var timeAgo= moment(timestamp).fromNow();
  return (
    <Card className="my-2">
      <Card.Body className="py-1">
        <Card.Text>
          <Image src={pic} roundedCircle height="35" width="35" className="border"/>
          {content}
          <p className="text-secondary mb-0">@{user}</p>
          <p className="text-secondary mb-0 text-right">posted {timeAgo} | {formatDate}</p>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CommentsEntry;