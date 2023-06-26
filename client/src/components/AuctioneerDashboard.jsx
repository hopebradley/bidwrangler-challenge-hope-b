import { useParams } from 'react-router-dom';
import './AuctioneerDashboard.scss';
import React, { useState } from 'react';
import api from '../axios/axiosConfig';
import { ListedItems } from './ListedItems';

export const AuctioneerDashboard = ({items}) => {
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
    <>
      <h2>{displayName}'s Auctioneer Dashboard</h2>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h2>List A New Item</h2>
          <label>Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            required
          />

          <label>Price:</label>
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
      <ListedItems items={items}/>
    </>
  );
};
