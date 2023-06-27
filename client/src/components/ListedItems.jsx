import './Items.scss';
import { Item } from './Item';
import React from 'react';


export const ListedItems = ({ items, displayName, role }) => {

  return (
    <div className="container">
      {items.length > 0 ? 
      items?.map((item) => (<Item key={item.id} displayName={displayName} item={item} role={role}/>))
      : <h2>No items listed</h2>}
    </div>
  );
};
