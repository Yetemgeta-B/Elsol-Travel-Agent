
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Plane, Globe, NavigationIcon, Shield, FileText, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Determine if we're on the blog page
  const isBlogPage = location.pathname.includes('/blog') || location.pathname === '/blogs';
  
  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 mx-6 mt-6 rounded-full backdrop-blur-md bg-black/30 border border-elsol-sage/10 py-3`}>
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl flex flex-wrap items-center justify-between">        
        {/* Main Navigation */}
        <div className="flex items-center justify-between w-full">
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
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              <Home size={16} className="mr-1 text-elsol-sage" />
              Home
            </Link>
            <Link to="/#services" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              <Globe size={16} className="mr-1 text-elsol-sage" />
              Services
            </Link>
            <Link to="/#destinations" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              <NavigationIcon size={16} className="mr-1 text-elsol-sage" />
              Destinations
            </Link>
            <Link to="/#about" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              About Us
            </Link>
            <Link to="/#contact" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              Contact
            </Link>
            <Link to="/blogs" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              Blogs
            </Link>
            <Link to="/privacy-policy" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              <Shield size={16} className="mr-1 text-elsol-sage" />
              Privacy
            </Link>
            <Link to="/terms" 
              className="font-medium transition-all duration-300 hover:text-elsol-sage text-gray-300 flex items-center hover:scale-105 hover:shadow-glow"
            >
              <FileText size={16} className="mr-1 text-elsol-sage" />
              Terms
            </Link>
            <Link to="/#booking" className="elsol-button transition-all duration-300 hover:scale-110 hover:shadow-glow">
              Book Now
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden w-full transition-all duration-300 ease-in-out overflow-hidden ${mobileMenuOpen ? 'max-h-screen opacity-100 mt-5' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col space-y-4 py-4 backdrop-blur-md bg-black/70 rounded-2xl px-4 mt-2">
            <Link to="/" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Home size={16} className="mr-1 text-elsol-sage" />
              Home
            </Link>
            <Link to="/#services" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Globe size={16} className="mr-1 text-elsol-sage" />
              Services
            </Link>
            <Link to="/#destinations" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <NavigationIcon size={16} className="mr-1 text-elsol-sage" />
              Destinations
            </Link>
            <Link to="/#about" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors" onClick={() => setMobileMenuOpen(false)}>
              About Us
            </Link>
            <Link to="/#contact" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Contact
            </Link>
            <Link to="/blogs" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors" onClick={() => setMobileMenuOpen(false)}>
              Blogs
            </Link>
            <Link to="/privacy-policy" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <Shield size={16} className="mr-1 text-elsol-sage" />
              Privacy Policy
            </Link>
            <Link to="/terms" className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center" onClick={() => setMobileMenuOpen(false)}>
              <FileText size={16} className="mr-1 text-elsol-sage" />
              Terms & Conditions
            </Link>
            <div className="pt-2">
              <Link to="/#booking" className="elsol-button block text-center" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
