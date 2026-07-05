import React from 'react';
import { motion } from 'framer-motion';
import { Clock, UserCheck } from 'lucide-react';
import Button from './Button';
import { Link } from 'react-router-dom';

const ProgramCard = ({ program }) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-md shadow-slate-100/60 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col md:flex-row h-full relative"
    >
      {/* Thumbnail */}
      <div className="md:w-2/5 h-56 md:h-auto overflow-hidden bg-slate-150 shrink-0">
        <img 
          src={program.image} 
          alt={program.title}
          className="w-full h-full object-cover scale-101 hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Details */}
      <div className="p-8 flex flex-col justify-between flex-1">
        <div>
          <h3 className="font-display font-black text-lg text-slate-800 mb-2 leading-snug uppercase tracking-wide">
            {program.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3 font-medium">
            {program.description}
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-slate-650 font-semibold border-t border-slate-100 pt-4 mb-5">
            <div className="flex items-center gap-1.5">
              <Clock size={15} className="text-secondary" />
              <span>{program.duration}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <UserCheck size={15} className="text-secondary" />
              <span>{program.target}</span>
            </div>
          </div>
        </div>

        <Link to="/volunteer" className="w-full block">
          <Button variant="primary" size="md" className="w-full justify-center rounded-2xl shadow-sm">
            Join as Coordinator
          </Button>
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramCard;
