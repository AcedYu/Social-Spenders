import React from "react";
import API from "../utils/API";

import CommentsEntry from "./CommentsEntry.js"

const Comments = ({ post_id, comments, refresh }) => {
  const [formObject, setFormObject] = React.useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var commentbody = {
      content: formObject.comment,
      post_id: post_id
    }
    API.postComment(commentbody)
      .then((res) => refresh())
      .catch(err => console.log(err))
  }

  return (
    <div>
      <div className="input-group mt-1">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
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
  )
}

export default Comments;