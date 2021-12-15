import React from "react";
import { ReactComponent as IconHeart } from "../assets/icons/iconHeart.svg";
import useTweetCollection from "../hooks/useTweetCollection";

import "../style.css";

const Tweet = ({ tweetData }) => {
  const { deleteTweet, addLikes } = useTweetCollection();
  const { tweet, author, id, likes } = tweetData;

  const handleAddLikes = async (id) => {
    await addLikes(id);
  };

  return (
    <div className="tweetWrapper">
      <h2>{tweet}</h2>
      <div>
        <span className="author">
          <b>Author: </b>
          {author}
        </span>
        <div className="tweetFooter">
          <button onClick={() => deleteTweet(id)}>Borrar</button>
          <div className="likesWrapper" onClick={() => handleAddLikes(id)}>
            <IconHeart /> {likes && `+${likes}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
