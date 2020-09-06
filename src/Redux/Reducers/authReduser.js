import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from '../Actions/AuthAction'

// const onSetContact = (state, action) => [...action.payload];
const onAddNewUser = (state, action) => [...state, action.payload];
// const onLogineUser = (state, action) => [...state, action.payload];
// const onlogoutUser = (state, action) => [...state, action.payload];
// const onCurrentUser = (state, action) => [...state, action.payload];

const users = createReducer([], {
  [actions.addContactSuccess]: onAddNewUser,
  // [actions.loginSuccess]: onLogineUser,
  // [actions.logoutSuccess]: onlogoutUser,
  // [actions.getCurrentUserSuccess]: onCurrentUser,
})

export default users