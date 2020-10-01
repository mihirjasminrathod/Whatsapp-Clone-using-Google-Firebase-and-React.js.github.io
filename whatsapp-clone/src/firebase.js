import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
// const firebaseConfig = {
//     apiKey: "AIzaSyB13PntUEDMkFbTt2psiHOZtQih83qrf88",
//     authDomain: "whatsapp-clone-fafc9.firebaseapp.com",
//     databaseURL: "https://whatsapp-clone-fafc9.firebaseio.com",
//     projectId: "whatsapp-clone-fafc9",
//     storageBucket: "whatsapp-clone-fafc9.appspot.com",
//     messagingSenderId: "1027981883218",
//     appId: "1:1027981883218:web:f62f32ffe8e5701f0f2c8b",
//     measurementId: "G-0YMF5ZZL8N"
//   };
const firebaseConfig = {
  apiKey: "AIzaSyDw_YtlcmlU35xM97zXATE5lLrYU0sKIvM",
  authDomain: "whatsapp-clone-98f97.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-98f97.firebaseio.com",
  projectId: "whatsapp-clone-98f97",
  storageBucket: "whatsapp-clone-98f97.appspot.com",
  messagingSenderId: "574101269555",
  appId: "1:574101269555:web:cc3f8dc4256810d48f4746",
  measurementId: "G-5YLJSC49E3"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const  provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider};
export default db;