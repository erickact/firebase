import { useEffect } from "react";
import ListaTweets from "./components/ListaTweets";
import TweetForm from "./components/TweetForm";

function App() {
  return (
    <div className="App">
      <TweetForm />
      <hr />
      <ListaTweets />
    </div>
  );
}

export default App;
