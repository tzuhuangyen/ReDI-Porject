import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import Sidebar from './components/Sidebar';

import { useThemeGlobalContext } from './components/ThemeGlobalContext';

function Index() {
  const [tweets, setTweets] = useState([]);
  const { state } = useThemeGlobalContext(); // 在這裡獲取上下文的狀態

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  useEffect(() => {
    // Fetch initial data from remote server, ex. https://jsonplaceholder.org/posts
    // ...
  }, []);

  return (
    <div
      style={{
        background: state.theme === 'light' ? '#fff' : '#333',
        color: state.theme === 'light' ? '#000' : '#fff',
        minHeight: '100vh', // 確保最小高度為100vh
      }}
    >
      <h1>Twitter Clone</h1>
      <Header />
      <Sidebar />
      <main>
        <Profile />
        <TweetInput addTweet={addTweet} />
        <TweetList tweets={tweets} />
      </main>
    </div>
  );
}

export default Index;
