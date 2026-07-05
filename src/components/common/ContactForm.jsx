import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2 } from 'lucide-react';
import Button from './Button';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) {
      tempErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = 'Message must be at least 15 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when editing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API submit to contactService
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSent(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 1500);
    }
  };

  return (
    <div className="bg-white border border-slate-100/80 rounded-3xl p-8 md:p-10 shadow-md shadow-slate-100/60 h-full">
      <AnimatePresence mode="wait">
        {!isSent ? (
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Full Name</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 ${
                  errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary'
                }`}
                placeholder="e.g. John Doe"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Email Address</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 ${
                  errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary'
                }`}
                placeholder="john@example.com"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 ${
                  errors.subject ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary'
                }`}
                placeholder="How can we help?"
              />
              {errors.subject && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 resize-none ${
                  errors.message ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : 'border-slate-200 focus:border-primary'
                }`}
                placeholder="Write your details or questions here..."
              ></textarea>
              {errors.message && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.message}</p>}
            </div>

            <Button 
              variant="primary" 
              type="submit" 
              className="w-full justify-center py-3.5 rounded-2xl shadow-lg shadow-primary/10 hover:scale-[1.01] transition-transform gap-2"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : <>Send Message <Send size={14} /></>}
            </Button>
          </motion.form>
        ) : (
          <motion.div 
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12 space-y-5"
          >
            <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center text-primary mx-auto">
              <CheckCircle2 size={36} />
            </div>
            <h4 className="font-display font-black text-2xl text-slate-800 uppercase tracking-wide">Message Received!</h4>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-sm mx-auto font-medium">
              Thank you for reaching out to DHI Green Foundation. Our representative will contact you via email shortly.
            </p>
            <Button 
              variant="outline" 
              onClick={() => setIsSent(false)}
              className="mt-6 rounded-2xl shadow-sm hover:bg-emerald-50 hover:text-primary border-slate-200"
            >
              Send Another Message
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
