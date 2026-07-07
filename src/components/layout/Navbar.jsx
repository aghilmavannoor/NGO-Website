import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../common/Button';
import logoDhi from '../../assets/logo-dhi-official-transparent.png';

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
    { name: 'Projects', path: '/projects' },
    { name: 'Impact', path: '/impact' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ];

  const mobileActiveStyle = ({ isActive }) => 
    `block text-base font-bold py-2 font-display ${
      isActive ? 'text-emerald-400 border-l-4 border-emerald-400 pl-3' : 'text-white/80 hover:text-white pl-4'
    }`;

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#04140a]/90 backdrop-blur-md border-b border-white/5 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 flex items-center justify-between">
        {/* Branding Logo */}
        <Link to="/" className="flex items-center select-none group">
          <img 
            src={logoDhi} 
            alt="DHI Green Foundation Logo" 
            className="h-12 md:h-14 w-auto object-contain group-hover:scale-102 transition-transform"
          />
        </Link>

        {/* Desktop Navigation Link list */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `relative text-[15px] font-bold tracking-wide transition-colors font-display py-1.5 ${
                  isActive ? 'text-emerald-400' : 'text-white/80 hover:text-white'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-400 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/volunteer" className="text-[15px] font-bold text-white/80 hover:text-white transition-colors font-display">
            Volunteer
          </Link>
          <Link to="/donate">
            <Button variant="primary" size="sm" className="bg-[#5BBE3A] hover:bg-[#4ca82f] text-white border-transparent rounded-full px-5 py-2 flex items-center gap-1.5 font-bold shadow-md hover:scale-105 transition-transform">
              <Heart size={15} className="fill-white text-white" /> Donate Now
            </Button>
          </Link>
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-white hover:text-emerald-400 p-2 focus:outline-none"
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
            className="lg:hidden bg-[#04140a]/95 backdrop-blur-lg border border-white/5 shadow-2xl rounded-2xl mx-4 mt-2 overflow-hidden"
          >
            <div className="px-6 py-5 space-y-3">
              {navLinks.map((link) => (
                <NavLink key={link.name} to={link.path} className={mobileActiveStyle}>
                  {link.name}
                </NavLink>
              ))}

              <div className="border-t border-white/10 pt-4 flex flex-col gap-3 mt-4">
                <Link to="/volunteer" className="w-full">
                  <Button variant="outline" size="md" className="w-full justify-center border-white/20 text-white bg-white/5 rounded-full">Join as Volunteer</Button>
                </Link>
                <Link to="/donate" className="w-full">
                  <Button variant="primary" size="md" className="w-full justify-center bg-[#5BBE3A] text-white rounded-full">Donate Now</Button>
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
