
import React from 'react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeTab: 'spotlight' | 'dashboard';
  onTabChange: (tab: 'spotlight' | 'dashboard') => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="flex space-x-2">
      <Button
        variant={activeTab === 'spotlight' ? 'default' : 'outline'}
        className={`rounded-full ${
          activeTab === 'spotlight' ? 'bg-primary text-white' : 'bg-transparent text-white border-gray-700'
        }`}
        onClick={() => onTabChange('spotlight')}
      >
        Spotlight
      </Button>
      <Button
        variant={activeTab === 'dashboard' ? 'default' : 'outline'}
        className={`rounded-full ${
          activeTab === 'dashboard' ? 'bg-primary text-white' : 'bg-transparent text-white border-gray-700'
        }`}
        onClick={() => onTabChange('dashboard')}
      >
        Dashboard
      </Button>
    </div>
  );
};

export default Navigation;
