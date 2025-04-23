
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import { StockChart } from '@/components/dashboard/StockChart';
import { Card } from "@/components/ui/card";

interface StockStats {
  label: string;
  value: string;
}

const StockDetail = () => {
  const { symbol } = useParams<{ symbol: string }>();
  
  useEffect(() => {
    // In a real app, we would fetch stock data here
    document.title = `${symbol} | Market Beacon`;
  }, [symbol]);
  
  const stockStats: StockStats[] = [
    { label: "Market Cap", value: "$2.9T" },
    { label: "P/E Ratio", value: "32.64" },
    { label: "Dividend Yield", value: "0.49%" },
    { label: "52-Week High", value: "$198.23" },
    { label: "52-Week Low", value: "$124.17" },
    { label: "Avg Volume", value: "55.78M" },
    { label: "Beta", value: "1.28" },
    { label: "EPS (TTM)", value: "$5.81" },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="mb-6 flex items-center">
          <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
            {symbol?.charAt(0)}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{symbol} | Apple Inc.</h1>
            <p className="text-gray-500">NASDAQ</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StockChart />
            
            <div className="mt-6">
              <h2 className="text-xl font-bold mb-4">Company Overview</h2>
              <Card className="p-4 border border-gray-200 shadow-sm">
                <p className="text-gray-700">
                  Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod. It also provides AppleCare support and cloud services; and operates various platforms, including the App Store that allow customers to discover and download applications and digital content, such as books, music, video, games, and podcasts.
                </p>
                <div className="mt-4">
                  <button className="text-financial-highlight hover:underline text-sm font-medium">
                    Read More
                  </button>
                </div>
              </Card>
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-bold mb-4">Key Statistics</h2>
            <Card className="border border-gray-200 shadow-sm">
              <div className="divide-y divide-gray-100">
                {stockStats.map((stat, index) => (
                  <div key={index} className="p-4 flex justify-between items-center">
                    <span className="text-gray-600">{stat.label}</span>
                    <span className="font-medium">{stat.value}</span>
                  </div>
                ))}
              </div>
            </Card>
            
            <div className="mt-6">
              <button className="w-full bg-financial-highlight hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                Add to Watchlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockDetail;
