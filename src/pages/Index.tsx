
import React from 'react';
import Dashboard from './Dashboard';
import { motion } from 'framer-motion';

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen bg-background overflow-hidden"
    >
      <Dashboard />
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 mix-blend-overlay opacity-20">
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-crypto-blue/20 blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 rounded-full bg-crypto-teal/20 blur-3xl animate-pulse-slow"></div>
      </div>
    </motion.div>
  );
};

export default Index;
