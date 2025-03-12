
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Layout from '../components/Layout';
import { useDestinationContext } from '@/context/DestinationContext';
import { Button } from '@/components/ui/button';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Destinations = () => {
  const { destinations } = useDestinationContext();
  const navigate = useNavigate();

  // This effect will run when component mounts
  useEffect(() => {
    // The destinations are already being updated in real-time via the context provider
    // We just need to make sure we're rendering with animations when they change
  }, []);

  return (
    <Layout>
      <div className="page-header">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center section-header"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-elsol-sage">
              Discover Amazing Destinations
            </h1>
            <div className="h-1.5 w-24 bg-elsol-sage/30 mx-auto mt-4 mb-6 rounded-full"></div>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mobile-text">
              Explore our handpicked collection of breathtaking destinations. Each location offers unique experiences and unforgettable memories.
            </p>
          </motion.div>

          <AnimatePresence>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <motion.div
                  key={destination.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  layout
                  className="glass-panel rounded-xl overflow-hidden hover-lift"
                >
                  <div className="relative h-48">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
                      {destination.name}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4 line-clamp-2">
                      {destination.description}
                    </p>
                    <div className="space-y-2">
                      {destination.highlights.slice(0, 3).map((highlight, i) => (
                        <div key={i} className="flex items-center text-sm text-gray-400">
                          <MapPin className="w-4 h-4 mr-2 text-elsol-sage" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                      {destination.highlights.length > 3 && (
                        <div className="text-sm text-gray-400 pl-6">
                          +{destination.highlights.length - 3} more highlights
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Button
                      onClick={() => navigate('/contact')}
                      className="w-full bg-elsol-sage hover:bg-elsol-sage-light text-black group"
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatePresence>

          {destinations.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No destinations available at the moment.</p>
            </div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-16"
          >
            <h2 className="text-2xl font-semibold text-elsol-sage mb-4">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us to plan your perfect trip. Our travel experts will help you create an unforgettable experience.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-elsol-sage hover:bg-elsol-sage-light text-black group"
            >
              Contact Us
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Destinations;
