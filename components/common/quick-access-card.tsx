import React from 'react';
import * as Icons from 'lucide-react';
import { QuickAccessItem } from '@/types';

interface QuickAccessCardProps {
  item: QuickAccessItem;
  onClick?: (item: QuickAccessItem) => void;
}

export const QuickAccessCard: React.FC<QuickAccessCardProps> = ({ 
  item, 
  onClick 
}) => {
  const IconComponent = Icons[item.icon as keyof typeof Icons] as React.ComponentType<{ size?: number }>;
  
  const getCategoryStyles = (category: QuickAccessItem['category']): string => {
    switch(category) {
      case 'personal': return 'bg-blue-50 text-blue-500 group-hover:bg-blue-100';
      case 'sistemas': return 'bg-green-50 text-green-500 group-hover:bg-green-100';
      case 'documentos': return 'bg-purple-50 text-purple-500 group-hover:bg-purple-100';
      case 'comunicacion': return 'bg-orange-50 text-orange-500 group-hover:bg-orange-100';
      default: return 'bg-gray-50 text-gray-500 group-hover:bg-gray-100';
    }
  };

  const handleClick = (): void => {
    if (onClick) {
      onClick(item);
    }
  };

  return (
    <button 
      onClick={handleClick}
      className="group bg-white p-4 rounded-lg border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-200 w-full"
    >
      <div className="flex flex-col items-center text-center space-y-2">
        <div className={`p-2 rounded-md transition-all duration-200 ${getCategoryStyles(item.category)}`}>
          <IconComponent size={20} />
        </div>
        <span className="text-xs font-medium text-gray-600 group-hover:text-gray-800 leading-tight">
          {item.name}
        </span>
      </div>
    </button>
  );
};