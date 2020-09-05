import { createAction } from '@reduxjs/toolkit';

const filterChange = createAction('contacts/filterChange', filter=>({ payload:{filter}}))
const alertError = createAction('contacts/alertError')

const addContactRequest = createAction("contact/ADDTASKREQUEST");
const addContactSuccess = createAction("contact/ADDTASKSUCCESS");
const addContactError = createAction("contact/ADDTASKERROR");

const getContactsRequest = createAction("contact/GETCONTACTREQUEST");
const getContactsSuccess = createAction("contact/GETCONTACTSUCCESS");
const getContactsError = createAction("contact/GETCONTACTERROR");


const removeContactRequest = createAction("contact/removeASKREQUEST");
const removeContactSuccess = createAction("contact/removeTASKSUCCESS");
const removeContactError = createAction("contact/removeTASKERROR");


export default { 
  filterChange, 
  alertError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError
}

