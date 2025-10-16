"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeName =
  | "blue-octopus"
  | "outback-orange"
  | "green-gold"
  | "bin-chicken"
  | "red-roo"
  | "wombat-brown"
  | "desert-ochre"
  | "golden-wattle";

interface ThemeContextType {
  currentTheme: ThemeName;
  setTheme: (theme: ThemeName) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeContextProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = useState<ThemeName>('blue-octopus');

  useEffect(() => {
    // Try to load theme from localStorage
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('joeyllm-theme');
      if (saved) {
        setCurrentTheme(saved as ThemeName);
      }
    }
  }, []);

  const setTheme = (theme: ThemeName) => {
    setCurrentTheme(theme);
    if (typeof window !== 'undefined') {
      localStorage.setItem('joeyllm-theme', theme);
    }
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeContextProvider');
  }
  return context;
}
