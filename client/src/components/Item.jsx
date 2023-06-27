import React, { useState } from 'react';
import axios from 'axios';
import './Items.scss';
import { useContext } from 'react';
import { ItemsContext } from './ItemContext';

export const Item = ({ item, displayName, role }) => {
  const [bidAmount, setBidAmount] = useState('');
  const [error, setError] = useState(false);
  const { items, setItems, loadItems } = useContext(ItemsContext);

  const handleBidChange = (e) => {
    setBidAmount(e.target.value);
  };

  const handleBidSubmit = (e) => {
    e.preventDefault();
    const url = `http://localhost:5000/items/${item.id}`;
    axios.patch(url, {
      item: {
        current_price: bidAmount,
        last_bidder: `${displayName}`,
      },
    }).then(() => {
      setItems([...items]);
      setBidAmount('');
      loadItems();
    })
    .catch(() => {
      setError("Your bid must be higher than the current price!");
      setBidAmount('');
      setTimeout(() => {
        setError(false);;
      }, "2000");
    });
  };

  const biddingLocked = item.last_bidder === `${displayName}`;
  const buttonText = biddingLocked ? "Good luck!" : "Place Bid"


  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Starting Price: {item.starting_price}</p>
      <p>Lister: {item.lister}</p>
      <form onSubmit={handleBidSubmit}>
        {role === 'bidder' && 
        <div>
          <input
            type="number"
            placeholder="Enter Bid Amount"
            value={bidAmount}
            onChange={handleBidChange}
            required
          />
          <button disabled={biddingLocked}type="submit">{buttonText}</button>
        </div>}
        {error && <p style={{color: 'red'}}>{error}</p>}
        <h2>Current bid: {item.current_price} - {item.last_bidder} </h2>
      </form>
    </div>
  )
}
