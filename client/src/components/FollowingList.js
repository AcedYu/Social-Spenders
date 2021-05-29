import React from "react";
import { ListGroup } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { GET_FOLLOWING } from "../utils/actions";
import API from "../utils/API";

const FollowingList = () => {
  const [state, dispatch] = useStoreContext();
  const [following, setFollowing] = React.useState([]);
  const [formObject, setFormObject] = React.useState({});

  React.useEffect(() => {
    getFollowing();
  },[]);

  const getFollowing = () => {
    API.getMyFollowing()
      .then(results => {
        dispatch({
          type: GET_FOLLOWING,
          following: results.data
        });
        setFollowing(results.data)
      })
      .catch(err => console.log(err));
  }

  const handleInputChange = (event) =>  {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    setFollowing(state.following.filter(user => user.name.toLowerCase().includes(value.toLowerCase())));
  };

  return (
    <div>
      <div className="input-group mb-2 mt-1">
        <input
          type="text"
          className="form-control"
          name="filter"
          placeholder="Filter Following"
          onChange={handleInputChange}
        />
      </div>
      <ListGroup>
        {
          following.map(user => (
            <ListGroup.Item action variant="light" className="py-1 text-center">{user.name}</ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  )
}

export default FollowingList;