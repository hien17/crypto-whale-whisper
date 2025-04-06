
import React from 'react';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
      <Input 
        placeholder="Search what you want ..." 
        className="pl-10 py-6 bg-transparent border border-gray-700 rounded-xl text-white"
      />
    </div>
  );
};

export default SearchBar;
