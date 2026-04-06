import React from 'react';
import { Home, PlaySquare, Sparkles, TrendingUp, User, Settings } from 'lucide-react';
import logoSrc from '../../assets/logo.png';

export type TabType = 'home' | 'phrase' | 'scenarios' | 'progress' | 'profile' | 'settings';

interface SidebarProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

const mainNavItems: { id: TabType; icon: React.ReactNode; label: string }[] = [
  { id: 'home', icon: <Home size={18} />, label: 'Home' },
  { id: 'phrase', icon: <PlaySquare size={18} />, label: 'Phrase Finder' },
  { id: 'scenarios', icon: <Sparkles size={18} />, label: 'AI Scenarios' },
  { id: 'progress', icon: <TrendingUp size={18} />, label: 'Progress' },
];

const bottomNavItems: { id: TabType; icon: React.ReactNode; label: string }[] = [
  { id: 'profile', icon: <User size={18} />, label: 'Profile' },
  { id: 'settings', icon: <Settings size={18} />, label: 'Settings' },
];

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav className="sidebar" role="navigation" aria-label="Main navigation">
      {/* Logo */}
      <div className="sidebar__logo">
        <img src={logoSrc} alt="" className="sidebar__logo-img" />
        <span className="sidebar__logo-text">English Lab</span>
      </div>

      {/* Main nav items */}
      <div className="sidebar__nav-main">
        {mainNavItems.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`sidebar__item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
            aria-label={tab.label}
            title={tab.label}
          >
            {tab.icon}
            <span className="sidebar__item-label">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Bottom nav items */}
      <div className="sidebar__nav-bottom">
        {bottomNavItems.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`sidebar__item ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-current={activeTab === tab.id ? 'page' : undefined}
            aria-label={tab.label}
            title={tab.label}
          >
            {tab.icon}
            <span className="sidebar__item-label">{tab.label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};
