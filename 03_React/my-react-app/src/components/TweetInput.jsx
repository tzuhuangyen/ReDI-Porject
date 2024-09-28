//A component for the tweet input form.
import React, { useState, useContext } from 'react';
import { AppContext, useAppContext } from './AppContext';

const TweetInput = ({ addTweet }) => {
  const [tweet, setTweet] = useState('');
  const { user } = useAppContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tweet.trim()) return;
    addTweet({ content: tweet, author: user.name, date: new Date() });
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
