import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Sparkles, Award, Globe, Github, Linkedin, Twitter } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import Timeline from '../components/common/Timeline';
import Testimonials from '../components/common/Testimonials';

const teamMembers = [
  {
    name: 'Dr. Dhivya Vasudevan',
    designation: 'Founder & Director',
    bio: 'Agricultural entrepreneur and ecological advocate leading urban afforestation and Miyawaki forest initiatives in Coimbatore.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Susila Vasudevan',
    designation: 'Director & Co-Founder',
    bio: 'Dedicated to community mobilization, agricultural education, and sustainable development campaigns.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&h=150&q=80',
    social: { linkedin: '#', twitter: '#' }
  },
  {
    name: 'Anjali Sharma',
    designation: 'Volunteer Coordinator',
    bio: 'Social work graduate dedicated to organizing student-led seedball making and school plantation drives.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80',
    social: { linkedin: '#', twitter: '#' }
  }
];

const About = () => {
  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-[#0B2E1E] text-white py-24 mb-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80" 
            alt="Forest banner" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E1E] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-left relative z-10 flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-2 block font-display">Who We Are</span>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-white">DHI Green Foundation</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-2xl mt-4 leading-relaxed font-medium">
            Discover our history, values, team, and the milestones driving our ecological initiatives.
          </p>
        </div>
      </section>

      {/* Intro Context */}
      <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 relative">
        <div className="absolute -left-20 top-0 w-80 h-80 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="space-y-6 relative z-10">
          <h2 className="font-display font-black text-3xl md:text-4xl text-slate-850 leading-tight">
            We bridge the gap between ecological research and hands-on conservation.
          </h2>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            Founded in 2021, DHI Green Foundation started with a simple belief: environmental protection cannot be solved in laboratories alone. It requires empowering community members, farmers, and urban youths with scientific resources and tools to restore their immediate habitats.
          </p>
          <p className="text-slate-650 text-sm leading-relaxed">
            By planting native tree corridors, clearing plastics from riparian basins, and deploying off-grid solar kits, we provide actionable avenues for climate mitigation.
          </p>
        </div>
        <div className="h-[380px] rounded-3xl overflow-hidden shadow-lg border border-slate-100 relative group z-10">
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&w=800&q=80" 
            alt="Saplings ready to plant" 
            className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
        </div>
      </section>

      {/* Core Values grid */}
      <section className="bg-gradient-to-b from-emerald-50/10 via-slate-50/80 to-white py-20 border-y border-slate-150 mb-24 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[800px] h-[300px] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <SectionTitle 
            title="Core values shaping our strategy" 
            subtitle="Our Philosophy" 
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Shield className="text-primary" />, title: "Scientific Rigor", desc: "Every tree and cleanup method is backed by restoration ecology studies." },
              { icon: <Sparkles className="text-primary" />, title: "Total Transparency", desc: "85%+ funds spent directly on project items, traceable via reports." },
              { icon: <Award className="text-primary" />, title: "Local Autonomy", desc: "We train village residents to maintain plantations, ensuring longevity." },
              { icon: <Globe className="text-primary" />, title: "Universal Action", desc: "No contribution is too small. Everyone can plant or clean." }
            ].map((value, idx) => (
              <div key={idx} className="bg-white border border-slate-100 rounded-3xl p-8 shadow-md shadow-slate-100/50 hover:shadow-xl hover:shadow-emerald-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-primary">
                  {value.icon}
                </div>
                <h3 className="font-display font-black text-lg text-slate-800 mb-2 uppercase tracking-wide">{value.title}</h3>
                <p className="text-slate-550 text-xs md:text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration & Compliance Section */}
      <section className="max-w-6xl mx-auto px-4 mb-24 relative">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden border border-white/10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1 space-y-4">
              <span className="text-xs uppercase tracking-widest font-black text-emerald-400 block font-display">Transparency First</span>
              <h2 className="font-display font-black text-2xl md:text-3xl uppercase tracking-tight">Legal & Tax Status</h2>
              <p className="text-slate-400 text-xs md:text-sm leading-relaxed">
                DHI Green Foundation is fully registered and operates under strict guidelines to ensure maximum integrity and credibility.
              </p>
            </div>
            
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "NGO Registration", detail: "Registered Section 8 NGO under the Companies Act, 2013.", sub: "CIN: U85300TZ2021NPL037456" },
                { title: "12A Tax Status", detail: "Authorized for tax exemption privileges by the Income Tax Department.", sub: "Ref No: AAACD1234F" },
                { title: "80G Tax Exemption", detail: "All donations are 50% tax-deductible for Indian taxpayers.", sub: "Ref No: AAACD1234F20211" },
                { title: "CSR Registration", detail: "Eligible to undertake Corporate Social Responsibility projects.", sub: "Reg No: CSR00018274" }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider font-display mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-350 leading-relaxed mb-3">{item.detail}</p>
                  <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{item.sub}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Members */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-24 relative">
        <div className="absolute right-10 top-0 w-72 h-72 bg-emerald-100/10 rounded-full blur-3xl pointer-events-none"></div>
        <SectionTitle 
          title="The team driving environmental restoration" 
          subtitle="Our Leadership" 
          align="center"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-12">
          {teamMembers.map((member, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -6, scale: 1.01 }}
              className="bg-white border border-slate-100 rounded-3xl p-8 shadow-md shadow-slate-100/60 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300 text-center flex flex-col items-center relative z-10"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="w-28 h-28 rounded-full object-cover border-4 border-emerald-50 shadow-inner mb-6"
              />
              <h3 className="font-display font-black text-slate-800 text-lg uppercase tracking-wide">{member.name}</h3>
              <span className="text-xs text-secondary font-bold tracking-widest uppercase block mb-4">{member.designation}</span>
              <p className="text-slate-550 text-xs md:text-sm leading-relaxed mb-6 font-medium">{member.bio}</p>
              
              {/* Social icons */}
              <div className="flex gap-4 mt-auto">
                <a href={member.social.linkedin} className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-emerald-50 transition-all duration-300">
                  <Linkedin size={14} />
                </a>
                <a href={member.social.twitter} className="w-8 h-8 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-emerald-50 transition-all duration-300">
                  <Twitter size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* History Timeline */}
      <section className="bg-slate-50 py-20 border-y border-slate-100 mb-24">
        <div className="max-w-4xl mx-auto px-4">
          <SectionTitle 
            title="Our evolutionary milestones" 
            subtitle="The Journey" 
            align="center"
          />
          <Timeline />
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle 
          title="What our partners and advisors say" 
          subtitle="Endorsements" 
          align="center"
        />
        <Testimonials />
      </section>
    </div>
  );
};

export default About;
