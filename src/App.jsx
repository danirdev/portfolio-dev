import { useState } from 'react';
import GlobalStyles from './components/layout/GlobalStyles';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import ProfileCard from './components/profile/ProfileCard';
import SkillsCard from './components/profile/SkillsCard';
import IntroBox from './components/sections/IntroBox';
import ProjectsGrid from './components/projects/ProjectsGrid';
import Modals from './components/modals/Modals';

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div className="min-h-screen text-black font-sans selection:bg-black selection:text-white">
      <GlobalStyles />
      
      {/* BACKGROUND LAYER */}
      <div className="fixed inset-0 bg-grid-pattern z-0 pointer-events-none opacity-60"></div>      <div className="relative z-10 max-w-5xl mx-auto p-4 md:p-8 flex flex-col min-h-screen">
        
        <Header />

        {/* MAIN GRID LAYOUT */}
        <main className="grid grid-cols-1 md:grid-cols-12 gap-6 flex-1">
          
          {/* LEFT COLUMN (Profile) */}
          <aside className="md:col-span-4 space-y-6">
            <ProfileCard 
              onOpenBio={() => setActiveModal('bio')}
              onOpenContact={() => setActiveModal('contact')}
            />
            <SkillsCard />
          </aside>

          {/* RIGHT COLUMN (Content) */}
          <section className="md:col-span-8 space-y-6">
            <IntroBox />
            <ProjectsGrid />
          </section>
        </main>

        <Footer />
      </div>

      <Modals activeModal={activeModal} onClose={() => setActiveModal(null)} />
    </div>
  );
}