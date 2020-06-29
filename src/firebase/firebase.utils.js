import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBMvvRidBl8LgQp-YcELSsO8ys9zLq1mjI",
  authDomain: "crwn-clothing-f8b97.firebaseapp.com",
  databaseURL: "https://crwn-clothing-f8b97.firebaseio.com",
  projectId: "crwn-clothing-f8b97",
  storageBucket: "crwn-clothing-f8b97.appspot.com",
  messagingSenderId: "598903782017",
  appId: "1:598903782017:web:06fd94a7674f4202fc6b80",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
