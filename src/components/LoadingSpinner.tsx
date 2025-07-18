import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="glass-card rounded-xl p-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="loading-spinner"></div>
          <p className="text-gray-600">در حال بارگذاری...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;