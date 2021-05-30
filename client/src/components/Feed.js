import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_POSTS } from "../utils/actions";
import API from "../utils/API";

import FeedEntry from "./FeedEntry.js";
import CreatePost from "./CreatePost.js";

const Feed = () => {
  const [state, dispatch] = useStoreContext();

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    API.getPosts()
      .then(results => {
        dispatch({
          type: UPDATE_POSTS,
          posts: results.data
        });
      })
      .catch(err => console.log(err));
  }

  const createPost = (event) => {
    event.preventDefault();
  }

  return (
    <div className="col-9">
      <CreatePost />
      {
        state.posts.map((post) => (
          <FeedEntry
          post_id={post.id}
          user_id={post.user.id}
          user={post.user.name}
          pic={post.user.image}
          content={post.content}
          timestamp={post.timestamp}
          comments={post.comments}
          />
        ))
      }
    </div>
  )
}

export default Feed;