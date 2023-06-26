import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import api from '../axios/axiosConfig';

export const AuctioneerDashboard = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const params = useParams();

  const displayName = params.name ? params.name.charAt(0).toUpperCase()
  + params.name.slice(1) : 'Sample Auctioneer'

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    api.post('http://localhost:5000/items', {
      item: {
        lister: displayName,
        name: name,
        price: price,
      },
    });
    setName('');
    setPrice('');
  };

  return (
    <div>
      <h2>{displayName}'s Auctioneer Dashboard</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleNameChange}
          required
        />

        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={handlePriceChange}
          required
        />
        <button type="submit">List Item for Auction</button>

      </form>
    </div>
  );
};
