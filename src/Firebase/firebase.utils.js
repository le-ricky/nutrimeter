import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyC1mjacBo7aX5wbtwS4LLV4b5ABn51LNlE",
    authDomain: "nutrimeter-286502.firebaseapp.com",
    databaseURL: "https://nutrimeter-286502.firebaseio.com",
    projectId: "nutrimeter-286502",
    storageBucket: "nutrimeter-286502.appspot.com",
    messagingSenderId: "262047326509",
    appId: "1:262047326509:web:5876b9d98b7359d51f73a4",
    measurementId: "G-FMFT7KDR4L"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;