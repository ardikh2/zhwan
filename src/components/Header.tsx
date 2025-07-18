import React from 'react';
import { Settings } from 'lucide-react';

interface HeaderProps {
  onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  return (
    <header className="sticky top-0 z-50 bg-zhuan-dark-brown border-b border-zhuan-gold/30 shadow-lg">
      <div className="container mx-auto px-4 md:px-6 max-w-full">
        <div className="flex items-center justify-between" style={{ height: '110px' }}>
          {/* Title on the left */}
          <div className="text-right text-zhuan-light">
            <h1 className="text-sm md:text-xl font-bold">کافه فرانسوی ژوان</h1>
            <p className="text-xs md:text-sm text-zhuan-light/80">منوی دیجیتال</p>
          </div>

          {/* Logo in the center */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 md:w-28 md:h-28">
              <img 
                src="/logo.png" 
                alt="کافه فرانسوی ژوان لوگو" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Admin Button on the right */}
          <button
            onClick={onAdminClick}
            className="flex items-center space-x-2 space-x-reverse px-2 py-1 bg-zhuan-gold hover:bg-zhuan-gold/90 rounded-lg transition-all duration-200 text-zhuan-dark-brown text-[11px] md:text-sm"
          >
            <Settings className="w-3.5 h-3.5" />
            <span className="font-medium">مدیریت</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
