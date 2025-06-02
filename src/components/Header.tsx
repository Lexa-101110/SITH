import React, { useState } from 'react';
import { Menu, X, Rocket, Sun, Moon } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface HeaderProps {
  darkMode?: boolean;
  setDarkMode?: (dark: boolean) => void;
}

const Header = ({ darkMode = true, setDarkMode }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/#home', to: '/' },
    { name: 'About', href: '/#about', to: '/' },
    { name: 'Rockets', href: '/#rockets', to: '/' },
    { name: 'Gallery', href: '/gallery', to: '/gallery' },
    { name: 'Projects', href: '/#projects', to: '/' },
    { name: 'Docs', href: '/#docs', to: '/' },
    { name: 'Contact', href: '/#contact', to: '/' },
  ];

  const handleNavClick = (item: any) => {
    if (item.to === '/' && location.pathname !== '/') {
      // If navigating to home page sections from another page
      window.location.href = item.href;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-900/90 backdrop-blur-sm border-b border-purple-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Rocket className="h-8 w-8 text-purple-400" />
            <span className="text-xl font-bold text-white">Nova Project</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navigation.map((item) => (
              item.to === '/nova-project' || item.to === '/gallery' ? (
                <Link
                  key={item.name}
                  to={item.to}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item)}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.name}
                </a>
              )
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Dark Mode Toggle */}
            {setDarkMode && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors"
              >
                {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </button>
            )}

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-gray-800 text-gray-300 hover:text-white transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-2">
              {navigation.map((item) => (
                item.to === '/nova-project' || item.to === '/gallery' ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-800"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 py-2 px-4 rounded-lg hover:bg-gray-800"
                    onClick={() => handleNavClick(item)}
                  >
                    {item.name}
                  </a>
                )
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
