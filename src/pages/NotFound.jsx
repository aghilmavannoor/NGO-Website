import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Home } from 'lucide-react';
import Button from '../components/common/Button';

const NotFound = () => {
  return (
    <div className="pt-24 pb-20 min-h-[80vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center text-primary mb-6 animate-pulse">
        <Compass size={40} />
      </div>
      <h1 className="font-display font-extrabold text-5xl md:text-7xl text-slate-800 mb-4">404</h1>
      <h2 className="font-display font-bold text-xl md:text-2xl text-slate-700 mb-3">Page Not Found</h2>
      <p className="text-slate-500 text-sm max-w-md mb-8 leading-relaxed">
        The path you are looking for does not exist or has been moved. Use the navigation links or return to the home page.
      </p>
      <Link to="/">
        <Button variant="primary" className="gap-2">
          <Home size={16} /> Return to Home
        </Button>
      </Link>
    </div>
  );
};

export default NotFound;
