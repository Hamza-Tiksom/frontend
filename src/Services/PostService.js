import axios from "axios";

const getAllPosts = () => {
console.log("getAllPost")
  return axios.get('http://localhost:3000/api/v1/posts');
};

const deletePost = (id) => {
  return axios.delete(`http://localhost:3000/api/v1/delete/${id}`)

};
const createPost = (postData) => {
  return axios.post(`https://jsonplaceholder.typicode.com/create`,postData)

};
const updatePost = (id, postData) => {
  return axios.put(`https://jsonplaceholder.typicode.com/todos/${id}`, postData);
};
const getAPost = (id, postData) => {
  return axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`, postData);
};
const PostService = {
  getAllPosts,
  deletePost,
  createPost,
  updatePost,
  getAPost

};
export default PostService;