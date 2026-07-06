import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Leaf, ArrowRight, Heart, Users, Compass } from 'lucide-react';
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
      <section className="relative min-h-screen flex items-center bg-[#0b2812] text-white overflow-hidden pt-24 pb-16 px-4">
        {/* Environmental Canopy Background Image with Custom Mockup Photo */}
        <div className="absolute inset-0 z-0">
          <img 
            src={homeHeroBg} 
            alt="Children and teacher planting crops" 
            className="w-full h-full object-cover opacity-95 object-center lg:object-right animate-fade-in"
          />
          {/* Responsive gradients: vertical on mobile, horizontal on desktop */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b2812]/85 via-[#0b2812]/50 to-[#0b2812]/90 lg:bg-gradient-to-r lg:from-[#0b2812]/95 lg:via-[#0b2812]/60 lg:to-transparent z-10"></div>
          
          {/* Ambient Organic Light blobs */}
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        </div>

        {/* Hero Content */}
        <div className="max-w-7xl mx-auto relative z-20 space-y-8 w-full px-4 lg:px-8 text-left flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest backdrop-blur-sm shadow-sm"
          >
            <Leaf size={16} className="fill-emerald-300/20 text-emerald-300" />
            <span>Preserving Ecosystems Since 2021</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl leading-none tracking-tight uppercase text-white max-w-2xl"
          >
            Protecting Nature, <br />
            <span className="text-emerald-400">
              Restoring Ecosystems
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-slate-200/90 text-sm sm:text-lg max-w-xl font-medium leading-relaxed"
          >
            We empower local communities to combat climate change, plant biodiverse forests, and restore clean waterways. Join us in cultivating a sustainable planet.
          </motion.p>

          {/* Branding Badge inside Hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex items-center gap-4 bg-white/10 border border-white/15 rounded-3xl p-4 w-full max-w-sm backdrop-blur-md shadow-lg"
          >
            <div className="flex">
              <img 
                src={logoDhi} 
                alt="DHI Green Foundation Logo" 
                className="h-10 w-auto object-contain bg-white rounded-xl p-1 shadow-sm"
              />
            </div>
            <div className="text-left border-l border-white/15 pl-4">
              <span className="block text-[9px] uppercase tracking-widest text-emerald-300 font-black font-display">Culture with Agriculture</span>
              <span className="block text-xs font-display font-bold text-white uppercase mt-0.5">DHI Green Foundation</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-5 pt-4"
          >
            <Link to="/donate">
              <Button variant="primary" size="lg" className="gap-2 bg-[#15803d] hover:bg-[#166534] border-transparent text-white shadow-lg shadow-emerald-900/35 hover:scale-105 transition-transform duration-300">
                Donate Now <Heart size={18} className="fill-white text-white" />
              </Button>
            </Link>
            <Link to="/volunteer">
              <Button variant="outline" size="lg" className="border-transparent bg-white text-[#15803d] hover:bg-slate-100 hover:scale-105 transition-transform duration-300 shadow-md">
                Join as Volunteer
              </Button>
            </Link>
          </motion.div>
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
