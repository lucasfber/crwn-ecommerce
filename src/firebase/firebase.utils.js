import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAAEKR3HDyDfh8OLSLB8UQ_1lRhYODZplM',
  authDomain: 'crwn-db-d95ef.firebaseapp.com',
  databaseURL: 'https://crwn-db-d95ef.firebaseio.com',
  projectId: 'crwn-db-d95ef',
  storageBucket: 'crwn-db-d95ef.appspot.com',
  messagingSenderId: '579962647344',
  appId: '1:579962647344:web:ab0d7a5314cba007678ef5',
  measurementId: 'G-SNZQTQD7RJ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (err) {
      console.log('Error while creating user: ', err);
    }
  }

  return userRef;
};

export default firebase;
