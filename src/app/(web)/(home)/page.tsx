"use client"
import React, { useState, useEffect, Suspense, lazy } from 'react';
// extracted site content (primary source)
import ThemeProvider from '../../../components/ThemeProvider';
import GlassCard from '../../../components/GlassCard';
import GradientButton from '../../../components/GradientButton';
import SITE_CONTENT from '../../../content/siteContent';

// Simple placeholder component using inline content
const ContentPage: React.FC<{ pageKey?: string; fallbackTitle?: string; fallbackSubtitle?: string }> = ({ pageKey, fallbackTitle, fallbackSubtitle }) => {
  const pageContent: any = SITE_CONTENT[pageKey as string] || {};
  const title = pageContent.title || fallbackTitle || "Page Title";
  const subtitle = pageContent.subtitle || fallbackSubtitle || "Page description coming soon.";

  return (
    <div className="space-y-8">
      <PageHeader title={title} subtitle={subtitle} />
      <GlassCard className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
        <p className="text-gray-300">This page is under development and will be available soon.</p>
      </GlassCard>
    </div>
  );
};

// ============================================================================
// SITE CONTENT - All text content in one place for easy editing
// (original inline copy renamed to UNUSED_SITE_CONTENT; prefer imported SITE_CONTENT)
// ============================================================================


// Safe HTML Rendering Component
const SafeHTMLRenderer: React.FC<{ content?: string; className?: string }> = ({ content, className = "" }) => {
  return (
    <div className={className}>
      <p className="text-gray-300">External content disabled for security</p>
    </div>
  );
};

// Enhanced Color Theme System
const colorThemes: Record<string, any> = {
  'blue-octopus': {
    name: 'Blue Octopus',
    description: 'Ocean depths and tentacles',
    cssVars: {
      '--primary-from': '14 165 233',
      '--primary-to': '37 99 235',
      '--text-from': '125 211 252',
      '--text-via': '147 197 253',
      '--text-to': '165 243 252',
      '--accent': '14 165 233',
      '--accent-glow': '14 165 233',
    }
  },
  'outback-orange': {
    name: 'Outback Orange',
    description: 'Desert sunset vibes',
    cssVars: {
      '--primary-from': '234 88 12',
      '--primary-to': '220 38 38',
      '--text-from': '254 215 170',
      '--text-via': '252 165 165',
      '--text-to': '253 186 116',
      '--accent': '234 88 12',
      '--accent-glow': '234 88 12',
    }
  },
  'green-gold': {
    name: 'Green and Gold',
    description: 'Australian Olympic colors',
    cssVars: {
      '--primary-from': '34 197 94',
      '--primary-to': '234 179 8',
      '--text-from': '187 247 208',
      '--text-via': '254 240 138',
      '--text-to': '134 239 172',
      '--accent': '34 197 94',
      '--accent-glow': '34 197 94',
    }
  },
  'bin-chicken': {
    name: 'Bin Chicken',
    description: 'Urban Ibis elegance',
    cssVars: {
      '--primary-from': '156 163 175',
      '--primary-to': '229 231 235',
      '--text-from': '243 244 246',
      '--text-via': '229 231 235',
      '--text-to': '209 213 219',
      '--accent': '148 163 184',
      '--accent-glow': '148 163 184',
    }
  },
  'red-roo': {
    name: 'Red Roo',
    description: 'Kangaroo country',
    cssVars: {
      '--primary-from': '185 28 28',
      '--primary-to': '220 38 38',
      '--text-from': '254 202 202',
      '--text-via': '252 165 165',
      '--text-to': '248 113 113',
      '--accent': '185 28 28',
      '--accent-glow': '185 28 28',
    }
  },
  'wombat-brown': {
    name: 'Wombat Brown',
    description: 'Earthy bush tones',
    cssVars: {
      '--primary-from': '92 44 8',
      '--primary-to': '217 119 6',
      '--text-from': '254 243 199',
      '--text-via': '253 230 138',
      '--text-to': '252 211 77',
      '--accent': '92 44 8',
      '--accent-glow': '92 44 8',
    }
  },
  'desert-ochre': {
    name: 'Desert Ochre',
    description: 'Great desert tan and stone',
    cssVars: {
      '--primary-from': '120 53 15',
      '--primary-to': '185 28 28',
      '--text-from': '254 243 199',
      '--text-via': '254 202 202',
      '--text-to': '253 230 138',
      '--accent': '120 53 15',
      '--accent-glow': '120 53 15',
    }
  },
  'golden-wattle': {
    name: 'Golden Wattle',
    description: 'National flower gold',
    cssVars: {
      '--primary-from': '217 119 6',
      '--primary-to': '250 204 21',
      '--text-from': '254 243 199',
      '--text-via': '254 240 138',
      '--text-to': '253 230 138',
      '--accent': '217 119 6',
      '--accent-glow': '217 119 6',
    }
  }
};

// Replaced inline UI components with imports from src/components

const PageHeader: React.FC<{ title?: React.ReactNode; subtitle?: React.ReactNode }> = ({ title, subtitle }) => (
  <div className="text-center mb-12">
    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[rgb(var(--text-from))] via-[rgb(var(--text-via))] to-[rgb(var(--text-to))] bg-clip-text text-transparent leading-tight">
      {title}
    </h1>
    {subtitle && (
      <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

const FeatureCard: React.FC<{ title?: string; description?: string; icon?: React.ReactNode }> = ({ title, description, icon }) => (
  <GlassCard className="p-6 h-full">
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </GlassCard>
);

const PageLoader: React.FC = () => (
  <div className="flex items-center justify-center min-h-64">
    <div className="text-center">
      <div className="w-8 h-8 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-gray-400">Loading...</p>
    </div>
  </div>
);

// Simple Authentication Component
const AuthComponent = () => {
  const [user, setUser] = useState(null);
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login', 'forgot', 'reset-sent'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [authMessage, setAuthMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setUser({ 
        email: email, 
        name: email.split('@')[0], 
        isLoggedIn: true 
      });
      setShowAuth(false);
      setEmail('');
      setPassword('');
      setAuthMessage('');
    } else {
      setAuthMessage('Please enter both email and password');
    }
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    if (email) {
      setAuthMode('reset-sent');
      setAuthMessage(`Reset link sent to ${email}`);
    } else {
      setAuthMessage('Please enter your email address');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setShowUserMenu(false);
    setEmail('');
    setPassword('');
    setAuthMessage('');
  };

  const resetAuthForm = () => {
    setAuthMode('login');
    setEmail('');
    setPassword('');
    setAuthMessage('');
    setShowAuth(false);
  };

  // If user is logged in, show user avatar and menu
  if (user && user.isLoggedIn) {
    return (
      <div className="relative">
        <button
          className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm hover:opacity-80 transition-all duration-200"
          onClick={() => setShowUserMenu(!showUserMenu)}
        >
          {user.name.charAt(0).toUpperCase()}
        </button>

        {showUserMenu && (
          <div className="absolute top-full right-0 mt-2 w-48 bg-black/95 backdrop-blur-xl border border-white/25 rounded-xl shadow-2xl z-50 py-2">
            <div className="px-4 py-2 border-b border-white/10">
              <div className="text-sm font-medium text-white">{user.name}</div>
              <div className="text-xs text-gray-400">{user.email}</div>
            </div>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setShowUserMenu(false)}
            >
              Account Settings
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  // If not logged in, show login button and form
  return (
    <div className="relative">
      <button
        className="px-3 py-1.5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
        onClick={() => setShowAuth(!showAuth)}
      >
        Login
      </button>

      {showAuth && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-black/95 backdrop-blur-xl border border-white/25 rounded-xl shadow-2xl z-50 p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">
              {authMode === 'login' ? 'Login' : authMode === 'forgot' ? 'Reset Password' : 'Check Your Email'}
            </h3>
            <button
              onClick={resetAuthForm}
              className="text-gray-400 hover:text-white transition-colors text-lg"
            >
              X
            </button>
          </div>

          {authMessage && (
            <div className="mb-4 p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg text-blue-200 text-sm">
              {authMessage}
            </div>
          )}

          {authMode === 'login' && (
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="Enter your password"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="button"
                  onClick={() => setAuthMode('forgot')}
                  className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                >
                  Forgot password?
                </button>
              </div>

              <GradientButton type="submit" className="w-full">
                Login
              </GradientButton>
            </form>
          )}

          {authMode === 'forgot' && (
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <p className="text-gray-300 text-sm mb-4">
                Enter your email address and we'll send you a reset link.
              </p>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="flex gap-3">
                <GradientButton 
                  type="button" 
                  onClick={() => setAuthMode('login')} 
                  variant="secondary" 
                  className="flex-1"
                >
                  Back
                </GradientButton>
                <GradientButton type="submit" className="flex-1">
                  Send Reset Link
                </GradientButton>
              </div>
            </form>
          )}

          {authMode === 'reset-sent' && (
            <div className="text-center space-y-4">
              <div className="text-green-400 text-4xl mb-4">&#10003;</div>
              <h4 className="text-lg font-semibold text-white">Reset Link Sent</h4>
              <p className="text-gray-300 text-sm">
                Check your inbox and follow the instructions to reset your password.
              </p>
              <GradientButton onClick={resetAuthForm} variant="secondary" className="w-full">
                Back to Login
              </GradientButton>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// Color Scheme Picker Component
const ColorSchemePicker = ({ currentTheme, onThemeChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const getCurrentThemeGradient = () => {
    const theme = colorThemes[currentTheme] || colorThemes['blue-octopus'];
    return `linear-gradient(to right, rgb(${theme.cssVars['--primary-from']}), rgb(${theme.cssVars['--primary-to']}))`;
  };

  return (
    <div className="relative">
      <button 
        className="w-8 h-8 rounded-lg hover:opacity-80 transition-all duration-200"
        style={{ background: getCurrentThemeGradient() }}
        onClick={() => setIsOpen(!isOpen)}
      />

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-64 bg-black/90 backdrop-blur-xl border border-white/25 rounded-2xl shadow-2xl shadow-black/50 z-40 p-4">
          <h3 className="text-sm font-semibold text-white mb-3">Choose Color Theme</h3>
          <div className="space-y-2 max-h-64 overflow-y-auto">
            {Object.entries(colorThemes).map(([key, themeOption]) => (
              <button
                key={key}
                className={`w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200 hover:bg-white/10 ${
                  currentTheme === key ? 'bg-white/15 border border-white/30' : ''
                }`}
                onClick={() => {
                  onThemeChange(key);
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
      )}
    </div>
  );
};

// News Ticker Component
const NewsTicker = ({ currentTheme, onNavigate }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isTickerEnabled, setIsTickerEnabled] = useState(true);
  const [showDisabledMessage, setShowDisabledMessage] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const messages = [
    { text: "Welcome to JoeyLLM - Open Source Sovereign Australian AI for all!", page: "news" },
    { text: "New model release: LittleJoey v2.1 now available", page: "opensource" },
    { text: "Join our monthly all-hands meeting this Friday", page: "community" },
    { text: "Don't guard my dumb - Joey 2024", page: null },
    { text: "RAG marketplace launching soon with exciting demos", page: "rag" },
    { text: "Community Discord hit 1000+ members this week!", page: "community" }
  ];

  useEffect(() => {
    if (!isHovered && messages.length > 1 && isTickerEnabled) {
      const interval = setInterval(() => {
        setIsVisible(false);
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % messages.length);
          setIsVisible(true);
        }, 300);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHovered, messages.length, isTickerEnabled]);

  useEffect(() => {
    if (!isTickerEnabled && showDisabledMessage) {
      const timer = setTimeout(() => {
        setShowDisabledMessage(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isTickerEnabled, showDisabledMessage]);

  const nextMessage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % messages.length);
      setIsVisible(true);
      setIsTransitioning(false);
    }, 150);
  };

  const prevMessage = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setIsVisible(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
      setIsVisible(true);
      setIsTransitioning(false);
    }, 150);
  };

  const toggleTicker = () => {
    setIsTickerEnabled(!isTickerEnabled);
    if (!isTickerEnabled) {
      setIsVisible(true);
      setShowDisabledMessage(true);
    } else {
      setShowDisabledMessage(true);
    }
  };

  const handleTickerClick = () => {
    if (!isTickerEnabled) return;
    const message = messages[currentIndex];
    if (message.page) {
      onNavigate(message.page);
    } else {
      onNavigate('news');
    }
  };

  return (
    <div 
      className="flex-1 max-w-md mx-auto relative z-10 px-6"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="text-center relative">
        {isTickerEnabled ? (
          <button 
            className={`text-sm transition-opacity duration-300 cursor-pointer leading-relaxed py-2 text-cyan-300 hover:text-cyan-100 relative z-20 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            onClick={handleTickerClick}
          >
            {messages[currentIndex].text}
          </button>
        ) : (
          <div className="h-10 flex items-center justify-center">
            {showDisabledMessage && (
              <span className="text-xs text-gray-500">News ticker disabled</span>
            )}
          </div>
        )}
        
        {isHovered && (
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 bg-black/60 px-2 py-1 rounded backdrop-blur-sm whitespace-nowrap z-25">
            {isTickerEnabled 
              ? `${currentIndex + 1} of ${messages.length} - Click to read more`
              : 'News ticker disabled - Click X to re-enable'
            }
          </div>
        )}
      </div>
      
      {isHovered && (
        <div className="absolute inset-y-0 -left-2 -right-2 flex items-center justify-between pointer-events-none">
          <button 
            onClick={prevMessage}
            className={`w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center text-xs text-white transition-all duration-200 pointer-events-auto ${!isTickerEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            style={{ zIndex: 40 }}
            disabled={!isTickerEnabled}
          >
            &lt;
          </button>
          <div className="flex gap-1 pointer-events-auto" style={{ zIndex: 40 }}>
            <button 
              onClick={nextMessage}
              className={`w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center text-xs text-white transition-all duration-200 ${!isTickerEnabled ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!isTickerEnabled}
            >
              &gt;
            </button>
            <button 
              onClick={toggleTicker}
              className="w-6 h-6 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-md flex items-center justify-center text-xs text-white transition-all duration-200"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

// Navigation Component
const Navigation = ({ currentPage, onNavigate, isMobileMenuOpen, setIsMobileMenuOpen, currentTheme, onThemeChange }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const pages = [
    { id: 'home', label: 'Chat', icon: 'CHAT', description: 'Talk with our AI models' },
    { id: 'opensource', label: 'Open Source AI Models', icon: 'CODE', description: 'Download and fine-tune our models', subPages: ['LittleJoeyLLM', 'MagpieLLM'] },
    { id: 'community', label: 'Community', icon: 'USERS', description: 'Join our vibrant community', subPages: ['Discord', 'GitHub', 'Upcoming Events'] },
    { id: 'services', label: 'Services', icon: 'TOOLS', description: 'Professional AI consulting', subPages: ['Data Cleaning Service', 'AI Hosting Service', 'Custom AI Creation', 'Request a Proposal'] },
    { id: 'rag', label: 'RAG Showroom', icon: 'SHOP', description: 'Build and deploy RAG apps', subPages: ['The Showroom', 'The Tool Suite', 'Partner Program'] },
    { id: 'news', label: 'News and Articles', icon: 'NEWS', description: 'Latest AI developments', subPages: ['News', 'Articles', 'Social Media'] },
    { id: 'projects', label: 'Community Projects', icon: 'ROCKET', description: 'Collaborative initiatives', subPages: ['Grant Search Engine', 'Community Resource Manager', 'Wellbeing Agent', 'BuzzBy'] },
    { id: 'donations', label: 'Donations', icon: 'HEART', description: 'Support our mission', subPages: ['Credit Card', 'Crypto', 'Buy JoeyLLM Merch'] },
    { id: 'partners', label: 'Partners and Friends', icon: 'HANDS', description: 'Our supporters and collaborators' }
  ];

  const getCurrentThemeGradient = () => {
    const theme = colorThemes[currentTheme] || colorThemes['blue-octopus'];
    return `linear-gradient(to right, rgb(${theme.cssVars['--primary-from']}), rgb(${theme.cssVars['--primary-to']}))`;
  };

  const getCurrentTextGradient = () => {
    const theme = colorThemes[currentTheme] || colorThemes['blue-octopus'];
    return `linear-gradient(to right, rgb(${theme.cssVars['--text-from']}), rgb(${theme.cssVars['--text-via']}), rgb(${theme.cssVars['--text-to']}))`;
  };

  const getAccentColor = () => {
    const theme = colorThemes[currentTheme] || colorThemes['blue-octopus'];
    return theme.cssVars['--accent'];
  };

  return (
    <header className="h-16 bg-white/8 backdrop-blur-xl border-b border-white/15 sticky top-0 z-50 shadow-lg shadow-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="flex items-center gap-3 min-w-0">
          <button 
            className="lg:hidden w-8 h-8 rounded-lg flex items-center justify-center hover:opacity-80 transition-all duration-200 z-50"
            style={{ background: getCurrentThemeGradient() }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="flex flex-col gap-1">
              <div className="w-3 h-0.5 bg-white/80 rounded" />
              <div className="w-3 h-0.5 bg-white/80 rounded" />
              <div className="w-3 h-0.5 bg-white/80 rounded" />
            </div>
          </button>
          
          <div 
            className="hidden lg:flex w-8 h-8 rounded-lg items-center justify-center"
            style={{ background: getCurrentThemeGradient() }}
          >
            <div className="w-4 h-4 bg-white/20 rounded-sm animate-pulse" />
          </div>
          
          <button
            onClick={() => onNavigate('home')}
            className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent leading-tight hover:opacity-80 transition-opacity duration-200"
            style={{ backgroundImage: getCurrentTextGradient() }}
          >
            JoeyLLM
          </button>
        </div>

        <div className="flex-1 max-w-md mx-auto relative z-30 px-6">
          <NewsTicker currentTheme={currentTheme} onNavigate={onNavigate} />
        </div>

        <div className="flex items-center gap-3 min-w-0">
          <AuthComponent />
          <ColorSchemePicker currentTheme={currentTheme} onThemeChange={onThemeChange} />
          
          <nav className="hidden lg:flex items-center gap-1 relative z-20">
            {pages.map(page => (
              <div key={page.id} className="relative">
                <button
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                    currentPage === page.id 
                      ? 'border' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={currentPage === page.id ? {
                    backgroundColor: `rgba(${getAccentColor()}, 0.2)`,
                    color: `rgb(${getAccentColor()})`,
                    borderColor: `rgba(${getAccentColor()}, 0.3)`
                  } : {}}
                  onClick={() => onNavigate(page.id)}
                  onMouseEnter={() => page.subPages && setOpenDropdown(page.id)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <span className="mr-2">{page.icon}</span>
                  {page.label}
                </button>
                
                {page.subPages && openDropdown === page.id && (
                  <div 
                    className="absolute top-full left-0 mt-1 min-w-48 bg-black/95 backdrop-blur-xl border border-white/25 rounded-xl shadow-2xl z-50 py-2"
                    onMouseEnter={() => setOpenDropdown(page.id)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    {page.subPages.map((subPage, index) => (
                      <button
                        key={index}
                        className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setOpenDropdown(null);
                          
                          console.log('Dropdown clicked:', subPage); // Debug log
                          
                          if (subPage === 'Discord') {
                            try {
                              window.open('https://discord.gg/F2VsZs6D', '_blank');
                            } catch (error) {
                              console.warn('Failed to open Discord link:', error);
                            }
                            return;
                          }

			  if (subPage === 'GitHub') {
                            try {
                              window.open('https://github.com/joeyllm', '_blank');
                            } catch (error) {
                              console.warn('Failed to open GitHub link:', error);
                            }
                            return;
                          }
                          
                          // Route mapping for internal pages
                          const routes = {
                            'LittleJoeyLLM': 'littlejoey',
                            'MagpieLLM': 'magpie',
                            'Upcoming Events': 'events',
                            'Data Cleaning Service': 'datacleaning',
                            'AI Hosting Service': 'aihosting', 
                            'Custom AI Creation': 'customai',
                            'Request a Proposal': 'requestproposal',
                            'The Showroom': 'showroom',
                            'The Tool Suite': 'toolsuite',
                            'Partner Program': 'partnerprogram',
                            'News': 'newspage',
                            'Articles': 'articles',
                            'Social Media': 'socialmedia',
                            'Grant Search Engine': 'grantsearch',
                            'Community Resource Manager': 'communityresources',
                            'Wellbeing Agent': 'wellbeingagent',
                            'BuzzBy': 'buzzby',
                            'Credit Card': 'donatecard',
                            'Crypto': 'donatecrypto',
                            'Buy JoeyLLM Merch': 'merch'
                          };
                          
                          const routeId = routes[subPage];
                          console.log('Route mapping:', subPage, '→', routeId); // 
                          
                          if (routeId) {
                            onNavigate(routeId);
                          } else {
                            console.warn('No route found for:', subPage);
                            onNavigate('not-found');
                          }
                        }}
                      >
                        {subPage}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-1/2 bg-black/95 backdrop-blur-xl border-b border-r border-white/25 shadow-2xl z-40">
          <nav className="p-4 space-y-3">
            {pages.map(page => (
              <div key={page.id}>
                <button
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    currentPage === page.id 
                      ? 'border' 
                      : 'text-gray-300 hover:text-white hover:bg-white/10'
                  }`}
                  style={currentPage === page.id ? {
                    backgroundColor: `rgba(${getAccentColor()}, 0.2)`,
                    color: `rgb(${getAccentColor()})`,
                    borderColor: `rgba(${getAccentColor()}, 0.3)`
                  } : {}}
                  onClick={() => {
                    onNavigate(page.id);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  <div className="flex items-center">
                    <span className="mr-2">{page.icon}</span>
                    <div className="flex-1">
                      <span className="font-medium">{page.label}</span>
                      {page.description && (
                        <span className="ml-2 text-xs text-gray-500 font-normal">
                          {page.description}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
                {page.subPages && (
                  <div className="ml-6 mt-2 space-y-1">
                    {page.subPages.map((subPage, index) => (
                      <button 
                        key={index} 
                        className="block text-xs px-3 py-1 text-gray-400 hover:text-white transition-colors"
                        onClick={() => {
                          // Use the same route mapping as desktop dropdown
                          const routes = {
                            'LittleJoeyLLM': 'littlejoey',
                            'MagpieLLM': 'magpie',
                            'Upcoming Events': 'events',
                            'Data Cleaning Service': 'datacleaning',
                            'AI Hosting Service': 'aihosting', 
                            'Custom AI Creation': 'customai',
                            'Request a Proposal': 'requestproposal',
                            'The Showroom': 'showroom',
                            'The Tool Suite': 'toolsuite',
                            'Partner Program': 'partnerprogram',
                            'News': 'newspage',
                            'Articles': 'articles',
                            'Social Media': 'socialmedia',
                            'Grant Search Engine': 'grantsearch',
                            'Community Resource Manager': 'communityresources',
                            'Wellbeing Agent': 'wellbeingagent',
                            'BuzzBy': 'buzzby',
                            'Credit Card': 'donatecard',
                            'Crypto': 'donatecrypto',
                            'Buy JoeyLLM Merch': 'merch'
                          };
                          
                          const routeId = routes[subPage];
                          if (routeId) {
                            onNavigate(routeId);
                            setIsMobileMenuOpen(false);
                          }
                        }}
                      >
                        • {subPage}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

// 404 Page Component
const NotFoundPage = ({ requestedPage }) => (
  <div className="space-y-8">
    <PageHeader title="Page Not Found" subtitle="Oops! Something went wrong" />
    <GlassCard className="p-8 max-w-2xl mx-auto text-center">
      <div className="text-6xl mb-6">?</div>
      <h2 className="text-2xl font-bold text-white mb-4">Hi there, this page doesn't exist or we've done something dumb and broken it.</h2>
      <p className="text-gray-300 mb-6">
        Our system also automatically disables pages that are vulnerable to attack in some way.
      </p>
      {requestedPage && (
        <p className="text-sm text-gray-400 mb-6">
          Requested page: {requestedPage}
        </p>
      )}
      <GradientButton onClick={() => window.location.href = '#home'} className="w-full max-w-xs">
        Return Home
      </GradientButton>
    </GlassCard>
  </div>
);

const ResetPasswordPage = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPassword || !confirmPassword) {
      setMessage('Please fill in both password fields');
      return;
    }
    if (newPassword !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    if (newPassword.length < 8) {
      setMessage('Password must be at least 8 characters long');
      return;
    }
    
    setIsSubmitted(true);
    setMessage('');
  };

  if (isSubmitted) {
    return (
      <div className="space-y-8">
        <PageHeader title="Password Reset Successful" subtitle="Your password has been updated" />
        <GlassCard className="p-8 max-w-md mx-auto text-center">
          <div className="text-green-400 text-6xl mb-6">&#10003;</div>
          <h2 className="text-2xl font-bold text-white mb-4">All Set!</h2>
          <p className="text-gray-300 mb-6">
            Your password has been successfully reset. You can now log in with your new password.
          </p>
          <GradientButton onClick={() => window.location.reload()} className="w-full">
            Continue to Login
          </GradientButton>
        </GlassCard>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader title="Reset Your Password" subtitle="Enter your new password below" />
      <GlassCard className="p-8 max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          {message && (
            <div className="p-3 bg-red-500/20 border border-red-500/30 rounded-lg text-red-200 text-sm">
              {message}
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              New Password
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
              placeholder="Enter your new password"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Confirm New Password
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400"
              placeholder="Confirm your new password"
              required
            />
          </div>

          <div className="text-sm text-gray-400">
            Password must be at least 8 characters long
          </div>

          <GradientButton type="submit" className="w-full">
            Reset Password
          </GradientButton>
        </form>
      </GlassCard>
    </div>
  );
};

// Home Page Component (not lazy loaded to avoid useContent hook issues)
const HomePage = () => {
  const homeContent = SITE_CONTENT.home;  
  return (
    <div className="space-y-8">
      <PageHeader 
        title={homeContent.title || "Welcome to JoeyLLM"} 
        subtitle={homeContent.subtitle || "Your gateway to sovereign Australian AI."}
      />
      
      <GlassCard variant="elevated" className="p-8 mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-white mb-4">Chat Interface Coming Soon</h2>
          <p className="text-gray-300 mb-6">
            {homeContent.introduction || "Experience JoeyLLM, LittleJoey, and Magpie models in our interactive chat interface."}
          </p>
          <GradientButton disabled>Launch Chat Interface</GradientButton>
        </div>
      </GlassCard>

      {homeContent.instructions && (
        <ContentSection title={homeContent.instructions.title}>
          <div className="space-y-4">
            {homeContent.instructions.steps.map((step, index) => (
              <p key={index} className="text-gray-300 leading-relaxed">{step}</p>
            ))}
          </div>
        </ContentSection>
      )}

      <div className="grid md:grid-cols-3 gap-6">
        {homeContent.features && homeContent.features.length > 0 ? (
          homeContent.features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon || "🔧"} 
              title={feature.title || "Feature"} 
              description={feature.description || "Feature description"} 
            />
          ))
        ) : (
          <>
            <FeatureCard icon="🤖" title="Australian AI Models" description="Purpose-built language models trained with Australian context and values." />
            <FeatureCard icon="🌐" title="Open Source First" description="All our models are open source, transparent, and available for commercial use." />
            <FeatureCard icon="👥" title="Community Driven" description="Built by the community, for the community. Join our Discord and contribute." />
          </>
        )}
      </div>

      <GlassCard className="p-8">
        <h2 className="text-2xl font-bold text-white mb-4">
          {homeContent.mission?.title || "Our Mission"}
        </h2>
        <p className="text-gray-300 leading-relaxed">
          {homeContent.mission?.content || "Our mission at JoeyLLM is to make advanced AI accessible, transparent and community-driven."}
        </p>
      </GlassCard>

      {homeContent.dataCleaningPromo && (
        <ContentSection title={homeContent.dataCleaningPromo.title}>
          <p className="text-gray-300 mb-4">{homeContent.dataCleaningPromo.intro}</p>
          <p className="text-gray-300 mb-6">{homeContent.dataCleaningPromo.approach}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {homeContent.dataCleaningPromo.pricing.map((tier, index) => (
              <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
                <h3 className="font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-2xl font-bold text-cyan-400 mb-3">{tier.price}</p>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-300 mb-4">{homeContent.dataCleaningPromo.example}</p>
          <p className="text-gray-300 mb-4">{homeContent.dataCleaningPromo.goal}</p>
          <p className="text-gray-400 text-sm">Contact: {homeContent.dataCleaningPromo.contact}</p>
        </ContentSection>
      )}
    </div>
  );
};

// Enhanced content rendering components
const ContentSection = ({ title, children, className = "" }) => (
  <GlassCard className={`p-8 ${className}`}>
    {title && <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>}
    {children}
  </GlassCard>
);

const FeatureList = ({ features, title }) => (
  <ContentSection title={title}>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features?.map((feature, index) => (
        <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
          <h3 className="font-semibold text-white mb-2">{feature.title || feature.name || `Feature ${index + 1}`}</h3>
          <p className="text-gray-300 text-sm">{feature.description}</p>
        </div>
      )) || <p className="text-gray-300">No features available.</p>}
    </div>
  </ContentSection>
);

const TextList = ({ items, title, ordered = false }) => {
  if (!items || items.length === 0) return null;
  
  const ListComponent = ordered ? 'ol' : 'ul';
  const listClass = ordered ? "list-decimal list-inside space-y-2" : "list-disc list-inside space-y-2";
  
  return (
    <ContentSection title={title}>
      <ListComponent className={listClass}>
        {items.map((item, index) => (
          <li key={index} className="text-gray-300">{item}</li>
        ))}
      </ListComponent>
    </ContentSection>
  );
};

const InfoGrid = ({ items, title, columns = 2 }) => (
  <ContentSection title={title}>
    <div className={`grid gap-6 ${columns === 3 ? 'md:grid-cols-3' : 'md:grid-cols-2'}`}>
      {items?.map((item, index) => (
        <div key={index} className="p-4 bg-white/5 rounded-xl border border-white/10">
          <h3 className="font-semibold text-white mb-2">{item.title || item.name}</h3>
          <p className="text-gray-300 text-sm">{item.description || item.content}</p>
          {item.details && (
            <div className="mt-3 text-xs text-gray-400">
              {typeof item.details === 'string' ? item.details : JSON.stringify(item.details)}
            </div>
          )}
        </div>
      )) || <p className="text-gray-300">No information available.</p>}
    </div>
  </ContentSection>
);

// Specialized page components
const OpenSourcePage = () => {
  const pageData = SITE_CONTENT.opensource;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.models && <InfoGrid items={pageData.models} title="Available Models" columns={1} />}
      
      {pageData.customModels && (
        <ContentSection title={pageData.customModels.title}>
          <p className="text-gray-300">{pageData.customModels.description}</p>
        </ContentSection>
      )}
      
      {pageData.contributing && (
        <ContentSection title={pageData.contributing.title}>
          <p className="text-gray-300">{pageData.contributing.description}</p>
        </ContentSection>
      )}
      
      {pageData.callToAction && (
        <div className="text-center">
          <p className="text-gray-300 mb-6">{pageData.callToAction}</p>
          <div className="space-x-4">
            <GradientButton>Download Models</GradientButton>
            <GradientButton variant="secondary">View Documentation</GradientButton>
          </div>
        </div>
      )}
    </div>
  );
};

const LittleJoeyPage = () => {
  const pageData = SITE_CONTENT.littlejoey;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.introduction && (
        <ContentSection>
          <p className="text-gray-300 leading-relaxed">{pageData.introduction}</p>
        </ContentSection>
      )}
      
      {pageData.keyFeatures && <TextList items={pageData.keyFeatures} title="Key Features" />}
      
      {pageData.technicalSpecs && (
        <ContentSection title="Technical Specifications">
          <div className="grid md:grid-cols-2 gap-4">
            {Object.entries(pageData.technicalSpecs).map(([key, value]) => (
              <div key={key} className="flex justify-between p-3 bg-white/5 rounded-lg">
                <span className="text-gray-300 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                <span className="text-white font-medium">{value}</span>
              </div>
            ))}
          </div>
        </ContentSection>
      )}
      
      {pageData.useCases && <TextList items={pageData.useCases} title="Use Cases" />}
      
      {pageData.callToAction && (
        <div className="text-center">
          <GradientButton>Download LittleJoey</GradientButton>
        </div>
      )}
    </div>
  );
};

const SocialMediaPage = () => {
  const pageData = SITE_CONTENT.socialmedia;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.discord && (
        <ContentSection title="Discord">
          <div className="p-4 bg-indigo-500/10 border border-indigo-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-indigo-300 font-semibold">{pageData.discord.handle}</h3>
                <p className="text-gray-300 text-sm">{pageData.discord.description}</p>
              </div>
              <GradientButton onClick={() => {
                try {
                  window.open('https://discord.gg/F2VsZs6D', '_blank');
                } catch (error) {
                  console.warn('Failed to open Discord link:', error);
                }
              }}>
                Join Discord
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}
      
      {pageData.github && (
        <ContentSection title="GitHub">
          <div className="p-4 bg-gray-500/10 border border-gray-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-300 font-semibold">{pageData.github.handle}</h3>
                <p className="text-gray-300 text-sm">{pageData.github.description}</p>
              </div>
              <GradientButton onClick={() => {
                try {
                  window.open('https://github.com/joeyllm', '_blank');
                } catch (error) {
                  console.warn('Failed to open GitHub link:', error);
                }
              }}>
                Visit GitHub
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}
      
      {pageData.linkedin && (
        <ContentSection title="LinkedIn">
          <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-blue-300 font-semibold">{pageData.linkedin.handle}</h3>
                <p className="text-gray-300 text-sm">{pageData.linkedin.description}</p>
              </div>
              <GradientButton variant="secondary">
                Follow LinkedIn
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}
      
      {pageData.twitter && (
        <ContentSection title="Twitter/X">
          <div className="p-4 bg-cyan-500/10 border border-cyan-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-cyan-300 font-semibold">{pageData.twitter.handle}</h3>
                <p className="text-gray-300 text-sm">{pageData.twitter.description}</p>
              </div>
              <GradientButton variant="secondary">
                Follow Twitter
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}
      
      {pageData.youtube && (
        <ContentSection title="YouTube">
          <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-red-300 font-semibold">{pageData.youtube.handle}</h3>
                <p className="text-gray-300 text-sm">{pageData.youtube.description}</p>
              </div>
              <GradientButton variant="secondary">
                Subscribe
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}
      
      {pageData.reddit && (
        <ContentSection title="Reddit">
          <div className="p-4 bg-orange-500/10 border border-orange-500/20 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-orange-300 font-semibold">{pageData.reddit.handle}</h3>
                <p className="text-gray-300 text-sm">{pageData.reddit.description}</p>
              </div>
              <GradientButton variant="secondary">
                Join Reddit
              </GradientButton>
            </div>
          </div>
        </ContentSection>
      )}
      
      {pageData.engagementGuidelines && (
        <ContentSection title={pageData.engagementGuidelines.title}>
          <p className="text-gray-300">{pageData.engagementGuidelines.description}</p>
        </ContentSection>
      )}
      
      {pageData.callToAction && (
        <div className="text-center">
          <div className="space-x-4">
            <GradientButton>Join All Platforms</GradientButton>
            <GradientButton variant="secondary">Share Content</GradientButton>
          </div>
        </div>
      )}
    </div>
  );
};
const CommunityPage = () => {
  const pageData = SITE_CONTENT.community;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.discord && (
        <ContentSection title={pageData.discord.title}>
          <p className="text-gray-300 mb-4">{pageData.discord.description}</p>
          <GradientButton onClick={() => window.open(pageData.discord.link, '_blank')}>
            Join Discord
          </GradientButton>
        </ContentSection>
      )}
      
      {pageData.upskilling && (
        <ContentSection title={pageData.upskilling.title}>
          <p className="text-gray-300">{pageData.upskilling.description}</p>
        </ContentSection>
      )}
      
      {pageData.events && (
        <ContentSection title={pageData.events.title}>
          <p className="text-gray-300 mb-4">{pageData.events.description}</p>
          <p className="text-gray-300">{pageData.events.schedule}</p>
        </ContentSection>
      )}
      
      {pageData.collaboration && (
        <ContentSection title={pageData.collaboration.title}>
          <p className="text-gray-300 mb-4">{pageData.collaboration.description}</p>
          <p className="text-gray-300">{pageData.collaboration.entrepreneurial}</p>
        </ContentSection>
      )}
    </div>
  );
};
// Stub page components for routes that are not yet implemented.
// These definitions ensure the app does not break when navigating to these pages.
const RAGPage = () => {
  const pageData = SITE_CONTENT.rag;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.whatIsRAG && (
        <ContentSection title={pageData.whatIsRAG.title}>
          <p className="text-gray-300 mb-4">{pageData.whatIsRAG.description}</p>
          <p className="text-gray-300 mb-4">{pageData.whatIsRAG.workflow}</p>
          <p className="text-gray-300">{pageData.whatIsRAG.context}</p>
        </ContentSection>
      )}
      
      {pageData.showroom && (
        <ContentSection title={pageData.showroom.title}>
          <p className="text-gray-300">{pageData.showroom.description}</p>
        </ContentSection>
      )}
      
      {pageData.builder && (
        <ContentSection title={pageData.builder.title}>
          <p className="text-gray-300 mb-4">{pageData.builder.description}</p>
          <p className="text-gray-300 mb-4">{pageData.builder.process}</p>
          <p className="text-gray-300 mb-4">{pageData.builder.freeTier}</p>
          <p className="text-gray-300">{pageData.builder.complexity}</p>
        </ContentSection>
      )}
      
      {pageData.marketplace && (
        <ContentSection title={pageData.marketplace.title}>
          <p className="text-gray-300">{pageData.marketplace.description}</p>
        </ContentSection>
      )}
    </div>
  );
};
const NewsArticlesPage = () => {
  const pageData = SITE_CONTENT.news;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.stayInformed && (
        <ContentSection title={pageData.stayInformed.title}>
          <p className="text-gray-300">{pageData.stayInformed.description}</p>
        </ContentSection>
      )}
      
      {pageData.contribute && (
        <ContentSection title={pageData.contribute.title}>
          <p className="text-gray-300">{pageData.contribute.description}</p>
        </ContentSection>
      )}
    </div>
  );
};
const ProjectsPage = () => {
  const pageData = SITE_CONTENT.projects;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.praxis && (
        <ContentSection title={pageData.praxis.title}>
          <p className="text-gray-300 mb-4">{pageData.praxis.description}</p>
          <p className="text-gray-300 mb-4">{pageData.praxis.context}</p>
          <p className="text-gray-300">{pageData.praxis.concept}</p>
        </ContentSection>
      )}
      
      {pageData.grantSearch && (
        <ContentSection title={pageData.grantSearch.title}>
          <p className="text-gray-300">{pageData.grantSearch.description}</p>
        </ContentSection>
      )}
      
      {pageData.otherProjects && (
        <ContentSection title={pageData.otherProjects.title}>
          <p className="text-gray-300 mb-4">{pageData.otherProjects.description}</p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            {pageData.otherProjects.examples.map((example, index) => (
              <li key={index} className="text-gray-300">{example}</li>
            ))}
          </ul>
          <p className="text-gray-300">{pageData.otherProjects.propose}</p>
        </ContentSection>
      )}
    </div>
  );
};
const DonationsPage = () => {
  const pageData = SITE_CONTENT.donations;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.whyDonate && (
        <ContentSection title={pageData.whyDonate.title}>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl mb-4">
            <p className="text-yellow-200 font-semibold">{pageData.whyDonate.disclaimer}</p>
          </div>
          <p className="text-gray-300 mb-4">{pageData.whyDonate.description}</p>
          <p className="text-gray-300">{pageData.whyDonate.mission}</p>
        </ContentSection>
      )}
      
      {pageData.waysToGive && (
        <ContentSection title={pageData.waysToGive.title}>
          <div className="space-y-6">
            {pageData.waysToGive.methods.map((method, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-xl font-semibold text-white mb-3">{method.type}</h3>
                <p className="text-gray-300 mb-4">{method.description}</p>
                {method.supportedCoins && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-400 mb-2">Supported Cryptocurrencies:</p>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {method.supportedCoins.map((coin, coinIndex) => (
                        <div key={coinIndex} className="text-sm text-gray-300 bg-white/5 px-3 py-1 rounded">
                          {coin}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </ContentSection>
      )}
      
      {pageData.compliance && (
        <ContentSection title={pageData.compliance.title}>
          <p className="text-gray-300">{pageData.compliance.description}</p>
        </ContentSection>
      )}
    </div>
  );
};
const PartnersPage = () => {
  const pageData = SITE_CONTENT.partners;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.introduction && (
        <ContentSection>
          <p className="text-gray-300">{pageData.introduction.description}</p>
        </ContentSection>
      )}
      
      {pageData.partnershipTypes && (
        <ContentSection title={pageData.partnershipTypes.title}>
          <div className="grid md:grid-cols-2 gap-6">
            {pageData.partnershipTypes.types.map((partnerType, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-3">{partnerType.type}</h3>
                <p className="text-gray-300">{partnerType.description}</p>
              </div>
            ))}
          </div>
        </ContentSection>
      )}
      
      {pageData.becomePartner && (
        <ContentSection title={pageData.becomePartner.title}>
          <p className="text-gray-300 mb-4">{pageData.becomePartner.description}</p>
          <p className="text-gray-300">{pageData.becomePartner.contact}</p>
        </ContentSection>
      )}
    </div>
  );
};
const PrivacyPolicyPage = () => {
  const pageData = SITE_CONTENT.privacypolicy;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      <ContentSection>
        <p className="text-gray-300">{pageData.introduction}</p>
      </ContentSection>
      
      {pageData.dataCollection && (
        <ContentSection title={pageData.dataCollection.title}>
          <p className="text-gray-300">{pageData.dataCollection.description}</p>
        </ContentSection>
      )}
      
      {pageData.dataUse && (
        <ContentSection title={pageData.dataUse.title}>
          <p className="text-gray-300">{pageData.dataUse.description}</p>
        </ContentSection>
      )}
      
      {pageData.dataRights && (
        <ContentSection title={pageData.dataRights.title}>
          <p className="text-gray-300">{pageData.dataRights.description}</p>
        </ContentSection>
      )}
    </div>
  );
};

const TermsPage = () => {
  const pageData = SITE_CONTENT.terms;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.acceptance && (
        <ContentSection title={pageData.acceptance.title}>
          <p className="text-gray-300">{pageData.acceptance.description}</p>
        </ContentSection>
      )}
      
      {pageData.userResponsibilities && (
        <ContentSection title={pageData.userResponsibilities.title}>
          <ul className="list-disc list-inside space-y-2">
            {pageData.userResponsibilities.items.map((item, index) => (
              <li key={index} className="text-gray-300">{item}</li>
            ))}
          </ul>
        </ContentSection>
      )}
      
      {pageData.limitations && (
        <ContentSection title={pageData.limitations.title}>
          <p className="text-gray-300">{pageData.limitations.description}</p>
        </ContentSection>
      )}
    </div>
  );
};

const LicensesPage = () => {
  const pageData = SITE_CONTENT.licenses;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.modelLicenses && (
        <ContentSection title={pageData.modelLicenses.title}>
          <p className="text-gray-300">{pageData.modelLicenses.description}</p>
        </ContentSection>
      )}
      
      {pageData.codeLicenses && (
        <ContentSection title={pageData.codeLicenses.title}>
          <p className="text-gray-300">{pageData.codeLicenses.description}</p>
        </ContentSection>
      )}
      
      {pageData.thirdParty && (
        <ContentSection title={pageData.thirdParty.title}>
          <p className="text-gray-300">{pageData.thirdParty.description}</p>
        </ContentSection>
      )}
    </div>
  );
};
const ServicesPage = () => {
  const pageData = SITE_CONTENT.services;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.dataCleaningService && (
        <ContentSection title={pageData.dataCleaningService.title}>
          <p className="text-gray-300 mb-4">{pageData.dataCleaningService.intro}</p>
          <p className="text-gray-300 mb-6">{pageData.dataCleaningService.approach}</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            {pageData.dataCleaningService.pricing.map((tier, index) => (
              <div key={index} className="p-6 bg-white/5 rounded-xl border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">{tier.name}</h3>
                <p className="text-3xl font-bold text-cyan-400 mb-4">{tier.price}</p>
                <p className="text-gray-300 text-sm">{tier.description}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-300 mb-4">{pageData.dataCleaningService.example}</p>
          <p className="text-gray-300 mb-4">{pageData.dataCleaningService.goal}</p>
          <p className="text-gray-400 text-sm">Contact: {pageData.dataCleaningService.contact}</p>
        </ContentSection>
      )}
      
      {pageData.aiHosting && (
        <ContentSection title={pageData.aiHosting.title}>
          <p className="text-gray-300">{pageData.aiHosting.description}</p>
        </ContentSection>
      )}
      
      {pageData.customAI && (
        <ContentSection title={pageData.customAI.title}>
          <p className="text-gray-300 mb-4">{pageData.customAI.description}</p>
          <p className="text-gray-400 text-sm">Contact: {pageData.customAI.contact}</p>
        </ContentSection>
      )}
    </div>
  );
};
const MagpiePage = () => {
  const pageData = SITE_CONTENT.magpie;
  
  return (
    <div className="space-y-8">
      <PageHeader title={pageData.title} subtitle={pageData.subtitle} />
      
      {pageData.introduction && (
        <ContentSection>
          <p className="text-gray-300 leading-relaxed">{pageData.introduction}</p>
        </ContentSection>
      )}
      
      <ContentSection title="Coming Soon">
        <p className="text-gray-300">Detailed specifications, benchmarks, and download information for Magpie will be available soon.</p>
      </ContentSection>
    </div>
  );
};
const EventsPage = () => <ContentPage pageKey="events" fallbackTitle="Events" />;
const DataCleaningPage = () => <ContentPage pageKey="datacleaning" fallbackTitle="Data Cleaning Service" />;
const AIHostingPage = () => <ContentPage pageKey="aihosting" fallbackTitle="AI Hosting Service" />;
const CustomAIPage = () => <ContentPage pageKey="customai" fallbackTitle="Custom AI Creation" />;
const RequestProposalPage = () => <ContentPage pageKey="requestproposal" fallbackTitle="Request a Proposal" />;
const ShowroomPage = () => <ContentPage pageKey="showroom" fallbackTitle="The Showroom" />;
const ToolSuitePage = () => <ContentPage pageKey="toolsuite" fallbackTitle="The Tool Suite" />;
const PartnerProgramPage = () => <ContentPage pageKey="partnerprogram" fallbackTitle="Partner Program" />;
const NewsPage = () => <ContentPage pageKey="newspage" fallbackTitle="News" />;
const ArticlesPage = () => <ContentPage pageKey="articles" fallbackTitle="Articles" />;

// Simple placeholder for other pages - keeping as fallback
const PlaceholderPage = ({ title, subtitle }) => (
  <div className="space-y-8">
    <PageHeader title={title} subtitle={subtitle} />
    <GlassCard className="p-8">
      <h2 className="text-2xl font-bold text-white mb-4">Coming Soon</h2>
      <p className="text-gray-300">This page is under development and will be available soon.</p>
    </GlassCard>
  </div>
);

// Footer Component
const Footer = ({ setCurrentPage }) => (
  <footer className="bg-white/8 backdrop-blur-xl border-t border-white/15 mt-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
      <div className="grid md:grid-cols-4 gap-8 mb-8">
        <div>
          <h4 className="font-semibold text-white mb-4">Legal</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <button className="block hover:text-white transition-colors" onClick={() => setCurrentPage('privacypolicy')}>Privacy Policy</button>
            <button className="block hover:text-white transition-colors" onClick={() => setCurrentPage('terms')}>Terms of Service</button>
            <button className="block hover:text-white transition-colors" onClick={() => setCurrentPage('licenses')}>Open Source Licenses</button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Contact</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <div>business@joeyllm.com.au</div>
            <div>datacleaning@joeyllm.com.au</div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Community</h4>
          <div className="space-y-2 text-sm text-gray-400">
            <button className="block hover:text-white transition-colors" onClick={() => window.open('https://discord.gg/F2VsZs6D', '_blank')}>Discord</button>
            <button className="block hover:text-white transition-colors" onClick={() => window.open('https://github.com/joeyllm', '_blank')}>GitHub</button>
          </div>
        </div>
        <div>
          <h4 className="font-semibold text-white mb-4">Compliance</h4>
          <div className="text-sm text-gray-400">Compliant with Australian privacy laws</div>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm border-t border-white/10 pt-8">
        © 2025 JoeyLLM. Open source AI for Australia and beyond.
      </div>
    </div>
  </footer>
);

// Main Application Component
function JoeyLLMSite() {
  // Theme is not persisted in artifact environments because localStorage is unavailable.
  // Always default to the 'blue-octopus' theme.
  const getInitialTheme = () => {
    return 'blue-octopus';
  };

  const [currentPage, setCurrentPage] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(getInitialTheme);
  // External content state removed for security
  
// Content now loaded inline via SITE_CONTENT constant

  const handleThemeChange = (newTheme) => {
    // Simply update the theme in state; do not attempt to persist it.
    setCurrentTheme(newTheme);
  };

//External content loading removed to stop tripping claude security.

//External content disabled.

// Content loaded inline, no loading state needed

  const renderPage = () => {

    const PageComponent = () => {
      switch (currentPage) {
        case 'home': 
          return <HomePage />;
        
        // Main pages with specialized components
        case 'opensource': 
          return <OpenSourcePage />;
        case 'services': 
          return <ServicesPage />;
        case 'littlejoey':
          return <LittleJoeyPage />;
        
        // Other main pages using ContentPage for now
        case 'community': 
          return <CommunityPage />;
        case 'rag': 
          return <RAGPage />;
        case 'news': 
          return <NewsArticlesPage />;
        case 'projects': 
          return <ProjectsPage />;
        case 'donations': 
          return <DonationsPage />;
        case 'partners': 
          return <PartnersPage />;
        // Open Source sub-pages
        case 'magpie':
          return <MagpiePage />;
        
        // Community sub-pages
        case 'events':
          return <EventsPage />;
        
        // Services sub-pages
        case 'datacleaning':
          return <DataCleaningPage />;
        case 'aihosting':
          return <AIHostingPage />;
        case 'customai':
          return <CustomAIPage />;
        case 'requestproposal':
          return <RequestProposalPage />;
        
        // RAG sub-pages
        case 'showroom':
          return <ShowroomPage />;
        case 'toolsuite':
          return <ToolSuitePage />;
        case 'partnerprogram':
          return <PartnerProgramPage />;
        
        // News sub-pages
        case 'newspage':
          return <NewsPage />;
        case 'articles':
          return <ArticlesPage />;
        case 'socialmedia':
          return <SocialMediaPage />;
        
        // Projects sub-pages
        case 'grantsearch':
          return <ContentPage pageKey="grantsearch" fallbackTitle="Grant Search Engine" />;
        case 'communityresources':
          return <ContentPage pageKey="communityresources" fallbackTitle="Community Resource Manager" />;
        case 'wellbeingagent':
          return <ContentPage pageKey="wellbeingagent" fallbackTitle="Wellbeing Agent" />;
        case 'buzzby':
          return <ContentPage pageKey="buzzby" fallbackTitle="BuzzBy" />;
        
        // Donations sub-pages
        case 'donatecard':
          return <ContentPage pageKey="donatecard" fallbackTitle="Donate by Card" />;
        case 'donatecrypto':
          return <ContentPage pageKey="donatecrypto" fallbackTitle="Donate Cryptocurrency" />;
        case 'merch':
          return <ContentPage pageKey="merch" fallbackTitle="JoeyLLM Merchandise" />;
        
        // Legal pages
        case 'privacypolicy': 
          return <PrivacyPolicyPage />;
        case 'terms': 
          return <TermsPage />;
        case 'licenses': 
          return <LicensesPage />;
        case 'contact':
          return <ContentPage pageKey="contact" fallbackTitle="Contact & Support" />;
        case 'accessibility':
          return <ContentPage pageKey="accessibility" fallbackTitle="Accessibility" />;
        case 'guidelines':
          return <ContentPage pageKey="guidelines" fallbackTitle="Community Guidelines" />;
        case 'careers':
          return <ContentPage pageKey="careers" fallbackTitle="Careers" />;
        case 'research':
          return <ContentPage pageKey="research" fallbackTitle="Research" />;
        
        // Special pages
        case 'resetpassword':
          return <ResetPasswordPage />;
        case '404':
        case 'not-found':
          return <NotFoundPage requestedPage={currentPage} />;
        
        default: 
          return <HomePage />;
      }
    };

    return (
      <Suspense fallback={<PageLoader />}>
        <PageComponent />
      </Suspense>
    );
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        <div className="fixed inset-0 bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-purple-900/25 pointer-events-none" />
        <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="fixed bottom-1/3 right-1/4 w-80 h-80 bg-blue-500/8 rounded-full blur-3xl animate-pulse" />

        <Navigation 
          currentPage={currentPage} 
          onNavigate={setCurrentPage}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
          currentTheme={currentTheme}
          onThemeChange={handleThemeChange}
        />

        <main className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-8">
          {renderPage()}
        </main>

        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </ThemeProvider>
  );
}

export default JoeyLLMSite;