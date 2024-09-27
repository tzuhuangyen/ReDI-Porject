import React, { useState } from 'react';

const Tweet = ({ content }) => {
  return (
    <li>
      <p>{content}</p>
    </li>
  );
};

export default Tweet;
