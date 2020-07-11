import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAVil93y29mxFBwRcTE58AFus72698yt2I",
    authDomain: "e-commerceapp-6c0b6.firebaseapp.com",
    databaseURL: "https://e-commerceapp-6c0b6.firebaseio.com",
    projectId: "e-commerceapp-6c0b6",
    storageBucket: "e-commerceapp-6c0b6.appspot.com",
    messagingSenderId: "297057668035",
    appId: "1:297057668035:web:7a722f7d23d7c2cd978b76",
    measurementId: "G-XJL92GL1S7"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


// facebook
var providers = new firebase.auth.FacebookAuthProvider();
providers.setCustomParameters({'display': 'popup'});
//firebase.auth().signInWithRedirect(provider);
export const signInWithFacebook = () => auth.signInWithPopup(providers);

export default firebase;

