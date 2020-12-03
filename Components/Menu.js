import React, {useContext} from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Styled from 'styled-components';
import {GlobalContext} from './GlobalContext';

const NavStyles = styled.nav `
  ul {
    display:flex;
    justify-content: space-between;
    align-items: center;
    list-style:none;
    padding: 0;
    margin:0;
  }
`

const ProfileLinkStyles = styled.div `
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  gap: 10px;
  img {
    border-raduis: 50%;
    width: 35px;
    height: 35px;
  }
`
function Menu() {

  const {state} = useContext(GlobalContext);
  const {users, currentUser} = state;

  const currentUserObj = users.find(user => user.userId === currentUser);
  return (
    <div>
      <h1>Onja Book</h1>
      <NavStyles>
        <ul>
          <li>
            <Link to="/">Feed</Link>
          </li>
          <li>
            <Link to="/add">Add a post</Link>
          </li>
          <li>
            <Link to="/options">
              {currentUserObj && (
                <ProfileLinkStyles>
                  <span>{currentUserObj.userName}</span>
                  <img src={currentUserObj.profilePictureUrl}/>
                </ProfileLinkStyles>
              )}
            </Link>
          </li>
        </ul>
      </NavStyles>
    </div>
  )
}

export default Menu
