import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { GlobalStyles } from './global-styles';
import {HashRouter} from 'react-router-dom'
import {initializeApp} from 'firebase/app'
import {FormContextProvider} from "./contexts/formContext"
import {AuthContextProvider} from "./contexts/authContext"



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
    <HashRouter>
      <FormContextProvider>
        <AuthContextProvider>
          <GlobalStyles />
          <App />
        </AuthContextProvider>
      </FormContextProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
