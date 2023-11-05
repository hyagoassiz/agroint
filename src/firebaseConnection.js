import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDB4vD9vQYrlytL_kh-s0rC3B2IB21CbnE",
  authDomain: "agroint-e46b6.firebaseapp.com",
  projectId: "agroint-e46b6",
  storageBucket: "agroint-e46b6.appspot.com",
  messagingSenderId: "646739805717",
  appId: "1:646739805717:web:276b850fc90b4d6934701c",
  measurementId: "G-9QL6JEV78B"
};

const firebaseApp = initializeApp(firebaseConfig);


const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);

export { db, auth };

