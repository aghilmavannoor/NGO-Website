import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Eye, Target, Compass, BookOpen, Sun, Activity } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';

const MissionVision = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1200&q=80" 
            alt="Forest backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Our Purpose</span>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Mission & Vision</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Learn about our core focus, visual roadmap, and environmental action pillars.
          </p>
        </div>
      </section>

      {/* Main Focus: Mission and Vision Cards */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 relative">
        <div className="absolute -left-20 top-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute -right-20 bottom-0 w-96 h-96 bg-emerald-50/30 rounded-full blur-3xl pointer-events-none"></div>

        {/* Mission Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="bg-white border border-slate-100/80 p-10 rounded-3xl shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 relative overflow-hidden z-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/80 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-primary mb-8 relative z-10">
            <Target size={28} />
          </div>
          <h2 className="font-display font-black text-2xl text-slate-800 mb-4 relative z-10 uppercase tracking-wide">Our Mission</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed relative z-10 font-medium">
            To accelerate ecological restoration by equipping community stewards with scientific resources, planting native vegetation, and rehabilitating freshwater basins. We focus on transforming environmental awareness into measurable, on-ground restoration outputs.
          </p>
        </motion.div>

        {/* Vision Card */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          whileHover={{ y: -6, scale: 1.01 }}
          className="bg-white border border-slate-100/80 p-10 rounded-3xl shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 relative overflow-hidden z-10"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50/80 rounded-full -mr-16 -mt-16 opacity-50"></div>
          <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-primary mb-8 relative z-10">
            <Eye size={28} />
          </div>
          <h2 className="font-display font-black text-2xl text-slate-800 mb-4 relative z-10 uppercase tracking-wide">Our Vision</h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed relative z-10 font-medium">
            A carbon-resilient planet where local communities actively maintain biodiverse micro-environments, rivers flow free of chemical and plastic contamination, and sustainable clean energy lights up off-grid hamlets, bridging human progress and nature.
          </p>
        </motion.div>
      </section>

      {/* Tagline Callout */}
      <section className="bg-slate-900 text-white py-20 mb-24 relative overflow-hidden border-y border-slate-850">
        <div className="absolute inset-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?auto=format&fit=crop&w=1200&q=80" 
            alt="Nature backdrop" 
            className="w-full h-full object-cover scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/90 to-emerald-950/80"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center px-4 relative z-10 space-y-6">
          <span className="text-xs uppercase tracking-widest text-emerald-400 font-extrabold block font-display">Our Tagline</span>
          <blockquote className="font-display font-black text-4xl md:text-6xl leading-tight uppercase tracking-tight">
            "Planting Seeds for a Green Future"
          </blockquote>
          <p className="text-slate-350 text-xs md:text-sm font-medium tracking-wide">
            Helping communities transition from environmental dependency to conservation leadership.
          </p>
        </div>
      </section>

      {/* Pillars of Action */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 relative">
        <div className="absolute left-1/2 top-1/2 w-[700px] h-[300px] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <SectionTitle 
          title="The four pillars of our strategy" 
          subtitle="Our Pillars" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mt-12 relative z-10">
          {[
            { 
              icon: <Leaf size={24} />, 
              title: "Restoration Ecology", 
              desc: "Deploying scientific research to select native flora that rebuild soil nutrients, prevent erosion, and support local fauna." 
            },
            { 
              icon: <Activity size={24} />, 
              title: "Riparian Rehabilitation", 
              desc: "Cleaning urban and rural water basins, desilting river channels, and planting deep-root buffers to filter runoff." 
            },
            { 
              icon: <Sun size={24} />, 
              title: "Clean Energy Microgrids", 
              desc: "Supplying solar microgrids to tribal off-grid regions, replacing kerosene grids and reducing carbon emissions." 
            },
            { 
              icon: <BookOpen size={24} />, 
              title: "Community Literacy", 
              desc: "Structuring green school clubs and agriculture workshops to build conservation skills directly in community centers." 
            }
          ].map((pillar, idx) => (
            <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary mb-6">
                {pillar.icon}
              </div>
              <h3 className="font-display font-black text-base text-slate-800 mb-2 uppercase tracking-wide">{pillar.title}</h3>
              <p className="text-slate-550 text-xs md:text-sm leading-relaxed font-medium">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default MissionVision;
