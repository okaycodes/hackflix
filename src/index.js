import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import {BrowserRouter as Router} from 'react-router-dom'
import {initializeApp} from 'firebase/app'
import {FormContextProvider} from "./contexts/formContext"


const firebaseConfig = {
  apiKey: "AIzaSyDeiQnYuhNkpCFDuDQ_OZioZLAPhTpYqTQ",
  authDomain: "myhackflix.firebaseapp.com",
  databaseURL: "https://myhackflix-default-rtdb.firebaseio.com",
  projectId: "myhackflix",
  storageBucket: "myhackflix.appspot.com",
  messagingSenderId: "223100768739",
  appId: "1:223100768739:web:8594dc8ace4650689ed0d6"
}

initializeApp(firebaseConfig)


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <FormContextProvider>
        <GlobalStyles />
        <App />
      </FormContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
