import React from "react";
import API from "../utils/API";
import { Card, Button } from "react-bootstrap";

const CreatePost = () => {
  const [formObject, setFormObject] = React.useState({});

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
      .catch(err => alert(err + "\nPlease type in valid content for your post\n REPLACE THIS ALERT WITH A MODAL IF TIME ALLOWS"))
  }

  return (
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
  );
}

export default CreatePost;