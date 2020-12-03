import React, {useContext} from 'react'
import {GlobalContext} from './GlobalContext';
import Feed from './Feed';


function MappedFeed() {
  const {state, dispatch} = useContext(GlobalContext);
  const {posts, loading} = state;

  function submitComment(e, id) {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch({
      type:"SUBMIT_COMMENT",
      postId:id,
      comment: {
        commentId: Date.now(),
        userId: '121212',
        date: '12423232423',
        commentTextContent:form.commentTextContent.value,
      }
    })
    form.reset();
  }

  return (
    <>
      {loading && <p>Loading...</p>}
      {!loading && posts && (
        <ul>
          {posts.map(post => (
            <Feed key={post.postId} post={post} submitComment={submitComment}/>
          ))}
        </ul>
      )}
    </>

  )
}

export default MappedFeed
