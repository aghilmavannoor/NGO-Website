import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="w-full bg-[#0B2E1E] min-h-screen flex flex-col items-center justify-start py-0 px-0">
      {/* Mockup image container with exact 16:9 aspect ratio */}
      <div className="relative w-full max-w-[1920px] aspect-[16/9] overflow-hidden shadow-2xl">
        <img 
          src="/Pasted_image_2.png" 
          alt="DHI Green Foundation Homepage Mockup" 
          className="w-full h-full object-cover select-none pointer-events-none"
        />

        {/* --- NAVIGATION OVERLAYS --- */}
        
        {/* Brand Logo Link to Home */}
        <Link 
          to="/" 
          className="absolute top-[3.5%] left-[3.5%] w-[12%] h-[7%] cursor-pointer z-30"
          title="DHI Green Foundation Home"
        />

        {/* Center Navbar Links */}
        <Link 
          to="/" 
          className="absolute top-[3.5%] left-[19.3%] w-[3.5%] h-[7%] cursor-pointer z-30"
          title="Home"
        />
        <Link 
          to="/about" 
          className="absolute top-[3.5%] left-[24.7%] w-[3.5%] h-[7%] cursor-pointer z-30"
          title="About"
        />
        <Link 
          to="/projects" 
          className="absolute top-[3.5%] left-[30.2%] w-[4.5%] h-[7%] cursor-pointer z-30"
          title="Projects"
        />
        <Link 
          to="/impact" 
          className="absolute top-[3.5%] left-[37%] w-[4%] h-[7%] cursor-pointer z-30"
          title="Impact"
        />
        <Link 
          to="/gallery" 
          className="absolute top-[3.5%] left-[43.5%] w-[4%] h-[7%] cursor-pointer z-30"
          title="Gallery"
        />
        <Link 
          to="/blog" 
          className="absolute top-[3.5%] left-[49.7%] w-[3%] h-[7%] cursor-pointer z-30"
          title="Blog"
        />
        <Link 
          to="/contact" 
          className="absolute top-[3.5%] left-[54.5%] w-[4.5%] h-[7%] cursor-pointer z-30"
          title="Contact"
        />

        {/* Right Navbar Links */}
        <Link 
          to="/volunteer" 
          className="absolute top-[3.5%] left-[78%] w-[5.5%] h-[7%] cursor-pointer z-30"
          title="Volunteer"
        />
        <Link 
          to="/donate" 
          className="absolute top-[3.5%] left-[84.8%] w-[11%] h-[7%] cursor-pointer z-30"
          title="Donate Now"
        />

        {/* --- HERO CTA BUTTONS --- */}
        
        {/* Explore Our Projects CTA */}
        <Link 
          to="/projects" 
          className="absolute top-[71%] left-[4.3%] w-[14.8%] h-[6%] cursor-pointer z-30 transition-all hover:bg-white/5 rounded-full"
          title="Explore Our Projects"
        />
        
        {/* Join as Volunteer CTA */}
        <Link 
          to="/volunteer" 
          className="absolute top-[71%] left-[20.3%] w-[13.8%] h-[6%] cursor-pointer z-30 transition-all hover:bg-white/5 rounded-full"
          title="Join as Volunteer"
        />
      </div>
    </div>
  );
};

export default Home;
