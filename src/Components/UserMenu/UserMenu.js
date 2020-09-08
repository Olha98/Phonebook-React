import React from 'react';
import { connect } from 'react-redux';
import authSelectors from '../../Redux/Selections/authSelector'
import authOperations from  '../../Redux/Operations/authOperations'
import img from "../../image/88841e3ffd244bb0c9c37ce05256e446.gif"
import css from "./UserMenu.module.css"



const UserMenu = ({ avatar, name, onLogoutUser }) => (
  <div >
    <img src={avatar} alt="" width="32"  className={css.userMenu_img}/>
    <span >Welcome, {name}</span>
    <button type="button" onClick={onLogoutUser} className={css.userMenu_Button}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  name: authSelectors.getUserName(state),
  avatar: `${img}`,
});

export default connect(mapStateToProps, { onLogoutUser: authOperations.logOut })(UserMenu);