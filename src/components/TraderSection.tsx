
import React from 'react';
import { Button } from '@/components/ui/button';
import TraderCard from './TraderCard';
import { Trader } from '@/data/mockData';

interface TraderSectionProps {
  title: string;
  traders: Trader[];
  viewAllHref?: string;
  maxDisplay?: number;
}

const TraderSection: React.FC<TraderSectionProps> = ({ 
  title, 
  traders, 
  viewAllHref = "#", 
  maxDisplay = 4 
}) => {
  // Only display up to maxDisplay traders
  const displayedTraders = traders.slice(0, maxDisplay);

  return (
    <div className="crypto-card w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-medium text-white">{title}</h2>
        <Button variant="link" className="text-crypto-blue" asChild>
          <a href={viewAllHref}>View all</a>
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {displayedTraders.map((trader) => (
          <TraderCard key={trader.id} trader={trader} />
        ))}
      </div>
    </div>
  );
};

export default TraderSection;
