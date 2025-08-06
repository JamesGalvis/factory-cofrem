import React from 'react';
import { Menu, Search, Bell } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
  notifications?: number;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  notifications = 0,
  onSearch
}) => {
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (onSearch) {
      onSearch(e.target.value);
    }
  };

  const handleNotificationClick = (): void => {
    // Lógica para mostrar notificaciones
    console.log('Mostrar notificaciones');
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button 
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Abrir menú"
          >
            <Menu size={20} />
          </button>
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input 
              type="text" 
              placeholder="Buscar en COFREM..." 
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2 w-96 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Boletín Interno
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Revista Enlace
            </a>
            <a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">
              Redes Sociales
            </a>
          </nav>
          
          <button 
            onClick={handleNotificationClick}
            className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            aria-label={`Notificaciones${notifications > 0 ? ` (${notifications})` : ''}`}
          >
            <Bell size={20} />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {notifications > 99 ? '99+' : notifications}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};