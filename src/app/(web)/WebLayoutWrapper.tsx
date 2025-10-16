"use client";
import React from 'react';
import { ThemeContextProvider, useTheme } from '../../contexts/ThemeContext';
import ThemeProvider from '../../components/ThemeProvider';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

function WebLayoutClient({ children }: { children: React.ReactNode }) {
  const { currentTheme } = useTheme();

  return (
    <ThemeProvider theme={currentTheme}>
      <div 
        className="min-h-screen bg-black text-white relative overflow-hidden"
      >
        {/* Background gradients */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-purple-900/25 pointer-events-none" />
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="fixed bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />
        
        <Navigation />
        
        <main className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {children}
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default function WebLayoutWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeContextProvider>
      <WebLayoutClient>
        {children}
      </WebLayoutClient>
    </ThemeContextProvider>
  );
}
