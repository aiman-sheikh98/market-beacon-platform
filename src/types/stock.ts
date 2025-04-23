
export interface StockData {
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

export interface MarketIndex {
  name: string;
  value: string;
  change: number;
  percentChange: number;
}

export interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  summary: string;
  imageUrl: string;
}

export interface WatchlistItem {
  symbol: string;
  addedAt: Date;
}
