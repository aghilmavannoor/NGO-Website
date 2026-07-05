import React, { useState, useEffect } from 'react';
import SectionTitle from '../components/common/SectionTitle';
import GalleryCard from '../components/common/GalleryCard';
import galleryService from '../services/galleryService';

const Gallery = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const fetchGallery = async () => {
      const data = await galleryService.getAll();
      setGalleryItems(data);
      setFilteredItems(data);
    };
    fetchGallery();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === selectedCategory));
    }
  }, [selectedCategory, galleryItems]);

  const categories = ['All', 'Afforestation', 'Education', 'Water Cleanups', 'Clean Energy', 'Urban Farming'];

  return (
    <div className="pt-24 pb-20 bg-gradient-to-b from-white via-emerald-50/15 to-white">
      {/* Header Banner */}
      <section className="relative bg-slate-900 text-white py-20 mb-16 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80" 
            alt="Nature backdrop" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-widest font-black text-emerald-400 mb-3 block font-display">Visual Journey</span>
          <h1 className="font-display font-black text-4xl md:text-6xl uppercase tracking-tight">Media Gallery</h1>
          <p className="text-slate-350 text-sm md:text-base max-w-xl mx-auto mt-4 leading-relaxed font-medium">
            Take a look at photos and videos from our actual weekend planting and conservation campaigns.
          </p>
        </div>
      </section>

      {/* Category Pills */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center relative z-10">
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 text-xs font-black tracking-wider uppercase rounded-xl border transition-all ${
                selectedCategory === cat
                  ? 'bg-primary border-primary text-white shadow-md shadow-primary/20 scale-102'
                  : 'border-slate-200 bg-white text-slate-500 hover:border-slate-350 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grid view */}
      <section className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {filteredItems.map((item) => (
              <GalleryCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white border border-slate-100 rounded-3xl p-10 shadow-sm text-slate-400">
            <p className="font-bold text-base font-display">No media assets found in this category.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
