import React, {createContext, useReducer, useEffect} from 'react';
import postData from '../postsData.json';
import userData from '../userData.json';
const GlobalContext = createContext();

function GlobalContextProvider({children}) {

  const [state, dispatch]= useReducer((state, action) => {
    switch(action.type){
      case 'LOAD_JSON_DATA': {
        return {
          ...state,
          loading: false,
          posts: postData,
          users: userData
        }
      }
      case"ADD_NEW_POST": {
        return {
          ...state,
          posts: [...state.posts, action.newPost]
        }
      }
      case"UPDATE_CURRENT_USER": {
        const newUsersArray = state.users.map(user => {
          if(user.userId === state.currentUser) {
            // update the user and return it
            return {
              ...user,
              userName: action.userName,
              profilePictureUrl: action.profilePictureUrl

            }

          }
          return user;
        })
        return {
          ...state,
          users: newUsersArray
        }
      }
      case "SUBMIT_COMMENT" : {
        const newPosts = state.posts.map(post => {
          if (post.postId == action.postId) {
            return {
              ...post,
              comments: [...post.comments, action.comment],
            };
          }
          return post;
        });
        return {
          ...state,
          posts: newPosts,
        };
      }
      default: {
        console.error('No actions defined for', action.type);
        break;
      }
    }
    return state;
  }, {
    loading: true,
    posts: [],
    users: [],
    currentUser: '1'
  })

  useEffect(() => {
    setTimeout(() => {
      dispatch({type:"LOAD_JSON_DATA"})
    }, 1000)
  }, [])
  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalContextProvider, GlobalContext}
