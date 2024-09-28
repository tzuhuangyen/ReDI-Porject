import React, { useState } from 'react';

const TweetInteractions = ({ tweet, onLike, onRetweet, onReply }) => {
  const [replyText, setReplyText] = useState('');

  const handleReplySubmit = (e) => {
    e.preventDefault();
    if (replyText.trim()) {
      onReply(replyText);
      setReplyText('');
    }
  };

  return (
    <div>
      <button onClick={onLike}>Like {tweet.likes}</button>
      <button onClick={onRetweet}>Retweet {tweet.retweets}</button>
      <button>Reply</button>

      <form onSubmit={handleReplySubmit}>
        <input
          type='text'
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder='Write a reply...'
        />
        <button type='submit'>Submit Reply</button>
      </form>
    </div>
  );
};

export default TweetInteractions;
