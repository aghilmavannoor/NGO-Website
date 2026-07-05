import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Button from './Button';
import Modal from './Modal';

const BlogCard = ({ post }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.div
        whileHover={{ y: -6 }}
        transition={{ duration: 0.2 }}
        className="bg-white border border-slate-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col h-full"
      >
        {/* Cover Image */}
        <div className="relative h-48 overflow-hidden bg-slate-100 shrink-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          <span className="absolute top-4 left-4 bg-emerald-600 text-white text-[10px] px-2.5 py-1 rounded-full font-bold uppercase tracking-wider">
            {post.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          {/* Metadata */}
          <div className="flex gap-4 text-[11px] text-slate-400 font-semibold mb-3">
            <div className="flex items-center gap-1">
              <Calendar size={12} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <User size={12} />
              <span>{post.author}</span>
            </div>
          </div>

          <h3 className="font-display font-extrabold text-lg text-slate-800 mb-2 leading-snug hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">
            {post.excerpt}
          </p>

          <button 
            onClick={() => setIsOpen(true)}
            className="text-primary hover:text-emerald-800 text-sm font-bold flex items-center gap-1.5 transition-colors mt-auto self-start focus:outline-none"
          >
            Read Story <ArrowRight size={14} />
          </button>
        </div>
      </motion.div>

      {/* Blog Post Detail Modal */}
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title={post.title}>
        <div className="space-y-6">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-64 object-cover rounded-xl shadow-sm"
          />
          
          <div className="flex flex-wrap gap-4 text-xs font-bold text-slate-500 bg-slate-50 p-4 rounded-xl border border-slate-100">
            <div className="flex items-center gap-1.5">
              <User size={14} className="text-primary" />
              <span>Author: {post.author} ({post.role})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-primary" />
              <span>Published: {post.date}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded text-[10px]">
                {post.category}
              </span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-slate-700 font-medium text-base italic border-l-4 border-primary pl-4 leading-relaxed">
              {post.excerpt}
            </p>
            <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BlogCard;
