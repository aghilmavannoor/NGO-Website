import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Calendar, Award } from 'lucide-react';
import Button from './Button';
import Modal from './Modal';

const ProjectCard = ({ project }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div 
        whileHover={{ y: -8, scale: 1.01 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="bg-white border border-slate-100/90 rounded-3xl overflow-hidden shadow-md shadow-slate-100/60 hover:shadow-2xl hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col h-full relative"
      >
        {/* Cover Image */}
        <div className="relative h-56 overflow-hidden bg-slate-150">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover scale-101 hover:scale-105 transition-transform duration-700"
          />
          {/* Status Badge */}
          <span className={`absolute top-4 right-4 px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full shadow-md ${
            project.status === 'Active' 
              ? 'bg-emerald-500 text-white shadow-emerald-500/20' 
              : 'bg-slate-500 text-white'
          }`}>
            {project.status}
          </span>
          {/* Category Tag */}
          <span className="absolute bottom-4 left-4 bg-slate-900/70 backdrop-blur-md text-white text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-wider">
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <h3 className="font-display font-black text-lg md:text-xl text-slate-800 mb-3 hover:text-primary transition-colors uppercase tracking-wide leading-snug">
            {project.title}
          </h3>
          <p className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
            {project.description}
          </p>

          {/* Stats / Info */}
          <div className="space-y-3 mb-6 text-slate-650 text-xs font-semibold border-t border-slate-100 pt-5 mt-auto">
            <div className="flex items-center gap-2.5">
              <MapPin size={15} className="text-secondary shrink-0" />
              <span>{project.location}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Users size={15} className="text-secondary shrink-0" />
              <span>{project.beneficiaries}</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-6">
            <div className="flex justify-between items-center text-[10px] font-black tracking-wider uppercase mb-2">
              <span className="text-slate-400">Restoration Progress</span>
              <span className="text-primary">{project.progress}%</span>
            </div>
            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary via-emerald-500 to-secondary rounded-full transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>

          <Button 
            variant="outline" 
            size="md" 
            className="w-full justify-center mt-auto shadow-sm rounded-2xl hover:bg-emerald-50 hover:text-primary border-slate-150"
            onClick={() => setIsModalOpen(true)}
          >
            Learn Project Details
          </Button>
        </div>
      </motion.div>

      {/* Modal Detail Popup */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title={project.title}
      >
        <div className="space-y-6">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-64 object-cover rounded-xl shadow-sm"
          />
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-600 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-center gap-2">
              <MapPin size={15} className="text-primary" />
              <span>Location: {project.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users size={15} className="text-primary" />
              <span>Impacted: {project.beneficiaries}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar size={15} className="text-primary" />
              <span>Timeline: {project.startDate} to {project.endDate}</span>
            </div>
            <div className="flex items-center gap-2">
              <Award size={15} className="text-primary" />
              <span>Status: {project.status}</span>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-display font-bold text-slate-800 text-lg">About this Project</h4>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {project.fullDescription}
            </p>
          </div>
          
          <div>
            <div className="flex justify-between items-center text-sm font-bold text-slate-700 mb-2">
              <span>Goal Target Completed</span>
              <span className="text-primary">{project.progress}%</span>
            </div>
            <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                style={{ width: `${project.progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProjectCard;
