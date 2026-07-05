import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  align = 'center', 
  light = false,
  className = '' 
}) => {
  const containerAligns = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end'
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col max-w-3xl mb-12 ${containerAligns[align]} ${className}`}
    >
      {subtitle && (
        <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-2 block font-display">
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl font-extrabold font-display leading-tight mb-4 ${
        light ? 'text-white' : 'text-slate-900'
      }`}>
        {title}
      </h2>
      <div className="w-16 h-1 bg-secondary rounded-full mb-4"></div>
    </motion.div>
  );
};

export default SectionTitle;
