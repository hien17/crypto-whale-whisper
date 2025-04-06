
import React, { useState } from 'react';
import ModuleCard from './ModuleCard';
import { Module } from '@/data/mockData';

interface ScrollableModulesProps {
  modules: Module[];
}

const ScrollableModules: React.FC<ScrollableModulesProps> = ({ modules }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const scrollTo = (index: number) => {
    setActiveIndex(index);
    // In a real implementation, we'd scroll the container to this index
  };

  return (
    <div className="w-full">
      <div className="overflow-x-auto hide-scrollbar">
        <div className="flex space-x-4 pb-4">
          {modules.map((module) => (
            <div key={module.id} className="min-w-[300px] w-[300px]">
              <ModuleCard module={module} />
            </div>
          ))}
        </div>
      </div>
      
      {/* Dots indicator */}
      <div className="flex justify-center space-x-2 mt-4">
        {modules.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`dot-indicator transition-all ${index === activeIndex ? 'active' : ''}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ScrollableModules;
