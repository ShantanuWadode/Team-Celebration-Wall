import React, { useState, useEffect } from 'react';
import Header from './Header';
import CelebrationGrid from './CelebrationGrid';
import AddCelebrationModal from './AddCelebrationModal';
import { celebrations as initialCelebrations } from '../data/celebrationData';
import { Celebration } from '../types/types';

const CelebrationWall: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [displayedCelebrations, setDisplayedCelebrations] = useState<Celebration[]>([]);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setDisplayedCelebrations(initialCelebrations);
      setIsLoading(false);
    }, 800);
    
    return () => clearTimeout(timer);
  }, []);

  const handleAddCelebration = (celebration: Omit<Celebration, 'id'>) => {
    const newCelebration: Celebration = {
      ...celebration,
      id: (displayedCelebrations.length + 1).toString(),
      date: new Date(celebration.date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    };
    
    setDisplayedCelebrations([...displayedCelebrations, newCelebration]);
  };

  return (
    <div className="min-h-screen bg-slate-900 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Header onAddClick={() => setIsModalOpen(true)} />
        
        {isLoading ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, index) => (
              <div 
                key={index}
                className="h-60 animate-pulse rounded-xl bg-slate-800"
              />
            ))}
          </div>
        ) : (
          <CelebrationGrid celebrations={displayedCelebrations} />
        )}

        <AddCelebrationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onAdd={handleAddCelebration}
        />
      </div>
    </div>
  );
};

export default CelebrationWall;