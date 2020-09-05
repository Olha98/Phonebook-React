import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import Actions from '../Actions/Actions'


const onSetContact = (state, action) => [...action.payload];
const onAddTask = (state, action) => [...state, action.payload];
const onRemoveContact = (state, action) => state.filter(contact => contact.id !== action.payload);

const contacts = createReducer([], {
  [Actions.getContactsSuccess]: onSetContact,
  [Actions.addContactSuccess]: onAddTask,
  [Actions.removeContactSuccess]: onRemoveContact,
})

const filter = createReducer('', {
  [Actions.filterChange]: (state, action) => action.payload.filter,
})

const alert = (state = false, { type, payload }) => {

  switch (type) {
    case Actions.alertError.type:
      return (state = !state);
    default:
      return state;
  }
};

export default combineReducers({ contacts, filter, alert })
