import React from 'react';
import { Terminal, X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
      <div className="relative w-full max-w-lg bg-white border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] animate-in fade-in zoom-in duration-200">
        <div className="bg-black text-white p-2 flex justify-between items-center font-mono uppercase text-sm font-bold">
          <span className="flex items-center gap-2"><Terminal size={14} /> {title}</span>
          <button onClick={onClose} className="hover:bg-white hover:text-black p-1 transition-colors">
            <X size={16} />
          </button>
        </div>
        <div className="p-6 font-mono overflow-y-auto max-h-[70vh]">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
