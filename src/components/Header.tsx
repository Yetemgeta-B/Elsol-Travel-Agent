
import React, { useState, useEffect } from 'react';
import { Phone, Mail, ChevronDown, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/95 backdrop-blur-md shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-screen-2xl flex flex-wrap items-center justify-between">
        {/* Top Bar with Contact Info - Visible only on medium screens and up */}
        <div className={`hidden md:flex items-center space-x-6 text-sm w-full text-right justify-end transition-all duration-300 ${
          isScrolled ? 'h-0 opacity-0 mb-0 overflow-hidden' : 'h-auto opacity-100 mb-3'
        }`}>
          <a href="tel:+251911234567" className="flex items-center hover:text-elsol-sage transition-colors">
            <Phone size={14} className="mr-2" /> +251 911 234 567
          </a>
          <a href="mailto:info@elsoltravel.com" className="flex items-center hover:text-elsol-sage transition-colors">
            <Mail size={14} className="mr-2" /> info@elsoltravel.com
          </a>
        </div>
        
        {/* Main Navigation */}
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold tracking-tighter">
              <span className={`transition-colors duration-300 ${isScrolled ? 'text-elsol-sage' : 'text-white'}`}>ELSOL</span>
              <span className={`transition-colors duration-300 ${isScrolled ? 'text-elsol-black' : 'text-white'}`}> TRAVEL</span>
            </span>
          </a>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 transition-colors ${isScrolled ? 'text-elsol-black' : 'text-white'}`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className={`font-medium transition-colors hover:text-elsol-sage ${isScrolled ? 'text-elsol-black' : 'text-white'}`}>
              Home
            </a>
            <a href="#services" className={`font-medium transition-colors hover:text-elsol-sage ${isScrolled ? 'text-elsol-black' : 'text-white'}`}>
              Services
            </a>
            <a href="#destinations" className={`font-medium transition-colors hover:text-elsol-sage ${isScrolled ? 'text-elsol-black' : 'text-white'}`}>
              Destinations
            </a>
            <a href="#about" className={`font-medium transition-colors hover:text-elsol-sage ${isScrolled ? 'text-elsol-black' : 'text-white'}`}>
              About Us
            </a>
            <a href="#contact" className={`font-medium transition-colors hover:text-elsol-sage ${isScrolled ? 'text-elsol-black' : 'text-white'}`}>
              Contact
            </a>
            <a href="#booking" className="elsol-button">
              Book Now
            </a>
          </nav>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden w-full transition-all duration-300 ease-in-out overflow-hidden ${
          mobileMenuOpen ? 'max-h-screen opacity-100 mt-5' : 'max-h-0 opacity-0'
        }`}>
          <nav className="flex flex-col space-y-4 py-4">
            <a 
              href="#home" 
              className={`font-medium px-2 py-1 ${isScrolled ? 'text-elsol-black' : 'text-white'} hover:text-elsol-sage transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a 
              href="#services" 
              className={`font-medium px-2 py-1 ${isScrolled ? 'text-elsol-black' : 'text-white'} hover:text-elsol-sage transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#destinations" 
              className={`font-medium px-2 py-1 ${isScrolled ? 'text-elsol-black' : 'text-white'} hover:text-elsol-sage transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Destinations
            </a>
            <a 
              href="#about" 
              className={`font-medium px-2 py-1 ${isScrolled ? 'text-elsol-black' : 'text-white'} hover:text-elsol-sage transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </a>
            <a 
              href="#contact" 
              className={`font-medium px-2 py-1 ${isScrolled ? 'text-elsol-black' : 'text-white'} hover:text-elsol-sage transition-colors`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
            <div className="pt-2">
              <a href="#booking" className="elsol-button block text-center" onClick={() => setMobileMenuOpen(false)}>
                Book Now
              </a>
            </div>
            <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
              <a 
                href="tel:+251911234567" 
                className={`flex items-center text-sm ${isScrolled ? 'text-elsol-black' : 'text-white'} hover:text-elsol-sage transition-colors`}
              >
                <Phone size={14} className="mr-2" /> +251 911 234 567
              </a>
              <a 
                href="mailto:info@elsoltravel.com" 
                className={`flex items-center text-sm ${isScrolled ? 'text-elsol-black' : 'text-white'} hover:text-elsol-sage transition-colors`}
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
