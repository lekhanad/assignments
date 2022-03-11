import { ADD_COMMENT, ADD_POST, REMOVE_POST } from "./types";

export function addPost(post) {
  return {
    type: ADD_POST,
    post,
  };
}

export function removePost(index) {
  return {
    type: REMOVE_POST,
    index,
  };
}

export function addComment(comment, postId) {
  return {
    type: ADD_COMMENT,
    comment,
    postId,
  };
}

// export function addPost(post){
//     return{
//         type:ADD_POST,
//         post
//     }
// }
