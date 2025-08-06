import React from 'react';
import { NewsCard } from '@/components/common/news-card';
import { NewsItem } from '@/types';

interface NewsSectionProps {
  newsData: NewsItem[];
  onViewAll: () => void;
  onReadMore?: (newsId: number) => void;
  onReaction?: (newsId: number) => void;
  onComment?: (newsId: number) => void;
}

export const NewsSection: React.FC<NewsSectionProps> = ({ 
  newsData, 
  onViewAll, 
  onReadMore, 
  onReaction, 
  onComment 
}) => {
  const handleViewAll = (): void => {
    onViewAll();
  };

  return (
    <div className="lg:col-span-2">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Últimas Noticias</h2>
        <button 
          onClick={handleViewAll}
          className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
        >
          Ver todas
        </button>
      </div>
      <div className="space-y-4">
        {newsData.slice(0, 3).map((news) => (
          <NewsCard 
            key={news.id} 
            news={news} 
            compact 
            onReadMore={onReadMore}
            onReaction={onReaction}
            onComment={onComment}
          />
        ))}
      </div>
    </div>
  );
};