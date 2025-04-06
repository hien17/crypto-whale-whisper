
import React from 'react';
import { Module } from '@/data/mockData';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  // Different background patterns based on module type
  let bgClass = "bg-gradient-cards";
  
  if (module.type === 'money') {
    bgClass = "bg-gradient-to-br from-crypto-blue/10 to-transparent";
  } else if (module.type === 'trader') {
    bgClass = "bg-gradient-to-br from-crypto-teal/10 to-transparent";
  }

  return (
    <div className={`crypto-card min-w-[300px] w-full h-[200px] ${bgClass} border border-gray-700/50 flex flex-col`}>
      <h3 className="text-lg font-medium text-white">{module.title}</h3>
      
      <div className="flex-1 flex items-center justify-center">
        {/* Placeholder content - would be replaced with actual data/charts */}
        <p className="text-gray-400 text-sm">Module data visualization</p>
      </div>
    </div>
  );
};

export default ModuleCard;
