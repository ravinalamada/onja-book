import React, {useState, useContext} from 'react';
import styled from 'styled-components';
import  {GlobalContext} from './GlobalContext';

export const FormStyled = styled.form `
  display:grid;
  gap: 10px;
  grid-template-columns: 200px;
  textarea {
    height: 100px;
  }
`
function AddPost() {
  const [postContent, setPostContent] = useState('')
  const [postImage, setPostImage] = useState('')
  const {state,dispatch} = useContext(GlobalContext);
  const {currentUser} = state;

  function handleNewPost(e) {
    e.preventDefault();
    const newPost = {
      postId: Date.now(),
      date: new Date(),
      userId: currentUser,
      postTextContent: postContent,
      imgUrl: postImage,
      likes: [],
      comments: []
    }

    dispatch({type:"ADD_NEW_POST", newPost})
    resetForm()
  }

  function resetForm() {
    setPostContent('')
    setPostImage('');
  }

  return (
    <div>
      <h2>Add a post</h2>
      <FormStyled onSubmit={handleNewPost}>
        <label>New post content</label>
        <textarea
          placeholder="What's on your mind"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
          required
        ></textarea>
        <input
          type="text"
          placeholder="Paste a picture url here"
          value={postImage}
          onChange={(e)=> setPostImage(e.target.value)}
          required
        />
        <button>Post</button>
      </FormStyled>
    </div>
  )
}

export default AddPost
