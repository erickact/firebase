import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAfiy0ZOCfRlIhOZSdMxj88ICPBKB5fiRA",
  authDomain: "unproyecto-cyf4-fb1bc.firebaseapp.com",
  projectId: "unproyecto-cyf4-fb1bc",
  storageBucket: "unproyecto-cyf4-fb1bc.appspot.com",
  messagingSenderId: "542872557613",
  appId: "1:542872557613:web:519b2d7532860d87ee80a4",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const tweetsCollectionRef = collection(db, "tweets");

export { db, tweetsCollectionRef };
export default app;
