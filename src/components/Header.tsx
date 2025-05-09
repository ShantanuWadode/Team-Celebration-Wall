import React from 'react';
import { PartyPopper, PlusCircle } from 'lucide-react';

interface HeaderProps {
  onAddClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAddClick }) => {
  return (
    <div className="mb-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-500/20">
            <PartyPopper className="h-6 w-6 text-indigo-400" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-slate-100">Team Celebration Wall</h1>
            <p className="mt-1 text-lg text-slate-400">Celebrate milestones together.</p>
          </div>
        </div>
        <button 
          onClick={onAddClick}
          className="group flex items-center gap-2 rounded-full bg-indigo-600 px-4 py-2 text-white transition-all hover:bg-indigo-500"
        >
          <PlusCircle className="h-5 w-5 transition-transform group-hover:rotate-90" />
          <span>Add Celebration</span>
        </button>
      </div>
      
      <div className="grid grid-cols-2 gap-4 rounded-xl bg-slate-800/50 p-4 sm:grid-cols-4">
        <div className="flex flex-col items-center rounded-lg bg-slate-700/50 p-3 text-center">
          <span className="text-xl font-bold text-indigo-400">8</span>
          <span className="text-sm text-slate-400">Celebrations</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-slate-700/50 p-3 text-center">
          <span className="text-xl font-bold text-pink-400">2</span>
          <span className="text-sm text-slate-400">Birthdays</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-slate-700/50 p-3 text-center">
          <span className="text-xl font-bold text-emerald-400">2</span>
          <span className="text-sm text-slate-400">Anniversaries</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-slate-700/50 p-3 text-center">
          <span className="text-xl font-bold text-amber-400">2</span>
          <span className="text-sm text-slate-400">Achievements</span>
        </div>
      </div>
    </div>
  );
};

export default Header;