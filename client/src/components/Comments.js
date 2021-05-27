import React from "react";

import CommentsEntry from "./CommentsEntry.js"

const Comments = ({ comments }) => {
  return (
    <div>
      <div className="input-group mt-1">
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"
          name="comment"
          placeholder="Your comment here"
        />
        <button
          className="btn btn-primary"
          type="button"
          id="button-addon2"
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