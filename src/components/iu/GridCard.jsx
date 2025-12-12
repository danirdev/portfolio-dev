import React from 'react';
import { Crosshair } from 'lucide-react';

const GridCard = ({ title, children, label }) => (
  <div className="relative bg-white border-2 border-black p-6 group transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] shadow-[3px_3px_0px_0px_rgba(0,0,0,0.3)]">
    {label && (
      <div className="absolute -top-3 left-4 bg-white border-2 border-black px-2 py-0.5 text-[10px] font-mono font-bold uppercase tracking-widest">
        {label}
      </div>
    )}
    
    <div className="flex justify-between items-start mb-4 border-b-2 border-black/10 pb-2 border-dotted">
      <h3 className="font-mono font-bold text-lg">{title}</h3>
      <Crosshair size={16} className="text-black/30 group-hover:text-black group-hover:animate-spin-slow transition-colors" />
    </div>
    <div className="font-mono text-sm text-gray-600">
      {children}
    </div>
  </div>
);

export default GridCard;
