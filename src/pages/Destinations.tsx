import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, DollarSign } from 'lucide-react';
import ScrollButtons from '../components/ScrollButtons';

const destinations = [
  {
    title: 'Dubai, UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    description: 'Experience luxury shopping, desert safaris, and iconic architecture.',
    duration: '5-7 days',
    groupSize: '2-10',
    startingPrice: '$599'
  },
  {
    title: 'Istanbul, Turkey',
    image: 'https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b',
    description: 'Discover where East meets West in this historic cultural hub.',
    duration: '6-8 days',
    groupSize: '2-12',
    startingPrice: '$699'
  },
  {
    title: 'Bangkok, Thailand',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365',
    description: 'Explore temples, street food, and vibrant nightlife.',
    duration: '7-10 days',
    groupSize: '2-8',
    startingPrice: '$799'
  },
  {
    title: 'Cairo, Egypt',
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a',
    description: 'Visit the pyramids and discover ancient Egyptian history.',
    duration: '6-9 days',
    groupSize: '2-15',
    startingPrice: '$899'
  },
  {
    title: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8',
    description: 'Relax in paradise with overwater bungalows and crystal-clear waters.',
    duration: '5-8 days',
    groupSize: '2-6',
    startingPrice: '$1,299'
  },
  {
    title: 'Seychelles',
    image: 'https://images.unsplash.com/photo-1589979481223-deb893043163',
    description: 'Experience pristine beaches and unique wildlife.',
    duration: '7-10 days',
    groupSize: '2-8',
    startingPrice: '$1,499'
  }
];

const Destinations = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white pt-24 pb-16">
      <ScrollButtons />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-elsol-sage">Popular Destinations</h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore our carefully curated selection of destinations, each offering unique experiences and unforgettable memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group hover-glow rounded-xl overflow-hidden backdrop-blur-sm bg-black/30 border border-elsol-sage/10 transition-all duration-300 hover:border-elsol-sage/30"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                  {destination.title}
                </h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-300 mb-4">
                  {destination.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center text-gray-400">
                    <Calendar className="w-5 h-5 mr-2 text-elsol-sage" />
                    <span>Duration: {destination.duration}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <Users className="w-5 h-5 mr-2 text-elsol-sage" />
                    <span>Group Size: {destination.groupSize}</span>
                  </div>
                  <div className="flex items-center text-gray-400">
                    <DollarSign className="w-5 h-5 mr-2 text-elsol-sage" />
                    <span>Starting from {destination.startingPrice}</span>
                  </div>
                </div>

                <button className="mt-6 w-full elsol-button flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <MapPin className="w-5 h-5 mr-2" />
                  Explore Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-elsol-sage">
            Can't Find Your Dream Destination?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We offer customized travel packages to destinations worldwide. Contact us to plan your perfect journey.
          </p>
          <a
            href="#contact"
            className="elsol-button inline-flex items-center hover:scale-110 transition-transform duration-300"
          >
            <MapPin className="w-5 h-5 mr-2" />
            Custom Package
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Destinations; 