import { Zap } from 'lucide-react';
import { STACK } from '../../data/content';

export default function SkillsCard() {
  return (
    <div className="bg-black text-white p-6 shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] border-2 border-black">
      <h3 className="font-mono font-bold text-lg mb-4 flex items-center gap-2 border-b border-white/30 pb-2">
        <Zap size={16} className="text-yellow-400" /> TECH_STACK
      </h3>      <div className="flex flex-wrap gap-2">
        {STACK.map(skill => (
          <span 
            key={skill.name}
            className={`${skill.color} text-white font-mono text-xs font-bold px-3 py-2 border-2 border-white transition-colors cursor-default`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
}
