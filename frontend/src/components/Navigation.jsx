import React, { useState } from 'react';
import { Home, BookOpen, Brain, Video, FileText, LogOut, Menu, X } from 'lucide-react';

const Navigation = ({
  currentPage,
  onNavigate,
  showBackButton,
  onBack,
  userProfile,
  onSignOut,
  user
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'practice', label: 'Practice', icon: Brain },
    { id: 'videos', label: 'Videos', icon: Video },
    { id: 'theory', label: 'Theory', icon: BookOpen },
    { id: 'pdf', label: 'PDF Guide', icon: FileText },
  ];
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex bg-gradient-to-r from-space-dark to-space-blue border-b border-periwinkle/20 backdrop-blur-sm sticky top-0 z-50">
        <div className="w-full px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex space-x-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`${
                      currentPage === item.id
                        ? 'bg-gradient-to-r from-periwinkle/20 to-dusty-rose/20 text-white border border-periwinkle/30'
                        : 'text-pale-pink/70 hover:bg-space-light/50 hover:text-white'
                    } px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-all duration-200`}
                  >
                    <Icon size={16} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex items-center space-x-4">
              {user && (
                <div className="flex items-center space-x-3">
                  {user.photoURL && (
                    <img
                      src={user.photoURL}
                      alt="Profile"
                      className="w-8 h-8 rounded-full border border-periwinkle/30"
                    />
                  )}
                  <span className="text-pale-pink/80 text-sm">{user.displayName}</span>
                </div>
              )}
              {userProfile && (
                <div className="text-sm text-pale-pink/60">
                  <span className="font-medium">{userProfile.stage}</span>
                  <span className="mx-2">•</span>
                  <span>{userProfile.level}</span>
                </div>
              )}
              <button
                onClick={() => onNavigate('welcome')}
                className="text-pale-pink/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors duration-200"
              >
                <Home size={16} />
                <span>Home</span>
              </button>
              <button
                onClick={onSignOut}
                className="text-pale-pink/70 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center space-x-2 transition-colors duration-200"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Navigation */}
      <nav className="md:hidden bg-gradient-to-r from-space-dark to-space-blue border-b border-periwinkle/20 backdrop-blur-sm">
        <div className="px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-periwinkle to-dusty-rose rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-white font-semibold">DSA Pathway</span>
            </div>
            <button
              onClick={toggleMobileMenu}
              className="text-pale-pink/70 hover:text-white p-2 rounded-md transition-colors duration-200"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="pb-4 animate-slide-down">
              <div className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        onNavigate(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`${
                        currentPage === item.id
                          ? 'bg-gradient-to-r from-periwinkle/20 to-dusty-rose/20 text-white border border-periwinkle/30'
                          : 'text-pale-pink/70 hover:bg-space-light/50 hover:text-white'
                      } w-full px-3 py-3 rounded-md text-sm font-medium flex items-center space-x-3 transition-all duration-200`}
                    >
                      <Icon size={18} />
                      <span>{item.label}</span>
                    </button>
                  );
                })}
                <div className="border-t border-periwinkle/20 pt-2 mt-2">
                  {user && (
                    <div className="flex items-center space-x-3 px-3 py-2">
                      {user.photoURL && (
                        <img
                          src={user.photoURL}
                          alt="Profile"
                          className="w-8 h-8 rounded-full border border-periwinkle/30"
                        />
                      )}
                      <div>
                        <div className="text-pale-pink/80 text-sm font-medium">{user.displayName}</div>
                        {userProfile && (
                          <div className="text-xs text-pale-pink/60">
                            {userProfile.stage} • {userProfile.level}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                  <button
                    onClick={() => {
                      onNavigate('welcome');
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-pale-pink/70 hover:text-white px-3 py-3 rounded-md text-sm font-medium flex items-center space-x-3 transition-colors duration-200"
                  >
                    <Home size={18} />
                    <span>Home</span>
                  </button>
                  <button
                    onClick={() => {
                      onSignOut();
                      setIsMobileMenuOpen(false);
                    }}
                    className="w-full text-pale-pink/70 hover:text-white px-3 py-3 rounded-md text-sm font-medium flex items-center space-x-3 transition-colors duration-200"
                  >
                    <LogOut size={18} />
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navigation;
