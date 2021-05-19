import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Main from "./main/Main";
import MiModal from './ventanas/MiModal';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'firebase/firestore';
import { FirebaseAppProvider } from 'reactfire';
import firebaseConfig from './firebaseConfig'


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <MiModal />
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
