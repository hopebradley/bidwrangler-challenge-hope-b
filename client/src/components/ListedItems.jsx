import React from 'react';
import '../scss/ListedItems.scss'


const ListedItems = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} className="card">
          <h3>{item.name}</h3>
          <p>Price: {item.price}</p>
          <p>Lister: {item.lister}</p>
        </div>
      ))}
    </div>
  );
};

export default ListedItems;
