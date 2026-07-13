import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Heart, Users, Compass, Droplet, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';
import PartnerSlider from '../components/common/PartnerSlider';
import projectService from '../services/projectService';
import homeHeroBg from '../assets/home-hero-bg.jpg';
import aboutPlanting from '../assets/about-planting.jpg';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectService.getAll();
      setFeaturedProjects(data.slice(0, 3));
    };
    fetchProjects();
  }, []);

  // Framer Motion Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="overflow-hidden font-sans bg-[#F7F8F5]">
      {/* 1. HERO SECTION (100vh Cinematic Presentation Slide) */}
      <section className="relative h-screen w-full flex items-center bg-[#031d10] text-[#F7F8F5] overflow-hidden">
        {/* Background Image exactly aligned and scaled to reference */}
        <div className="absolute inset-0 z-0">
          <img 
            src={homeHeroBg} 
            alt="School children and officials planting saplings" 
            className="w-full h-full object-cover object-right select-none pointer-events-none"
          />
          {/* Soft dark forest green gradient overlay covering left 40-45% of the screen width */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: 'linear-gradient(to right, #031d10 0%, #031d10 20%, rgba(3, 29, 16, 0.95) 28%, rgba(3, 29, 16, 0.6) 38%, rgba(3, 29, 16, 0) 45%)'
            }}
          ></div>
        </div>

        {/* Floating leaf particles (Subtle, organic animation) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-25">
          <motion.div
            initial={{ x: "10vw", y: "90vh", rotate: 0, opacity: 0.12 }}
            animate={{ y: "-10vh", rotate: 360, x: "20vw" }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute text-[#65a23a]"
          >
            <Leaf size={24} className="fill-current" />
          </motion.div>
          <motion.div
            initial={{ x: "80vw", y: "85vh", rotate: 45, opacity: 0.08 }}
            animate={{ y: "-10vh", rotate: -180, x: "65vw" }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 3 }}
            className="absolute text-[#2a5625]"
          >
            <Leaf size={30} className="fill-current" />
          </motion.div>
        </div>

        {/* Content Section (Aligned with max-width [1440px] container) */}
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-20 flex flex-col justify-center h-full pt-20 pb-16 text-left">
          {/* Tag Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="flex items-center gap-2 bg-[#65a23a]/10 backdrop-blur-sm border border-[#65a23a]/30 text-[#9DDC5A] px-4 py-2 rounded-full w-fit mb-5 text-[10px] sm:text-xs uppercase tracking-widest font-black font-poppins shadow-md"
          >
            <Leaf size={12} className="fill-current text-[#65a23a]" />
            <span>Nurture Today, Sustain Forever</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-black text-5xl sm:text-6xl lg:text-[76px] leading-[1.05] tracking-tight text-[#FFFFFF] max-w-3xl"
          >
            Small Hands, <br />
            Big Impact, <br />
            <span className="text-[#65a23a] relative inline-block">
              Greener Planet.
              <span className="absolute -bottom-2 left-0 w-24 h-[5px] bg-[#65a23a] rounded-full"></span>
            </span>
          </motion.h1>

          {/* Quote Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-start gap-3 mt-10 max-w-xl text-[#FFFFFF]/90"
          >
            <span className="text-[#FFFFFF]/40 font-serif text-5xl leading-none select-none -mt-2">“</span>
            <p className="text-base sm:text-lg leading-relaxed font-poppins font-light">
              Every sapling we plant today grows into a <span className="text-[#65a23a] font-medium">better tomorrow.</span>
              <span className="text-[#FFFFFF]/40 font-serif text-5xl leading-none select-none ml-1.5 align-bottom">”</span>
            </p>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-wrap gap-4 mt-8 z-30"
          >
            <Link to="/projects">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="bg-[#65a23a] hover:bg-[#588e32] text-[#FFFFFF] font-extrabold rounded-full px-8 py-3.5 transition-all duration-300 shadow-lg shadow-[#65a23a]/25 text-sm cursor-pointer flex items-center gap-2.5 font-poppins"
              >
                <Leaf size={16} className="fill-current text-[#FFFFFF]" />
                Explore Our Projects
              </motion.button>
            </Link>
            <Link to="/volunteer">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="border-2 border-[#FFFFFF]/40 bg-transparent hover:bg-[#FFFFFF]/10 text-[#FFFFFF] font-extrabold rounded-full px-8 py-3.5 transition-all duration-300 text-sm cursor-pointer flex items-center gap-2.5 font-poppins shadow-md"
              >
                <Users size={16} />
                Join as Volunteer
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Floating Capsule Panel (Increased width and vertical offset for correct mockup overlap) */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-16 w-full relative z-30 -mt-24 sm:-mt-28 lg:-mt-32">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="bg-[#f5f2ed] rounded-[40px] py-6 px-8 md:py-8 md:px-10 shadow-[0_20px_50px_rgba(0,0,0,0.06)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 relative overflow-hidden"
        >
          {/* Col 1 */}
          <div className="flex gap-4 items-center hover:-translate-y-1 transition-transform duration-300 relative z-10 w-full">
            <div className="w-12 h-12 rounded-full bg-[#2a5625] flex items-center justify-center text-white shrink-0 shadow-md">
              <Sprout size={22} />
            </div>
            <div>
              <h4 className="font-extrabold text-[#031d10] text-sm sm:text-base font-display">Plant Trees</h4>
              <p className="text-[#1E1E1E]/75 text-xs sm:text-sm mt-1 leading-relaxed font-poppins">Create a greener planet for future generations.</p>
            </div>
          </div>

          {/* Col 2 */}
          <div className="flex gap-4 items-center md:border-l md:border-[#031d10]/10 md:pl-8 hover:-translate-y-1 transition-transform duration-300 relative z-10 w-full">
            <div className="w-12 h-12 rounded-full bg-[#2a5625] flex items-center justify-center text-white shrink-0 shadow-md">
              <Droplet size={22} />
            </div>
            <div>
              <h4 className="font-extrabold text-[#031d10] text-sm sm:text-base font-display">Save Water</h4>
              <p className="text-[#1E1E1E]/75 text-xs sm:text-sm mt-1 leading-relaxed font-poppins">Protect every drop, preserve life and our environment.</p>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex gap-4 items-center lg:border-l lg:border-[#031d10]/10 lg:pl-8 hover:-translate-y-1 transition-transform duration-300 relative z-10 w-full">
            <div className="w-12 h-12 rounded-full bg-[#2a5625] flex items-center justify-center text-white shrink-0 shadow-md">
              <Users size={22} />
            </div>
            <div>
              <h4 className="font-extrabold text-[#031d10] text-sm sm:text-base font-display">Empower Communities</h4>
              <p className="text-[#1E1E1E]/75 text-xs sm:text-sm mt-1 leading-relaxed font-poppins">Together, we build stronger, greener and healthier communities.</p>
            </div>
          </div>

          {/* Col 4 */}
          <div className="flex gap-4 items-center md:border-l lg:border-l lg:border-[#031d10]/10 md:pl-8 lg:pl-8 hover:-translate-y-1 transition-transform duration-300 relative z-10 w-full">
            <div className="w-12 h-12 rounded-full bg-[#2a5625] flex items-center justify-center text-white shrink-0 shadow-md">
              <Leaf size={22} className="rotate-45" />
            </div>
            <div>
              <h4 className="font-extrabold text-[#031d10] text-sm sm:text-base font-display">Sustainable Future</h4>
              <p className="text-[#1E1E1E]/75 text-xs sm:text-sm mt-1 leading-relaxed font-poppins">Small actions today lead to a sustainable tomorrow.</p>
            </div>
          </div>
        </motion.div>

        {/* Decorative Leaf branches overlapping the bottom left and bottom right corners of the card */}
        <div className="absolute -bottom-8 -left-3 z-40 pointer-events-none w-32 h-32 hidden md:block select-none">
          <svg viewBox="0 0 120 120" className="w-full h-full text-[#65a23a]" fill="currentColor">
            <path d="M 0 120 C 30 100, 60 70, 90 40" stroke="#031d10" strokeWidth="2.5" fill="none" opacity="0.6" />
            <path d="M 20 110 C 15 90, 25 80, 35 95 C 25 105, 10 110, 20 110 Z" fill="#2a5625" />
            <path d="M 35 95 C 30 75, 45 65, 55 80 C 45 90, 35 95, 35 95 Z" fill="#65a23a" />
            <path d="M 50 80 C 45 60, 60 50, 70 65 C 60 75, 50 80, 50 80 Z" fill="#2a5625" />
            <path d="M 65 65 C 60 45, 75 35, 85 50 C 75 60, 65 65, 65 65 Z" fill="#65a23a" />
            <path d="M 80 50 C 75 30, 90 20, 100 35 C 90 45, 80 50, 80 50 Z" fill="#9DDC5A" />
            <path d="M 30 105 C 45 115, 60 110, 65 95 C 60 100, 45 105, 30 105 Z" fill="#65a23a" />
            <path d="M 45 90 C 60 100, 75 95, 80 80 C 70 85, 55 90, 45 90 Z" fill="#9DDC5A" />
          </svg>
        </div>
        <div className="absolute -bottom-8 -right-3 z-40 pointer-events-none w-32 h-32 hidden md:block select-none">
          <svg viewBox="0 0 120 120" className="w-full h-full text-[#65a23a] transform -scale-x-100" fill="currentColor">
            <path d="M 0 120 C 30 100, 60 70, 90 40" stroke="#031d10" strokeWidth="2.5" fill="none" opacity="0.6" />
            <path d="M 20 110 C 15 90, 25 80, 35 95 C 25 105, 10 110, 20 110 Z" fill="#2a5625" />
            <path d="M 35 95 C 30 75, 45 65, 55 80 C 45 90, 35 95, 35 95 Z" fill="#65a23a" />
            <path d="M 50 80 C 45 60, 60 50, 70 65 C 60 75, 50 80, 50 80 Z" fill="#2a5625" />
            <path d="M 65 65 C 60 45, 75 35, 85 50 C 75 60, 65 65, 65 65 Z" fill="#65a23a" />
            <path d="M 80 50 C 75 30, 90 20, 100 35 C 90 45, 80 50, 80 50 Z" fill="#9DDC5A" />
            <path d="M 30 105 C 45 115, 60 110, 65 95 C 60 100, 45 105, 30 105 Z" fill="#65a23a" />
            <path d="M 45 90 C 60 100, 75 95, 80 80 C 70 85, 55 90, 45 90 Z" fill="#9DDC5A" />
          </svg>
        </div>
      </div>

      {/* 2. ABOUT US SECTION (100vh Presentation Slide) */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-[#65a23a]/5 to-white py-24 overflow-hidden border-t border-slate-100">
        {/* Organic Background Blobs */}
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-[#65a23a]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#65a23a]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* Left Content Card Column */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
              variants={containerVariants}
              className="lg:col-span-7 space-y-8"
            >
              <motion.span variants={itemVariants} className="text-sm uppercase tracking-widest font-extrabold text-[#65a23a] font-poppins block">
                Our Foundation
              </motion.span>
              
              <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-black text-[#031d10] leading-tight font-display">
                Restoring biodiversity, <br />
                <span className="text-[#65a23a]">tree by tree, drop by drop.</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-[#1E1E1E]/85 text-base leading-relaxed font-poppins font-light">
                DHI Green Foundation operates at the intersection of conservation science and community participation. We believe that lasting ecological change occurs when villagers, urbanites, and schools are equipped to nurture their local environments.
              </motion.p>

              {/* Grid of Values */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <Compass size={22} />, title: "Scientific Planting", desc: "100% native saplings chosen for ecological resiliency." },
                  { icon: <Users size={22} />, title: "Community Owned", desc: "Ecosystems managed by local residents." }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#65a23a] shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-[#031d10] text-sm font-display">{value.title}</h4>
                      <p className="text-[#1E1E1E]/70 text-xs mt-1 leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

              <motion.div variants={itemVariants} className="pt-4">
                <Link to="/about">
                  <Button variant="outline" className="gap-2 group shadow-sm">
                    Discover More About Us <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Interactive Image Gallery Column */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 relative"
            >
              {/* Outer decorative box */}
              <div className="absolute -inset-4 bg-[#65a23a]/5 rounded-3xl -rotate-2 scale-102"></div>
              
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl bg-slate-100 border border-slate-100 group">
                <img 
                  src={aboutPlanting} 
                  alt="Agriculture Education Drive" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#9DDC5A]">On-ground Action</span>
                  <h4 className="font-display font-extrabold text-lg mt-1">Agriculture Education Drive</h4>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION (100vh Presentation Slide) */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50/30 to-white py-24 overflow-hidden border-t border-slate-100">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[#65a23a]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full relative z-10">
          <SectionTitle 
            title="Projects making on-ground impact" 
            subtitle="Environmental Actions" 
            align="center"
          />

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-5%' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-16">
            <Link to="/projects">
              <Button variant="primary" size="lg" className="shadow-lg shadow-primary/10 hover:scale-105 transition-transform duration-300">
                View All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TRUSTED PARTNERS BANNER */}
      <section className="py-16 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950/15 via-transparent to-emerald-950/15 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center mb-8 relative z-10">
          <h4 className="text-xs font-black text-emerald-400 uppercase tracking-widest font-display">
            Our Trusted Partners & Sponsors
          </h4>
        </div>
        <div className="relative z-10">
          <PartnerSlider />
        </div>
      </section>
    </div>
  );
};

export default Home;
