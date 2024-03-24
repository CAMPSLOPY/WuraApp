
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyB1aKX5_fPTuH0QIKa56Ls1ZkBaD_ctBhw",
  authDomain: "wuraapp-build-fp.firebaseapp.com",
  projectId: "wuraapp-build-fp",
  storageBucket: "wuraapp-build-fp.appspot.com",
  messagingSenderId: "153662245122",
  appId: "1:153662245122:web:2b18829dd021d2ca89da1b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth =  firebase.auth();

export {auth, db};

