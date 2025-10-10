import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Car, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Ana Sayfa', href: '/' },
    { name: 'Kurslar', href: '/courses' },
    { name: 'Ehliyet Tipleri', href: '/license-types' },
    { name: 'Fiyatlar', href: '/pricing' },
    { name: 'Hakkımızda', href: '/about' },
    { name: 'İletişim', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm transition-all duration-300 hover:shadow-lg"
      style={{ animation: 'slideInUp 0.8s ease-out forwards' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Car className="h-8 w-8 text-blue-500 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 animate-float" />
            </div>
            <h1 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-all duration-300 group-hover:translate-x-1">
              Sürücü Akademi
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-blue-600 hover:scale-105 hover:-translate-y-1 hover:rotate-1 ${
                  isActive(item.href)
                    ? 'text-blue-600 scale-105'
                    : 'text-gray-700'
                }`}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {item.name}
              </Link>
            ))}
          </nav>


          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-sm shadow-lg">
            <div className="py-4 px-4 space-y-2">
              {navigation.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    isActive(item.href)
                      ? 'text-blue-600 bg-blue-50 shadow-md scale-105'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50 hover:shadow-md'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    animation: 'slideInLeft 0.4s ease-out forwards'
                  }}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="block mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl text-center transition-all duration-300 transform hover:scale-105 shadow-lg"
                style={{ 
                  animationDelay: `${navigation.length * 100}ms`,
                  animation: 'slideInLeft 0.4s ease-out forwards'
                }}
              >
                İletişim
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;