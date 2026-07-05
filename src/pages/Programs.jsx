import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProgramCard from '../components/common/ProgramCard';
import { programsData } from '../data/mockData';

const Programs = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&w=1200&q=80" 
            alt="Eco forest background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Capacity Building</span>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Our Programs</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Discover our training curriculum, school eco-clubs, and agricultural initiatives.
          </p>
        </div>
      </section>

      {/* Program Grid */}
      <section className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 gap-8">
          {programsData.map((program) => (
            <ProgramCard key={program.id} program={program} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Programs;
