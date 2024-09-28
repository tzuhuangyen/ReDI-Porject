import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import { useThemeGlobalContext } from './components/ThemeGlobalContext';
import axios from 'axios';
function Index() {
  const [tweets, setTweets] = useState([]);
  const { state } = useThemeGlobalContext(); // 在這裡獲取上下文的狀態

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  useEffect(() => {
    try {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          // get 10 tweets
          const initialTweets = data.slice(0, 10).map((post) => post.title);
          setTweets(initialTweets);
        });
    } catch (error) {
      console.log(error);
    }
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
