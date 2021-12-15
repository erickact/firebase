import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

// authentication
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAfB8k51dQI7g5TKFCq2GnXovTs9xbbZSE",
  authDomain: "fir-authentication-7f6fd.firebaseapp.com",
  projectId: "fir-authentication-7f6fd",
  storageBucket: "fir-authentication-7f6fd.appspot.com",
  messagingSenderId: "984429917925",
  appId: "1:984429917925:web:f0fc8280f3023f2113460c",
};
// initialize firebase
const app = initializeApp(firebaseConfig);
// get database
const db = getFirestore(app);
// ref collection tweets
const tweetsCollectionRef = collection(db, "tweets");

// auth
const auth = getAuth();

const googleProvider = new GoogleAuthProvider();

export { db, tweetsCollectionRef, auth, googleProvider };
export default app;
