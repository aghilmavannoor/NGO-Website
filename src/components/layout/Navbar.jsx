import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import Button from '../common/Button';
import logoDhi from '../../assets/logo-dhi-official.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Track scroll state
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Mission & Vision', path: '/mission-vision' },
    { name: 'Projects', path: '/projects' },
    { name: 'Programs', path: '/programs' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Impact', path: '/impact' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const activeStyle = ({ isActive }) => 
    `text-sm font-bold transition-colors font-display ${
      isActive ? 'text-primary' : 'text-slate-600 hover:text-primary'
    }`;

  const mobileActiveStyle = ({ isActive }) => 
    `block text-base font-bold py-2 font-display ${
      isActive ? 'text-primary border-l-4 border-primary pl-3' : 'text-slate-600 hover:text-primary pl-4'
    }`;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Branding Logo */}
        <Link to="/" className="flex items-center select-none group">
          <img 
            src={logoDhi} 
            alt="DHI Green Foundation Logo" 
            className="h-10 md:h-12 w-auto object-contain rounded-xl bg-white/95 border border-emerald-100 p-1.5 group-hover:scale-102 transition-transform shadow-sm"
          />
        </Link>

        {/* Desktop Navigation Link list */}
        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <NavLink key={link.name} to={link.path} className={activeStyle}>
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* CTA Actions & Emblem */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/volunteer">
            <Button variant="ghost" size="sm">Volunteer</Button>
          </Link>
          <Link to="/donate">
            <Button variant="primary" size="sm">Donate Now</Button>
          </Link>
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-600 hover:text-primary p-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-b border-slate-100 shadow-lg overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={mobileActiveStyle}>
                  {link.name}
                </NavLink>
              ))}

              <div className="border-t border-slate-100 pt-4 flex flex-col gap-3 mt-4">
                <Link to="/volunteer" className="w-full">
                  <Button variant="outline" size="md" className="w-full justify-center">Join as Volunteer</Button>
                </Link>
                <Link to="/donate" className="w-full">
                  <Button variant="primary" size="md" className="w-full justify-center">Donate Now</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
