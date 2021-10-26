import * as firebase from 'firebase';

// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD8s3liDYiH7s86H8yrlvlm722H3_IGQxw",
  authDomain: "ecommerce-site-c62b6.firebaseapp.com",
  projectId: "ecommerce-site-c62b6",
  storageBucket: "ecommerce-site-c62b6.appspot.com",
  messagingSenderId: "565324572737",
  appId: "1:565324572737:web:f4bf0041a94dcaceb4bec0",
  measurementId: "G-02G09HPX14"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
