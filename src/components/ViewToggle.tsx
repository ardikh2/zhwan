import React from 'react';
import { Grid, List } from 'lucide-react';

interface ViewToggleProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onViewModeChange }) => {
  return (
    <div className="flex items-center justify-center mb-6 px-4 md:px-0">
      <div className="bg-zhuan-dark-brown rounded-lg p-1 flex">
        <button
          onClick={() => onViewModeChange('grid')}
          className={`p-3 rounded-md transition-all duration-200 ${
            viewMode === 'grid'
              ? 'bg-zhuan-gold text-zhuan-dark-brown shadow-md'
              : 'text-zhuan-light hover:bg-zhuan-dark-green'
          }`}
        >
          <Grid className="w-5 h-5 md:w-4 md:h-4" />
        </button>
        <button
          onClick={() => onViewModeChange('list')}
          className={`p-3 rounded-md transition-all duration-200 ${
            viewMode === 'list'
              ? 'bg-zhuan-gold text-zhuan-dark-brown shadow-md'
              : 'text-zhuan-light hover:bg-zhuan-dark-green'
          }`}
        >
          <List className="w-5 h-5 md:w-4 md:h-4" />
        </button>
      </div>
    </div>
  );
};

export default ViewToggle;
