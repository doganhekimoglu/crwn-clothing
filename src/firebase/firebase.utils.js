import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDJ-baEobGZLhUSpNcZiqE6RqaYBn7BXbI",
    authDomain: "crwn-db-135cc.firebaseapp.com",
    databaseURL: "https://crwn-db-135cc.firebaseio.com",
    projectId: "crwn-db-135cc",
    storageBucket: "",
    messagingSenderId: "924401087524",
    appId: "1:924401087524:web:efe25843fe9a02703f54b1"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;