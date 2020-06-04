import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAYT9LGAlAdxk6GaoGmZSkLAn8KC3AUFgY',
  authDomain: 'localhackday-fb5e2.firebaseapp.com',
  databaseURL: 'https://localhackday-fb5e2.firebaseio.com',
  projectId: 'localhackday-fb5e2',
  storageBucket: 'localhackday-fb5e2.appspot.com',
  messagingSenderId: '730867393046',
  appId: '1:730867393046:web:a22379dfc59d400dff0b37',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

export const createUserProfileDocument = async (userAuth, options) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const userSnap = await userRef.get();

  if (userSnap.exists) return userRef;

  const { displayName, email } = userAuth;

  const createdAt = Date.now();

  try {
    await userRef.set({
      displayName,
      email,
      createdAt,
      ...options,
    });
  } catch (err) {
    console.log(err);
  }

  return userRef;
};

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
