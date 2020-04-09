import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider } from 'reactfire';
import Loader from 'react-loader-spinner';

var firebaseConfig = {
  apiKey: "AIzaSyA_tttJ8rl1tVYCahzeUdBfuCDkO6fEwn4",
  authDomain: "contamas.firebaseapp.com",
  databaseURL: "https://contamas.firebaseio.com",
  projectId: "contamas",
  storageBucket: "contamas.appspot.com",
  messagingSenderId: "327144204867",
  appId: "1:327144204867:web:97bebae8e060d5d18442f6",
  measurementId: "G-G4WG1MR1VH"
};

ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Suspense fallback={<div style={{
      position: "absolute",
      left: "0px",
      top: "0px",
      bottom: "0px",
      right: "0px",
      backgroundColor: "#212121"
    }}>
      <Loader style={{
        position: "relative",
        left: "50%",
        marginLeft: "-110px",
        top: "50%",
        marginTop: "-110px"
      }} type="Oval" height={220} width={220} color="#379392"></Loader>
    </div>}>
        <App />
      </Suspense>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
