import './App.css';
import { LoginPage } from './components/LoginPage.tsx';
import { AuctioneerDashboard } from './components/AuctioneerDashboard.tsx';
import { BidderDashboard } from './components/BidderDashboard.tsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <LoginPage />
      <BrowserRouter>
        <Routes>
          <Route path="/auctioneer" element={<AuctioneerDashboard />} />
          <Route path="/bidder" element={<BidderDashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;