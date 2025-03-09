import React, { useState } from 'react';
import { 
  Home,
  Plane,
  Globe,
  Navigation,
  Users,
  Phone,
  BookOpen,
  Menu,
  X 
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 mx-6 mt-6">
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl">
        <div className="relative rounded-full backdrop-blur-md bg-black/30 border border-elsol-sage/10 py-3 px-4 overflow-hidden">
          {/* Animated glow effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-elsol-sage/0 via-elsol-sage/10 to-elsol-sage/0 animate-glow-move" />
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-between">        
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <span className="text-xl md:text-2xl font-bold tracking-tighter flex items-center transition-transform hover:scale-105">
                <Plane className="mr-2 text-elsol-sage group-hover:text-white transition-colors duration-300" size={24} />
                <span className="text-elsol-sage group-hover:text-white transition-colors duration-300">ELSOL</span>
                <span className="text-gray-300 group-hover:text-elsol-sage transition-colors duration-300"> TRAVEL</span>
              </span>
            </Link>
            
            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 transition-colors text-gray-300 hover:text-elsol-sage" aria-label="Toggle menu">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/" 
                className="relative font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 group px-3 py-2"
              >
                <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
                <Home size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">Home</span>
              </Link>
              <Link to="/services" 
                className="relative font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 group px-3 py-2"
              >
                <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
                <Globe size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">Services</span>
              </Link>
              <Link to="/destinations" 
                className="relative font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 group px-3 py-2"
              >
                <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
                <Navigation size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">Destinations</span>
              </Link>
              <Link to="/about" 
                className="relative font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 group px-3 py-2"
              >
                <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
                <Users size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">About Us</span>
              </Link>
              <Link to="/contact" 
                className="relative font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 group px-3 py-2"
              >
                <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
                <Phone size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
                <span className="relative">Contact</span>
              </Link>
              <Link to="/blogs" 
                className="elsol-button transition-all duration-300 hover:scale-110 hover:shadow-glow flex items-center"
              >
                <BookOpen size={16} className="mr-1.5" />
                Blogs
              </Link>
            </nav>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden fixed inset-x-0 top-24 transform ${mobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'} transition-all duration-300`}>
          <nav className="flex flex-col space-y-4 py-4 backdrop-blur-md bg-black/70 rounded-2xl px-4 mt-2">
            <Link to="/" className="relative font-medium px-3 py-2 text-gray-300 hover:text-elsol-sage transition-colors flex items-center group" onClick={() => setMobileMenuOpen(false)}>
              <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
              <Home size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Home</span>
            </Link>
            <Link to="/services" className="relative font-medium px-3 py-2 text-gray-300 hover:text-elsol-sage transition-colors flex items-center group" onClick={() => setMobileMenuOpen(false)}>
              <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
              <Globe size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Services</span>
            </Link>
            <Link to="/destinations" className="relative font-medium px-3 py-2 text-gray-300 hover:text-elsol-sage transition-colors flex items-center group" onClick={() => setMobileMenuOpen(false)}>
              <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
              <Navigation size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Destinations</span>
            </Link>
            <Link to="/about" className="relative font-medium px-3 py-2 text-gray-300 hover:text-elsol-sage transition-colors flex items-center group" onClick={() => setMobileMenuOpen(false)}>
              <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
              <Users size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">About Us</span>
            </Link>
            <Link to="/contact" className="relative font-medium px-3 py-2 text-gray-300 hover:text-elsol-sage transition-colors flex items-center group" onClick={() => setMobileMenuOpen(false)}>
              <span className="absolute inset-0 bg-elsol-sage/0 group-hover:bg-elsol-sage/10 rounded-lg transition-colors duration-300" />
              <Phone size={16} className="mr-1.5 text-elsol-sage group-hover:scale-110 transition-transform duration-300" />
              <span className="relative">Contact</span>
            </Link>
            <div className="pt-2">
              <Link to="/blogs" className="elsol-button block text-center flex items-center justify-center" onClick={() => setMobileMenuOpen(false)}>
                <BookOpen size={16} className="mr-1.5" />
                Blogs
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
