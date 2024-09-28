// A component to represent a single tweet.
import React, { useState } from 'react';

const Tweet = ({ content }) => {
  return (
    <li>
      <p>{content}</p>
    </li>
  );
};

export default Tweet;
