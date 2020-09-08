import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import App from './App'
import { store, persistor } from './Redux/store';
import './style.css'


ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
);


