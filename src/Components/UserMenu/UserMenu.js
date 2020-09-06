import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../Redux/Selections/authSelector'
import authOperations from  '../../Redux/Operations/authOperations'



const UserMenu = ({ avatar, name, onLogoutUser }) => (
  <div >
    <img src={avatar} alt="" width="32" />
    <span >Welcome, {name}</span>
    <button type="button" onClick={onLogoutUser}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar:
    'https://icon-library.net/images/avatar-icon-images/avatar-icon-images-7.jpg',
});

export default connect(mapStateToProps, { onLogoutUser: authOperations.logOut })(UserMenu);