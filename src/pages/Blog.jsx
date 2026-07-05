import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import SectionTitle from '../components/common/SectionTitle';
import BlogCard from '../components/common/BlogCard';
import blogService from '../services/blogService';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchBlogs = async () => {
      const data = await blogService.getAll();
      setPosts(data);
      setFilteredPosts(data);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    let result = posts;

    // Search filter
    if (searchTerm.trim()) {
      result = result.filter(
        (p) => 
          p.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          p.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'All') {
      result = result.filter((p) => p.category === selectedCategory);
    }

    setFilteredPosts(result);
  }, [searchTerm, selectedCategory, posts]);

  const categories = ['All', 'Ecology', 'Urban Farming', 'Water Conservation'];

  return (
    <div className="pt-24 pb-20">
      {/* Header Banner */}
      <section className="bg-slate-50 py-16 mb-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-xs uppercase tracking-widest font-bold text-secondary mb-3 block font-display">News & Stories</span>
          <h1 className="font-display font-extrabold text-3xl md:text-5xl text-slate-800">Our Blog</h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Explore ecological insights, agricultural tutorials, and local volunteer features.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="bg-white border border-slate-100 rounded-2xl p-4 md:p-6 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search box */}
          <div className="relative flex-1 max-w-md">
            <span className="absolute left-3.5 top-3.5 text-slate-400">
              <Search size={16} />
            </span>
            <input
              type="text"
              placeholder="Search by title, keywords..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary"
            />
          </div>

          {/* Categories select pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-bold rounded-lg border transition-all ${
                  selectedCategory === cat
                    ? 'bg-primary border-primary text-white shadow-sm'
                    : 'border-slate-200 bg-white text-slate-500 hover:border-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-7xl mx-auto px-4 md:px-8">
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-slate-400">
            <p className="font-semibold text-sm">No articles found matching your filters.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
