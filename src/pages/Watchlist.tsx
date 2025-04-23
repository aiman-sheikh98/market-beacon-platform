
import Navbar from '@/components/layout/Navbar';
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface WatchlistStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
  volume: string;
  marketCap: string;
}

const watchlistStocks: WatchlistStock[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 189.84, change: 0.94, percentChange: 0.50, volume: "55.2M", marketCap: "2.9T" },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 397.58, change: 2.83, percentChange: 0.72, volume: "22.8M", marketCap: "2.8T" },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 141.16, change: -0.74, percentChange: -0.52, volume: "25.7M", marketCap: "1.8T" },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 155.32, change: 0.95, percentChange: 0.62, volume: "42.1M", marketCap: "1.6T" },
  { symbol: "TSLA", name: "Tesla, Inc.", price: 187.91, change: -1.83, percentChange: -0.96, volume: "95.3M", marketCap: "598.4B" },
  { symbol: "META", name: "Meta Platforms Inc.", price: 390.71, change: 8.23, percentChange: 2.15, volume: "28.9M", marketCap: "1.0T" },
  { symbol: "BRK.B", name: "Berkshire Hathaway", price: 371.02, change: 0.25, percentChange: 0.07, volume: "3.4M", marketCap: "817.8B" },
  { symbol: "V", name: "Visa Inc.", price: 274.46, change: 1.84, percentChange: 0.68, volume: "6.5M", marketCap: "553.6B" },
];

const Watchlist = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">My Watchlist</h1>
          <div>
            <button className="bg-financial-highlight hover:bg-blue-700 text-white py-2 px-4 rounded-md text-sm transition-colors">
              + Add Stock
            </button>
          </div>
        </div>
        
        <Card className="border border-gray-200 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-100 text-left">
                <tr>
                  <th className="py-3 px-4 font-medium">Symbol</th>
                  <th className="py-3 px-4 font-medium">Company</th>
                  <th className="py-3 px-4 font-medium text-right">Price</th>
                  <th className="py-3 px-4 font-medium text-right">Change</th>
                  <th className="py-3 px-4 font-medium text-right">Volume</th>
                  <th className="py-3 px-4 font-medium text-right">Market Cap</th>
                  <th className="py-3 px-4 font-medium text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {watchlistStocks.map((stock) => (
                  <tr key={stock.symbol} className="hover:bg-gray-50 transition-colors">
                    <td className="py-3 px-4">
                      <Link to={`/stock/${stock.symbol}`} className="font-medium text-financial-highlight hover:underline">
                        {stock.symbol}
                      </Link>
                    </td>
                    <td className="py-3 px-4 text-gray-600">{stock.name}</td>
                    <td className="py-3 px-4 text-right font-medium">${stock.price.toFixed(2)}</td>
                    <td className={`py-3 px-4 text-right ${stock.change >= 0 ? "text-financial-gain" : "text-financial-loss"}`}>
                      {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)} ({stock.percentChange >= 0 ? "+" : ""}{stock.percentChange.toFixed(2)}%)
                    </td>
                    <td className="py-3 px-4 text-right text-gray-600">{stock.volume}</td>
                    <td className="py-3 px-4 text-right text-gray-600">${stock.marketCap}</td>
                    <td className="py-3 px-4 text-center">
                      <button className="text-gray-500 hover:text-red-500 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Watchlist;
