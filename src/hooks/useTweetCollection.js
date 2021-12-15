import {
  addDoc,
  // getDocs,
  getDoc,
  doc,
  deleteDoc,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";
import { tweetsCollectionRef } from "../firebase/config";

const useTweetCollection = () => {
  // const getAllDocs = async () => {
  //   try {
  //     const querySnapshot = await getDocs(tweetsCollectionRef);
  //     const tweetsArray = querySnapshot.docs.map((doc) => {
  //       return {
  //         ...doc.data(),
  //         id: doc.id,
  //       };
  //     });
  //     console.log(tweetsArray);
  //     return tweetsArray;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  //  get tweets onsnapshots
  const getAllDocs = (callback) => {
    const unsubscribe = onSnapshot(tweetsCollectionRef, callback);
    return unsubscribe;
  };

  // add tweets
  const addNewTweet = async (tweetObject) => {
    try {
      const docRef = await addDoc(tweetsCollectionRef, tweetObject);
      // console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Patito Error adding document: ", e);
      alert("Por favor loguearse");
    }
  };
  // delete tweets
  const deleteTweet = async (idDocument) => {
    const refDocument = doc(tweetsCollectionRef, idDocument);
    try {
      const docDelete = await deleteDoc(refDocument);
    } catch (error) {
      console.error(error);
    }
  };

  // add likes
  const addLikes = async (idDocument) => {
    const docRef = doc(tweetsCollectionRef, idDocument);

    const docSnap = await getDoc(docRef);

    await updateDoc(docRef, {
      likes: docSnap.data().likes ? docSnap.data().likes + 1 : 1,
    });
  };

  return { addNewTweet, getAllDocs, deleteTweet, addLikes };
};

export default useTweetCollection;
