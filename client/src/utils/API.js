import axios from "axios";

export default {
    // Gets all posts
    getPosts: function() {
      return axios.get("/api/post");
    },
    getMyPosts: function() {
      return axios.get("/api/post/myposts");
    },
    // Gets the post with the given id
    getPost: function(id) {
      return axios.get("/api/post/" + id);
    },
    // Deletes the post with the given id
    // deletePost: function(id) {
    //   return axios.delete("/api/post/" + id);
    // },
    // Saves a post to the database
    login: function(data) {
      return axios.post("/api/user/login", data);
    },
    postUser: function(data) {
      return axios.post("/api/user", data);
    },
    postPost: function(postData) {
      return axios.post("/api/post", postData);
    }
}