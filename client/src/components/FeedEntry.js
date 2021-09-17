import React from "react";
import moment from "moment";
import { Card, Button, Accordion, Image } from "react-bootstrap";
import API from "../utils/API";

import Comments from "./Comments.js";

const FeedEntry = ({ post_id, user_id, user, pic, timestamp, comments, content, image, isAdmin }) => {
  var formatDate = moment(timestamp).format('MMMM Do YYYY');
  var timeAgo = moment(timestamp).fromNow();
  var page = document.location.pathname;

  const deletePost = () => {
    API.deletePost(post_id)
      .then(res => {
        window.location.reload();
      })
      .catch(err => alert(err + "\n Failed to Delete the Post"))
  }

  return (
    <Card className="my-3">
      <Card.Body className="py-1">
        <Card.Title>
          <Image src={pic} roundedCircle height="60" width="60" className="border" />
          <a href={"/profile&user=" + user_id}>
            @{user}
          </a>
          {
            (page === "/profile" || !!isAdmin) && <Button variant="danger" size="sm" className="float-right" onClick={deletePost}>Delete Post</Button>
          }
        </Card.Title>
        <Card.Text>
          {content}
        </Card.Text>
        <Card.Text className="text-secondary text-right">
          posted {timeAgo} | {formatDate}
        </Card.Text>
      </Card.Body>
      {
        !!image &&
        <div className="container d-flex justify-content-center">
          <Image src={image} alt="failed to load"/>
        </div>
      }
      <Accordion>
        <Card>
          <Accordion.Toggle as={Button} variant="outline-primary" eventKey="0">
            View Comments
            </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body className="px-1 py-0">
              <Comments
                post_id={post_id}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Card>
  )
}

export default FeedEntry;