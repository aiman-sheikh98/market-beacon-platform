
import axios from "axios";

// In a real application, this would connect to a real stock API
// For this demo, we're using mock data

interface StockData {
  symbol: string;
  name?: string;
  price: number;
  change: number;
  percentChange: number;
  volume?: string;
  marketCap?: string;
  previousClose?: number;
  open?: number;
  dayHigh?: number;
  dayLow?: number;
}

interface MarketIndex {
  name: string;
  value: string;
  change: number;
  percentChange: number;
}

interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  summary: string;
  imageUrl: string;
}

class StockApiService {
  // Mock stock data
  private stocks: Record<string, StockData> = {
    AAPL: {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 189.84,
      change: 0.94,
      percentChange: 0.50,
      volume: "55.2M",
      marketCap: "2.9T",
      previousClose: 188.90,
      open: 189.35,
      dayHigh: 190.05,
      dayLow: 188.62
    },
    MSFT: {
      symbol: "MSFT",
      name: "Microsoft Corp.",
      price: 397.58,
      change: 2.83,
      percentChange: 0.72,
      volume: "22.8M",
      marketCap: "2.8T",
      previousClose: 394.75,
      open: 395.40,
      dayHigh: 398.75,
      dayLow: 394.10
    },
    GOOGL: {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 141.16,
      change: -0.74,
      percentChange: -0.52,
      volume: "25.7M",
      marketCap: "1.8T",
      previousClose: 141.90,
      open: 141.70,
      dayHigh: 142.35,
      dayLow: 140.95
    },
    AMZN: {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 155.32,
      change: 0.95,
      percentChange: 0.62,
      volume: "42.1M",
      marketCap: "1.6T",
      previousClose: 154.37,
      open: 154.80,
      dayHigh: 156.20,
      dayLow: 154.30
    },
    TSLA: {
      symbol: "TSLA",
      name: "Tesla, Inc.",
      price: 187.91,
      change: -1.83,
      percentChange: -0.96,
      volume: "95.3M",
      marketCap: "598.4B",
      previousClose: 189.74,
      open: 190.10,
      dayHigh: 191.05,
      dayLow: 186.80
    },
    META: {
      symbol: "META",
      name: "Meta Platforms Inc.",
      price: 390.71,
      change: 8.23,
      percentChange: 2.15,
      volume: "28.9M",
      marketCap: "1.0T",
      previousClose: 382.48,
      open: 384.20,
      dayHigh: 392.15,
      dayLow: 383.75
    }
  };

  // Mock index data
  private indices: MarketIndex[] = [
    { name: "S&P 500", value: "4,891.15", change: 14.17, percentChange: 0.29 },
    { name: "Nasdaq", value: "15,628.95", change: 96.06, percentChange: 0.62 },
    { name: "Dow Jones", value: "38,109.43", change: -124.07, percentChange: -0.32 },
    { name: "Russell 2000", value: "1,994.26", change: -21.69, percentChange: -1.08 }
  ];

  // Mock news data
  private news: NewsItem[] = [
    {
      id: 1,
      title: "Apple Reports Record Quarter as iPhone Sales Surge",
      source: "Bloomberg",
      time: "2 hours ago",
      summary: "Apple Inc. reported its highest quarterly revenue ever, driven by strong iPhone sales and growing services income. The company's CEO Tim Cook announced further expansion plans in emerging markets.",
      imageUrl: "https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzN8fGFwcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 2,
      title: "Fed Signals Possible Rate Cut as Inflation Shows Signs of Cooling",
      source: "Financial Times",
      time: "5 hours ago",
      summary: "Federal Reserve Chair Jerome Powell indicated that the central bank might consider cutting interest rates in the coming months as inflation data shows consistent signs of moderating.",
      imageUrl: "https://images.unsplash.com/photo-1611324586801-77b5ab9e227b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGZlZGVyYWwlMjByZXNlcnZlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      id: 3,
      title: "Tesla Unveils New Battery Technology with 500-Mile Range",
      source: "Reuters",
      time: "1 day ago",
      summary: "Tesla has announced breakthrough battery technology that could provide electric vehicles with up to 500 miles of range on a single charge, potentially transforming the EV industry.",
      imageUrl: "https://images.unsplash.com/photo-1612810806695-30f7a8258391?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc2xhfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // Methods to interact with the API
  async getStockData(symbol: string): Promise<StockData> {
    // In a real app, this would make an API call
    // For demo, we return mock data
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const stock = this.stocks[symbol.toUpperCase()];
        if (stock) {
          resolve(stock);
        } else {
          reject(new Error(`Stock ${symbol} not found`));
        }
      }, 300);
    });
  }

  async getMarketIndices(): Promise<MarketIndex[]> {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.indices);
      }, 300);
    });
  }

  async getMarketNews(): Promise<NewsItem[]> {
    // Simulate API call with delay
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.news);
      }, 300);
    });
  }

  async searchStocks(query: string): Promise<StockData[]> {
    // Simulate search functionality
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = Object.values(this.stocks).filter(
          (stock) => 
            stock.symbol.toLowerCase().includes(query.toLowerCase()) || 
            (stock.name && stock.name.toLowerCase().includes(query.toLowerCase()))
        );
        resolve(results);
      }, 300);
    });
  }

  async getWatchlistStocks(symbols: string[]): Promise<StockData[]> {
    // Simulate API call for multiple stocks
    return new Promise((resolve) => {
      setTimeout(() => {
        const stocks = symbols
          .map(symbol => this.stocks[symbol.toUpperCase()])
          .filter(Boolean);
        resolve(stocks);
      }, 300);
    });
  }
}

export const stockApiService = new StockApiService();
export default stockApiService;
