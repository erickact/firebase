import ListaTweets from "./components/ListaTweets";
import TweetForm from "./components/TweetForm";
import useAuthentication from "./hooks/useAuthentication";

function App() {
  const { loginSocial } = useAuthentication();
  return (
    <div className="App">
      <h1 className="title">Clase 62 - Authenticated Tweets</h1>
      <p>No podrás tweetear si no te logeas primero</p>
      <button onClick={loginSocial} className="button">Login</button>
      <hr/>
      <TweetForm />
      <hr />
      <ListaTweets />
    </div>
  );
}

export default App;
