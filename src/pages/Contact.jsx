import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ContactForm from '../components/common/ContactForm';

const Contact = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white font-sans">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1425082661705-1834bfd09dca?auto=format&fit=crop&w=1200&q=80" 
            alt="Nature field backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Get In Touch</span>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Contact Us</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Have questions about volunteering, partnerships, or tax-exemption receipts? Contact our team.
          </p>
        </div>
      </section>

      {/* Main Grid: Form + Info card */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[300px] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Info Column */}
        <div className="lg:col-span-1 space-y-6 relative z-10">
          <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-10 space-y-6 relative overflow-hidden shadow-lg border border-slate-800">
            {/* Background decoration */}
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-500/10 rounded-full -mr-10 -mb-10 pointer-events-none"></div>

            <h3 className="font-display font-black text-xl text-white uppercase tracking-wide">Contact Info</h3>
            <p className="text-slate-400 text-xs md:text-sm leading-relaxed font-medium">
              We look forward to hearing from you. Drop by our office or call our representative during operating hours.
            </p>

            <ul className="space-y-4 text-xs md:text-sm text-slate-300 pt-2 font-medium">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>45, Green Leaf Avenue, Environment Sector, Bangalore, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-emerald-400 shrink-0" />
                <span>+91 80 4930 1827</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-emerald-400 shrink-0" />
                <span>contact@dhigreen.org</span>
              </li>
              <li className="flex items-center gap-3 border-t border-slate-800 pt-4 mt-2">
                <Clock size={18} className="text-emerald-400 shrink-0" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Google Maps placeholder */}
          <div className="bg-slate-100 border border-slate-200 rounded-3xl h-60 overflow-hidden relative shadow-sm">
            {/* Simulated Map */}
            <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center text-slate-550 p-6 text-center">
              <MapPin size={32} className="text-primary mb-2 animate-bounce" />
              <span className="font-black text-xs font-display uppercase tracking-wide">DHI Green HQ Map</span>
              <span className="text-[11px] text-slate-450 mt-1 font-semibold">45, Green Leaf Ave, Sector 4, Bangalore</span>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-2 relative z-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
};

export default Contact;
