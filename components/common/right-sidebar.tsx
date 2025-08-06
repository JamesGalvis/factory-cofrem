import React from 'react';
import { Calendar, Users } from 'lucide-react';

interface RightSidebarProps {
  onPlayGames?: () => void;
  onParticipateInSurvey?: () => void;
  userPoints?: number;
  userRanking?: string;
}

export const RightSidebar: React.FC<RightSidebarProps> = ({ 
  onPlayGames, 
  onParticipateInSurvey,
  userPoints = 1250,
  userRanking = "top 10"
}) => {
  const handlePlayGames = (): void => {
    if (onPlayGames) {
      onPlayGames();
    }
  };

  const handleParticipateInSurvey = (): void => {
    if (onParticipateInSurvey) {
      onParticipateInSurvey();
    }
  };

  const progressPercentage = Math.min((userPoints / 2000) * 100, 100);

  return (
    <div className="space-y-6">
      {/* Próximos eventos */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Próximos Eventos</h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Calendar size={16} className="text-blue-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Reunión Directiva</p>
              <p className="text-xs text-gray-500">10 Jul - 9:00 AM</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Users size={16} className="text-green-600" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-gray-900">Capacitación Google</p>
              <p className="text-xs text-gray-500">12 Jul - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Cumpleaños */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Cumpleaños de Hoy</h3>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
            <span className="text-lg" role="img" aria-label="celebración">🎉</span>
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900">María Rodríguez</p>
            <p className="text-xs text-gray-500">Área de Contabilidad</p>
          </div>
        </div>
      </div>

      {/* Gamificación */}
      <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border border-purple-100">
        <h3 className="font-semibold text-gray-900 mb-4">
          <span role="img" aria-label="trofeo">🏆</span> Tu Progreso
        </h3>
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Puntos totales</span>
            <span className="font-bold text-purple-600">
              {userPoints.toLocaleString('es-ES')}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <p className="text-xs text-gray-500">
            ¡Estás en el {userRanking} de la semana!
          </p>
          <button 
            onClick={handlePlayGames}
            className="w-full mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Jugar Ahora
          </button>
        </div>
      </div>

      {/* Clima laboral */}
      <div className="bg-white p-6 rounded-xl border border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-4">Encuesta Activa</h3>
        <p className="text-sm text-gray-600 mb-4">Evaluación de clima laboral 2025</p>
        <button 
          onClick={handleParticipateInSurvey}
          className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Participar
        </button>
      </div>
    </div>
  );
};