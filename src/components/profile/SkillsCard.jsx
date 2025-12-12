import { Zap } from 'lucide-react';
import { SKILLS } from '../../data/content';

export default function SkillsCard() {
  return (
    <div className="bg-black text-white p-6 shadow-[4px_4px_0px_0px_rgba(100,100,100,1)] border-2 border-black">
      <h3 className="font-mono font-bold text-lg mb-4 flex items-center gap-2 border-b border-white/30 pb-2">
        <Zap size={16} className="text-yellow-400" /> TECH_SPECS
      </h3>
      <div className="space-y-4">
        {SKILLS.map(skill => (
          <div key={skill.name}>
            <div className="flex justify-between font-mono text-xs mb-1">
              <span>{skill.name}</span>
              <span>{skill.val}%</span>
            </div>
            <div className="h-3 w-full border border-white p-px flex gap-px">
              {Array.from({ length: 10 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`flex-1 ${i < (skill.val / 10) ? 'bg-white' : 'bg-transparent'}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
