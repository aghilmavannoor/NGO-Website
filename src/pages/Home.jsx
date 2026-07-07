import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Heart, Users, Compass, Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/common/Button';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';
import PartnerSlider from '../components/common/PartnerSlider';
import projectService from '../services/projectService';
import logoDhi from '../assets/logo-dhi-official.png';
import homeHeroBg from '../assets/home-hero-bg.png';
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
    <div className="overflow-hidden font-sans">
      {/* 1. HERO SECTION (100vh Presentation Slide) */}
      <section className="relative min-h-screen flex items-center bg-[#04140a] text-white overflow-hidden pt-32 pb-20 px-4 md:px-8">
        {/* Environmental Canopy Background Image with Dark Soft Gradients */}
        <div className="absolute inset-0 z-0">
          <img 
            src={homeHeroBg} 
            alt="People planting a sapling" 
            className="w-full h-full object-cover opacity-95 object-center lg:object-right animate-fade-in"
          />
          {/* Dark-green vignette overlay: very dark on the left/bottom, fading into light/transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#04140a]/90 via-[#04140a]/50 to-[#04140a]/95 lg:bg-gradient-to-r lg:from-[#04140a]/95 lg:via-[#04140a]/65 lg:to-transparent z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto relative z-20 space-y-8 w-full text-left flex flex-col items-start px-4 lg:px-0">
          {/* Leaf Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-md"
          >
            <Leaf size={14} className="fill-emerald-500 text-emerald-500" />
            <span>Preserving <span className="text-emerald-400">Nature</span>, Enriching <span className="text-emerald-400">Lives</span></span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-tight tracking-tight text-white max-w-3xl drop-shadow-md"
          >
            Together, We Can <br />
            Build a <span className="text-emerald-400">Greener <br className="hidden md:inline" /> Tomorrow</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-300 text-sm sm:text-lg max-w-xl font-medium leading-relaxed drop-shadow-sm"
          >
            We empower communities through environmental <span className="text-emerald-400 font-bold">conservation</span>, tree plantation, and <span className="text-emerald-400 font-bold">sustainable</span> development for a better tomorrow.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-5 pt-2"
          >
            <Link to="/projects">
              <Button variant="primary" size="lg" className="bg-[#22c55e] hover:bg-emerald-600 border-transparent text-white rounded-full font-bold px-8 py-3.5 flex items-center gap-2 transition-transform hover:scale-105 duration-300 shadow-lg shadow-emerald-950/20">
                <Leaf size={18} /> Explore Our Projects
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" size="lg" className="border-white/20 bg-white/5 hover:bg-white/10 text-white rounded-full font-bold px-8 py-3.5 flex items-center gap-2 transition-transform hover:scale-105 duration-300">
                <Users size={18} /> Join as Volunteer
              </Button>
            </Link>
          </motion.div>

          {/* Features list row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 mt-4 border-t border-white/15 w-full max-w-4xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Leaf size={22} className="fill-emerald-500/10" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm font-display tracking-wide">Plant Trees</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Create a greener planet</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Droplet size={22} className="fill-emerald-500/10" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm font-display tracking-wide">Save Water</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Protect every drop</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Users size={22} className="fill-emerald-500/10" />
              </div>
              <div>
                <h4 className="font-extrabold text-white text-sm font-display tracking-wide">Empower Communities</h4>
                <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">Together for a better tomorrow</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Decorative Bottom-Left Foliage */}
        <div className="absolute bottom-0 left-0 w-80 h-80 pointer-events-none opacity-25 z-10 select-none">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-emerald-500/30 fill-current">
            <path d="M10 190C60 160 110 110 130 50" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M130 50C140 40 150 42 152 48C150 58 140 60 130 50Z" />
            <path d="M110 80C125 70 135 72 137 78C132 88 120 90 110 80Z" />
            <path d="M90 105C105 95 115 97 117 103C112 113 100 115 90 105Z" />
            <path d="M70 130C85 120 95 122 97 128C92 138 80 140 70 130Z" />
            <path d="M50 155C65 145 75 147 77 153C72 163 60 165 50 155Z" />
            
            <path d="M120 65C110 55 105 57 103 63C108 73 120 75 120 65Z" />
            <path d="M100 90C90 80 85 82 83 88C88 98 100 100 100 90Z" />
            <path d="M80 115C70 105 65 107 63 113C68 123 80 125 80 115Z" />
            <path d="M60 140C50 130 45 132 43 138C48 148 60 150 60 140Z" />
          </svg>
        </div>
      </section>

      {/* 2. ABOUT US SECTION (100vh Presentation Slide) */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-emerald-50/15 to-white py-24 overflow-hidden border-t border-slate-100">
        {/* Organic Background Blobs */}
        <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-emerald-100/25 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-emerald-50/30 rounded-full blur-3xl pointer-events-none translate-x-1/3 translate-y-1/3"></div>

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
              <motion.span variants={itemVariants} className="text-sm uppercase tracking-widest font-extrabold text-secondary font-display block">
                Our Foundation
              </motion.span>
              
              <motion.h2 variants={itemVariants} className="text-4xl sm:text-5xl font-black text-slate-800 leading-tight font-display">
                Restoring biodiversity, <br />
                <span className="text-primary">tree by tree, drop by drop.</span>
              </motion.h2>
              
              <motion.p variants={itemVariants} className="text-slate-650 text-base leading-relaxed font-medium">
                DHI Green Foundation operates at the intersection of conservation science and community participation. We believe that lasting ecological change occurs when villagers, urbanites, and schools are equipped to nurture their local environments.
              </motion.p>

              {/* Grid of Values */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                {[
                  { icon: <Compass size={22} />, title: "Scientific Planting", desc: "100% native saplings chosen for ecological resiliency." },
                  { icon: <Users size={22} />, title: "Community Owned", desc: "Ecosystems managed by local residents." }
                ].map((value, idx) => (
                  <div key={idx} className="flex gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-slate-800 text-sm font-display">{value.title}</h4>
                      <p className="text-slate-500 text-xs mt-1 leading-relaxed">{value.desc}</p>
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
              <div className="absolute -inset-4 bg-emerald-500/5 rounded-3xl -rotate-2 scale-102"></div>
              
              <div className="relative h-[480px] rounded-3xl overflow-hidden shadow-xl bg-slate-100 border border-slate-100 group">
                <img 
                  src={aboutPlanting} 
                  alt="Agriculture Education Drive" 
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-emerald-400">On-ground Action</span>
                  <h4 className="font-display font-extrabold text-lg mt-1">Agriculture Education Drive</h4>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 3. FEATURED PROJECTS SECTION (100vh Presentation Slide) */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white via-slate-50/30 to-white py-24 overflow-hidden border-t border-slate-100">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-emerald-50/20 rounded-full blur-3xl pointer-events-none"></div>

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
