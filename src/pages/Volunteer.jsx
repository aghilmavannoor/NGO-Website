import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import VolunteerForm from '../components/common/VolunteerForm';
import { Gift, Heart, HelpCircle } from 'lucide-react';

const Volunteer = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" 
            alt="Forest backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Join the movement</span>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Become a Volunteer</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Register your interests and availability to coordinate tree plantings, riparian cleanups, or educational summits.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Why volunteer details */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[300px] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Left Column: Why volunteer */}
        <div className="lg:col-span-1 space-y-8 relative z-10">
          <div>
            <h2 className="font-display font-black text-2xl md:text-3xl text-slate-800 mb-4 leading-snug uppercase tracking-wide">Why volunteer with DHI Green?</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
              Volunteering is the heartbeat of our conservation projects. It is a chance to acquire restoration skills, work with environmental experts, and make a tangible impact.
            </p>
          </div>

          <div className="space-y-4">
            {[
              { icon: <Heart className="text-secondary" />, title: "Hands-on restoration", desc: "Plant native species, build compost systems, and restore actual river flows." },
              { icon: <Gift className="text-secondary" />, title: "Ecological skill building", desc: "Gain knowledge in hydrology, conservation science, and solar engineering." },
              { icon: <HelpCircle className="text-secondary" />, title: "Leadership experience", desc: "Step up to coordinate local volunteer drives and guide school micro-clubs." }
            ].map((box, idx) => (
              <div key={idx} className="flex gap-4 bg-white p-5 rounded-3xl border border-slate-100 shadow-md shadow-slate-100/50 hover:shadow-lg hover:shadow-emerald-500/5 hover:-translate-y-0.5 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center shrink-0 border border-emerald-100/50 shadow-sm">
                  {box.icon}
                </div>
                <div>
                  <h4 className="font-display font-black text-sm text-slate-800 uppercase tracking-wide">{box.title}</h4>
                  <p className="text-slate-550 text-xs md:text-sm mt-1 leading-relaxed font-medium">{box.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-2 relative z-10">
          <VolunteerForm />
        </div>
      </section>
    </div>
  );
};

export default Volunteer;
