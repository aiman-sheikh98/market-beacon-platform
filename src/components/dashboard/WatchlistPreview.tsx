
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface WatchlistStock {
  symbol: string;
  name: string;
  price: number;
  change: number;
  percentChange: number;
}

const watchlistStocks: WatchlistStock[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: 189.84, change: 0.94, percentChange: 0.50 },
  { symbol: "MSFT", name: "Microsoft Corp.", price: 397.58, change: 2.83, percentChange: 0.72 },
  { symbol: "GOOGL", name: "Alphabet Inc.", price: 141.16, change: -0.74, percentChange: -0.52 },
  { symbol: "AMZN", name: "Amazon.com Inc.", price: 155.32, change: 0.95, percentChange: 0.62 },
];

export const WatchlistPreview = () => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Watchlist</h2>
        <Link to="/watchlist" className="text-financial-highlight text-sm hover:underline">
          View All
        </Link>
      </div>
      <Card className="border border-gray-200 shadow-sm">
        <div className="divide-y divide-gray-100">
          {watchlistStocks.map((stock) => (
            <Link to={`/stock/${stock.symbol}`} key={stock.symbol}>
              <div className="p-4 hover:bg-gray-50 transition-colors flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{stock.symbol}</h3>
                  <p className="text-sm text-gray-500">{stock.name}</p>
                </div>
                <div className="text-right">
                  <p className="font-bold">${stock.price.toFixed(2)}</p>
                  <p className={`text-sm ${stock.change >= 0 ? "text-financial-gain" : "text-financial-loss"}`}>
                    {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)} ({stock.percentChange >= 0 ? "+" : ""}{stock.percentChange.toFixed(2)}%)
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Card>
    </div>
  );
};
