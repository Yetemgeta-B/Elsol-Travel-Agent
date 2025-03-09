
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1575029644286-efb9039cac46?auto=format&fit=crop&w=2000&q=80', // airplane view
    'https://images.unsplash.com/photo-1582210449638-91b2e7825b02?auto=format&fit=crop&w=2000&q=80', // airplane wing
    'https://images.unsplash.com/photo-1531314888679-d5f748cce581?auto=format&fit=crop&w=2000&q=80'  // inside airplane
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
    <section id="home" className="relative h-screen w-full overflow-hidden">
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
          <div className="absolute inset-0 bg-gradient-to-b from-elsol-black/70 via-elsol-black/50 to-elsol-black/70 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Hero Content */}
      <motion.div 
        className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span 
          className="inline-block py-1 px-3 rounded-full bg-elsol-sage/20 text-white text-sm font-medium mb-6"
          variants={itemVariants}
        >
          IATA Accredited Agency
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-5xl"
          variants={itemVariants}
        >
          Your Gateway to World-Class Travel Experience
        </motion.h1>
        <motion.p 
          className="text-xl text-white/90 mb-10 max-w-2xl"
          variants={itemVariants}
        >
          IATA Accredited Agent with 5+ Years of Excellence
        </motion.p>
        <motion.div 
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          variants={itemVariants}
        >
          <a href="#services" className="elsol-button hover:shadow-glow transition-all duration-300 hover:scale-105">
            Plan Your Journey
          </a>
          <a href="#contact" className="elsol-button-outline border-white text-white hover:bg-white hover:text-elsol-black hover:shadow-glow transition-all duration-300 hover:scale-105">
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
        <a href="#services" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
