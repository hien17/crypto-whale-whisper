
import React from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

const FilterOptions: React.FC = () => {
  return (
    <div className="flex space-x-4 items-center">
      <Button variant="ghost" className="text-white px-0">
        Signal
      </Button>
      <Button variant="outline" className="rounded-md border-gray-700 text-white">
        <Filter size={16} className="mr-2" />
        Filter
      </Button>
    </div>
  );
};

export default FilterOptions;
