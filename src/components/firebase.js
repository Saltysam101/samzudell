  import firebase from 'firebase';
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  
  var firebaseConfig = {
    apiKey: "027015d43110fb9ab65839ff2bb140a483462bed",
    authDomain: "portfolio-7ed96.firebaseapp.com",
    databaseURL: "https://portfolio-7ed96.firebaseio.com",
    projectId: "portfolio-7ed96",
    storageBucket: "portfolio-7ed96.appspot.com",
    messagingSenderId: "543515276287",
    appId: "1:543515276287:web:04164d9f99283c66646dca",
    measurementId: "G-4Q03390LPX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  var db = firebase.firestore();

  export default {db}