import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Eye, Video } from 'lucide-react';
import Modal from './Modal';

const GalleryCard = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ scale: 1.02, y: -4 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative group aspect-square rounded-3xl overflow-hidden shadow-md shadow-slate-100/60 hover:shadow-2xl hover:shadow-emerald-500/5 cursor-pointer bg-slate-150 border border-slate-100"
        onClick={() => setIsOpen(true)}
      >
        {/* Media Thumbnail */}
        <img 
          src={item.type === 'video' ? 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=800&q=80' : item.url} 
          alt={item.title} 
          className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.85 }}
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-xl"
          >
            {item.type === 'video' ? (
              <Play size={24} className="text-primary fill-primary ml-1 shrink-0" />
            ) : (
              <Eye size={24} className="text-primary shrink-0" />
            )}
          </motion.div>
        </div>

        {/* Category Badge */}
        <span className="absolute bottom-4 left-4 bg-slate-950/70 backdrop-blur-md text-white text-[9px] px-3 py-1 rounded-full font-black uppercase tracking-wider">
          {item.category}
        </span>

        {/* Video Icon Indicator */}
        {item.type === 'video' && (
          <span className="absolute top-4 right-4 bg-slate-950/70 backdrop-blur-md text-white p-2 rounded-full">
            <Video size={14} />
          </span>
        )}
      </motion.div>

      {/* Lightbox / Video Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={item.title}>
        <div className="flex flex-col items-center">
          {item.type === 'video' ? (
            <video 
              src={item.url} 
              controls 
              autoPlay 
              className="w-full rounded-xl max-h-[50vh] bg-black"
            />
          ) : (
            <img 
              src={item.url} 
              alt={item.title} 
              className="w-full rounded-xl max-h-[60vh] object-contain bg-slate-50"
            />
          )}
          <div className="w-full flex justify-between items-center mt-4">
            <span className="text-xs font-bold text-slate-400 bg-slate-100 px-3 py-1 rounded-full uppercase tracking-wider">
              {item.category}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Format: {item.type === 'video' ? 'Video Player' : 'High-Res Photo'}
            </span>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default GalleryCard;
