// import { createSelector } from '@reduxjs/toolkit';


const getContactSelection = state => state.contacts
const getAlertSelection = state => state.alert
const getFilterSelection = state => state.filter
const getContactFilterSelection = ([getContactSelection], state => state.contacts.filter(contact => contact.name.toLowerCase().includes(state.filter.toLowerCase()))) 
export default { getContactSelection, getAlertSelection, getFilterSelection, getContactFilterSelection }
