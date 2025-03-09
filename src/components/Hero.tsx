import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=2000&q=80', // Ethiopian Airlines plane
    'https://images.unsplash.com/photo-1569154941061-e231b4725ef1?auto=format&fit=crop&w=2000&q=80', // Business class interior
    'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?auto=format&fit=crop&w=2000&q=80',  // Sunset takeoff
    'https://imagekit.io/tools/asset-public-link?detail=%7B%22name%22%3A%22frankfurt_airport_by_udochristmann_dbot2lp.jpg%22%2C%22type%22%3A%22image%2Fjpeg%22%2C%22signedurl_expire%22%3A%222028-03-03T21%3A06%3A01.239Z%22%2C%22signedUrl%22%3A%22https%3A%2F%2Fmedia-hosting.imagekit.io%2F%2Fd5133200a72c4076%2Ffrankfurt_airport_by_udochristmann_dbot2lp.jpg%3FExpires%3D1835730361%26Key-Pair-Id%3DK2ZIVPTIP2VGHC%26Signature%3DvWmFtsMlOmTOed5oG~xolWvLjv54iPTWIwJ5ldilVXkL5KgzDB6UIJsdAeS6YfivbPtNzeXvctam~65IY8N2pFZm3z9qMuGNYRtP4c6HFgXvIMqG6v~JFS5wHrcv43ksXR0vJTh~2iNKVDdB~UAiwXBWuIYdtrsgpY6OfKghG~m9mKdDtY396tIkEijUpqaUU~J5yDTXmXoDJEV-RskaHFBruQR8i4omx78w5xQaDqGynU3wXB0Lpz0NVjA7fTwOoqjc2q7HY0NDcXsHNDeemnPdKGWj15oCgqFNjyh8mnuwEkDG4yW~EhIlHBpyZOKKBGgk9R427-h1XCiFy1R1Hw__%22%7D'
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden hero-bg">
      {/* Image Carousel */}
      <div className="absolute inset-0 z-0">
        <div className="relative h-full w-full">
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat h-full w-full animate-carousel-${index + 1} delay-${index * 6}s`}
              style={{ 
                backgroundImage: `url(${image})`,
                animationName: index === 0 ? 'carousel' : index === 1 ? 'carousel-2' : 'carousel-3'
              }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-radial from-black/90 via-black/70 to-black/90 backdrop-blur-sm"></div>
        </div>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="inline-block py-1 px-3 rounded-full bg-elsol-sage/20 text-white text-xs sm:text-sm font-medium mb-4 sm:mb-6 hover:bg-elsol-sage/30 transition-all duration-300 hover:scale-105"
          variants={itemVariants}
        >
          IATA Accredited Agency
        </motion.span>
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 max-w-5xl hover:text-shadow-glow transition-all duration-300"
          variants={itemVariants}
        >
          Your Gateway to World-Class Travel Experience
        </motion.h1>
        <motion.p 
          className="text-lg sm:text-xl text-white/90 mb-8 sm:mb-10 max-w-2xl hover:text-white transition-all duration-300"
          variants={itemVariants}
        >
          IATA Accredited Agent with 5+ Years of Excellence
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto sm:space-x-4"
          variants={itemVariants}
        >
          <a href="/blogs" className="elsol-button w-full sm:w-auto hover:shadow-glow transition-all duration-300 hover:scale-105 text-center">
            Explore Blogs
          </a>
          <a href="#contact" className="elsol-button-outline w-full sm:w-auto border-white text-white hover:bg-white hover:text-elsol-black hover:shadow-glow transition-all duration-300 hover:scale-105 text-center">
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
    </section>
  );
};

export default Hero;
