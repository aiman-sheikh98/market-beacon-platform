
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { StockData } from "@/types/stock";
import { StockPrice } from "./StockPrice";

interface StockCardProps {
  stock: StockData;
}

const StockCard = ({ stock }: StockCardProps) => {
  return (
    <Card className="overflow-hidden border border-gray-200 hover:border-blue-300 transition-all duration-200">
      <CardHeader className="bg-gray-50 p-4 flex flex-row items-center justify-between">
        <div>
          <h3 className="font-bold text-lg">{stock.symbol}</h3>
          {stock.name && <p className="text-gray-500 text-sm">{stock.name}</p>}
        </div>
        <StockPrice 
          price={stock.price} 
          change={stock.change} 
          percentChange={stock.percentChange} 
        />
      </CardHeader>
      <CardContent className="p-4">
        <div className="grid grid-cols-2 gap-2 text-sm">
          {stock.marketCap && (
            <div>
              <span className="text-gray-500">Market Cap</span>
              <p>{stock.marketCap}</p>
            </div>
          )}
          {stock.volume && (
            <div>
              <span className="text-gray-500">Volume</span>
              <p>{stock.volume}</p>
            </div>
          )}
          {stock.open !== undefined && (
            <div>
              <span className="text-gray-500">Open</span>
              <p>${stock.open.toFixed(2)}</p>
            </div>
          )}
          {stock.previousClose !== undefined && (
            <div>
              <span className="text-gray-500">Previous Close</span>
              <p>${stock.previousClose.toFixed(2)}</p>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StockCard;
