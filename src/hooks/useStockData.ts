
import { useState, useEffect } from 'react';
import stockApiService from '@/services/stockApi';
import type { StockData, MarketIndex, NewsItem } from '@/types/stock';

export const useStockData = (symbol: string) => {
  const [data, setData] = useState<StockData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const stockData = await stockApiService.getStockData(symbol);
        setData(stockData);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [symbol]);

  return { data, loading, error };
};

export const useMarketIndices = () => {
  const [indices, setIndices] = useState<MarketIndex[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await stockApiService.getMarketIndices();
        setIndices(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setIndices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { indices, loading, error };
};

export const useMarketNews = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await stockApiService.getMarketNews();
        setNews(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setNews([]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { news, loading, error };
};

export const useWatchlist = (symbols: string[]) => {
  const [stocks, setStocks] = useState<StockData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await stockApiService.getWatchlistStocks(symbols);
        setStocks(data);
        setError(null);
      } catch (err) {
        setError(err as Error);
        setStocks([]);
      } finally {
        setLoading(false);
      }
    };

    if (symbols.length > 0) {
      fetchData();
    } else {
      setStocks([]);
      setLoading(false);
    }
  }, [symbols]);

  return { stocks, loading, error };
};
