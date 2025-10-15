"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

interface NewsMessage {
  text: string;
  route?: string;
}

const newsMessages: NewsMessage[] = [
  { text: "Welcome to JoeyLLM - Open Source Sovereign Australian AI for all!", route: "/news" },
  { text: "New model release: LittleJoey v2.1 now available", route: "/opensource" },
  { text: "Join our monthly all-hands meeting this Friday", route: "/community" },
  { text: "Don't guard my dumb - Joey 2024" },
  { text: "RAG marketplace launching soon with exciting demos", route: "/rag" },
  { text: "Community Discord hit 1000+ members this week!", route: "/community" }
];

export default function NewsTicker() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isEnabled, setIsEnabled] = useState(true);
  const [showDisabledMessage, setShowDisabledMessage] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto-rotate messages
  useEffect(() => {
    if (!isHovered && newsMessages.length > 1 && isEnabled) {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % newsMessages.length);
          setIsVisible(true);
        }, 300);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, isEnabled]);

  // Hide disabled message after delay
  useEffect(() => {
    if (!isEnabled && showDisabledMessage) {
      const timer = setTimeout(() => {
        setShowDisabledMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isEnabled, showDisabledMessage]);

  const nextMessage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % newsMessages.length);
      setIsVisible(true);
      setIsTransitioning(false);
    }, 150);
  };

  const prevMessage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + newsMessages.length) % newsMessages.length);
      setIsVisible(true);
      setIsTransitioning(false);
    }, 150);
  };

  const toggleTicker = () => {
    setIsEnabled(!isEnabled);
    setShowDisabledMessage(true);
    if (!isEnabled) {
      setIsVisible(true);
    }
  };

  const handleTickerClick = () => {
    if (!isEnabled) return;
    const message = newsMessages[currentIndex];
    if (message.route) {
      router.push(message.route);
    }
  };

  return (
    <div 
      className="h-10 bg-white/5 backdrop-blur-xl border-b border-white/10 flex items-center justify-center relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full flex items-center justify-center">
        <div className="flex-1 max-w-2xl mx-auto relative">
          <div className="text-center relative">
            {isEnabled ? (
              <button 
                className={`text-sm transition-opacity duration-300 cursor-pointer leading-relaxed text-cyan-300 hover:text-cyan-100 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                onClick={handleTickerClick}
                disabled={!newsMessages[currentIndex].route}
              >
                {newsMessages[currentIndex].text}
              </button>
            ) : (
              <div className="h-6 flex items-center justify-center">
                {showDisabledMessage && (
                  <span className="text-xs text-gray-500">News ticker disabled</span>
                )}
              </div>
            )}
            
            {isHovered && (
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-gray-400 bg-black/80 px-3 py-1.5 rounded-lg backdrop-blur-sm whitespace-nowrap z-50 border border-white/10">
                {isEnabled 
                  ? `${currentIndex + 1} of ${newsMessages.length}${newsMessages[currentIndex].route ? ' - Click to read more' : ''}`
                  : 'News ticker disabled - Click ✕ to re-enable'
                }
              </div>
            )}
          </div>
          
          {isHovered && (
            <div className="absolute inset-y-0 -left-10 -right-10 flex items-center justify-between pointer-events-none">
              <button 
                onClick={prevMessage}
                className={`w-7 h-7 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-sm text-white transition-all duration-200 pointer-events-auto ${!isEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!isEnabled}
                aria-label="Previous message"
              >
                ‹
              </button>
              <div className="flex gap-2 pointer-events-auto">
                <button 
                  onClick={nextMessage}
                  className={`w-7 h-7 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-sm text-white transition-all duration-200 ${!isEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
                  disabled={!isEnabled}
                  aria-label="Next message"
                >
                  ›
                </button>
                <button 
                  onClick={toggleTicker}
                  className="w-7 h-7 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-xs text-white transition-all duration-200"
                  aria-label={isEnabled ? "Disable ticker" : "Enable ticker"}
                >
                  ✕
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
