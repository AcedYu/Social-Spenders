import React from "react";
import API from "../utils/API.js";
import { Card, Button, Image } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";

import FeedEntry from "./FeedEntry.js";

const UserProfileData = () => {
  const [state, dispatch] = useStoreContext();
  const [user, setUser] = React.useState({});
  const [following, setFollowing] = React.useState([]);
  const [followers, setFollowers] = React.useState([]);
  const [posts, setPosts] = React.useState([]);
  const user_id = document.location.pathname.split('=')[1];

  React.useEffect(() => {
    getUser();
    getFollowers();
    getFollowing();
    getPosts();
  }, []);

  const getUser = () => {
    API.getUser(user_id)
      .then(res => {
        setUser(res.data)
      })
      .catch(err => console.log(err));
  }

  const getFollowers = () => {
    API.getUserFollowers(user_id)
      .then(res => {
        setFollowers(res.data)
      })
      .catch(err => console.log(err));
  }

  const getFollowing = () => {
    API.getUserFollowing(user_id)
      .then(res => {
        setFollowing(res.data)
      })
      .catch(err => console.log(err));
  }

  const getPosts = () => {
    API.getUserPosts(user_id)
      .then(res => {
        setPosts(res.data)
      })
      .catch(err => console.log(err));
  }
  return (
    <div className="col-9">
      <Card className="my-1">
        <div className="row">
          <div className="col-4">
            <Image src={user.image} roundedCircle height="200" width="200" className="border ml-2 my-2" />
          </div>
          <Card.Body className="col-4">
          <h1>@{user.name}</h1>
          <h5>{user.email}</h5>
          <h5 className="text-secondary">{following.length} Following | {followers.length} Followers</h5>
          </Card.Body>
          <div className="col-4">
            <Button size="lg" className="float-right mx-1 my-1">Follow</Button>
          </div>
        </div>
      </Card>
      {
        posts.map((post) => (
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

export default UserProfileData;