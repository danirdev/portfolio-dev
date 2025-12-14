import { ExternalLink, Layers } from 'lucide-react';
import { PROJECTS } from '../../data/content';
import GridCard from '../iu/GridCard';

export default function ProjectsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {PROJECTS.map((project, idx) => (
        <GridCard key={project.id} title={project.title} label={`MOD_${idx + 1}`}>
          <p className="mb-4 h-10">{project.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map(t => (
              <span key={t} className="bg-gray-100 border border-black px-1 text-[10px] font-bold">
                {t}
              </span>
            ))}
          </div>          <div className="flex items-center justify-between mt-2 pt-2 border-t border-dashed border-black/20">
            <span className={`text-[10px] font-bold px-1 ${
              project.status === 'ONLINE' ? 'bg-green-100 text-green-700' : 
              project.status === 'BETA' ? 'bg-blue-100 text-blue-700' : 'bg-red-100 text-red-700'
            }`}>
              ● {project.status}
            </span>
            <a 
              href={project.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className={`text-xs font-bold hover:underline flex items-center gap-1 ${
                project.status === 'OFFLINE' ? 'opacity-50 pointer-events-none' : ''
              }`}
            >
              ACCEDER <ExternalLink size={12} />
            </a>
          </div>
        </GridCard>
      ))}
      
      <div className="border-2 border-black border-dashed p-6 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity cursor-pointer bg-white/50">
        <div className="text-center">
          <Layers size={32} className="mx-auto mb-2" />
          <span className="font-mono text-xs">SLOT_VACÍO_PARA_TU_IDEA</span>
        </div>
      </div>
    </div>
  );
}
