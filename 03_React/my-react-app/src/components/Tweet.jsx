// A component to represent a single tweet.
import React, { useState } from 'react';
import TweetInteractions from './TweetInteractions';

const Tweet = ({ tweet, onRetweet, onReply }) => {
  const [likes, setLikes] = useState(0);
  const [retweets, setRetweets] = useState(tweet.retweets || 0);
  const [replies, setReplies] = useState(tweet.replies || []);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleRetweet = () => {
    setRetweets(retweets + 1);
    onRetweet(tweet); // 呼叫外部的轉推邏輯
  };

  const handleReply = (replyText) => {
    const newReply = {
      author: 'Anonymous',
      content: replyText,
      date: new Date(),
    };
    setReplies([...replies, newReply]);
    onReply(tweet, newReply);
  };

  return (
    <li>
      <p>{tweet.content}</p>
      <small>
        By {tweet.author} on {tweet.date.toString()}
      </small>
      <TweetInteractions
        tweet={{ ...tweet, likes, retweets }}
        onLike={handleLike}
        onRetweet={handleRetweet}
        onReply={handleReply}
      />{' '}
      <ul>
        {replies.map((reply, index) => (
          <li key={index}>
            <p>{reply.content}</p>
            <small>
              By {reply.author} on {reply.date.toString()}
            </small>
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Tweet;
