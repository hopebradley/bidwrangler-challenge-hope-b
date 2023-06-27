import axios from 'axios';
// import { useContext } from 'react';
// import { ItemsContext } from './ItemContext';

export const handleAuctioneerSubmit = async (displayName, name, price) => {
  try {
    await axios.post('http://localhost:5000/items', {
      item: {
        lister: displayName,
        name: name,
        starting_price: price,
        current_price: price,
      },
    });
  } catch (error) {
    console.error('Error creating item:', error);
  }
};
