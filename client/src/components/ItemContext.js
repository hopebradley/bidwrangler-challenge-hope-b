import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const ItemsContext = createContext();

export const ItemsContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const loadItems = async () => {
    try {
      const response = await axios.get('http://localhost:5000/items');
      const reversedItems = response.data.reverse();
      setItems(reversedItems);
    } catch (error) {
      console.error('Error loading items:', error);
    }
  };

  useEffect(() => {
    loadItems();
  }, []);

  const itemState = {
    items,
    setItems,
    loadItems,
  };

  return (
    <ItemsContext.Provider value={itemState}>
      {children}
    </ItemsContext.Provider>
  );
};
