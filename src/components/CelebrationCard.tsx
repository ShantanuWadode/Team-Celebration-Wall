import React from 'react';
import { Gift, Award, Cake, Trophy } from 'lucide-react';
import { Celebration } from '../types/types';

interface CelebrationCardProps {
  celebration: Celebration;
}

const CelebrationCard: React.FC<CelebrationCardProps> = ({ celebration }) => {
  const { name, photoUrl, message, date, celebrationType } = celebration;
  
  const getIcon = () => {
    switch (celebrationType) {
      case 'birthday':
        return <Cake className="h-5 w-5 text-pink-400" />;
      case 'promotion':
        return <Award className="h-5 w-5 text-indigo-400" />;
      case 'anniversary':
        return <Gift className="h-5 w-5 text-emerald-400" />;
      case 'achievement':
        return <Trophy className="h-5 w-5 text-amber-400" />;
      default:
        return <Gift className="h-5 w-5 text-emerald-400" />;
    }
  };

  const getGradientColor = () => {
    switch (celebrationType) {
      case 'birthday':
        return 'from-pink-500/20 to-transparent';
      case 'promotion':
        return 'from-indigo-500/20 to-transparent';
      case 'anniversary':
        return 'from-emerald-500/20 to-transparent';
      case 'achievement':
        return 'from-amber-500/20 to-transparent';
      default:
        return 'from-emerald-500/20 to-transparent';
    }
  };

  return (
    <div 
      className="relative overflow-hidden rounded-xl bg-slate-800 shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
      style={{ 
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${getGradientColor()} opacity-40`}></div>
      <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-slate-700/50 blur-2xl"></div>
      
      <div className="relative z-10 p-5">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-slate-600">
              <img
                src={photoUrl}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
            <h3 className="text-lg font-medium text-slate-100">{name}</h3>
          </div>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700">
            {getIcon()}
          </div>
        </div>
        
        <div className="mb-3 rounded-lg bg-slate-700/50 p-3">
          <p className="text-slate-300">{message}</p>
        </div>
        
        <div className="flex items-center justify-between text-sm text-slate-400">
          <p>{date}</p>
          <div className="flex items-center gap-1">
            {getIcon()}
            <span className="capitalize">{celebrationType}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CelebrationCard;