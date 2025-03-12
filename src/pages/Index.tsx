
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import ScrollButtons from '../components/ScrollButtons';
import { Toaster } from '@/components/ui/toaster';

const Index = () => {
  // Smooth scroll implementation
  useEffect(() => {
    const handleAnchorClick = (e: any) => {
      const targetId = e.currentTarget.getAttribute('href');
      if (targetId && targetId.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    return () => {
      anchorLinks.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <Header />
      <ScrollButtons />
      <main className="flex-grow">
        <Hero />
        <div className="py-4 md:py-8"></div> {/* Added spacing */}
        <Services />
        <div className="py-4 md:py-8"></div> {/* Added spacing */}
        <Destinations />
        <div className="py-4 md:py-8"></div> {/* Added spacing */}
        <About />
        <div className="py-2 md:py-4"></div> {/* Added spacing */}
        <Contact />
        <div className="py-2 md:py-4"></div> {/* Added spacing */}
        <Testimonials />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
