import React from "react";
import { ListGroup } from "react-bootstrap";
import { useStoreContext } from "../utils/GlobalState";
import { GET_FOLLOWERS } from "../utils/actions";
import API from "../utils/API";

const FollowerList = () => {
  const [state, dispatch] = useStoreContext();
  const [followers, setFollowers] = React.useState([]);
  const [formObject, setFormObject] = React.useState({});

  React.useEffect(() => {
    getFollowers();
  },[]);

  const getFollowers = () => {
    API.getMyFollowers()
      .then(results => {
        dispatch({
          type: GET_FOLLOWERS,
          followers: results.data
        });
        setFollowers(results.data);
      })
      .catch(err => console.log(err));
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormObject({ ...formObject, [name]: value });
    setFollowers(state.followers.filter(user => user.name.toLowerCase().includes(value.toLowerCase())))
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
          followers.map(user => (
            <ListGroup.Item action variant="light" className="py-1 text-center">{user.name}</ListGroup.Item>
          ))
        }
      </ListGroup>
    </div>
  )
}

export default FollowerList;