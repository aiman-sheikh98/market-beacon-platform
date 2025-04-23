import ProfileCard from "@/components/dashboard/ProfileCard";
import { useEffect, useState } from "react";
import { StockData, MarketIndex } from "@/types/stock";
import { getStockData, getMarketIndices } from "@/lib/api";
import StockCard from "@/components/stock/StockCard";
import MarketOverview from "@/components/stock/MarketOverview";

const Dashboard = () => {
  const [topStocks, setTopStocks] = useState<StockData[]>([]);
  const [marketIndices, setMarketIndices] = useState<MarketIndex[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const stocks = await getStockData(['AAPL', 'MSFT', 'GOOGL', 'AMZN', 'TSLA']);
        setTopStocks(stocks);

        const indices = await getMarketIndices(['^GSPC', '^IXIC', '^DJI']);
        setMarketIndices(indices);

        setLoading(false);
      } catch (err: any) {
        setError(err.message || "Failed to fetch data");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-financial-navy text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

        <ProfileCard />

        {loading && <p>Loading data...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}

        <MarketOverview indices={marketIndices} />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topStocks.map((stock) => (
            <StockCard key={stock.symbol} stock={stock} />
          ))}
        </div>
      </div>
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; 2024 Market Beacon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
