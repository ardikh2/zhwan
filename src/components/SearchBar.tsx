import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative max-w-md mx-auto mb-6 px-2 md:px-0">
      <div className="relative">
        <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-zhuan-light/60" />
        <input
          type="text"
          placeholder="جستجو در منو..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pr-10 pl-4 py-4 bg-zhuan-dark-brown rounded-xl border-0 focus:ring-2 focus:ring-zhuan-gold focus:outline-none persian-input text-zhuan-light placeholder-zhuan-light/60 text-base text-center md:text-right"
        />
      </div>
    </div>
  );
};

export default SearchBar;
