import React from 'react';
import { useParams } from 'react-router-dom';

export const BidderDashboard = () => {
  const params = useParams();


  return (
    <div>
      <h2>{params.name}'s Bidder Dashboard</h2>
    </div>
  );
};

