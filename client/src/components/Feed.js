import React from "react";
import { useStoreContext } from "../utils/GlobalState";
import { UPDATE_POSTS } from "../utils/actions";
import API from "../utils/API";

import FeedEntry from "./FeedEntry.js";

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
  return (
    <div className="col-9">
      {
        state.posts.map((post) => (
          <FeedEntry
          key={post.id}
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