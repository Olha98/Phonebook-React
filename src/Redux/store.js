import contactReducer from '../Redux/Reducers/Reducers'
import userReduser from '../Redux/Reducers/authReduser'
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'auth',
  storage: storage,
  whitelist: ['token'] 
};



 export const store = configureStore({
  reducer: {
    state: contactReducer,
    auth: persistReducer(persistConfig, userReduser),
    
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);