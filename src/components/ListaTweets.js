import React, { useEffect, useState } from "react";
import Tweet from "./Tweet";
import useTweetCollection from "../hooks/useTweetCollection";

import "./../style.css";

const ListaTweets = () => {
  const [listaTweets, setListaTweets] = useState([]);

  const { getAllDocs } = useTweetCollection();

  useEffect(() => {
    // const getTweetsAsync = async () => {
    //   const misTweets = await getAllDocs();
    //   setListaTweets(misTweets);
    // };
    // getTweetsAsync();
    const unsubscribeSnapshot = getAllDocs((snapshot) => {
      setListaTweets(
        snapshot.docs.map((doc) => {
          return {
            ...doc.data(),
            id: doc.id,
          };
        })
      );
    });

    // la siguiente funcion se va a ejecutar cuando el
    // componente se desmonta
    return () => {
      unsubscribeSnapshot();
    };
  }, []);

  return (
    <div className="listWrapper">
      {listaTweets.length > 0
        ? listaTweets.map((element) => (
            <Tweet key={element.id} tweetData={element} />
          ))
        : "No existen tweets"}
    </div>
  );
};

export default ListaTweets;
