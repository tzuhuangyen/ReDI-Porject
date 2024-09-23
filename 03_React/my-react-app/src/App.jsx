import React, { useState } from 'react';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import './App.css';

function App() {
  const [tweets, setTweets] = useState([]);
  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };
  return (
    <>
      {' '}
      <h1>Twitter Clone</h1>
      <TweetInput addTweet={addTweet} />
      <TweetList tweets={tweets} />
    </>
  );
}

export default App;
