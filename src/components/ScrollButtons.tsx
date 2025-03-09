import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUp } from 'lucide-react';

const ScrollButtons = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollUp(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Scroll Down Button */}
      <button
        onClick={scrollDown}
        className="fixed left-1/2 bottom-8 -translate-x-1/2 z-50 transition-all duration-300 hover:scale-110 text-elsol-sage hover:text-white"
        aria-label="Scroll Down"
      >
        <ArrowDown size={32} />
      </button>

      {/* Scroll Up Button */}
      <button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 z-50 p-3 rounded-full bg-elsol-sage/20 backdrop-blur-sm border border-elsol-sage/30 text-elsol-sage hover:text-white hover:bg-elsol-sage/30 transition-all duration-300 hover:scale-110 ${
          showScrollUp ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        aria-label="Scroll to Top"
      >
        <ArrowUp size={24} />
      </button>
    </>
  );
};

export default ScrollButtons; 