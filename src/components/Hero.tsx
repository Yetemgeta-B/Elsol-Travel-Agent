
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const images = [
    'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2000&q=80',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=2000&q=80'
  ];

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
          <div className="absolute inset-0 bg-elsol-black/50 backdrop-blur-[2px]"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-elsol-sage/20 text-white text-sm font-medium mb-6 animate-fade-in">
          IATA Accredited Agency
        </span>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 max-w-5xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Your Gateway to World-Class Travel Experience
        </h1>
        <p className="text-xl text-white/90 mb-10 max-w-2xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
          IATA Accredited Agent with 5+ Years of Excellence
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <a href="#services" className="elsol-button">
            Plan Your Journey
          </a>
          <a href="#contact" className="elsol-button-outline border-white text-white hover:bg-white hover:text-elsol-black">
            Contact Us
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-white/80 hover:text-white transition-colors">
          <span className="text-sm mb-2">Scroll Down</span>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
