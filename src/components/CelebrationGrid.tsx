import React from 'react';
import CelebrationCard from './CelebrationCard';
import { Celebration } from '../types/types';

interface CelebrationGridProps {
  celebrations: Celebration[];
}

const CelebrationGrid: React.FC<CelebrationGridProps> = ({ celebrations }) => {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {celebrations.map((celebration) => (
        <CelebrationCard key={celebration.id} celebration={celebration} />
      ))}
    </div>
  );
};

export default CelebrationGrid;