import firebase from 'firebase/app'
import 'firebase/auth'
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-analytics.js";

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBevzQPyDorOOmb9Z09fI64BcSXgDaFUxo",
    authDomain: "sistema-de-chamados-c668e.firebaseapp.com",
    projectId: "sistema-de-chamados-c668e",
    storageBucket: "sistema-de-chamados-c668e.appspot.com",
    messagingSenderId: "140492790183",
    appId: "1:140492790183:web:b5c1de1e2dfcdf67413e82",
    measurementId: "G-SFC6V3G76R"
  };

  // Initialize Firebase
  if(!initializeApp){
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }