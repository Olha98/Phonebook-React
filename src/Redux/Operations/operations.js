import actions from '../Actions/Actions'
import axios from 'axios'

const addContactOperation = contact => dispatch => {

  dispatch(actions.addContactRequest())
  axios.post('https://redux-async.firebaseio.com/contacts.json', contact)
    .then(responce => {

      console.log(responce, "responce")
      dispatch(actions.addContactSuccess({ ...contact, id: responce.data.name }))
    }).catch(error => dispatch(actions.addContactError(error)))
}


const removeContactOperation  = id => dispatch => {
  dispatch(actions.removeContactRequest());
  axios
    .delete(`https://redux-async.firebaseio.com/contacts/${id}.json`)
.then(() => {
  console.log(id,"SuccessID")
  dispatch(actions.removeContactSuccess(id))})
    .catch(error => {
      console.log(error,"error")
      dispatch(actions.removeContactError(error))});
};



const getContactOperation = () => async dispatch => {

  dispatch(actions.getContactsRequest())
  try {
    const result = await axios.get('https://redux-async.firebaseio.com/contacts.json');
    console.log(result, "RESULT")
    const keys = Object.keys(result.data);
    const data = keys.reduce((acc, key) => {
      acc.push({ id: key, ...result.data[key] })
      return acc;
    }, [])
    dispatch(actions.getContactsSuccess(data))
  } catch (error) {
    dispatch(actions.getContactsError("Something went wrong"))
  }
 
}



export default { addContactOperation, getContactOperation, removeContactOperation }