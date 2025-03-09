import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const images = [
    'https://cdn.onemileatatime.com/wp-content/uploads/2024/11/Ethiopian-Airlines-Business-Class-A350-55.jpeg',
    'https://unitedrepublicoftanzania.com/wp-content/uploads/2023/11/Traveling-between-Ethiopia-and-Tanzania-How-to-Make-the-Most-of-Your-Flight-Time-1068x657.jpg',
    'https://zambiatransportandlogistics.com/wp-content/uploads/2024/11/465108437_988837626594344_3044770402090897493_n-1536x1152.jpg',
    'https://airinsight.com/wp-content/uploads/2024/11/ethiopian-airlines-boeing.webp',
    'https://pbs.twimg.com/media/E147JLsWQAMCwru?format=jpg&name=small',
    'http://www.dsw-photo.com/Photos/ETH/i-CHKgFSV/0/31f91111/XL/11-XL.jpg',
    'https://live.staticflickr.com/6196/6084833103_eef643fa22_c.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showLeftControl, setShowLeftControl] = useState(false);
  const [showRightControl, setShowRightControl] = useState(false);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="relative h-screen w-full overflow-hidden hero-bg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Background Image with Fade Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImageIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={images[currentImageIndex]}
            alt="Hero background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black/70 to-black/90 backdrop-blur-sm" />
        </motion.div>
      </AnimatePresence>

      {/* Edge hover areas */}
      <div 
        className="absolute left-0 top-0 w-[100px] h-full opacity-0"
        onMouseEnter={() => setShowLeftControl(true)}
        onMouseLeave={() => setShowLeftControl(false)}
      />
      <div 
        className="absolute right-0 top-0 w-[100px] h-full opacity-0"
        onMouseEnter={() => setShowRightControl(true)}
        onMouseLeave={() => setShowRightControl(false)}
      />

      {/* Navigation Buttons */}
      <motion.div
        className="absolute left-4 top-1/2 -translate-y-1/2"
        animate={{ opacity: showLeftControl ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={prevImage}
          className="w-12 h-12 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-elsol-sage hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(108,169,59,0.5)]"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      </motion.div>

      <motion.div
        className="absolute right-4 top-1/2 -translate-y-1/2"
        animate={{ opacity: showRightControl ? 1 : 0 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <button
          onClick={nextImage}
          className="w-12 h-12 rounded-full bg-black/30 text-white backdrop-blur-sm border border-white/10 flex items-center justify-center hover:bg-elsol-sage hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(108,169,59,0.5)]"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="inline-block py-1 px-3 rounded-full bg-elsol-sage/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:bg-elsol-sage/30 transition-all duration-300 hover:scale-105 text-shadow-md"
          variants={itemVariants}
        >
          IATA Accredited Agency
        </motion.span>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 max-w-5xl hover:text-shadow-glow transition-all duration-300 text-shadow-md"
          variants={itemVariants}
        >
          Your Gateway to World-Class Travel Experience
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl hover:text-white transition-all duration-300 text-shadow-md"
          variants={itemVariants}
        >
          IATA Accredited Agent with 5+ Years of Excellence
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:space-x-4"
          variants={itemVariants}
        >
          <a href="/blogs" className="elsol-button w-full sm:w-auto hover:shadow-glow transition-all duration-300 hover:scale-105 text-center text-shadow-md">
            Explore Blogs
          </a>
          <a href="#contact" className="elsol-button-outline w-full sm:w-auto border-white text-white hover:bg-white hover:text-elsol-black hover:shadow-glow transition-all duration-300 hover:scale-105 text-center text-shadow-md">
            Contact Us
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <a href="#services" className="flex flex-col items-center text-white/80 hover:text-white transition-colors group">
          <span className="text-sm mb-2 group-hover:text-elsol-sage transition-colors duration-300">Scroll Down</span>
          <svg 
            className="w-6 h-8 group-hover:text-elsol-sage transition-colors duration-300" 
            viewBox="0 0 24 32" 
            fill="none" 
            stroke="currentColor"
          >
            {/* Mouse body */}
            <rect x="5" y="1" width="14" height="24" rx="7" strokeWidth="2" />
            {/* Scroll wheel */}
            <line x1="12" y1="6" x2="12" y2="10" strokeWidth="2" />
            {/* Scroll arrow */}
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 28 L8 32 L12 30 L16 32 L12 28" />
          </svg>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
