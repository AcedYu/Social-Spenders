import React from "react";
import API from "../utils/API.js";
import { Card, Button, Image } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { SET_USER, GET_FOLLOWERS, GET_FOLLOWING, UPDATE_POSTS } from "../utils/actions";

import CreatePost from "./CreatePost.js";
import FeedEntry from "./FeedEntry.js";

const ProfileData = () => {
  const [state, dispatch] = useStoreContext();

  React.useEffect(() => {
    getPosts();
  }, []);

  const getPosts = () => {
    API.getMyPosts()
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
      <Card className="my-1">
        <div className="row">
          <div className="col-4">
            <Image src={state.user.image} roundedCircle height="200" width="200" className="border ml-2 my-2" />
          </div>
          <Card.Body className="col-4">
          <h1>@{state.user.name}</h1>
          <h5>{state.user.email}</h5>
          <h5 className="text-secondary">{state.following.length} Following | {state.followers.length} Followers</h5>
          </Card.Body>
          <div className="col-4">
            <Button size="lg" className="float-right mx-1 my-1" href="/editprofile">Edit Profile</Button>
          </div>
        </div>
      </Card>
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

export default ProfileData;