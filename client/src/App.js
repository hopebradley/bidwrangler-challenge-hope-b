import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { AuctioneerDashboard } from './components/AuctioneerDashboard';
import { BidderDashboard } from './components/BidderDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/items');
        setItems(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [items]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auctioneer/:name" element={<AuctioneerDashboard items={items.toReversed()}/>} />
          <Route path="/bidder/:name" element={<BidderDashboard items={items.toReversed()} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;