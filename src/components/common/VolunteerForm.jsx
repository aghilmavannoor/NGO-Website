import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, FileText } from 'lucide-react';
import Button from './Button';

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    skills: '',
    interests: [],
    availability: 'weekends',
    resumeName: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const interestOptions = [
    'Tree Plantation',
    'River Cleanup Campaigns',
    'School/Child Education',
    'Event Coordination',
    'Content Writing & Socials',
    'Technical/Website Support'
  ];

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\d{10,12}$/.test(formData.phone.replace(/[\s-+]/g, ''))) {
      tempErrors.phone = 'Invalid phone number';
    }
    if (!formData.address.trim()) tempErrors.address = 'Address is required';
    if (formData.interests.length === 0) tempErrors.interests = 'Select at least one area of interest';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleInterestChange = (interest) => {
    setFormData((prev) => {
      const isSelected = prev.interests.includes(interest);
      const newInterests = isSelected
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest];
      
      if (errors.interests && newInterests.length > 0) {
        setErrors((prevErr) => ({ ...prevErr, interests: '' }));
      }
      return { ...prev, interests: newInterests };
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, resumeName: file.name }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      
      // Simulate API submit to volunteerService
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          address: '',
          skills: '',
          interests: [],
          availability: 'weekends',
          resumeName: ''
        });
      }, 1500);
    }
  };

  return (
    <div className="bg-white border border-slate-100/80 rounded-3xl p-8 md:p-10 shadow-md shadow-slate-100/60">
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Name */}
              <div>
                <label htmlFor="volunteer-name" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Full Name</label>
                <input
                  type="text"
                  id="volunteer-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 ${
                    errors.name ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                  }`}
                  placeholder="e.g. John Doe"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="volunteer-email" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Email Address</label>
                <input
                  type="email"
                  id="volunteer-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 ${
                    errors.email ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                  }`}
                  placeholder="john@example.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.email}</p>}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Phone */}
              <div>
                <label htmlFor="volunteer-phone" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Phone Number</label>
                <input
                  type="tel"
                  id="volunteer-phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 ${
                    errors.phone ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                  }`}
                  placeholder="e.g. 9876543210"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.phone}</p>}
              </div>

              {/* Availability */}
              <div>
                <label htmlFor="volunteer-avail" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Availability</label>
                <select
                  id="volunteer-avail"
                  name="availability"
                  value={formData.availability}
                  onChange={handleChange}
                  className="w-full px-4 py-3 text-sm border border-slate-200 rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 font-medium"
                >
                  <option value="weekends">Weekends Only</option>
                  <option value="weekdays">Weekdays Only</option>
                  <option value="flexible">Flexible / Any Time</option>
                  <option value="remote">Remote / Online Campaigns</option>
                </select>
              </div>
            </div>

            {/* Address */}
            <div>
              <label htmlFor="volunteer-addr" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Resident Address</label>
              <input
                type="text"
                id="volunteer-addr"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className={`w-full px-4 py-3 text-sm border rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 ${
                  errors.address ? 'border-red-400 focus:border-red-500' : 'border-slate-200 focus:border-primary'
                }`}
                placeholder="Complete postal address..."
              />
              {errors.address && <p className="text-red-500 text-xs mt-1 font-semibold">{errors.address}</p>}
            </div>

            {/* Interests Checkbox grid */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 mb-3 uppercase tracking-wider">Areas of Interest</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {interestOptions.map((interest) => (
                  <button
                    key={interest}
                    type="button"
                    onClick={() => handleInterestChange(interest)}
                    className={`flex items-center gap-3 px-4 py-3.5 text-xs font-semibold border rounded-2xl transition-all text-left ${
                      formData.interests.includes(interest)
                        ? 'border-primary text-primary bg-emerald-50/30'
                        : 'border-slate-250 bg-white text-slate-600 hover:border-slate-350'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                      formData.interests.includes(interest) ? 'bg-primary border-primary text-white' : 'border-slate-300 bg-slate-50'
                    }`}>
                      {formData.interests.includes(interest) && <span className="text-[10px]">&#10003;</span>}
                    </div>
                    <span>{interest}</span>
                  </button>
                ))}
              </div>
              {errors.interests && <p className="text-red-500 text-xs mt-2 font-semibold">{errors.interests}</p>}
            </div>

            {/* Skills */}
            <div>
              <label htmlFor="volunteer-skills" className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Skills & Core Strengths (Optional)</label>
              <input
                type="text"
                id="volunteer-skills"
                name="skills"
                value={formData.skills}
                onChange={handleChange}
                className="w-full px-4 py-3 text-sm border border-slate-200 rounded-2xl bg-slate-50/50 focus:outline-none focus:bg-white focus:ring-2 focus:ring-emerald-500/10 font-medium"
                placeholder="e.g. Photography, Teaching, Planting, Designing, First Aid..."
              />
            </div>

            {/* Resume Upload (Mock) */}
            <div>
              <label className="block text-[10px] font-black text-slate-400 mb-2 uppercase tracking-wider">Upload Resume / CV (Optional)</label>
              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2 px-5 py-3 border border-slate-250 rounded-2xl text-xs font-bold text-slate-650 hover:bg-slate-50 hover:border-slate-350 cursor-pointer transition-all">
                  <FileText size={16} className="text-slate-500" />
                  <span>Choose PDF / DOCX</span>
                  <input
                    type="file"
                    accept=".pdf,.docx,.doc"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </label>
                <span className="text-xs text-slate-500 font-semibold italic truncate max-w-[200px]">
                  {formData.resumeName || 'No file selected'}
                </span>
              </div>
            </div>

            <Button
              variant="primary"
              type="submit"
              className="w-full justify-center py-3.5 rounded-2xl shadow-lg shadow-primary/10 hover:scale-[1.01] transition-transform"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting Application...' : 'Register as Volunteer'}
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
            <h4 className="font-display font-black text-2xl text-slate-800 uppercase tracking-wide">Application Submitted!</h4>
            <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-md mx-auto font-medium">
              Thank you for applying. The DHI Green volunteer coordination team has received your application. We will contact you shortly about upcoming volunteer events.
            </p>
            <Button
              variant="outline"
              onClick={() => setIsSubmitted(false)}
              className="mt-6 rounded-2xl shadow-sm hover:bg-emerald-50 hover:text-primary border-slate-200"
            >
              Submit Another Application
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default VolunteerForm;
