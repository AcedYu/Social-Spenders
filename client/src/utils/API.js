import axios from "axios";

export default {
  // returns a boolean for the login session (true if logged in false if not)
  auth: function () {
    return axios.get("/api/user/auth");
  },
  // returns a boolean for the admin(true if admin false if not)
  admin_check: function () {
    return axios.get("/api/user/admincheck");
  },
  // Gets all posts
  getPosts: function () {
    return axios.get("/api/post");
  },
  // Gets the posts of the logged in user
  getMyPosts: function () {
    return axios.get("/api/post/myposts");
  },
  // gets the comment data of the post by id
  getPostComments: function (post_id) {
    return axios.get("api/comment/" + post_id);
  },
  // Gets the post with the given id
  getPost: function (id) {
    return axios.get("/api/post/" + id);
  },
  // get the user data of the logged in user
  getSession: function (id) {
    return axios.get("/api/user/me");
  },
  // get the user data by id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // gets a user's post by id
  getUserPosts: function (id) {
    return axios.get("/api/post/user/" + id);
  },
  // gets the list of who the user (by id) is following
  getUserFollowing: function (id) {
    return axios.get("/api/user/following/" + id);
  },
  // gets the user's followers (by id)
  getUserFollowers: function (id) {
    return axios.get("/api/user/followers/" + id);
  },
  // get the data of who the logged in user is following
  getMyFollowing: function () {
    return axios.get("/api/user/myfollowing");
  },
  // get the data of the logged in user's followers
  getMyFollowers: function () {
    return axios.get("/api/user/myfollowers");
  },
  // API post call to login
  login: function (data) {
    return axios.post("/api/user/login", data);
  },
  // API post call to create a new user and log in
  signup: function (data) {
    return axios.post("/api/user/", data);
  },
  // API post call to log out
  logout: function () {
    return axios.post("/api/user/logout");
  },
  // API post call to create a new user
  postUser: function (data) {
    return axios.post("/api/user", data);
  },
  // API call to create a post, the user automatically defaults to the logged in user
  postPost: function (postData) {
    return axios.post("/api/post", postData);
  },
  // API call to create a follow entry
  follow: function (followData) {
    return axios.post("/api/user/follow", followData);
  },
  // API call to create a comment, the user automatically defaults to the logged in user
  postComment: function (commentData) {
    return axios.post("/api/comment", commentData);
  },
  // API call to delete a post by id
  deletePost: function (id) {
    return axios.delete("/api/post/" + id);
  },
  // API call to delete a follow relationship between the logged in user and the user id
  unFollow: function (id) {
    return axios.delete("/api/user/unfollow/" + id);
  },
  // API call to update the logged in user's name
  editName: function (userData) {
    return axios.put("api/user/username", userData);
  },
  // API call to update the logged in user's profile picture
  editPhoto: function (userData) {
    return axios.put("api/user/image", userData);
  },
  // API call to get the Amazon Catalog
  getAmazon: function (query) {
    return axios.request({
      method: 'GET',
      url: 'https://amazon24.p.rapidapi.com/api/product',
      params: { country: 'US', keyword: query, page: '1' },
      headers: {
        'x-rapidapi-key': '2657395c54mshbcc73a3e8464975p1ab501jsndd8715b1da49',
        'x-rapidapi-host': 'amazon24.p.rapidapi.com'
      }
    });
  },
  stripeCheckout: function (data) {
    return axios.post('/api/stripe/checkout', data);
  }
}