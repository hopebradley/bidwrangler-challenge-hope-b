import React from 'react';
import { useParams } from 'react-router-dom';
import { ListedItems } from './ListedItems';

export const BidderDashboard = ({items}) => {
  const params = useParams();

  const displayName = params.name ? params.name.charAt(0).toUpperCase()
  + params.name.slice(1) : 'Sample Auctioneer'


  return (
    <div>
      <h2>{displayName}'s Bidder Dashboard</h2>
      <ListedItems items={items} />
    </div>
  );
};

