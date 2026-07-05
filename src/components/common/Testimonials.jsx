import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ArrowLeft, ArrowRight } from 'lucide-react';
import { testimonialsData } from '../../data/mockData';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const current = testimonialsData[currentIndex];

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="relative bg-gradient-to-br from-emerald-50 to-green-100/30 rounded-2xl border border-emerald-100 p-8 md:p-12 shadow-sm">
        <Quote className="absolute top-6 left-6 text-emerald-200/80 w-16 h-16 pointer-events-none" />
        
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center text-center"
            >
              <p className="text-lg md:text-xl text-slate-700 italic leading-relaxed mb-8 max-w-2xl font-medium">
                "{current.quote}"
              </p>
              
              <div className="flex items-center gap-4">
                <img 
                  src={current.image} 
                  alt={current.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-primary"
                />
                <div className="text-left">
                  <h4 className="font-display font-bold text-slate-900 text-base">{current.name}</h4>
                  <p className="text-xs text-secondary font-medium">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-center gap-4 mt-8">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-primary transition-all duration-200"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft size={16} />
          </button>
          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:bg-slate-50 hover:text-primary transition-all duration-200"
            aria-label="Next Testimonial"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
