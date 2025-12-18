import {Code, Linkedin, Github} from 'lucide-react';

export default function Header ()
{
  return (
    <header className="flex flex-col md:flex-row justify-between items-center mb-12 border-b-4 pb-6 bg-white/80 backdrop-blur-sm p-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
      <div className="text-center md:text-left mb-4 md:mb-0">
        <h1 className="font-mono text-3xl font-bold uppercase tracking-tighter flex items-center gap-3">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center">
            <Code size={20} />
          </div>
          Dev_Portfolio
        </h1>
        <p className="font-mono text-xs mt-2 pl-1 text-gray-500">
          [SYSTEM_STATUS: ONLINE] • [LOC: REMOTE]
        </p>
      </div>
      <div className="flex gap-3">
        <a href="https://www.linkedin.com/in/ramos-daniel-alberto/" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black hover:bg-black
         hover:text-white transition-colors">
          <Linkedin size={20} />
        </a>
        <a href="https://github.com/danirdev" target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-black hover:bg-black hover:text-white transition-colors">
          <Github size={20} />
        </a>
      </div>
    </header>
  );
}
