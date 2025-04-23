
import stockApiService from '@/services/stockApi';

export const getStockData = async (symbols: string[]) => {
  try {
    const stockDataPromises = symbols.map(symbol => stockApiService.getStockData(symbol));
    return await Promise.all(stockDataPromises);
  } catch (error) {
    console.error('Error fetching stock data:', error);
    throw error;
  }
};

export const getMarketIndices = async (indices: string[]) => {
  try {
    // Note: in the mock data service, we don't use the indices parameter
    // but in a real API, we would pass this to the service
    return await stockApiService.getMarketIndices();
  } catch (error) {
    console.error('Error fetching market indices:', error);
    throw error;
  }
};
