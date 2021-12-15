import React, { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import useTweetCollection from "../hooks/useTweetCollection";

import "../style.css";

const TweetForm = () => {
  const [formState, setFormState] = useState({ tweet: "", author: "" });

  // importamos el custom hook, al ejecutar la funcion, este me retorna un objeto,
  // que al destructurarlo yo puedo sacar mi funcion
  const { addNewTweet } = useTweetCollection();

  // context
  const { user } = useContext(UserContext);

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
      author: user ? user.displayName : "Desconocido",
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);

    // enviar la data a firestore
    // crear un documento en la coleccion de tweets
    addNewTweet(formState);

    // reset input
    setFormState({
      tweet: "",
      author: "",
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          autoComplete="off"
          name="tweet"
          value={formState.tweet}
          onChange={handleChange}
          placeholder="Write your tweet"
        />

        <input
          type="text"
          name="author"
          value={formState.author}
          onChange={handleChange}
          placeholder="Author"
        />

        <button type="submit">Enviar tweet</button>
      </form>
    </div>
  );
};

export default TweetForm;
