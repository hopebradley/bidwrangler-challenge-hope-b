import './App.css';
import { AuctioneerDashboard } from './components/AuctioneerDashboard';
import { BidderDashboard } from './components/BidderDashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auctioneer/:name" element={<AuctioneerDashboard />} />
          <Route path="/bidder/:name" element={<BidderDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;