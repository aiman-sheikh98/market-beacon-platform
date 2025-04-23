
import Navbar from '@/components/layout/Navbar';
import { MarketOverview } from '@/components/dashboard/MarketOverview';
import { WatchlistPreview } from '@/components/dashboard/WatchlistPreview';
import { StockChart } from '@/components/dashboard/StockChart';
import { NewsFeed } from '@/components/news/NewsFeed';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        
        <div className="mb-8">
          <MarketOverview />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="mb-8">
              <StockChart />
            </div>
            <div>
              <NewsFeed />
            </div>
          </div>
          <div>
            <WatchlistPreview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
