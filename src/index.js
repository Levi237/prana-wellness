import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

  firebase.initializeApp({
    apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
    authDomain: "prana-wellness.firebaseapp.com",
    databaseURL: "https://prana-wellness.firebaseio.com",
    projectId: "prana-wellness",
    storageBucket: "prana-wellness.appspot.com",
    messagingSenderId: "924601017843",
    appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
    measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`
  });
  const storage = firebase.storage();
  export { storage, firebase as default }


  ReactDOM.render(
    <Router>
        <App />
    </Router>, 
    document.getElementById('root'));

serviceWorker.unregister();


