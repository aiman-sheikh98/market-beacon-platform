
import { Card } from "@/components/ui/card";
import { useMarketIndices } from "@/hooks/useStockData";
import type { MarketIndex } from "@/types/stock";

export const MarketOverview = () => {
  const { indices, loading } = useMarketIndices();
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Market Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {loading ? (
          // Show loading skeletons
          Array.from({ length: 4 }).map((_, i) => (
            <Card key={i} className="p-4 border border-gray-200 shadow-sm animate-pulse">
              <div className="h-5 bg-gray-200 rounded mb-2 w-2/3"></div>
              <div className="h-7 bg-gray-200 rounded w-1/2"></div>
            </Card>
          ))
        ) : (
          // Show actual data
          indices.map((index: MarketIndex) => (
            <Card key={index.name} className="p-4 border border-gray-200 shadow-sm">
              <div className="flex justify-between items-center">
                <span className="font-medium">{index.name}</span>
                <span className={`text-xs px-2 py-1 rounded ${
                  index.percentChange >= 0 ? "bg-green-100 text-financial-gain" : "bg-red-100 text-financial-loss"
                }`}>
                  {index.percentChange >= 0 ? "+" : ""}{index.percentChange}%
                </span>
              </div>
              <div className="mt-2 flex justify-between items-end">
                <span className="text-lg font-bold">{index.value}</span>
                <span className={index.change >= 0 ? "text-financial-gain" : "text-financial-loss"}>
                  {index.change >= 0 ? "+" : ""}{index.change}
                </span>
              </div>
            </Card>
          ))
        )}
      </div>
    </div>
  );
};
