
import React from 'react';
import { Trader } from '@/data/mockData';
import { truncateAddress, formatCurrency, formatPercentage } from '@/utils/formatters';

interface TraderCardProps {
  trader: Trader;
}

const TraderCard: React.FC<TraderCardProps> = ({ trader }) => {
  return (
    <div className={`trader-card w-full transition-all duration-300 hover:shadow-glow-blue ${trader.isWhale ? 'border-crypto-teal/20' : 'border-crypto-blue/20'}`}>
      <div className="flex justify-between items-start">
        <div className="flex items-center">
          <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center mr-2">
            {trader.avatar ? (
              <img src={trader.avatar} alt="Trader" className="w-8 h-8 rounded-full" />
            ) : (
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-crypto-blue to-crypto-teal opacity-80"></div>
            )}
          </div>
          <span className="text-white font-medium">{truncateAddress(trader.address)}</span>
        </div>
        <div className="rounded-full bg-blue-500/10 p-1">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-crypto-blue to-crypto-teal flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L20 10L12 18L4 10L12 2Z" fill="#ffffff" />
              <path d="M20 10L12 22L4 10" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-4">
        <div>
          <div className="text-gray-400 text-xs">30D PnL</div>
          <div className={`text-lg font-bold ${trader.pnl30d >= 0 ? 'text-crypto-positive' : 'text-crypto-negative'}`}>
            {formatCurrency(trader.pnl30d)}
          </div>
        </div>
        <div>
          <div className="text-gray-400 text-xs">Win rate</div>
          <div className="text-lg font-bold text-white">{formatPercentage(trader.winRate)}</div>
        </div>
      </div>
    </div>
  );
};

export default TraderCard;
