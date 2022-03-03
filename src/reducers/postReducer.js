import { GET_POSTS, GET_POST, DELETE_POST, UPDATE_POST, CREATE_POST } from "../Actions/types";
const initialState = [];

function postReducer(posts = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_POSTS:
      console.log(payload);
      return payload;
    case CREATE_POST:
      return [...posts, payload];
    case UPDATE_POST:
      return posts.map((post) => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload,
          };
        } else {
          return post;
        }
      });
    case DELETE_POST:
      return posts.filter(({ id }) => id !== payload.id);
    case GET_POST:
      return posts.filter(({ id }) => id === payload.id);
    default:
      return posts
  }
};
export default postReducer;
