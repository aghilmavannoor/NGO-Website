import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Button from '../common/Button';
import logoDhi from '../../assets/logo-dhi.png';
import logoKaanaga from '../../assets/logo-kaanaga.png';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  return (
    <footer className="bg-slate-900 text-slate-350 border-t border-slate-800 pt-16 pb-8 font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
        
        {/* About column */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-3 select-none">
            <div className="flex gap-2">
              <img 
                src={logoDhi} 
                alt="DHI Green Foundation Logo" 
                className="w-10 h-10 object-contain rounded-lg border border-emerald-950 bg-white p-0.5"
              />
              <img 
                src={logoKaanaga} 
                alt="Kaanaga Kovai Logo" 
                className="w-10 h-10 object-contain rounded-lg border border-emerald-950 bg-white p-0.5"
              />
            </div>
            <div>
              <span className="block font-display font-extrabold text-sm tracking-tight text-white leading-none">DHI GREEN FOUNDATION</span>
              <span className="block font-display font-bold text-[9px] tracking-wider text-emerald-400 uppercase leading-none mt-1">Kaanaga Kovai Initiative</span>
            </div>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            DHI Green Foundation is dedicated to combating climate change, preserving ecosystems, and restoring biodiverse forests through community action.
          </p>
          {/* Social icons */}
          <div className="flex gap-3 pt-2">
            {[
              { icon: <Facebook size={16} />, href: 'https://facebook.com' },
              { icon: <Twitter size={16} />, href: 'https://twitter.com' },
              { icon: <Instagram size={16} />, href: 'https://instagram.com' },
              { icon: <Linkedin size={16} />, href: 'https://linkedin.com' }
            ].map((social, idx) => (
              <a 
                key={idx} 
                href={social.href} 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-800 hover:bg-primary hover:text-white flex items-center justify-center transition-colors text-slate-400"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-2.5 text-sm font-medium">
            <li><Link to="/about" className="hover:text-emerald-400 transition-colors">About Us</Link></li>
            <li><Link to="/mission-vision" className="hover:text-emerald-400 transition-colors">Mission & Vision</Link></li>
            <li><Link to="/projects" className="hover:text-emerald-400 transition-colors">Our Projects</Link></li>
            <li><Link to="/programs" className="hover:text-emerald-400 transition-colors">Our Programs</Link></li>
            <li><Link to="/impact" className="hover:text-emerald-400 transition-colors">Impact & Success</Link></li>
          </ul>
        </div>

        {/* Contact info */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Contact Info</h4>
          <ul className="space-y-3.5 text-sm text-slate-400">
            <li className="flex items-start gap-2.5">
              <MapPin size={16} className="text-secondary shrink-0 mt-0.5" />
              <span>45, Green Leaf Avenue, Environment Sector, Bangalore, India</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Phone size={16} className="text-secondary shrink-0" />
              <span>+91 80 4930 1827</span>
            </li>
            <li className="flex items-center gap-2.5">
              <Mail size={16} className="text-secondary shrink-0" />
              <span>contact@dhigreen.org</span>
            </li>
          </ul>
        </div>

        {/* Newsletter subscription */}
        <div className="space-y-4">
          <h4 className="font-display font-bold text-white text-sm uppercase tracking-wider">Newsletter</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            Subscribe to receive project updates and invitations to local volunteer drives.
          </p>

          <form onSubmit={handleSubscribe} className="space-y-2">
            <div className="relative">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 bg-slate-800 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:border-primary pr-10"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-2 p-1.5 text-emerald-400 hover:text-emerald-300 focus:outline-none"
              >
                <Send size={14} />
              </button>
            </div>
            {isSubscribed && (
              <p className="text-xs text-emerald-400 font-semibold animate-pulse">
                ✓ Successfully subscribed!
              </p>
            )}
          </form>
        </div>

      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
        <p>&copy; {new Date().getFullYear()} DHI Green Foundation. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
