
import React from 'react';
import { truncateAddress } from '@/utils/formatters';
import { WalletInfo } from '@/data/mockData';

interface WalletDisplayProps {
  wallet: WalletInfo;
}

const WalletDisplay: React.FC<WalletDisplayProps> = ({ wallet }) => {
  return (
    <div className="glass rounded-full px-4 py-2 flex items-center space-x-2">
      <div className="h-2 w-2 rounded-full bg-crypto-green animate-pulse"></div>
      <div>
        <span className="font-medium">{truncateAddress(wallet.address)}</span>
        <span className="ml-2 text-gray-300">{wallet.tier}</span>
      </div>
    </div>
  );
};

export default WalletDisplay;
