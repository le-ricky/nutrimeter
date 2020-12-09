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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`); //References the doc location using the id within the collection called 'users'
    const snapshot = await userRef.get(); // .get() to query the snap of said reference point

    //.set() if user does not already exist in collection
    if (!snapshot.exists) {
      const { displayName, email } = userAuth;
      const createDate = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createDate,
          ...additionalData
        })
      } catch (error) {
        console.log('error creating user', error.message)
      }
    }
    return userRef;
  }


  firebase.initializeApp(config);

  export const auth = firebase.auth(); //imported using fireebase/auth
  export const firestore = firebase.firestore(); //imported using fireebase/firestore

  const provider = new firebase.auth.GoogleAuthProvider(); //GoogleAuthProvider class from the auth library
  provider.setCustomParameters({ prompt: 'select_account' }); //prompts the google sign-in to select user account
  export const signInWithGoogle = () => auth.signInWithPopup(provider); //pop-up function that we pass in the specific google prompt.

  export default firebase;