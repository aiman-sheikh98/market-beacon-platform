
import { cn } from "@/lib/utils";

interface StockPriceProps {
  price: number;
  change: number;
  percentChange: number;
  size?: "sm" | "md" | "lg";
}

export const StockPrice = ({ price, change, percentChange, size = "md" }: StockPriceProps) => {
  const isPositive = change >= 0;
  
  const sizeClasses = {
    sm: {
      price: "text-base font-bold",
      change: "text-xs"
    },
    md: {
      price: "text-lg font-bold",
      change: "text-sm"
    },
    lg: {
      price: "text-xl font-bold",
      change: "text-base"
    }
  };
  
  return (
    <div className="flex flex-col">
      <span className={sizeClasses[size].price}>
        ${price.toFixed(2)}
      </span>
      <span 
        className={cn(
          sizeClasses[size].change, 
          isPositive ? "text-financial-gain" : "text-financial-loss"
        )}
      >
        {isPositive ? "+" : ""}{change.toFixed(2)} ({isPositive ? "+" : ""}{percentChange.toFixed(2)}%)
      </span>
    </div>
  );
};
