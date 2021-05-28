import React, { createContext, useReducer, useContext } from "react";
import {
  REMOVE_POST,
  UPDATE_POSTS,
  ADD_POST,
  GET_FOLLOWING,
  GET_FOLLOWERS,
  FOLLOW,
  SET_USER
} from "./actions.js";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_POSTS:
      return {
        ...state,
        posts: [...action.posts],
      };

    case ADD_POST:
      return {
        ...state,
        posts: [action.post, ...state.posts],
      };

    case REMOVE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => {
          return post._id !== action._id;
        })
      };

    case GET_FOLLOWING:
      return {
        ...state,
        following: [...action.following],
      }
    case GET_FOLLOWERS:
      return {
        ...state,
        followers: [...action.followers],
      }
    case FOLLOW:
      return {
        ...state,
        following: [action.follow, ...state.following],
      }
    case SET_USER:
      return {
        ...state,
        user: action.user,
      }

    default:
      return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    posts: [],
    following: [],
    followers: [],
    user: {
      followed_by: [],
      following: []
    }
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
