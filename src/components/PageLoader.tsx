import React from 'react';

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-64">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

export default PageLoader;
