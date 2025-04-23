
import { NewsCard } from './NewsCard';
import { useMarketNews } from '@/hooks/useStockData';
import { Card } from '@/components/ui/card';

export const NewsFeed = () => {
  const { news, loading } = useMarketNews();
  
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Market News</h2>
      <div className="space-y-4">
        {loading ? (
          // Show loading skeletons
          Array.from({ length: 3 }).map((_, i) => (
            <Card key={i} className="flex flex-col md:flex-row border border-gray-200 shadow-sm overflow-hidden animate-pulse">
              <div className="md:w-1/4 h-48 bg-gray-200"></div>
              <div className="p-4 md:w-3/4">
                <div className="h-4 bg-gray-200 rounded w-1/4 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </Card>
          ))
        ) : (
          // Show actual news
          news.map(item => (
            <NewsCard key={item.id} news={item} />
          ))
        )}
        
        <div className="text-center mt-6">
          <button className="text-financial-highlight hover:underline text-sm font-medium">
            Load More News
          </button>
        </div>
      </div>
    </div>
  );
};
