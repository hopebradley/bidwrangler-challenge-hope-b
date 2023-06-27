import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ListedItems } from './ListedItems';
import { ItemsContext } from './ItemContext';

export const BidderDashboard = () => {
  const params = useParams();
  const { items, loadItems } = useContext(ItemsContext);

  const displayName = params.name ? params.name.charAt(0).toUpperCase()
  + params.name.slice(1) : 'Sample Auctioneer'

  useEffect(() => {
    loadItems();
  }, [loadItems]);

  return (
    <div>
      <h2>{displayName}'s Bidder Dashboard</h2>
      <ListedItems displayName={displayName} items={items} role={'bidder'}/>
    </div>
  );
};

