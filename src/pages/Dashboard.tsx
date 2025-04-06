
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
import { motion } from 'framer-motion';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Biophilic design elements */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gradient-to-b from-crypto-teal/30 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-gradient-to-t from-crypto-blue/30 to-transparent blur-3xl"></div>
        
        {/* Organic patterns */}
        <svg className="absolute top-0 left-0 w-full h-full opacity-5" width="100%" height="100%">
          <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
            <circle id="pattern-circle" cx="10" cy="10" r="1.6257413380501518" fill="none" stroke="#1EAEDB" strokeWidth="0.5"></circle>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
        </svg>
      </div>
      
      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div 
          className="flex flex-col space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Header */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
            variants={itemVariants}
          >
            <div className="relative">
              <h1 className="text-2xl font-bold text-white">Dashboard</h1>
              <div className="absolute -top-2 -left-3 w-10 h-10 border-t-2 border-l-2 border-crypto-blue/30 rounded-tl-lg opacity-50"></div>
              <div className="absolute -bottom-2 -right-3 w-10 h-10 border-b-2 border-r-2 border-crypto-teal/30 rounded-br-lg opacity-50"></div>
            </div>
            <WalletDisplay wallet={wallet} />
          </motion.div>
          
          {/* Navigation */}
          <motion.div 
            className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0"
            variants={itemVariants}
          >
            <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
          </motion.div>

          {/* Search */}
          <motion.div variants={itemVariants}>
            <SearchBar />
          </motion.div>

          {/* Filter Options */}
          <motion.div variants={itemVariants}>
            <FilterOptions />
          </motion.div>

          {/* Scrollable Modules */}
          <motion.div variants={itemVariants}>
            <ScrollableModules modules={modules} />
          </motion.div>

          {/* Trader Sections */}
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
            variants={itemVariants}
          >
            <TraderSection title="Top Traders" traders={topTraders} />
            <TraderSection title="Top Whales" traders={topWhales} />
          </motion.div>
        </motion.div>
      </div>
      
      {/* Maximum contrast dark footer */}
      <div className="w-full py-2 mt-8 bg-black relative z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="text-xs text-gray-500 font-mono">DEFI.ANALYTICS.PLATFORM</div>
          <div className="text-xs text-gray-500 flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-crypto-teal"></span>
            <span>ALPHA v0.1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
