"use client";
import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const colorThemes = {
  'blue-octopus': {
    name: 'Blue Octopus',
    description: 'Ocean depths and tentacles',
    cssVars: {
      '--primary-from': '14 165 233',
      '--primary-to': '37 99 235',
    }
  },
  'outback-orange': {
    name: 'Outback Orange',
    description: 'Desert sunset vibes',
    cssVars: {
      '--primary-from': '234 88 12',
      '--primary-to': '220 38 38',
    }
  },
  'green-gold': {
    name: 'Green and Gold',
    description: 'Australian Olympic colors',
    cssVars: {
      '--primary-from': '34 197 94',
      '--primary-to': '234 179 8',
    }
  },
  'bin-chicken': {
    name: 'Bin Chicken',
    description: 'Urban Ibis elegance',
    cssVars: {
      '--primary-from': '156 163 175',
      '--primary-to': '229 231 235',
    }
  },
  'red-roo': {
    name: 'Red Roo',
    description: 'Kangaroo country',
    cssVars: {
      '--primary-from': '185 28 28',
      '--primary-to': '220 38 38',
    }
  },
  'wombat-brown': {
    name: 'Wombat Brown',
    description: 'Earthy bush tones',
    cssVars: {
      '--primary-from': '92 44 8',
      '--primary-to': '217 119 6',
    }
  },
  'desert-ochre': {
    name: 'Desert Ochre',
    description: 'Great desert tan and stone',
    cssVars: {
      '--primary-from': '120 53 15',
      '--primary-to': '185 28 28',
    }
  },
  'golden-wattle': {
    name: 'Golden Wattle',
    description: 'National flower gold',
    cssVars: {
      '--primary-from': '217 119 6',
      '--primary-to': '250 204 21',
    }
  }
};

export default function ColorSchemePicker() {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentThemeGradient = () => {
    const theme = colorThemes[currentTheme as keyof typeof colorThemes] || colorThemes['blue-octopus'];
    return `linear-gradient(to right, rgb(${theme.cssVars['--primary-from']}), rgb(${theme.cssVars['--primary-to']}))`;
  };

  return (
    <div className="relative">
      <button 
        className="w-8 h-8 rounded-lg hover:opacity-80 transition-all duration-200"
        style={{ background: getCurrentThemeGradient() }}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change color theme"
      />

      {isOpen && (
        <>
          {/* Backdrop to close on click outside */}
          <div 
            className="fixed inset-0 z-30" 
            onClick={() => setIsOpen(false)}
          />
          
          <div className="absolute top-full right-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/25 rounded-2xl shadow-2xl shadow-black/50 z-50 p-4">
            <h3 className="text-sm font-semibold text-white mb-3">Choose Color Theme</h3>
            <div className="space-y-2 max-h-64 overflow-y-auto">
              {Object.entries(colorThemes).map(([key, themeOption]) => (
                <button
                  key={key}
                  className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 hover:bg-white/10 ${
                    currentTheme === key ? 'bg-white/15 border border-white/30' : ''
                  }`}
                  onClick={() => {
                    setTheme(key as keyof typeof colorThemes);
                    setIsOpen(false);
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full"
                      style={{
                        background: `linear-gradient(to right, rgb(${themeOption.cssVars['--primary-from']}), rgb(${themeOption.cssVars['--primary-to']}))`
                      }}
                    />
                    <div>
                      <div className="font-medium text-white">{themeOption.name}</div>
                      <div className="text-xs text-gray-400">{themeOption.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
