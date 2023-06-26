import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuctioneerDashboard } from './components/AuctioneerDashboard';
import { BidderDashboard } from './components/BidderDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [items, setItems] = useState([])

  const loadItems = async () => {
    axios.get('http://localhost:5000/items')
    .then(response => {
        setItems(response.data);
        console.log(items)
    });
  };

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auctioneer/:name" element={<AuctioneerDashboard items={items.toReversed()} loadItems={loadItems}/>} />
          <Route path="/bidder/:name" element={<BidderDashboard items={items.toReversed()} />} loadItems={loadItems} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;