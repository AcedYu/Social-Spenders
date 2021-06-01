import React from "react";
import API from "../utils/API";
import { Card, Button, Modal } from "react-bootstrap";

const CreatePost = () => {
  const [formObject, setFormObject] = React.useState({});
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var postBody = {
      content: formObject.post
    }
    API.postPost(postBody)
      .then(res => {
        window.location.reload()
      })
      .catch(err => handleShow())
  }

  return (
    <>
      <Card className="px-3 py-0 my-1">
        <form onSubmit={handleSubmit}>
          <h1>Create a New Post</h1>
          <textarea
            className="form-control my-1"
            rows="4"
            placeholder="Content"
            name="post"
            onChange={handleInputChange}
          />
          <Button variant="outline-primary" className="mb-1" type="submit">Post</Button>
        </form>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Post Failure</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Please type in valid content for your post
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreatePost;