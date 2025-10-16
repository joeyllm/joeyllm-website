'use client';

import { useEffect, useState } from 'react';

export interface HomeVersionSwitcherProps {
  currentVersion: 'new' | 'classic';
  onVersionChange: (version: 'new' | 'classic') => void;
}

export default function HomeVersionSwitcher({
  currentVersion,
  onVersionChange,
}: HomeVersionSwitcherProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-slate-800 border border-slate-700 rounded-lg p-3">
      <span className="text-xs text-gray-400">Layout:</span>

      <div className="flex gap-2">
        <button
          onClick={() => onVersionChange('classic')}
          className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
            currentVersion === 'classic'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
          }`}
        >
          Classic
        </button>

        <button
          onClick={() => onVersionChange('new')}
          className={`px-3 py-1 rounded text-xs font-semibold transition-colors ${
            currentVersion === 'new'
              ? 'bg-blue-600 text-white'
              : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
          }`}
        >
          New
        </button>
      </div>
    </div>
  );
}
