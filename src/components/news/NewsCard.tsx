
import { Card } from "@/components/ui/card";

interface NewsItem {
  id: number;
  title: string;
  source: string;
  time: string;
  summary: string;
  imageUrl: string;
}

interface NewsCardProps {
  news: NewsItem;
}

export const NewsCard = ({ news }: NewsCardProps) => {
  return (
    <Card className="flex flex-col md:flex-row border border-gray-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="md:w-1/4 h-48 md:h-auto overflow-hidden">
        <img 
          src={news.imageUrl} 
          alt={news.title} 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 md:w-3/4">
        <div className="flex justify-between items-center mb-2">
          <span className="bg-gray-100 text-financial-lowlight px-2 py-1 rounded text-xs font-medium">{news.source}</span>
          <span className="text-gray-500 text-xs">{news.time}</span>
        </div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-gray-600 line-clamp-3">{news.summary}</p>
        <div className="mt-3">
          <a 
            href="#" 
            className="text-financial-highlight hover:underline text-sm font-medium"
          >
            Read More
          </a>
        </div>
      </div>
    </Card>
  );
};
