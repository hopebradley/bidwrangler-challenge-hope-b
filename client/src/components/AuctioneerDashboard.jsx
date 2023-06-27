import { useParams } from 'react-router-dom';
import './AuctioneerDashboard.scss';
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { ListedItems } from './ListedItems';
import { ItemsContext } from './ItemContext';

export const AuctioneerDashboard = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const { items, setItems, loadItems } = useContext(ItemsContext);

  useEffect(() => {
    loadItems();
  }, [loadItems]);

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
    const item = axios.post('http://localhost:5000/items', {
      item: {
        lister: displayName,
        name: name,
        starting_price: price,
        current_price: price,
        last_bidder: 'Starting Price',
      },
    })
    .then(() => {
      setItems([item, ...items]);
      setName('');
      setPrice('');
    });
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
      <ListedItems displayName={displayName} items={items} role={'auctioneer'}/>
    </>
  );
};
