import './App.css';
import { AuctioneerDashboard } from './components/AuctioneerDashboard';
import { BidderDashboard } from './components/BidderDashboard';
import { LandingPage } from './components/LandingPage';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ItemsContextProvider } from './components/ItemContext';

function App() {

  return (
    <ItemsContextProvider>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/auctioneer/:name" element={<AuctioneerDashboard/>} />
            <Route path="/bidder/:name" element={<BidderDashboard  />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </ItemsContextProvider>
  );
}

export default App;