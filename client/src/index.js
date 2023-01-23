import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// prime react
import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

// auth stuff
import {Provider} from 'react-redux';
import store from './auth/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);