import React, {useState, useContext, useEffect} from 'react';
import  {GlobalContext} from './GlobalContext';

function ProfileOptions() {

  const {state,dispatch} = useContext(GlobalContext);
  const [userName, setUserName] = useState('')
  const [profilePictureUrl, setProfilePictureUrl] = useState('')
  const {users,currentUser} = state;

  const currentUserObj = users.find(user => user.userId === currentUser) || {
    userName: '',
    profilePictureUrl: ''}

    useEffect(() => {
      setUserName(currentUserObj.userName);
      setProfilePictureUrl(currentUserObj.profilePictureUrl)
    }, [users])

    function handleNewProfile(e) {
      e.preventDefault();
      dispatch({type:'UPDATE_CURRENT_USER', userName, profilePictureUrl})
    }

  return (
    <div>
      <h2>Profile Option</h2>
      <form onSubmit={handleNewProfile}>
        <label>New post content</label>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        ></input>
        <input
          type="url"
          placeholder="Paste a picture url here"
          value={profilePictureUrl}
          onChange={(e)=> setProfilePictureUrl(e.target.value)}
          required
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default ProfileOptions
