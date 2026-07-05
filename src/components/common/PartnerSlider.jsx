import React from 'react';
import { partnersData } from '../../data/mockData';

const PartnerSlider = () => {
  // Duplicate partners list to create a seamless infinite marquee effect
  const doublePartners = [...partnersData, ...partnersData, ...partnersData];

  return (
    <div className="w-full overflow-hidden bg-slate-50 py-8 border-y border-slate-100 relative">
      {/* Fade Overlays */}
      <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none"></div>
      <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none"></div>
      
      <div className="flex w-[300%] animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused]">
        {doublePartners.map((partner, index) => (
          <div 
            key={`${partner.id}-${index}`} 
            className="flex flex-col items-center justify-center mx-12 w-28 shrink-0 select-none grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <img 
              src={partner.logo} 
              alt={partner.name}
              className="h-10 object-contain mb-2"
              draggable="false"
            />
            <span className="text-xs font-semibold text-slate-500 tracking-wider uppercase font-display text-center">
              {partner.name}
            </span>
          </div>
        ))}
      </div>

      {/* Marquee Custom Keyframe inline style injected to support v4 tailwind dynamic marquee */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
};

export default PartnerSlider;
