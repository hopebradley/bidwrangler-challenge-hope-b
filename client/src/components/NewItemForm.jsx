import React, { useState } from 'react';
import axios from 'axios';

const NewItemForm = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Name: ${name}`);
    console.log(`Price: ${price}`);
    axios.post('http://localhost:5000/items', {
      item: {
        name: name,
        price: price,
        },
      });
    setName('');
    setPrice('');
  };

  return (
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
  );
}

export default NewItemForm;