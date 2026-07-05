import React from 'react';
import { motion } from 'framer-motion';

const Timeline = ({ events }) => {
  const defaultEvents = [
    {
      year: '2021',
      title: 'Foundation & Roots',
      description: 'DHI Green Foundation was incorporated by a group of environmentalists committed to community-led climate action. Our first local park tree drive was launched.'
    },
    {
      year: '2022',
      title: 'Water Restoration Push',
      description: 'Expanded scope into water conservation. Initiated the Arkavathi Riparian zone cleanup, collecting and recycling over 15 tons of plastic waste.'
    },
    {
      year: '2023',
      title: 'Clean Energy & Microgrids',
      description: 'Launched our solar electrification programs for remote Western Ghats villages, installing micro-grids for off-grid households.'
    },
    {
      year: '2024',
      title: '100k Trees Target Set',
      description: 'Announced Project Green Canopy with forest departments. Integrated corporate CSR partnerships, planting 40,000 native trees in 6 months.'
    },
    {
      year: '2025',
      title: 'Eco Summit & Educational Modules',
      description: 'Hosted the Youth Eco-Summit, educating 200+ college leaders. Established green clubs in 25 schools, planting educational school gardens.'
    }
  ];

  const timelineEvents = events || defaultEvents;

  return (
    <div className="relative border-l border-slate-200 ml-4 md:ml-6 my-10 space-y-12">
      {timelineEvents.map((item, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="relative pl-8 md:pl-12"
        >
          {/* Timeline Node Icon */}
          <div className="absolute -left-[11px] top-1 bg-white border-2 border-primary w-5 h-5 rounded-full flex items-center justify-center shadow-sm">
            <div className="w-2.5 h-2.5 bg-secondary rounded-full"></div>
          </div>

          {/* Timeline Content */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-slate-200 transition-all duration-300 shadow-sm hover:shadow-md">
            <span className="font-display font-extrabold text-lg text-primary bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full mb-3 inline-block">
              {item.year}
            </span>
            <h3 className="font-display font-bold text-xl text-slate-800 mb-2">{item.title}</h3>
            <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Timeline;
