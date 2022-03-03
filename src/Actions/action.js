import { GET_POSTS, GET_POST, DELETE_POST, CREATE_POST, UPDATE_POST } from "./types";
import PostService from "../Services/PostService";

export const retrievePosts = () => async (dispatch) => {
  try {
console.log("reterivePost")
    const res = await PostService.getAllPosts();
console.log(res)    
dispatch({
      type: GET_POSTS,
      payload: res.data,
    });
    return (Promise.resolve(res.data.data));
  } catch (err) {
    console.log(err);
  }
};
export const retrieveAPost = (id) => async (dispatch) => {
  try {
    const res = await PostService.getAPosts(id);
    dispatch({
      type: GET_POST,
      payload: console.log(res.data),
    });
    return Promise.resolve(res.data.data);
  } catch (err) {
    console.log(err);
  }
};

export const deleteAPost = (id) => async (dispatch) => {
  try {
    await PostService.deletePost(id);
    dispatch({
      type: DELETE_POST,
      payload: { id },
    });
  } catch (err) {
    console.log(err);
  }
};
export const createPost = (postData) => async (dispatch) => {
  try {
    const res = await PostService.create(postData);
    dispatch({
      type: CREATE_POST,
      payload: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
export const updateApost = (id, data) => async (dispatch) => {
  try {
    const res = await PostService.updatePost(id, data);
    dispatch({
      type: UPDATE_POST,
      payload: data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};
















// import { ContactSupportOutlined } from "@material-ui/icons";
// import axios from "axios";
// import { GET_POST } from "./types";

// const getAllPosts = (post) => {
//   return {
//     type: GET_POST,
//     payload: post,
//   };
// };

// export const fetchAllPosts = () => {
//   console.log("fetch called");
//   return (dispatch) => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts?_limit=10")
//       .then((res) => {
//         console.log(res.data);
//         dispatch(getAllPosts(res.data));
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
// };


