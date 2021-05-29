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
    getSession();
    getFollowers();
    getFollowing();
    getPosts();
  }, []);

  const getSession = () => {
    API.getSession()
      .then(res => {
        dispatch({
          type: SET_USER,
          user: res.data
        });
      })
      .catch(err => console.log(err));
  }

  const getFollowers = () => {
    API.getMyFollowers()
      .then(results => {
        dispatch({
          type: GET_FOLLOWERS,
          followers: results.data
        });
      })
      .catch(err => console.log(err));
  }

  const getFollowing = () => {
    API.getMyFollowing()
      .then(results => {
        dispatch({
          type: GET_FOLLOWING,
          following: results.data
        });
      })
      .catch(err => console.log(err));
  }

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
            <Button size="lg" className="float-right mx-1 my-1">Edit Profile</Button>
          </div>
        </div>
      </Card>
      <CreatePost />
      {
        state.posts.map((post) => (
          <FeedEntry
          post_id={post.id}
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