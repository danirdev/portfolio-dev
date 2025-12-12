import React from 'react';

const PixelButton = ({ children, onClick, active, className = "" }) => (
  <button 
    onClick={onClick}
    className={`
      relative px-6 py-3 font-mono text-sm uppercase tracking-wider transition-all duration-100
      border-2 border-black
      ${active 
        ? 'bg-black text-white shadow-none translate-y-1 translate-x-1' 
        : 'bg-white text-black hover:bg-gray-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none'}
      ${className}
    `}
  >
    {/* Esquinas decorativas */}
    <div className="absolute -top-1 -left-1 w-1 h-1 bg-black"></div>
    <div className="absolute -top-1 -right-1 w-1 h-1 bg-black"></div>
    <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-black"></div>
    <div className="absolute -bottom-1 -right-1 w-1 h-1 bg-black"></div>
    
    <div className="flex items-center gap-2">
      {children}
    </div>
  </button>
);

export default PixelButton;
