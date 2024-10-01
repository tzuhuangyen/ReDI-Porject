// A component to display the list of tweets.
import React from 'react';
import Tweet from './Tweet';

const TweetList = ({ tweets, onRetweet, onReply }) => {
  return (
    <ul className='TweetList'>
      {tweets.map((tweet, index) => (
        <Tweet
          key={index}
          tweet={tweet}
          onRetweet={onRetweet}
          onReply={onReply}
        />
      ))}
    </ul>
  );
};

export default TweetList;
