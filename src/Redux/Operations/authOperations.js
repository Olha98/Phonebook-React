import actions from '../Actions/AuthAction'
import axios from 'axios'

const API_KEY = 'AIzaSyDgH70qExMMRrnefWku9HV88Tyu0rdmRxU'

const addNewUser = user => async dispatch => {
  // const { email, password } = user

  // const newUser = JSON.stringify({ email, password})
  console.log(user, "userer")
  // try {
  //       const result = await axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, newUser)
  //       console.log(result, "RESULT")
       
  //       // dispatch(actions.getContactsSuccess(data))
  //     } catch (error) {
  //       // dispatch(actions.getContactsError("Something went wrong"))
  //     }
 try {
        const result = await axios.post(`https://redus-auth.firebaseio.com/users.json`, user)
        console.log(result, "RESULT")
       
        // dispatch(actions.getContactsSuccess(data))
      } catch (error) {
        // dispatch(actions.getContactsError("Something went wrong"))
      }

}


// const removeContactOperation  = id => dispatch => {
//   dispatch(actions.removeContactRequest());
//   axios
//     .delete(`https://redux-async.firebaseio.com/contacts/${id}.json`)
// .then(() => {
//   console.log(id,"SuccessID")
//   dispatch(actions.removeContactSuccess(id))})
//     .catch(error => {
//       console.log(error,"error")
//       dispatch(actions.removeContactError(error))});
// };



// const getContactOperation = () => async dispatch => {

//   dispatch(actions.getContactsRequest())
//   try {
//     const result = await axios.get('https://redux-async.firebaseio.com/contacts.json');
//     console.log(result, "RESULT")
//     const keys = Object.keys(result.data);
//     const data = keys.reduce((acc, key) => {
//       acc.push({ id: key, ...result.data[key] })
//       return acc;
//     }, [])
//     dispatch(actions.getContactsSuccess(data))
//   } catch (error) {
//     dispatch(actions.getContactsError("Something went wrong"))
//   }

// }



export default { addNewUser }