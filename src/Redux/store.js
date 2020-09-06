import contactReducer from '../Redux/Reducers/Reducers'
import userReduser from '../Redux/Reducers/authReduser'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'] 
};


 const defaultMiddleware = getDefaultMiddleware();

 export const store = configureStore({
  reducer: {
    state: contactReducer,
    auth: persistReducer(persistConfig, userReduser),
    
  },
  middleware: [...defaultMiddleware],
});

export const persistor = persistStore(store);