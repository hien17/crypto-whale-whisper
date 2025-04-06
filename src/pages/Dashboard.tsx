
import React, { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import WalletDisplay from '@/components/WalletDisplay';
import SearchBar from '@/components/SearchBar';
import FilterOptions from '@/components/FilterOptions';
import ScrollableModules from '@/components/ScrollableModules';
import TraderSection from '@/components/TraderSection';
import { userWallet, modules, topTraders, topWhales } from '@/data/mockData';
import { getWalletInfo, connectWallet } from '@/utils/walletConnector';
import { toast } from 'sonner';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'spotlight' | 'dashboard'>('dashboard');
  const [isConnecting, setIsConnecting] = useState(false);
  const [wallet, setWallet] = useState(userWallet);

  // Simulate wallet connection on component mount
  useEffect(() => {
    const connectUserWallet = async () => {
      setIsConnecting(true);
      try {
        await connectWallet();
        setIsConnecting(false);
        toast.success('Wallet connected successfully');
      } catch (error) {
        console.error(error);
        setIsConnecting(false);
        toast.error('Failed to connect wallet');
      }
    };

    connectUserWallet();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <h1 className="text-2xl font-bold text-white">Dashboard</h1>
            <WalletDisplay wallet={wallet} />
          </div>
          
          {/* Navigation */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </div>

          {/* Search */}
          <SearchBar />

          {/* Filter Options */}
          <FilterOptions />

          {/* Scrollable Modules */}
          <ScrollableModules modules={modules} />

          {/* Trader Sections */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <TraderSection title="Top Traders" traders={topTraders} />
            <TraderSection title="Top Whales" traders={topWhales} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
