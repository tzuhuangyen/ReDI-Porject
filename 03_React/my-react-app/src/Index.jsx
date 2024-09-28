import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar';
import TweetInput from './components/TweetInput';
import TweetList from './components/TweetList';
import { AppContextProvider } from './components/AppContext';
import axios from 'axios';
import { useThemeGlobalContext } from './components/ThemeGlobalContext';
import ThemeToggler from './components/ThemeToggler';

function Index() {
  const [tweets, setTweets] = useState([]);
  const { state } = useThemeGlobalContext(); // 在這裡獲取上下文的狀態

  const addTweet = (tweet) => {
    setTweets([tweet, ...tweets]);
  };

  const handleRetweet = (originalTweet) => {
    const retweet = {
      content: `Retweet: ${originalTweet.content}`,
      author: 'Anonymous',
      date: new Date(),
      likes: 0,
      retweets: 0,
      replies: [],
    };
    setTweets([retweet, ...tweets]);
  };

  const handleReply = (tweet, reply) => {
    setTweets(
      tweets.map((t) =>
        t === tweet ? { ...t, replies: [...t.replies, reply] } : t
      )
    );
  };

  useEffect(() => {
    try {
      axios
        .get('https://jsonplaceholder.typicode.com/posts')
        .then((response) => {
          console.log(response);
          // get 10 tweets
          // get 10 tweets
          const initialTweets = response.data.slice(0, 10).map((post) => ({
            content: post.title,
            author: 'Anonymous',
            date: new Date(),
          }));
          setTweets(initialTweets);
          console.log(initialTweets);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <AppContextProvider>
      <div
        style={{
          background: state.theme === 'light' ? '#fff' : '#333',
          color: state.theme === 'light' ? '#000' : '#fff',
          minHeight: '100vh', // 確保應用高度覆蓋全屏
          transition: 'background 0.3s, color 0.3s', // 添加過渡效果
        }}
      >
        <h1>Twitter Clone</h1>
        <Header />
        <Sidebar />
        <main>
          <Profile />
          <TweetInput addTweet={addTweet} />
          <TweetList
            tweets={tweets}
            onRetweet={handleRetweet}
            onReply={handleReply}
          />
        </main>
        <p>Mode: {state.theme === 'light' ? 'light' : 'dark'}</p>
        <footer>
          {' '}
          <ThemeToggler />
        </footer>
      </div>
    </AppContextProvider>
  );
}

export default Index;
