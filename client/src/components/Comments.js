import React from "react";
import API from "../utils/API";
import { Modal, Button } from "react-bootstrap";

import CommentsEntry from "./CommentsEntry.js"

const Comments = ({ post_id }) => {
  const [comments, setComments] = React.useState([]);
  const [formObject, setFormObject] = React.useState({});
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  React.useEffect(() => {
    getComents(post_id);
  }, []);

  const getComents = (id) => {
    API.getPostComments(id)
      .then(res => {
        setComments(res.data)
      })
      .catch(err => console.log(err));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = (event) => {
    var commentbody = {
      content: formObject.comment,
      post_id: post_id
    }
    API.postComment(commentbody)
      .then((res) => {
        setFormObject({});
        getComents(post_id);
      })
      .catch(err => handleShow())
  }

  return (
    <>
      <div>
        <div className="input-group mt-1">
          <input
            type="text"
            className="form-control"
            name="comment"
            placeholder="Your comment here"
            onChange={handleInputChange}
          />
          <button
            className="btn btn-primary"
            type="button"
            id="button-addon2"
            onClick={handleSubmit}
          >
            Add Comment
          </button>
        </div>
        {
          comments.map((comment) => (
            <CommentsEntry
              user={comment.user.name}
              pic={comment.user.image}
              content={comment.content}
              timestamp={comment.timestamp}
            />
          ))
        }
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Comment Post Failure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please type in valid content for your comment
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Comments;