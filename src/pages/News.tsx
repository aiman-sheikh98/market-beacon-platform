
import Navbar from '@/components/layout/Navbar';
import { NewsCard } from '@/components/news/NewsCard';

const mockNews = [
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
  },
  {
    id: 4,
    title: "Microsoft's AI Investments Pay Off with Record Cloud Revenue",
    source: "CNBC",
    time: "1 day ago",
    summary: "Microsoft Corp. announced better-than-expected quarterly results, with its Azure cloud computing service showing strong growth boosted by artificial intelligence offerings.",
    imageUrl: "https://images.unsplash.com/photo-1642032814973-da7965d14a1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWljcm9zb2Z0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 5,
    title: "Oil Prices Drop on Higher-Than-Expected Inventory Data",
    source: "Wall Street Journal",
    time: "2 days ago",
    summary: "Crude oil prices fell after U.S. Energy Information Administration data showed a larger-than-expected build in domestic inventories, suggesting weakening demand.",
    imageUrl: "https://images.unsplash.com/photo-1566086786808-bede0e6c3cff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8b2lsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Market News</h1>
          <div>
            <select className="bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md focus:outline-none focus:ring-1 focus:ring-financial-highlight">
              <option>All Topics</option>
              <option>Stocks</option>
              <option>Crypto</option>
              <option>Commodities</option>
              <option>Economy</option>
            </select>
          </div>
        </div>
        
        <div className="space-y-6">
          {mockNews.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
        
        <div className="mt-8 flex justify-center">
          <button className="bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 px-5 py-2 rounded-md transition-colors">
            Load More News
          </button>
        </div>
      </div>
    </div>
  );
};

export default News;
