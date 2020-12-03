import React, {useContext} from 'react'
import {GlobalContext} from './GlobalContext';
import AddComment from './AddComment';

function Feed({post, submitComment}) {
  const {state, dispatch} = useContext(GlobalContext);
  const {posts, loading} = state;
  const Comments = post.comments;
  const Likes = post.likes;
  const Posts = state.posts;
  console.log(Posts);

  function handleLikeBtn() {
    const isLiked = Likes.some(post => post.id === state.currentUser.userId);
        console.log(isLiked)
        if(!isLiked) {
            const updatedPost = Posts.map(post => {
                if(post.postId === post.id) {
                    return {
                        ...post,
                        likes: [...post.likes, user]
                    }
                }
                return updatedP;
            })
            dispatch({type: "SET_POST_LIST", valueUpdated: updatedPost})
    } else {
        const updatedPost = Posts.map(post => {
            if(post.id === post.id) {
                const newLikes= post.likes.filter(like => like.id !== state.currentUser)
                return {
                    ...post,
                    likes: newLikes
                }
            }
            return post;
        })
        dispatch({type: "LIKE_POST", valueUpdated: updatedPost})
    }
  }

  return (
        <article>
        <section>
          <div>
            <img src={post.profile} alt={post.userName} />
            <p>{post.userName}</p>
          </div>
          <p>Date: {post.date}</p>
        </section>
        <section>
          <p>{post.postTextContent}</p>
          <img src={post.imgUrl} alt={post.userName}/>
        </section>
        <section>
          <button>Like</button>
          <span></span>
        </section>
        <ul>
        <li>
          <div>
            <img src={post.profile}/>
            <p>{post.userName}</p>
          </div>
          {Comments.map(comment => <p key={post.postId}>{comment.commentTextContent}</p>)}
        </li>
        </ul>
        <AddComment submitComment={(e) => submitComment(e, post.postId)}/>
      </article>
  )
}

export default Feed
