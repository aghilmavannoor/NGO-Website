import React, { useState, useEffect } from 'react';
import { Search, Filter } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/common/ProjectCard';
import projectService from '../services/projectService';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await projectService.getAll();
      setProjects(data);
      setFilteredProjects(data);
    };
    fetchProjects();
  }, []);

  useEffect(() => {
    let result = projects;

    // Search filter
    if (searchTerm.trim()) {
      result = result.filter(
        (p) => 
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          p.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    setFilteredProjects(result);
  }, [searchTerm, selectedCategory, projects]);

  const categories = ['All', 'Afforestation', 'Water Conservation', 'Clean Energy', 'Urban Farming'];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-[#0B2E1E] text-white py-24 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-15">
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80" 
            alt="Forest backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B2E1E] to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 md:px-8 text-left relative z-10 flex flex-col items-start">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Our Actions</span>
          <h1 className="font-display font-black text-4xl md:text-5xl uppercase tracking-tight text-white">Conservation Projects</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mt-4 leading-relaxed font-medium">
            Explore our on-ground forestry, river rejuvenation, and clean energy projects.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 relative z-10">
        <div className="bg-white border border-slate-100 rounded-3xl p-6 md:p-8 shadow-md shadow-slate-100/50 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-4 top-3.5 text-slate-400">
              <Search size={18} />
            </span>
            <input
              type="text"
              placeholder="Search by title, location, category..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 border border-slate-200 rounded-2xl text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-emerald-500/10 font-medium"
            />
          </div>

          {/* Categories select pills */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 text-xs font-black tracking-wider uppercase rounded-xl border transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-102'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-slate-100 rounded-3xl p-10 shadow-sm text-slate-400">
            <p className="font-bold text-base font-display">No projects found matching your filters.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
