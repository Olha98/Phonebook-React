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
    dispatch(actions.registerError(error))
  }

}

const loginUser = user => async dispatch => {
  dispatch(actions.loginRequest())
  try {
    const result = await axios.post('/users/login', user)
    token.set(result.data.token)
    dispatch(actions.loginSuccess(result.data))
  } catch (error) {
    dispatch(actions.loginError(error))
  }
}

const logOut = () => async dispatch => {
  console.log("Запуск после рендра logOut")
  dispatch(actions.logoutRequest());
  try {
    await axios.post('/users/logout')
    console.log("try logout")
    token.unset();
    dispatch(actions.logoutSuccess());
  } catch (error) {
    dispatch(actions.logoutError(error))
  }
}


const currentUser = () => async (dispatch, getState) => {
  console.log("Запуск после рендра currentUser")
  dispatch(actions.getCurrentUserRequest());
  // const { auth: { tokenOfUser } } = getState();
  //   console.log("tokenOfUser", tokenOfUser)
  
  // if(!tokenOfUser){
  //   return
  // }
  // token.set(tokenOfUser)

  const {
    auth: { token: persistedToken },
  } = getState();
  console.log(persistedToken, "persistedToken")
  if (!persistedToken) {
    return;
  }


  try {
    const result = await axios.post('/users/current')
    console.log(result,"result")
    dispatch(actions.getCurrentUserSuccess(result));
  } catch (error) {
    dispatch(actions.getCurrentUserError(error))
  }
}


export default { addNewUser, loginUser, logOut, currentUser }


// как работать с листочком беком и где авториизация в хедере заходят