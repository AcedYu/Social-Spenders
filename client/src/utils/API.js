import axios from "axios";

export default {
    // Gets all posts
    getPosts: function() {
      return axios.get("/api/post");
    },
    getMyPosts: function() {
      return axios.get("/api/post/myposts");
    },
    getPostComments: function(post_id) {
      return axios.get("api/comment/" + post_id);
    },
    // Gets the post with the given id
    getPost: function(id) {
      return axios.get("/api/post/" + id);
    },
    getSession: function(id) {
      return axios.get("/api/user/me");
    },
    getUser: function(id) {
      return axios.get("/api/user/" + id);
    },
    getMyFollowing: function() {
      return axios.get("/api/user/myfollowing");
    },
    getMyFollowers: function() {
      return axios.get("/api/user/myfollowers");
    },
    // Deletes the post with the given id
    // deletePost: function(id) {
    //   return axios.delete("/api/post/" + id);
    // },
    // Saves a post to the database
    login: function(data) {
      return axios.post("/api/user/login", data);
    },
    logout: function() {
      return axios.post("/api/user/logout");
    },
    postUser: function(data) {
      return axios.post("/api/user", data);
    },
    postPost: function(postData) {
      return axios.post("/api/post", postData);
    },
    postComment: function(commentData) {
      return axios.post("/api/comment", commentData);
    }
}