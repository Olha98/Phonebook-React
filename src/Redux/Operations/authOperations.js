import actions from '../Actions/AuthAction'
import axios from 'axios'

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';


const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const addNewUser = user => async dispatch => {
  dispatch(actions.registerRequest())
  try {
    const result = await axios.post('/users/signup', user)
    token.set(result.data.token)
    dispatch(actions.registerSuccess(result.data))
  } catch (error) {
    dispatch(actions.registerError("Something went wrong"))
  }

}

const loginUser = user => async dispatch => {
  dispatch(actions.loginRequest())
  try {
    const result = await axios.post('/users/login', user)
    token.set(result.data.token)
    dispatch(actions.loginSuccess(result.data))
  } catch (error) {
    dispatch(actions.loginError("Something went wrong"))
  }
}

const logOut = () => dispatch => {
  console.log("logOut")
  dispatch(actions.logoutRequest());

  axios
    .post('/users/logout')
    .then(() => {
      token.unset();
      dispatch(actions.logoutSuccess());
    })
    .catch(error => dispatch(actions.logoutError(error)));
};



export default { addNewUser, loginUser, logOut }


// как работать с листочком беком и где авториизация в хедере заходят