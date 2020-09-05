import contactReducer from '../Redux/Reducers/Reducers'
import userReduser from '../Redux/Reducers/authReduser'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';


const defaultMiddleware = getDefaultMiddleware();

const store = configureStore({
  reducer: {
    state: contactReducer,
    users: userReduser,
  },
  middleware: [...defaultMiddleware],
});

export default store