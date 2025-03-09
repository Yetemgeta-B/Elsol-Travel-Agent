
import React, { useState, useEffect } from 'react';
import { Phone, Mail, Menu, X, Plane, Globe, NavigationIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 mx-6 mt-6 rounded-full ${
        isScrolled 
          ? 'py-3 backdrop-blur-md bg-black/30 border border-elsol-sage/10' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl flex flex-wrap items-center justify-between">
        {/* Top Bar with Contact Info - Visible only on medium screens and up */}
        <div className={`hidden md:flex items-center space-x-6 text-sm w-full text-right justify-end transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 mb-0 overflow-hidden' : 'h-auto opacity-100 mb-3'
        }`}>
          <a href="tel:+251911234567" className="flex items-center text-gray-300 hover:text-elsol-sage transition-colors">
            <Phone size={14} className="mr-2" /> +251 911 234 567
          </a>
          <a href="mailto:info@elsoltravel.com" className="flex items-center text-gray-300 hover:text-elsol-sage transition-colors">
            <Mail size={14} className="mr-2" /> info@elsoltravel.com
          </a>
        </div>
        
        {/* Main Navigation */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tighter flex items-center">
              <Plane className="mr-2 text-elsol-sage" size={24} />
              <span className="text-elsol-sage">ELSOL</span>
              <span className="text-gray-300"> TRAVEL</span>
            </span>
          </Link>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 transition-colors text-gray-300"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/#home" className="font-medium transition-colors hover:text-elsol-sage text-gray-300 flex items-center">
              <NavigationIcon size={16} className="mr-1 text-elsol-sage" />
              Home
            </Link>
            <Link to="/#services" className="font-medium transition-colors hover:text-elsol-sage text-gray-300 flex items-center">
              <Globe size={16} className="mr-1 text-elsol-sage" />
              Services
            </Link>
            <Link to="/#destinations" className="font-medium transition-colors hover:text-elsol-sage text-gray-300 flex items-center">
              <Plane size={16} className="mr-1 text-elsol-sage" />
              Destinations
            </Link>
            <Link to="/#about" className="font-medium transition-colors hover:text-elsol-sage text-gray-300 flex items-center">
              About Us
            </Link>
            <Link to="/#contact" className="font-medium transition-colors hover:text-elsol-sage text-gray-300 flex items-center">
              Contact
            </Link>
            <Link to="/blogs" className="font-medium transition-colors hover:text-elsol-sage text-gray-300 flex items-center">
              Blogs
            </Link>
            <Link to="/#booking" className="elsol-button">
              Book Now
            </Link>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden w-full transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100 mt-5' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 py-4 backdrop-blur-md bg-black/70 rounded-2xl px-4 mt-2">
            <Link 
              to="/#home" 
              className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <NavigationIcon size={16} className="mr-1 text-elsol-sage" />
              Home
            </Link>
            <Link 
              to="/#services" 
              className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Globe size={16} className="mr-1 text-elsol-sage" />
              Services
            </Link>
            <Link 
              to="/#destinations" 
              className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors flex items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Plane size={16} className="mr-1 text-elsol-sage" />
              Destinations
            </Link>
            <Link 
              to="/#about" 
              className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              to="/#contact" 
              className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link 
              to="/blogs" 
              className="font-medium px-2 py-1 text-gray-300 hover:text-elsol-sage transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blogs
            </Link>
            <div className="pt-2">
              <Link to="/#booking" className="elsol-button block text-center" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </Link>
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t border-gray-700">
              <a 
                href="tel:+251911234567" 
                className="flex items-center text-sm text-gray-300 hover:text-elsol-sage transition-colors"
              >
                <Phone size={14} className="mr-2" /> +251 911 234 567
              </a>
              <a 
                href="mailto:info@elsoltravel.com" 
                className="flex items-center text-sm text-gray-300 hover:text-elsol-sage transition-colors"
              >
                <Mail size={14} className="mr-2" /> info@elsoltravel.com
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
