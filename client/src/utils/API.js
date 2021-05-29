import axios from "axios";

export default {
    // Gets all posts
    getPosts: function() {
      return axios.get("/api/post");
    },
    // Gets the posts of the logged in user
    getMyPosts: function() {
      return axios.get("/api/post/myposts");
    },
    // gets the comment data of the post by id
    getPostComments: function(post_id) {
      return axios.get("api/comment/" + post_id);
    },
    // Gets the post with the given id
    getPost: function(id) {
      return axios.get("/api/post/" + id);
    },
    // get the user data of the logged in user
    getSession: function(id) {
      return axios.get("/api/user/me");
    },
    // get the user data by id
    getUser: function(id) {
      return axios.get("/api/user/" + id);
    },
    // gets a user's post by id
    getUserPosts: function(id) {
      return axios.get("/api/post/user/" + id);
    },
    // gets the list of who the user (by id) is following
    getUserFollowing: function(id) {
      return axios.get("/api/user/following/" + id);
    },
    // gets the user's followers (by id)
    getUserFollowers: function(id) {
      return axios.get("/api/user/followers/" + id);
    },
    // get the data of who the logged in user is following
    getMyFollowing: function() {
      return axios.get("/api/user/myfollowing");
    },
    // get the data of the logged in user's followers
    getMyFollowers: function() {
      return axios.get("/api/user/myfollowers");
    },
    // API post call to login
    login: function(data) {
      return axios.post("/api/user/login", data);
    },
    // API post call to log out
    logout: function() {
      return axios.post("/api/user/logout");
    },
    // API post call to create a new user
    postUser: function(data) {
      return axios.post("/api/user", data);
    },
    // API call to create a post, the user automatically defaults to the logged in user
    postPost: function(postData) {
      return axios.post("/api/post", postData);
    },
    // API call to create a comment, the user automatically defaults to the logged in user
    postComment: function(commentData) {
      return axios.post("/api/comment", commentData);
    }
}