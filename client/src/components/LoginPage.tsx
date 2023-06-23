import React, { useState } from 'react';
import axios from 'axios';

export const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [userType, setUserType] = useState('');

  const handleAuctioneerClick = () => {
    setUserType("auctioneer");
  }
  const handleBidderClick = () => {
    setUserType("bidder");
  }

  const handleLogin = async (username, userType) => {
    try {
      await axios.post('/users', {
        user: {
          username: username,
          userType: userType,
        },
      });
      console.log('User created successfully!');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  return (
    <div>
      <input
        type="username"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleAuctioneerClick}>Auctioneer</button>
      <button onClick={handleBidderClick}>Bidder</button>
      <div style={{paddingTop: '20px'}}>
        <button onClick={() => handleLogin(username, userType)}>Go!</button>
      </div>
    </div>
  );
};
