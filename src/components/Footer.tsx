import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-16 py-8 bg-zhuan-dark-brown border-t border-zhuan-gold/30">
      <div className="container mx-auto px-4 text-center">
        <p className="text-zhuan-light/80 text-sm">
          طراحی و اجرا توسط{' '}
          <a 
            href="https://mykh.ir/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-zhuan-gold hover:text-opacity-80 font-medium transition-colors duration-200 hover:underline"
          >
            علی خداکرمی
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
