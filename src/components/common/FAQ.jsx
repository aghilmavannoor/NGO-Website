import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { FAQData } from '../../data/mockData';

const FAQItem = ({ question, answer, isOpen, toggleOpen }) => {
  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white mb-4 shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={toggleOpen}
        className="w-full text-left px-6 py-5 flex justify-between items-center bg-slate-50 hover:bg-slate-100/50 transition-colors duration-200 focus:outline-none"
      >
        <span className="font-semibold text-slate-800 pr-4">{question}</span>
        <span className="text-slate-500 shrink-0">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </span>
      </button>
      
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-5 border-t border-slate-100 text-slate-600 text-sm leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = ({ limit }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const list = limit ? FAQData.slice(0, limit) : FAQData;

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      {list.map((item, index) => (
        <FAQItem
          key={item.id}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          toggleOpen={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default FAQ;
