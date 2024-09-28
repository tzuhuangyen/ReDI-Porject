//A component for the tweet input form.
import React, { useState, useContext } from 'react';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweet.trim()) return;
    addTweet(tweet);
    setTweet('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={tweet}
        onChange={(e) => setTweet(e.target.value)}
        placeholder="What's happening?"
      />
      <button type='submit'>Tweet</button>
    </form>
  );
};

export default TweetInput;
