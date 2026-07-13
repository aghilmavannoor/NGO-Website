import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart } from 'lucide-react';
import Button from '../common/Button';
import logoDhi from '../../assets/logo-dhi-official-transparent-v2.png';

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

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full ${
        isScrolled 
          ? 'bg-[#031d10]/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg shadow-black/20' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 flex items-center justify-between">
        {/* Branding Logo */}
        <Link to="/" className="flex items-center select-none group">
          <img 
            src={logoDhi} 
            alt="DHI Green Foundation Logo" 
            className="h-16 md:h-18 w-auto object-contain transition-transform"
          />
        </Link>

        {/* Desktop Navigation Menu (Centered) */}
        <nav className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <NavLink 
              key={link.name} 
              to={link.path} 
              className={({ isActive }) => 
                `relative text-[15px] font-medium transition-colors font-poppins py-1.5 ${
                  isActive 
                    ? 'text-[#65a23a]' 
                    : 'text-[#FFFFFF]/90 hover:text-[#65a23a]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  {isActive && (
                    <motion.div 
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[3px] rounded-full bg-[#65a23a]"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Volunteer Link & Donate Button (Right) */}
        <div className="hidden lg:flex items-center gap-8">
          <NavLink 
            to="/volunteer"
            className={({ isActive }) => 
              `text-[15px] font-medium transition-colors font-poppins py-1.5 ${
                isActive 
                  ? 'text-[#65a23a]' 
                  : 'text-[#FFFFFF]/90 hover:text-[#65a23a]'
              }`
            }
          >
            Volunteer
          </NavLink>
          <Link to="/donate">
            <button 
              className="bg-[#65a23a] hover:bg-[#588e32] text-[#FFFFFF] font-extrabold rounded-full px-6 py-2.5 flex items-center gap-2 shadow-md shadow-[#65a23a]/25 hover:scale-103 transition-all duration-300 text-sm cursor-pointer font-poppins"
            >
              <Heart size={14} className="fill-current text-[#FFFFFF]" /> Donate Now
            </button>
          </Link>
        </div>

        {/* Mobile Toggle Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden p-2 focus:outline-none transition-colors ${
            isScrolled ? 'text-[#1E1E1E] hover:text-[#65a23a]' : 'text-[#FFFFFF] hover:text-[#65a23a]'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`absolute left-0 right-0 top-[110%] border shadow-2xl rounded-3xl overflow-hidden mx-2 lg:hidden ${
              isScrolled 
                ? 'bg-[#FFFFFF]/95 backdrop-blur-xl border-slate-100' 
                : 'bg-[#031d10]/95 backdrop-blur-xl border-[#FFFFFF]/10'
            }`}
          >
            <div className="px-6 py-5 space-y-3">
              {[...navLinks, { name: 'Volunteer', path: '/volunteer' }].map((link) => (
                <NavLink 
                  key={link.name} 
                  to={link.path} 
                  className={({ isActive }) => 
                    `block text-sm font-bold uppercase tracking-wider py-2 font-poppins ${
                      isActive 
                        ? 'text-[#65a23a] border-l-4 border-[#65a23a] pl-3' 
                        : (isScrolled ? 'text-[#1E1E1E]/80 hover:text-[#65a23a] pl-4' : 'text-[#FFFFFF]/80 hover:text-[#65a23a] pl-4')
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="border-t border-slate-100 pt-4 flex flex-col gap-3 mt-4">
                <Link to="/donate" className="w-full">
                  <button 
                    className="bg-[#65a23a] hover:bg-[#588e32] w-full text-center text-[#FFFFFF] font-extrabold rounded-full py-2.5 flex items-center justify-center gap-1.5 shadow-md shadow-[#65a23a]/20 transition-all duration-300 text-sm cursor-pointer"
                  >
                    <Heart size={14} className="fill-current text-[#FFFFFF]" /> Donate Now
                  </button>
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
