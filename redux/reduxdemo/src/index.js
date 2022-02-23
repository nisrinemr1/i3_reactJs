import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import nécessaire pour redux.
import { Provider } from 'react-redux';
import store from './store/store';


ReactDOM.render(
  <React.StrictMode>
    {/* Permet de propager dans l'app le store . PARTIE MAUVE! qui va encapsuler tout l'app*/}
    <Provider store={store}>  
      <App /> {/* ici on a notre application. */}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();