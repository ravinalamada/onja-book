import React, {useContext} from 'react'
import {GlobalContext} from './GlobalContext'

function Feed() {
  const {state, dispatch} = useContext(GlobalContext);
  const {posts, loading} = state;
  console.log(posts);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && posts && (
        <ul>
          {posts.map(post => (
            <li key={post.postId}>{post.postTextContent}</li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default Feed
